import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Vertical ECG path with spikes at ~20%, 40%, 60%, 80% of document scroll
const ECG_PATH =
  'M 50 0 L 50 180 L 50 180 L 54 180 L 56 120 L 60 240 L 64 180 L 50 180' +
  ' L 50 380 L 50 380 L 54 380 L 57 310 L 61 450 L 65 380 L 50 380' +
  ' L 50 580 L 50 580 L 53 580 L 55 520 L 59 640 L 63 580 L 50 580' +
  ' L 50 780 L 50 780 L 54 780 L 57 700 L 61 860 L 65 780 L 50 780' +
  ' L 50 1000';

export default function ECGSpine({ containerRef }) {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.02, 1], [0.3, 1, 1]);

  return (
    <div
      className="pointer-events-none fixed top-0 right-3 z-20 hidden h-screen w-20 md:block lg:right-8 lg:w-24"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="ecgGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <filter id="ecgGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={ECG_PATH}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d={ECG_PATH}
          fill="none"
          stroke="url(#ecgGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#ecgGlow)"
          vectorEffect="non-scaling-stroke"
          style={
            reduceMotion
              ? { pathLength: 1, opacity: 1 }
              : { pathLength, opacity }
          }
        />
      </svg>
    </div>
  );
}

export function HeroECG() {
  const reduceMotion = useReducedMotion();

  const flatThenBeat =
    'M 10 50 L 40 50 L 45 50 L 48 50 L 52 10 L 56 90 L 60 50 L 90 50';

  return (
    <svg viewBox="0 0 100 100" className="mx-auto mb-6 h-16 w-full max-w-md md:h-20">
      <defs>
        <linearGradient id="heroEcg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <motion.path
        d={flatThenBeat}
        fill="none"
        stroke="url(#heroEcg)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={
          reduceMotion
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 1, opacity: 1 }
        }
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        style={{ filter: 'drop-shadow(0 0 8px rgba(45,212,191,0.6))' }}
      />
    </svg>
  );
}
