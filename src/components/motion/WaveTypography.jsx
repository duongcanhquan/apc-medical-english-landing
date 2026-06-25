import { motion, useReducedMotion } from 'framer-motion';
import { useFxMotion } from '../../hooks/useSlideActive';

const KEYWORD = {
  teal: 'keyword-teal',
  sky: 'keyword-sky',
  violet: 'keyword-violet',
  gold: 'keyword-gold',
};

export function WaveHeadline({ children, className = '', accent = 'teal', size = 'default' }) {
  const { run } = useFxMotion();
  const stroke = accent === 'sky' ? '#38bdf8' : accent === 'violet' ? '#a78bfa' : '#2dd4bf';
  const sizeClass =
    size === 'compact'
      ? 'text-xl sm:text-2xl md:text-3xl'
      : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl';

  return (
    <div className={`relative inline-block ${className}`}>
      <h2 className={`headline-display text-balance ${sizeClass}`}>
        {children}
      </h2>
      <svg
        className="absolute -bottom-2 left-0 w-full md:-bottom-3"
        viewBox="0 0 400 16"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 8 Q50 2 100 8 T200 8 T300 8 T400 8"
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          className={run ? 'wave-underline' : ''}
        />
      </svg>
    </div>
  );
}

export function HighlightWord({ children, color = 'teal' }) {
  return (
    <span className={`keyword ${KEYWORD[color] || KEYWORD.teal}`}>
      {children}
    </span>
  );
}

export function FloatingDetailItem({ label, highlight, desc, index, color = 'teal', layout = 'wave' }) {
  const reduceMotion = useReducedMotion();
  const isGrid = layout === 'grid';
  const ringColor =
    color === 'sky'
      ? 'border-sky-400/50'
      : color === 'violet'
        ? 'border-violet-400/50'
        : 'border-teal-glow/50';

  const offset = isGrid ? '' : index % 2 === 0 ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0';
  const align = isGrid ? '' : index % 2 === 0 ? 'md:self-start' : 'md:self-end md:text-right';
  const rotate = isGrid || reduceMotion ? 0 : index % 2 === 0 ? -0.6 : 0.6;
  const borderSides = isGrid
    ? `border-l-4 ${ringColor}`
    : `${ringColor} ${index % 2 === 1 ? 'md:border-l-0 md:border-r-4 md:pr-5 md:pl-0' : 'border-l-4'}`;

  return (
    <motion.div
      className={`hover-lift relative w-full ${isGrid ? '' : 'max-w-xl'} ${offset} ${align}`}
      initial={{ opacity: 0, y: isGrid ? 16 : 24, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
    >
      <div
        className={`glass-panel relative rounded-xl py-2.5 pl-3 pr-3 md:py-3 md:pl-4 ${borderSides} ${isGrid ? '' : 'md:py-4 md:pl-5'}`}
      >
        <p
          className={`hook-label mb-1 text-[9px] md:text-[10px] ${color === 'sky' ? 'hook-label-sky' : color === 'violet' ? 'hook-label-violet' : 'hook-label-teal'}`}
        >
          {label}
        </p>
        {highlight && (
          <p
            className={`mb-1 font-extrabold ${isGrid ? 'text-sm md:text-base' : 'mb-1.5 text-base sm:text-lg md:text-2xl'}`}
          >
            <HighlightWord color={color}>{highlight}</HighlightWord>
          </p>
        )}
        <p className={`text-body leading-snug ${isGrid ? 'text-[11px] md:text-xs' : 'text-sm md:text-base leading-relaxed'}`}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function WaveBadge({ children, color = 'teal' }) {
  const { run } = useFxMotion();
  const bg =
    color === 'sky'
      ? 'bg-sky-950/90 text-sky-200 ring-sky-400/50'
      : color === 'violet'
        ? 'bg-violet-950/90 text-violet-200 ring-violet-400/50'
        : 'bg-teal-950/90 text-teal-100 ring-teal-glow/50';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-extrabold ring-1 ${bg} md:text-sm ${run ? 'badge-float' : ''}`}
    >
      {children}
    </span>
  );
}
