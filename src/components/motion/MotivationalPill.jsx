import { HeartPulse } from 'lucide-react';

export default function MotivationalPill() {
  return (
    <aside
      className="glass pill-glow pointer-events-none fixed left-1/2 z-[60] w-[min(92vw,28rem)] -translate-x-1/2 rounded-2xl px-4 py-2.5 md:rounded-full md:px-8 md:py-3"
      style={{ bottom: 'calc(0.75rem + var(--safe-bottom))' }}
      aria-label="Thông điệp truyền động lực"
    >
      <div className="flex items-center gap-2.5">
        <HeartPulse className="h-4 w-4 shrink-0 text-teal-glow" aria-hidden="true" />
        <p className="text-balance text-center text-[11px] font-bold leading-snug text-white sm:text-xs md:text-sm">
          Y thuật chữa lành thể xác – Ngôn ngữ mở ra cơ hội.
        </p>
      </div>
    </aside>
  );
}
