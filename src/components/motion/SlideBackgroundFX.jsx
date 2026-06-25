import { motion, useReducedMotion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useMediaQuery';

/* ─── Slide 1: Nhịp tim ─── */
export function HeartbeatRingsBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const rings = isMobile ? [0, 1] : [0, 1, 2];

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.08),transparent_65%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {rings.map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-rose-400/25 md:h-40 md:w-40"
            animate={reduceMotion ? {} : { scale: [0.5, isMobile ? 1.8 : 2.4], opacity: [0.5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.75, ease: 'easeOut' }}
          />
        ))}
        <motion.div
          className="h-3 w-3 rounded-full bg-rose-400/50 shadow-[0_0_20px_rgba(244,63,94,0.5)] md:h-4 md:w-4"
          animate={reduceMotion ? {} : { scale: [1, 1.35, 1] }}
          transition={{ duration: 0.85, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

/* ─── Slide 2: ECG + khung phim X-quang tĩnh ─── */
export function ECGPulseBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const wavePath =
    'M 0 50 L 80 50 L 88 50 L 92 20 L 96 80 L 100 50 L 180 50' +
    ' L 188 50 L 192 25 L 196 75 L 200 50 L 280 50 L 288 50 L 292 18 L 296 82 L 300 50 L 400 50';

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-60 md:opacity-70" aria-hidden="true">
      {/* X-ray film corners — static, no laser */}
      <div className="absolute top-[8%] left-[5%] h-8 w-8 border-t-2 border-l-2 border-white/15 md:h-12 md:w-12" />
      <div className="absolute top-[8%] right-[5%] h-8 w-8 border-t-2 border-r-2 border-white/15 md:h-12 md:w-12" />
      <div className="absolute bottom-[12%] left-[5%] h-8 w-8 border-b-2 border-l-2 border-white/15 md:h-12 md:w-12" />
      <div className="absolute bottom-[12%] right-[5%] h-8 w-8 border-b-2 border-r-2 border-white/15 md:h-12 md:w-12" />

      <svg className="absolute top-[30%] h-20 w-[180%] md:top-[28%] md:h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
        <path d={wavePath} fill="none" stroke="rgba(45,212,191,0.06)" strokeWidth="1.5" />
        <motion.path
          d={wavePath}
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="2"
          strokeLinecap="round"
          animate={reduceMotion ? {} : { pathLength: [0, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: isMobile ? 3 : 2.5, repeat: Infinity }}
        />
      </svg>
      {!isMobile && (
        <motion.div
          className="absolute inset-0 bg-white/5"
          animate={reduceMotion ? {} : { opacity: [0, 0.06, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      )}
    </div>
  );
}

/* ─── Slide 3: DNA helix ─── */
export function DNAHelixBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const rungCount = isMobile ? 8 : 12;

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -right-[5%] top-1/2 h-[110%] w-[50%] -translate-y-1/2 opacity-20 md:-right-[2%] md:w-[38%] md:opacity-25"
        animate={reduceMotion ? {} : { y: ['-1.5%', '1.5%', '-1.5%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 120 560" className="h-full w-full">
          <path
            d="M 38 0 Q 62 35 38 70 Q 14 105 38 140 Q 62 175 38 210 Q 14 245 38 280 Q 62 315 38 350 Q 14 385 38 420 Q 62 455 38 490 Q 14 525 38 560"
            fill="none" stroke="#2dd4bf" strokeWidth="2" opacity="0.5"
          />
          <path
            d="M 82 0 Q 58 35 82 70 Q 106 105 82 140 Q 58 175 82 210 Q 106 245 82 280 Q 58 315 82 350 Q 106 385 82 420 Q 58 455 82 490 Q 106 525 82 560"
            fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.4"
          />
          {Array.from({ length: rungCount }, (_, i) => {
            const y = 30 + i * (500 / rungCount);
            const phase = i % 2 === 0;
            return (
              <line
                key={i}
                x1={phase ? 38 : 58} y1={y}
                x2={phase ? 82 : 62} y2={y + 10}
                stroke="rgba(255,255,255,0.1)" strokeWidth="1"
              />
            );
          })}
        </svg>
      </motion.div>
      {!isMobile &&
        [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-teal-glow/40"
            style={{ right: `${18 + i * 8}%`, top: `${30 + i * 20}%` }}
            animate={reduceMotion ? {} : { y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4 + i, repeat: Infinity }}
          />
        ))}
    </div>
  );
}

/* ─── Slide 4: Dòng máu ─── */
export function BloodFlowBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const cells = Array.from({ length: isMobile ? 5 : 9 }, (_, i) => i);

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-45 md:opacity-55" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400" preserveAspectRatio="none">
        <path d="M -20 140 Q 120 100 220 150 Q 320 200 420 160" fill="none" stroke="rgba(220,38,38,0.18)" strokeWidth={isMobile ? 10 : 16} />
        {!isMobile && (
          <path d="M -20 300 Q 140 260 240 310 Q 340 360 420 320" fill="none" stroke="rgba(220,38,38,0.12)" strokeWidth="12" />
        )}
      </svg>
      {cells.map((i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-red-400/60 md:h-2 md:w-2"
          style={{ top: `${32 + (i % 3) * 14}%` }}
          animate={reduceMotion ? {} : { left: ['-5%', '105%'] }}
          transition={{ duration: 6 + i * 1.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
        />
      ))}
      <motion.div
        className="absolute bottom-[20%] left-[10%] h-16 w-16 rounded-full bg-red-500/5 md:h-24 md:w-24"
        animate={reduceMotion ? {} : { scale: [1, 1.2, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
    </div>
  );
}

/* ─── Slide 5: Sóng não (ESP) ─── */
export function BrainWavesBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-35 md:opacity-45" aria-hidden="true">
      <svg className="absolute top-[10%] left-1/2 h-[35%] w-[60%] -translate-x-1/2 md:h-[40%] md:w-[45%]" viewBox="0 0 200 120">
        <path
          d="M 100 110 Q 60 90 50 60 Q 40 30 70 20 Q 100 10 130 20 Q 160 30 150 60 Q 140 90 100 110"
          fill="rgba(56,189,248,0.06)" stroke="rgba(56,189,248,0.2)" strokeWidth="1"
        />
        {[20, 40, 60, 80].map((y, i) => (
          <motion.path
            key={i}
            d={`M 30 ${y} Q 70 ${y - 8} 100 ${y} Q 130 ${y + 8} 170 ${y}`}
            fill="none"
            stroke="rgba(147,197,253,0.35)"
            strokeWidth="1"
            animate={reduceMotion ? {} : { d: [
              `M 30 ${y} Q 70 ${y - 6} 100 ${y} Q 130 ${y + 6} 170 ${y}`,
              `M 30 ${y} Q 70 ${y + 6} 100 ${y} Q 130 ${y - 6} 170 ${y}`,
              `M 30 ${y} Q 70 ${y - 6} 100 ${y} Q 130 ${y + 6} 170 ${y}`,
            ]}}
            transition={{ duration: 2 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </svg>
      {!isMobile &&
        [0, 1].map((i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-violet-400/50"
            style={{ left: `${35 + i * 30}%`, top: `${25 + i * 10}%` }}
            animate={reduceMotion ? {} : { opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.6 }}
          />
        ))}
    </div>
  );
}

/* ─── Slide 6: Mạng synapse (Why APC) ─── */
export function SynapseWebBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const spokes = isMobile ? 6 : 8;

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-30 md:opacity-40" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: spokes }, (_, i) => {
          const angle = (i / spokes) * Math.PI * 2;
          const x2 = 50 + Math.cos(angle) * 42;
          const y2 = 50 + Math.sin(angle) * 38;
          return (
            <motion.line
              key={i}
              x1="50" y1="50" x2={x2} y2={y2}
              stroke="rgba(45,212,191,0.25)" strokeWidth="0.4"
              animate={reduceMotion ? {} : { opacity: [0.15, 0.6, 0.15] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.25 }}
            />
          );
        })}
        <circle cx="50" cy="50" r="3" fill="rgba(45,212,191,0.4)" />
      </svg>
      {!reduceMotion &&
        Array.from({ length: isMobile ? 2 : 4 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-teal-glow shadow-[0_0_6px_#2dd4bf]"
            style={{ left: '50%', top: '50%' }}
            animate={{
              x: [0, Math.cos((i / 4) * Math.PI * 2) * (isMobile ? 80 : 120)],
              y: [0, Math.sin((i / 4) * Math.PI * 2) * (isMobile ? 60 : 90)],
              opacity: [1, 0],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: 'easeOut' }}
          />
        ))}
    </div>
  );
}

/* ─── Slide 7: Laser phẫu thuật ngang (duy nhất) ─── */
export function LaserPathwayBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <div className="absolute top-[55%] right-[5%] left-[5%] h-px bg-white/10 md:top-[50%]" />
      {!reduceMotion && (
        <motion.div
          className="absolute top-[55%] h-[2px] w-16 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#34d399] md:top-[50%] md:w-24"
          animate={{ left: ['0%', '100%'] }}
          transition={{ duration: isMobile ? 6 : 5, repeat: Infinity, ease: 'linear' }}
        />
      )}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full border border-emerald-400/40 bg-emerald-400/20"
          style={{ left: `${12 + i * 24}%`, top: isMobile ? '54%' : '49%' }}
          animate={reduceMotion ? {} : { scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
      {!isMobile && (
        <motion.div
          className="absolute top-[30%] right-[15%] h-px w-32 origin-right rotate-[-25deg] bg-gradient-to-l from-green-400/50 to-transparent"
          animate={reduceMotion ? {} : { opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </div>
  );
}

/* ─── Slide 8: Monitor sinh hiệu ─── */
export function VitalsMonitorBackground() {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const ecgMini = 'M0 20 L25 20 L28 8 L32 32 L36 20 L70 20 L73 12 L77 28 L80 20 L110 20';

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-35 md:opacity-45" aria-hidden="true">
      {!isMobile && (
        <>
          <div className="absolute top-[12%] left-[6%] rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            <p className="font-mono text-[8px] text-teal-glow">HR</p>
            <motion.p
              className="font-mono text-base text-white"
              animate={reduceMotion ? {} : { opacity: [1, 0.6, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
            >
              72
            </motion.p>
          </div>
          <div className="absolute top-[12%] right-[6%] rounded-lg border border-white/10 bg-black/30 px-3 py-2">
            <p className="font-mono text-[8px] text-sky-300">SpO₂</p>
            <p className="font-mono text-base text-white">98%</p>
          </div>
        </>
      )}
      <svg className="absolute bottom-[15%] left-[5%] h-10 w-[90%] md:bottom-[18%] md:h-14" viewBox="0 0 110 40">
        <motion.path
          d={ecgMini}
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="1.5"
          animate={reduceMotion ? {} : { pathLength: [0, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
      <motion.div
        className="absolute right-[8%] bottom-[25%] h-8 w-8 rounded-full border border-rose-400/30 md:h-10 md:w-10"
        animate={reduceMotion ? {} : { scale: [1, 1.15, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      />
    </div>
  );
}

/* Legacy exports kept for compatibility */
export function NeuralNetworkBackground() {
  return <BrainWavesBackground />;
}
export function ClinicalPathwayBackground() {
  return <LaserPathwayBackground />;
}
export function MRIScanOverlay() {
  return null;
}
