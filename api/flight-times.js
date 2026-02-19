// Flight Times API — scrapes FlightAware for departure/arrival times
// Usage: /api/flight-times?flight=UA2221
// Returns scheduled, estimated, and actual gate/takeoff/landing times

const CACHE_TTL_MS = 120_000; // 2 minutes
const cache = new Map();

function getCached(key) {
  const entry = cache.get(key);
  if (!entry) return null;
  if (Date.now() - entry.ts > CACHE_TTL_MS) { cache.delete(key); return null; }
  return entry.data;
}
function setCache(key, data) {
  if (cache.size > 200) { const oldest = cache.keys().next().value; cache.delete(oldest); }
  cache.set(key, { data, ts: Date.now() });
}

// Rate limiting: 5 req/min per IP
const rateLimitByIp = new Map();
function getClientIp(req) {
  const xff = req.headers?.['x-forwarded-for'];
  const raw = Array.isArray(xff) ? xff[0] : (typeof xff === 'string' ? xff : '');
  return raw.split(',')[0]?.trim() || req.headers?.['x-real-ip'] || 'unknown';
}
function isRateLimited(req) {
  const now = Date.now();
  const ip = getClientIp(req);
  if (!rateLimitByIp.has(ip)) rateLimitByIp.set(ip, []);
  const ipLog = rateLimitByIp.get(ip);
  while (ipLog.length && ipLog[0] < now - 60_000) ipLog.shift();
  if (ipLog.length >= 5) return true;
  ipLog.push(now);
  return false;
}

function corsHeaders(req) {
  const origin = req.headers?.origin || '';
  const allowed = origin === 'https://theblueboard.co' || /^http:\/\/localhost(:\d+)?$/.test(origin);
  return {
    'Access-Control-Allow-Origin': allowed ? origin : 'https://theblueboard.co',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function normalizeFlightNumber(raw) {
  let q = (raw || '').trim().toUpperCase().replace(/\s+/g, '');
  if (q.startsWith('UA') && !q.startsWith('UAL')) q = 'UAL' + q.slice(2);
  if (/^\d{1,4}$/.test(q)) q = 'UAL' + q;
  return q;
}

function epochToISO(epoch) {
  if (!epoch) return '';
  return new Date(epoch * 1000).toISOString();
}

export default async function handler(req, res) {
  const cors = corsHeaders(req);
  for (const [k, v] of Object.entries(cors)) res.setHeader(k, v);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const rawFlight = req.query.flight;
  if (!rawFlight) return res.status(400).json({ success: false, error: 'Missing flight parameter' });

  const flight = normalizeFlightNumber(rawFlight);
  if (!/^UAL\d{1,4}[A-Z]?$/i.test(flight)) {
    return res.status(400).json({ success: false, error: 'Invalid flight number' });
  }

  const cacheKey = `fa:${flight}`;
  const cached = getCached(cacheKey);
  if (cached) {
    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    return res.status(200).json({ ...cached, cached: true });
  }

  if (isRateLimited(req)) {
    return res.status(429).json({ success: false, error: 'Rate limited' });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const resp = await fetch(`https://www.flightaware.com/live/flight/${encodeURIComponent(flight)}`, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'Accept': 'text/html',
      },
    });
    clearTimeout(timeout);

    if (!resp.ok) {
      return res.status(502).json({ success: false, error: 'FlightAware unavailable' });
    }

    const html = await resp.text();

    // Extract trackpollBootstrap JSON
    const match = html.match(/trackpollBootstrap\s*=\s*(\{.+?\});\s*(?:var|<\/script)/s);
    if (!match) {
      return res.status(404).json({ success: false, error: 'No flight data found' });
    }

    let bootstrap;
    try {
      bootstrap = JSON.parse(match[1]);
    } catch (e) {
      return res.status(502).json({ success: false, error: 'Failed to parse flight data' });
    }

    // Find the most recent/active flight
    const flights = bootstrap?.flights || {};
    let bestFlight = null;
    let bestKey = null;

    for (const [key, val] of Object.entries(flights)) {
      const actLog = val?.activityLog?.flights || [];
      if (!actLog.length) continue;
      // First entry is the most current
      const f = actLog[0];
      if (!bestFlight || (f.gateDepartureTimes?.scheduled && (!bestFlight.gateDepartureTimes?.scheduled || f.gateDepartureTimes.scheduled > bestFlight.gateDepartureTimes.scheduled))) {
        bestFlight = f;
        bestKey = key;
      }
    }

    if (!bestFlight) {
      return res.status(404).json({ success: false, error: 'No active flight found' });
    }

    const f = bestFlight;
    const result = {
      success: true,
      flight: flight.replace('UAL', 'UA'),
      origin: {
        iata: f.origin?.iata || '',
        name: f.origin?.friendlyName || '',
        terminal: f.origin?.terminal || '',
        gate: f.origin?.gate || '',
        tz: (f.origin?.TZ || '').replace(/^:/, ''),
      },
      destination: {
        iata: f.destination?.iata || '',
        name: f.destination?.friendlyName || '',
        terminal: f.destination?.terminal || '',
        gate: f.destination?.gate || '',
        tz: (f.destination?.TZ || '').replace(/^:/, ''),
      },
      departure: {
        gate: {
          scheduled: epochToISO(f.gateDepartureTimes?.scheduled),
          estimated: epochToISO(f.gateDepartureTimes?.estimated),
          actual: epochToISO(f.gateDepartureTimes?.actual),
        },
        takeoff: {
          scheduled: epochToISO(f.takeoffTimes?.scheduled),
          estimated: epochToISO(f.takeoffTimes?.estimated),
          actual: epochToISO(f.takeoffTimes?.actual),
        },
      },
      arrival: {
        landing: {
          scheduled: epochToISO(f.landingTimes?.scheduled),
          estimated: epochToISO(f.landingTimes?.estimated),
          actual: epochToISO(f.landingTimes?.actual),
        },
        gate: {
          scheduled: epochToISO(f.gateArrivalTimes?.scheduled),
          estimated: epochToISO(f.gateArrivalTimes?.estimated),
          actual: epochToISO(f.gateArrivalTimes?.actual),
        },
      },
      aircraft: f.aircraftTypeFriendly || '',
      status: f.flightStatus || '',
      cancelled: !!f.cancelled,
      diverted: !!f.diverted,
      source: 'flightaware',
      cached: false,
    };

    setCache(cacheKey, result);
    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    return res.status(200).json(result);
  } catch (e) {
    if (e.name === 'AbortError') return res.status(504).json({ success: false, error: 'Timeout' });
    console.error('FlightAware scrape error:', e);
    return res.status(502).json({ success: false, error: 'FlightAware unavailable' });
  }
}
