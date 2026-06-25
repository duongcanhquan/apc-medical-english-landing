import { motion } from 'framer-motion';

const SIZES = {
  sm: {
    vietmy: 'h-14 max-w-[240px] md:h-16 md:max-w-[280px]',
    equest: 'h-10 max-w-[200px] md:h-12 md:max-w-[240px]',
    divider: 'text-xl md:text-2xl',
    gap: 'gap-3 md:gap-4',
  },
  md: {
    vietmy: 'h-24 max-w-[360px] md:h-28 md:max-w-[400px]',
    equest: 'h-20 max-w-[300px] md:h-24 md:max-w-[340px]',
    divider: 'text-2xl md:text-3xl',
    gap: 'gap-4 md:gap-6',
  },
  lg: {
    vietmy: 'h-14 max-w-[220px] sm:h-16 sm:max-w-[260px] md:h-24 md:max-w-[360px] lg:h-32 lg:max-w-[440px]',
    equest: 'h-10 max-w-[160px] sm:h-12 sm:max-w-[200px] md:h-20 md:max-w-[300px] lg:h-24 lg:max-w-[360px]',
    divider: 'text-xl md:text-3xl lg:text-4xl',
    gap: 'gap-2 sm:gap-3 md:gap-5 lg:gap-6',
  },
};

export default function PartnerLogos({
  size = 'md',
  className = '',
  animated = false,
  label = null,
}) {
  const s = SIZES[size] || SIZES.md;

  const content = (
    <div
      className={`flex items-center justify-center ${s.gap} ${className}`}
      role="img"
      aria-label="Cao đẳng Việt Mỹ Hà Nội và EQuest Education Group"
    >
      <img
        src="/logos/vietmy-white.png"
        alt="Cao đẳng Việt Mỹ Hà Nội - APC"
        className={`w-auto object-contain ${s.vietmy}`}
      />
      <span className={`font-light text-white/40 select-none ${s.divider}`} aria-hidden="true">
        |
      </span>
      <img
        src="/logos/equest.png"
        alt="EQuest Education Group"
        className={`w-auto object-contain ${s.equest}`}
      />
    </div>
  );

  if (label) {
    return (
      <div className="flex flex-col items-center gap-3">
        <p className="font-mono text-[10px] tracking-[0.25em] text-teal-glow uppercase md:text-xs">
          {label}
        </p>
        {animated ? (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {content}
          </motion.div>
        ) : (
          content
        )}
      </div>
    );
  }

  if (animated) {
    return (
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        {content}
      </motion.div>
    );
  }

  return content;
}
