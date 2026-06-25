import { useState } from 'react';
import { Check, Loader2, Send } from 'lucide-react';
import { submitRegistration } from '../../lib/registrationApi';

export default function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      await submitRegistration(form);
      setStatus('success');
      setForm({ name: '', email: '', phone: '', notes: '' });
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-strong w-full rounded-3xl p-8 text-center">
        <Check className="mx-auto mb-3 h-10 w-10 text-teal-glow" />
        <p className="font-serif text-xl font-bold text-white">Đăng ký thành công!</p>
        <p className="mt-2 text-sm text-slate-300">
          APC sẽ liên hệ trong vòng 24–48 giờ làm việc.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-5 text-sm text-teal-glow underline"
        >
          Gửi đăng ký khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-strong w-full rounded-3xl p-6 text-left md:p-8">
      <h3 className="font-serif mb-5 text-center text-xl font-bold text-white md:text-2xl">
        Đăng Ký Khảo Sát Miễn Phí
      </h3>
      <div className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-teal-glow uppercase">Họ và tên *</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-teal-glow/50"
            placeholder="Nguyễn Văn A"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-teal-glow uppercase">Email *</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-teal-glow/50"
            placeholder="email@benhvien.vn"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-teal-glow uppercase">Điện thoại *</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-teal-glow/50"
            placeholder="09xx xxx xxx"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold text-teal-glow uppercase">Yêu cầu thêm</span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-teal-glow/50"
            placeholder="Số lượng học viên, chuyên khoa, thời gian mong muốn..."
          />
        </label>
      </div>
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="heartbeat-cta mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold-cta to-amber-400 py-4 text-base font-extrabold text-medical-950 disabled:opacity-60"
      >
        {status === 'loading' ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            <Send className="h-5 w-5" /> GỬI ĐĂNG KÝ
          </>
        )}
      </button>
    </form>
  );
}
