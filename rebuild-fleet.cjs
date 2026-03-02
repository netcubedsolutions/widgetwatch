#!/usr/bin/env node
// Rebuild public/data/fleet.json from Delta fleet Google Sheet CSV tabs
const fs = require('fs');
const path = require('path');

const PUBLISHED_ID = process.env.FLEET_SHEET_ID || '2PACX-1vSdBcByk1BvxkFja5yri8R4snipRYf6peHClG0NhuQMQCAdwg77HWbL_kaKTawsmm99CBNQ0P9gFr_A';

// GID → aircraft type mapping
const GID_TYPE_MAP = {
  '1360817651': 'A220-100',    // BCS1
  '823190082':  'A220-300',    // BCS3
  '2045075120': 'A319',        // A319
  '2073364725': 'A320',        // A320
  '1538397382': 'A321',        // A321
  '1227229540': 'A321neo',     // A21N
  '803014129':  'A330-200',    // A332
  '382039884':  'A330-300',    // A333
  '829064758':  'A330-900neo', // A339
  '26759434':   'A350-900',    // A359
  '372900393':  '717-200',     // B712
  '1891757144': '737-800',     // B738
  '1574327079': '737-900ER',   // B739
  '1720938178': '757-200',     // B752
  '503337945':  '757-300',     // B753
  '1883016033': '767-300ER',   // B763
  '870301959':  '767-400ER',   // B764
};

const typeOrder = [
  'A220-100', 'A220-300',
  'A319', 'A320', 'A321', 'A321neo',
  'A330-200', 'A330-300', 'A330-900neo', 'A350-900',
  '717-200',
  '737-800', '737-900ER',
  '757-200', '757-300',
  '767-300ER', '767-400ER',
];

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  result.push(current.trim());
  return result;
}

function isValidReg(reg) {
  return reg && /^N\d/.test(reg) && reg.length >= 4;
}

async function fetchCSV(gid) {
  const url = `https://docs.google.com/spreadsheets/d/e/${PUBLISHED_ID}/pub?output=csv&gid=${gid}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(url, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timeout);
  }
}

(async () => {
  const fleet = [];
  const seenRegs = new Set();

  for (const [gid, baseType] of Object.entries(GID_TYPE_MAP)) {
    let csv;

    // Use local cache if present (place csv_gid_<gid>.csv next to this script to skip download)
    const csvFile = path.join(__dirname, `csv_gid_${gid}.csv`);
    if (fs.existsSync(csvFile)) {
      console.log(`GID ${gid} (${baseType}): using local cache`);
      csv = fs.readFileSync(csvFile, 'utf8');
    } else {
      process.stdout.write(`GID ${gid} (${baseType}): downloading... `);
      try {
        csv = await fetchCSV(gid);
        console.log('done');
      } catch (e) {
        console.error(`FAILED: ${e.message}`);
        continue;
      }
    }

    const lines = csv.split('\n');

    // Find header row (look for REG column)
    let headerIdx = -1;
    let headers = [];
    for (let i = 0; i < Math.min(5, lines.length); i++) {
      const cols = parseCSVLine(lines[i]);
      if (cols.findIndex(c => /^REG$/i.test(c.trim())) >= 0) {
        headerIdx = i;
        headers = cols;
        break;
      }
    }

    if (headerIdx < 0) {
      console.error(`No header found for GID ${gid} (${baseType})`);
      continue;
    }

    // Map column indices
    const colMap = {};
    const seatCols = {};
    headers.forEach((h, i) => {
      const ht = h.trim();
      if (/^REG$/i.test(ht))            colMap.reg      = i;
      if (/^AC\s*#$/i.test(ht))         colMap.ac       = i;
      if (/^DELIVERED$/i.test(ht))      colMap.delivery = i;
      if (/^WIFI$/i.test(ht))           colMap.wifi     = i;
      if (/^CONFIGURATION$/i.test(ht))  colMap.config   = i;
      if (/^STATUS$/i.test(ht))         colMap.status   = i;
      if (/^IFE$/i.test(ht))            colMap.ife      = i;
      if (/^J$/i.test(ht))              seatCols.J      = i;
      if (/^F$/i.test(ht))              seatCols.F      = i;
      if (/^PS$/i.test(ht))             seatCols.PS     = i;
      if (/^C\+$/i.test(ht))            seatCols['C+']  = i;
      if (/^Y$/i.test(ht))              seatCols.Y      = i;
    });

    let count = 0;
    for (let i = headerIdx + 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const cols = parseCSVLine(line);
      const reg = (cols[colMap.reg] || '').replace(/\s/g, '');
      if (!isValidReg(reg)) continue;
      if (seenRegs.has(reg)) continue;

      const ac       = (cols[colMap.ac]       || '').replace(/\s/g, '');
      const delivery = (cols[colMap.delivery] || '').trim();
      const wifi     = (cols[colMap.wifi]     || '').trim();
      const config   = (cols[colMap.config]   || '').trim();
      const status   = (cols[colMap.status]   || '').trim();
      const ife      = (cols[colMap.ife]      || '').trim();

      // Parse individual seat-class columns
      const seats = {};
      let tot = 0;
      for (const [cls, idx] of Object.entries(seatCols)) {
        const val = parseInt(cols[idx] || '');
        if (val > 0) {
          seats[cls] = val;
          tot += val;
        }
      }

      const entry = { r: reg, t: baseType, a: ac, w: wifi, c: config, s: status, d: delivery, i: ife };
      if (tot > 0) {
        entry.seats = seats;
        entry.tot = tot;
      }

      fleet.push(entry);
      seenRegs.add(reg);
      count++;
    }

    console.log(`GID ${gid} (${baseType}): ${count} aircraft`);
  }

  // Sort by type order then registration
  fleet.sort((a, b) => {
    const ta = typeOrder.indexOf(a.t);
    const tb = typeOrder.indexOf(b.t);
    if (ta !== tb) return (ta === -1 ? 999 : ta) - (tb === -1 ? 999 : tb);
    return a.r.localeCompare(b.r);
  });

  // Summary
  console.log(`\nTotal fleet: ${fleet.length}`);
  const typeCounts = {};
  fleet.forEach(e => { typeCounts[e.t] = (typeCounts[e.t] || 0) + 1; });
  for (const t of typeOrder) {
    if (typeCounts[t]) console.log(`  ${t}: ${typeCounts[t]}`);
  }

  // Write fleet.json
  const json = JSON.stringify(fleet);
  const fleetJsonPath = path.join(__dirname, 'public', 'data', 'fleet.json');
  fs.writeFileSync(fleetJsonPath, json);
  console.log(`\nWrote ${fleet.length} aircraft to public/data/fleet.json`);

  // Update typeOrder arrays in index.html
  const htmlPath = path.join(__dirname, 'public', 'index.html');
  let html = fs.readFileSync(htmlPath, 'utf8');
  const typeOrderStr = JSON.stringify(typeOrder);
  const htmlUpdated = html.replace(/const typeOrder = \[.*?]/gs, `const typeOrder = ${typeOrderStr}`);
  if (htmlUpdated !== html) {
    fs.writeFileSync(htmlPath, htmlUpdated);
    console.log('Updated typeOrder in index.html');
  }

  // Validate
  try {
    const check = JSON.parse(json);
    console.log(`JSON validation: OK (${check.length} entries)`);
  } catch (e) {
    console.error('JSON INVALID:', e.message);
  }
})();
