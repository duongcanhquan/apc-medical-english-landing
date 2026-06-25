import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, LogOut, RefreshCw, Trash2 } from 'lucide-react';
import { deleteRegistration, fetchRegistrations } from '../lib/registrationApi';

const STORAGE_KEY = 'apc_admin_token';

export default function AdminPage() {
  const [token, setToken] = useState(() => sessionStorage.getItem(STORAGE_KEY) || '');
  const [password, setPassword] = useState('');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const load = async (authToken = token) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchRegistrations(authToken);
      setRows(data);
    } catch (err) {
      setError(err.message);
      if (err.message.includes('Unauthorized')) {
        sessionStorage.removeItem(STORAGE_KEY);
        setToken('');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.documentElement.classList.add('admin-route');
    return () => document.documentElement.classList.remove('admin-route');
  }, []);

  useEffect(() => {
    if (token) load();
  }, [token]);

  const handleLogin = (e) => {
    e.preventDefault();
    sessionStorage.setItem(STORAGE_KEY, password);
    setToken(password);
    setPassword('');
  };

  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setToken('');
    setRows([]);
  };

  const handleDelete = async (id) => {
    if (!confirm('Xóa đăng ký này?')) return;
    await deleteRegistration(id, token);
    load();
  };

  const exportCsv = () => {
    const header = 'Thời gian,Tên,Email,Điện thoại,Yêu cầu thêm\n';
    const body = rows
      .map((r) =>
        [r.createdAt, r.name, r.email, r.phone, r.notes]
          .map((v) => `"${String(v).replace(/"/g, '""')}"`)
          .join(','),
      )
      .join('\n');
    const blob = new Blob([header + body], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `apc-dang-ky-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-medical-950 px-4">
        <form onSubmit={handleLogin} className="glass-strong w-full max-w-md rounded-3xl p-8">
          <h1 className="font-serif mb-2 text-2xl font-bold text-white">Admin APC</h1>
          <p className="mb-6 text-sm text-slate-400">Quản lý đăng ký khảo sát</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu admin"
            className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-teal-glow/50"
            required
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-teal-accent py-3 font-bold text-medical-950"
          >
            Đăng nhập
          </button>
          <Link to="/" className="mt-4 flex items-center justify-center gap-1 text-sm text-slate-400 hover:text-teal-glow">
            <ArrowLeft className="h-4 w-4" /> Về trang chủ
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-auto bg-medical-950 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-2xl font-bold text-white md:text-3xl">Đăng Ký Khảo Sát</h1>
            <p className="text-sm text-slate-400">{rows.length} bản ghi</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => load()}
              className="glass flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} /> Làm mới
            </button>
            <button
              type="button"
              onClick={exportCsv}
              disabled={!rows.length}
              className="glass flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white disabled:opacity-40"
            >
              <Download className="h-4 w-4" /> Xuất CSV
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="glass flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-red-300"
            >
              <LogOut className="h-4 w-4" /> Đăng xuất
            </button>
            <Link to="/" className="glass flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-teal-glow">
              <ArrowLeft className="h-4 w-4" /> Trang chủ
            </Link>
          </div>
        </div>

        {error && <p className="mb-4 text-red-400">{error}</p>}

        <div className="glass-strong overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs text-teal-glow uppercase">
                <th className="p-4">Thời gian</th>
                <th className="p-4">Họ tên</th>
                <th className="p-4">Email</th>
                <th className="p-4">Điện thoại</th>
                <th className="p-4">Yêu cầu</th>
                <th className="p-4" />
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && !loading && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-slate-400">
                    Chưa có đăng ký nào.
                  </td>
                </tr>
              )}
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 whitespace-nowrap text-slate-400">
                    {new Date(r.createdAt).toLocaleString('vi-VN')}
                  </td>
                  <td className="p-4 font-medium text-white">{r.name}</td>
                  <td className="p-4 text-slate-300">{r.email}</td>
                  <td className="p-4 text-slate-300">{r.phone}</td>
                  <td className="max-w-xs p-4 text-slate-400">{r.notes || '—'}</td>
                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => handleDelete(r.id)}
                      className="text-red-400 hover:text-red-300"
                      aria-label="Xóa"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
