import { createRateLimiter } from './_rate-limit.js';

const isRateLimited = createRateLimiter('fleet', 60);

const PUBLISHED_ID = process.env.FLEET_SHEET_ID || '2PACX-1vSdBcByk1BvxkFja5yri8R4snipRYf6peHClG0NhuQMQCAdwg77HWbL_kaKTawsmm99CBNQ0P9gFr_A';
const ALLOWED_GIDS = new Set([
  '1360817651', '823190082',   // A220-100, A220-300
  '2045075120', '2073364725',  // A319, A320
  '1538397382', '1227229540',  // A321, A321neo
  '803014129',  '382039884',   // A330-200, A330-300
  '829064758',  '26759434',    // A330-900neo, A350-900
  '372900393',                 // 717-200
  '1891757144', '1574327079',  // 737-800, 737-900ER
  '1720938178', '503337945',   // 757-200, 757-300
  '1883016033', '870301959',   // 767-300ER, 767-400ER
  '948315825',                 // MASTER FLEET
]);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const origin = req.headers?.origin || '';
  if (origin && origin !== 'https://widgetwatch.org' && !/^http:\/\/localhost(:\d+)?$/.test(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (isRateLimited(req)) {
    return res.status(429).json({ error: 'Rate limited — try again shortly' });
  }

  try {
    const gid = req.query.gid || '948315825';
    // Validate gid: numeric only
    if (!/^\d{1,10}$/.test(gid)) {
      return res.status(400).json({ error: 'Invalid gid parameter' });
    }
    if (!ALLOWED_GIDS.has(gid)) {
      return res.status(400).json({ error: 'Invalid gid parameter' });
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const upstream = await fetch(`https://docs.google.com/spreadsheets/d/e/${PUBLISHED_ID}/pub?output=csv&gid=${encodeURIComponent(gid)}`, { signal: controller.signal });
    clearTimeout(timeout);
    if (!upstream.ok) return res.status(502).send('Upstream service unavailable');
    const csv = await upstream.text();
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200');
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    return res.status(200).send(csv);
  } catch (e) {
    console.error('Fleet API error:', e);
    if (e.name === 'AbortError') return res.status(504).json({ error: 'Upstream timeout' });
    return res.status(502).json({ error: 'Upstream service unavailable' });
  }
}
