import { motion, useReducedMotion } from 'framer-motion';

function DnaHelix({ className, duration = 28 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 120 400"
      className={className}
      aria-hidden="true"
      animate={reduceMotion ? {} : { y: [0, -30, 0], opacity: [0.15, 0.35, 0.15] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M30 0 Q60 40 30 80 Q0 120 30 160 Q60 200 30 240 Q0 280 30 320 Q60 360 30 400"
        fill="none"
        stroke="rgba(45,212,191,0.25)"
        strokeWidth="2"
      />
      <path
        d="M90 0 Q60 40 90 80 Q120 120 90 160 Q60 200 90 240 Q120 280 90 320 Q60 360 90 400"
        fill="none"
        stroke="rgba(56,189,248,0.2)"
        strokeWidth="2"
      />
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1="30"
          y1={i * 40 + 20}
          x2="90"
          y2={i * 40 + 20}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}
    </motion.svg>
  );
}

function NeuralNode({ x, y, delay }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.circle
      cx={x}
      cy={y}
      r="4"
      fill="rgba(45,212,191,0.5)"
      animate={
        reduceMotion
          ? {}
          : { r: [3, 6, 3], opacity: [0.3, 0.8, 0.3] }
      }
      transition={{ duration: 4, delay, repeat: Infinity }}
    />
  );
}

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-medical-950 via-medical-900 to-medical-950" />
      {!reduceMotion && (
        <>
          <motion.div
            className="absolute -top-1/4 -left-1/4 h-[60vh] w-[60vw] rounded-full bg-blue-600/20 blur-[120px]"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-1/3 -right-1/4 h-[50vh] w-[50vw] rounded-full bg-teal-500/15 blur-[100px]"
            animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
      <DnaHelix className="absolute top-[10%] left-[4%] h-64 w-16 opacity-40 md:h-96" />
      <DnaHelix className="absolute right-[6%] bottom-[15%] h-56 w-14 opacity-30 md:h-80" duration={34} />
      <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <NeuralNode x={15} y={20} delay={0} />
        <NeuralNode x={85} y={35} delay={0.8} />
        <NeuralNode x={25} y={55} delay={1.2} />
        <NeuralNode x={75} y={70} delay={0.4} />
        <NeuralNode x={50} y={85} delay={1.6} />
        <line x1="15" y1="20" x2="25" y2="55" stroke="rgba(45,212,191,0.08)" />
        <line x1="85" y1="35" x2="75" y2="70" stroke="rgba(56,189,248,0.08)" />
        <line x1="25" y1="55" x2="50" y2="85" stroke="rgba(45,212,191,0.06)" />
      </svg>
    </div>
  );
}
