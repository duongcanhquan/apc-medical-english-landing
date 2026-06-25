import { motion, useReducedMotion } from 'framer-motion';

const NAV_ITEMS = [
  { label: '1. Tổng quan' },
  { label: '2. Thực trạng' },
  { label: '3. Foundation' },
  { label: '4. OET' },
  { label: '5. ESP' },
  { label: '6. Tại sao chọn APC' },
  { label: '7. Lộ trình' },
  { label: '8. Khảo sát' },
];

export default function FloatingNav({ activeIndex, onNavigate }) {
  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
      aria-label="Điều hướng slide"
    >
      {NAV_ITEMS.map((item, index) => (
        <button
          key={item.label}
          type="button"
          onClick={() => onNavigate(index)}
          className="group relative flex items-center justify-end"
          aria-label={item.label}
          aria-current={activeIndex === index ? 'true' : undefined}
        >
          <span className="pointer-events-none absolute right-8 rounded-lg bg-black/70 px-3 py-1.5 text-xs font-medium whitespace-nowrap text-teal-glow opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
            {item.label}
          </span>
          <span
            className={`block h-2.5 w-2.5 rounded-full border border-teal-accent/50 transition-all ${
              activeIndex === index
                ? 'nav-dot-active scale-125 bg-teal-glow'
                : 'bg-white/20 group-hover:bg-teal-accent/60'
            }`}
          />
        </button>
      ))}
    </nav>
  );
}

export function AmbientLayer() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-medical-950 via-medical-900 to-medical-950" />
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute -top-1/4 left-0 h-[40vh] w-[40vw] rounded-full bg-cyan-700/10 blur-[100px] md:h-[55vh] md:w-[55vw] md:blur-[120px]"
            animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-0 bottom-0 h-[35vh] w-[35vw] rounded-full bg-teal-600/8 blur-[80px] md:h-[45vh] md:w-[45vw] md:blur-[100px]"
            animate={{ x: [0, -20, 0] }}
            transition={{ duration: 32, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </div>
  );
}

export function ECGVertical() {
  const path =
    'M50 0 L50 120 L54 120 L56 70 L60 170 L64 120 L50 120 L50 240 L53 240 L55 180 L59 280 L63 240 L50 240 L50 360 L54 360 L57 300 L61 400 L65 360 L50 360 L50 480';
  return (
    <div className="pointer-events-none fixed top-0 left-3 z-10 hidden h-full w-14 opacity-40 lg:block" aria-hidden="true">
      <svg viewBox="0 0 100 480" preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <linearGradient id="ecgV" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <path d={path} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="2" />
        <motion.path
          d={path}
          fill="none"
          stroke="url(#ecgV)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}
