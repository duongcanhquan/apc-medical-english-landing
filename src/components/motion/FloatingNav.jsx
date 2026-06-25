import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Tổng quan', short: '01' },
  { label: 'Thực trạng', short: '02' },
  { label: 'Giải pháp', short: '03' },
  { label: 'Foundation', short: '04' },
  { label: 'OET', short: '05' },
  { label: 'ESP', short: '06' },
  { label: 'Tại sao APC', short: '07' },
  { label: 'Lộ trình', short: '08' },
  { label: 'Khảo sát', short: '09' },
];

function MacTooltip({ label, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none absolute right-9 bottom-full mb-2 flex flex-col items-end"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.15 }}
        >
          <div className="dock-tooltip rounded-xl px-3.5 py-2 text-right shadow-xl">
            <p className="text-sm font-semibold tracking-tight text-white">{label}</p>
          </div>
          <div className="mr-3 h-2 w-2 rotate-45 bg-white/10 backdrop-blur-xl" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function FloatingNav({ activeIndex, onNavigate }) {
  const [hovered, setHovered] = useState(null);
  const reduceMotion = useReducedMotion();

  const getScale = (index) => {
    if (reduceMotion) return activeIndex === index ? 1.15 : 1;
    if (hovered === null) return activeIndex === index ? 1.2 : 1;
    const dist = Math.abs(hovered - index);
    if (dist === 0) return 1.55;
    if (dist === 1) return 1.18;
    if (dist === 2) return 1.06;
    return 1;
  };

  return (
    <nav
      className="fixed right-3 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-2 md:flex md:right-5 md:gap-2.5"
      aria-label="Điều hướng slide"
      onMouseLeave={() => setHovered(null)}
    >
      {NAV_ITEMS.map((item, index) => {
        const isActive = activeIndex === index;
        const isHovered = hovered === index;
        const scale = getScale(index);

        return (
          <button
            key={item.label}
            type="button"
            onClick={() => onNavigate(index)}
            onMouseEnter={() => setHovered(index)}
            className="group relative flex items-center justify-end outline-none"
            aria-label={item.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <MacTooltip label={item.label} visible={isHovered} />
            <span
              className={`nav-dot relative block rounded-full border transition-transform duration-200 ease-out ${
                isActive
                  ? 'border-teal-glow bg-teal-glow nav-dot-active'
                  : 'border-teal-accent/40 bg-white/15 group-hover:border-teal-glow/60 group-hover:bg-teal-accent/30'
              }`}
              style={{ width: 10 * scale, height: 10 * scale }}
            />
          </button>
        );
      })}
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
          <div className="ambient-drift ambient-drift-a absolute -top-1/4 left-0 h-[40vh] w-[40vw] rounded-full bg-cyan-700/10 blur-[100px] md:h-[55vh] md:w-[55vw] md:blur-[120px]" />
          <div className="ambient-drift ambient-drift-b absolute right-0 bottom-0 h-[35vh] w-[35vw] rounded-full bg-teal-600/8 blur-[80px] md:h-[45vh] md:w-[45vw] md:blur-[100px]" />
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
