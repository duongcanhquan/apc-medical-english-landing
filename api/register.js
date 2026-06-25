import { randomUUID } from 'crypto';
import { readRegistrations, writeRegistrations } from './_lib/store.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, phone, notes } = req.body || {};
  if (!name?.trim() || !email?.trim() || !phone?.trim()) {
    return res.status(400).json({ error: 'Vui lòng điền đầy đủ tên, email và điện thoại.' });
  }

  const entry = {
    id: randomUUID(),
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    notes: (notes || '').trim(),
    createdAt: new Date().toISOString(),
  };

  const list = await readRegistrations();
  list.unshift(entry);
  await writeRegistrations(list);

  return res.status(201).json({ success: true, id: entry.id });
}
