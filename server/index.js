import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'registrations.json');
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'apc-admin-2025';
const PORT = process.env.PORT || 3001;

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, '[]', 'utf-8');

function readRegistrations() {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

function writeRegistrations(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/register', (req, res) => {
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
  const list = readRegistrations();
  list.unshift(entry);
  writeRegistrations(list);
  res.status(201).json({ success: true, id: entry.id });
});

app.get('/api/registrations', authMiddleware, (_req, res) => {
  res.json(readRegistrations());
});

app.delete('/api/registrations/:id', authMiddleware, (req, res) => {
  const list = readRegistrations().filter((r) => r.id !== req.params.id);
  writeRegistrations(list);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
