import { HeartPulse } from 'lucide-react';

export default function MotivationalPill() {
  return (
    <aside
      className="glass pill-glow pointer-events-none fixed left-1/2 z-50 max-w-[94vw] -translate-x-1/2 rounded-full px-5 py-2.5 md:px-8 md:py-3"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom, 0px))' }}
      aria-label="Thông điệp truyền động lực"
    >
      <div className="flex items-center gap-2.5">
        <HeartPulse className="h-4 w-4 shrink-0 text-teal-glow" aria-hidden="true" />
        <p className="text-balance text-center text-xs font-bold text-white md:text-sm">
          Y thuật chữa lành thể xác – Ngôn ngữ mở ra cơ hội.
        </p>
      </div>
    </aside>
  );
}
