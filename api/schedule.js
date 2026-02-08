// In-memory LRU cache for FR24 schedule data
const cache = new Map();
const MAX_CACHE_SIZE = 200;
let lastFR24Request = 0;
const MIN_REQUEST_INTERVAL = 2000; // 2 seconds between FR24 requests

function cacheGet(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expires) {
    cache.delete(key);
    return null;
  }
  return entry;
}

function cacheSet(key, data, ttlMs) {
  if (cache.size >= MAX_CACHE_SIZE) {
    // Evict oldest
    const firstKey = cache.keys().next().value;
    cache.delete(firstKey);
  }
  cache.set(key, { data, expires: Date.now() + ttlMs, time: Date.now() });
}

async function rateLimitedFetch(url) {
  const now = Date.now();
  const wait = Math.max(0, MIN_REQUEST_INTERVAL - (now - lastFR24Request));
  if (wait > 0) await new Promise(r => setTimeout(r, wait));
  lastFR24Request = Date.now();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const resp = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Origin': 'https://www.flightradar24.com',
        'Referer': 'https://www.flightradar24.com/'
      }
    });
    clearTimeout(timeout);
    return resp;
  } catch (e) {
    clearTimeout(timeout);
    throw e;
  }
}

async function fetchOnePage(hub, dir, timestamp, page) {
  const url = `https://api.flightradar24.com/common/v1/airport.json?code=${encodeURIComponent(hub)}&plugin[]=schedule&plugin-setting[schedule][mode]=${encodeURIComponent(dir)}&plugin-setting[schedule][timestamp]=${timestamp}&page=${page}&limit=100`;
  const resp = await rateLimitedFetch(url);
  if (!resp.ok) throw new Error(`FR24 returned ${resp.status}`);
  const data = await resp.json();
  const sched = data?.result?.response?.airport?.pluginData?.schedule?.[dir];
  if (!sched) throw new Error('No schedule data in response');
  return sched;
}

export default async function handler(req, res) {
  try {
    const { hub, dir = 'departures', timestamp, page } = req.query;
    if (!hub || !timestamp) {
      return res.status(400).json({ error: 'Missing required params: hub, timestamp' });
    }
    if (!['departures', 'arrivals'].includes(dir)) {
      return res.status(400).json({ error: 'dir must be departures or arrivals' });
    }

    const ts = parseInt(timestamp);
    const now = Math.floor(Date.now() / 1000);
    // If timestamp is >24h old, use longer cache
    const isOld = (now - ts) > 86400;
    const ttl = isOld ? 300000 : 60000; // 5 min or 1 min

    // If single page requested, serve just that page (backward compat)
    if (page !== undefined) {
      const pageNum = parseInt(page) || 1;
      const cacheKey = `sched:${hub}:${dir}:${ts}:${pageNum}`;
      const cached = cacheGet(cacheKey);
      if (cached) {
        res.setHeader('Cache-Control', `s-maxage=${Math.floor(ttl / 1000)}, stale-while-revalidate=60`);
        return res.status(200).json({ ...cached.data, cached: true });
      }
      const sched = await fetchOnePage(hub, dir, ts, pageNum);
      cacheSet(cacheKey, sched, ttl);
      res.setHeader('Cache-Control', `s-maxage=${Math.floor(ttl / 1000)}, stale-while-revalidate=60`);
      return res.status(200).json({ ...sched, cached: false });
    }

    // Aggregation mode: fetch all pages, filter UA, return combined
    const aggKey = `agg:${hub}:${dir}:${ts}`;
    const cached = cacheGet(aggKey);
    if (cached) {
      res.setHeader('Cache-Control', `s-maxage=${Math.floor(ttl / 1000)}, stale-while-revalidate=60`);
      return res.status(200).json({ ...cached.data, cached: true });
    }

    const dayEnd = ts + 86400;
    const allUAFlights = [];
    let pageNum = 1;
    let totalPages = 1;
    const MAX_PAGES = 20;
    let totalFetched = 0;

    while (pageNum <= totalPages && pageNum <= MAX_PAGES) {
      // Check if we're approaching the 10s Vercel timeout (leave 1.5s buffer)
      const sched = await fetchOnePage(hub, dir, ts, pageNum);
      totalPages = sched.page?.total || 1;
      if (!sched.data || sched.data.length === 0) break;

      let pastDay = false;
      for (const entry of sched.data) {
        const fl = entry.flight;
        if (!fl) continue;
        if (fl.airline?.code?.iata !== 'UA') continue;
        const schedDep = fl.time?.scheduled?.departure;
        const schedArr = fl.time?.scheduled?.arrival;
        const flightTime = dir === 'departures' ? schedDep : schedArr;
        if (flightTime && flightTime >= dayEnd) { pastDay = true; break; }
        allUAFlights.push(fl);
      }
      totalFetched += sched.data.length;
      if (pastDay) break;
      pageNum++;
    }

    const result = {
      flights: allUAFlights,
      total: allUAFlights.length,
      totalFetched,
      pagesScanned: Math.min(pageNum, totalPages, MAX_PAGES),
      totalPages,
      cached: false,
      hub,
      dir
    };

    cacheSet(aggKey, result, ttl);
    res.setHeader('Cache-Control', `s-maxage=${Math.floor(ttl / 1000)}, stale-while-revalidate=60`);
    return res.status(200).json(result);
  } catch (e) {
    if (e.name === 'AbortError') return res.status(504).json({ error: 'FR24 timeout' });
    return res.status(500).json({ error: e.message });
  }
}
