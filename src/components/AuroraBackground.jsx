import { motion, useReducedMotion } from 'framer-motion';

export default function AuroraBackground() {
  const reduceMotion = useReducedMotion();

  const blobs = [
  {
    className:
      'top-[-20%] left-[-10%] h-[55vh] w-[55vw] bg-blue-600/30',
    animate: { x: [0, 40, -20, 0], y: [0, -30, 20, 0] },
    duration: 22,
  },
  {
    className:
      'top-[10%] right-[-15%] h-[50vh] w-[45vw] bg-teal-500/25',
    animate: { x: [0, -50, 30, 0], y: [0, 40, -20, 0] },
    duration: 26,
  },
  {
    className:
      'bottom-[-10%] left-[20%] h-[45vh] w-[50vw] bg-indigo-700/20',
    animate: { x: [0, 30, -40, 0], y: [0, -20, 30, 0] },
    duration: 30,
  },
  {
    className:
      'bottom-[20%] right-[10%] h-[35vh] w-[35vw] bg-cyan-400/15',
    animate: { x: [0, -25, 35, 0], y: [0, 25, -15, 0] },
    duration: 24,
  },
];

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-medical-950 via-medical-900 to-medical-950" />
      {blobs.map((blob) =>
        reduceMotion ? (
          <div
            key={blob.className}
            className={`absolute rounded-full blur-[100px] ${blob.className}`}
          />
        ) : (
          <motion.div
            key={blob.className}
            className={`absolute rounded-full blur-[100px] ${blob.className}`}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ),
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_50%)]" />
    </div>
  );
}
