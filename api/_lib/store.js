import { put, list } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const LOCAL_FILE = path.join(__dirname, '../../server/data/registrations.json');
const BLOB_PATHNAME = 'apc/registrations.json';

function useBlob() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

function readLocal() {
  try {
    if (!fs.existsSync(LOCAL_FILE)) return [];
    return JSON.parse(fs.readFileSync(LOCAL_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeLocal(data) {
  const dir = path.dirname(LOCAL_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(LOCAL_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

async function readBlob() {
  const { blobs } = await list({ prefix: BLOB_PATHNAME, limit: 1 });
  if (!blobs.length) return [];
  const res = await fetch(blobs[0].url);
  if (!res.ok) return [];
  return res.json();
}

async function writeBlob(data) {
  await put(BLOB_PATHNAME, JSON.stringify(data), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function readRegistrations() {
  if (useBlob()) return readBlob();
  return readLocal();
}

export async function writeRegistrations(data) {
  if (useBlob()) return writeBlob(data);
  return writeLocal(data);
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD || 'apc-admin-2025';
}

export function checkAuth(req) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  return token === getAdminPassword();
}
