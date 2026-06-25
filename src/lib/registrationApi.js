const API_BASE = '/api';

export async function submitRegistration({ name, email, phone, notes }) {
  const res = await fetch(`${API_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, phone, notes }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Gửi đăng ký thất bại.');
  return data;
}

export async function fetchRegistrations(token) {
  const res = await fetch(`${API_BASE}/registrations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Không thể tải danh sách.');
  return data;
}

export async function deleteRegistration(id, token) {
  const res = await fetch(`${API_BASE}/registrations?id=${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Xóa thất bại.');
  return res.json();
}
