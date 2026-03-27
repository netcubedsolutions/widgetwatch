// Changelog API — serves CHANGELOG.md as plain text
import { readFileSync } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  try {
    const content = readFileSync(join(process.cwd(), 'CHANGELOG.md'), 'utf8');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).send(content);
  } catch (e) {
    return res.status(404).json({ error: 'Changelog not found' });
  }
}
