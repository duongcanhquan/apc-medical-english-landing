import { motion, useReducedMotion } from 'framer-motion';

export function WaveHeadline({ children, className = '', accent = 'teal' }) {
  const reduceMotion = useReducedMotion();
  const stroke = accent === 'sky' ? '#38bdf8' : accent === 'violet' ? '#a78bfa' : '#2dd4bf';

  return (
    <div className={`relative inline-block ${className}`}>
      <h2 className="font-serif text-balance text-3xl font-bold text-white md:text-5xl lg:text-6xl">
        {children}
      </h2>
      <svg
        className="absolute -bottom-2 left-0 w-full md:-bottom-3"
        viewBox="0 0 400 16"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.path
          d="M0 8 Q50 2 100 8 T200 8 T300 8 T400 8"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={
            reduceMotion
              ? {}
              : {
                  d: [
                    'M0 8 Q50 2 100 8 T200 8 T300 8 T400 8',
                    'M0 8 Q50 14 100 8 T200 8 T300 8 T400 8',
                    'M0 8 Q50 2 100 8 T200 8 T300 8 T400 8',
                  ],
                }
          }
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

export function HighlightWord({ children, color = 'teal' }) {
  const colors = {
    teal: 'from-teal-glow via-cyan-300 to-teal-accent',
    sky: 'from-sky-300 via-blue-300 to-sky-400',
    violet: 'from-violet-300 via-purple-300 to-violet-400',
    gold: 'from-gold-glow via-amber-300 to-gold-cta',
  };

  return (
    <span
      className={`wave-highlight bg-gradient-to-r ${colors[color] || colors.teal} bg-[length:200%_auto] bg-clip-text font-bold text-transparent`}
    >
      {children}
    </span>
  );
}

export function FloatingDetailItem({ label, highlight, desc, index, color = 'teal' }) {
  const reduceMotion = useReducedMotion();
  const ringColor =
    color === 'sky'
      ? 'border-sky-400/30 shadow-sky-400/10'
      : color === 'violet'
        ? 'border-violet-400/30 shadow-violet-400/10'
        : 'border-teal-glow/30 shadow-teal-glow/10';

  const offset = index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0';
  const rotate = index % 2 === 0 ? -0.6 : 0.6;

  return (
    <motion.div
      className={`relative max-w-xl ${offset} ${index % 2 === 0 ? 'self-start' : 'self-end md:text-right'}`}
      initial={{ opacity: 0, y: 24, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: reduceMotion ? 0 : rotate }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={reduceMotion ? {} : { scale: 1.02, rotate: 0 }}
    >
      <div
        className={`relative border-l-2 bg-gradient-to-r from-white/[0.06] to-transparent py-3 pl-4 md:py-4 md:pl-5 ${ringColor} ${index % 2 === 1 ? 'md:border-l-0 md:border-r-2 md:pr-5 md:pl-0' : ''}`}
        style={{
          borderImage: 'none',
          borderColor:
            color === 'sky' ? 'rgba(56,189,248,0.5)' : color === 'violet' ? 'rgba(167,139,250,0.5)' : 'rgba(45,212,191,0.5)',
        }}
      >
        <p className="mb-1 font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase md:text-xs">
          {label}
        </p>
        {highlight && (
          <p className="mb-1 text-lg font-extrabold md:text-2xl">
            <HighlightWord color={color}>{highlight}</HighlightWord>
          </p>
        )}
        <p className="text-sm leading-relaxed text-slate-300 md:text-base">{desc}</p>
      </div>
    </motion.div>
  );
}

export function WaveBadge({ children, color = 'teal' }) {
  const bg =
    color === 'sky'
      ? 'bg-sky-500/15 text-sky-300 ring-sky-400/40'
      : color === 'violet'
        ? 'bg-violet-500/15 text-violet-300 ring-violet-400/40'
        : 'bg-teal-accent/15 text-teal-glow ring-teal-glow/40';

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ring-1 ${bg} md:text-sm`}
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.span>
  );
}
