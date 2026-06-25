import { checkAuth, readRegistrations, writeRegistrations } from './_lib/store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (!checkAuth(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    const list = await readRegistrations();
    return res.status(200).json(list);
  }

  if (req.method === 'DELETE') {
    const id = req.query.id;
    if (!id) return res.status(400).json({ error: 'Missing id' });
    const list = (await readRegistrations()).filter((r) => r.id !== id);
    await writeRegistrations(list);
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
