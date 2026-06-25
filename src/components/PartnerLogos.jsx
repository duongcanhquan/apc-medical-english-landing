import { motion } from 'framer-motion';

const SIZES = {
  sm: {
    vietmy: 'h-7 max-w-[120px] md:h-8 md:max-w-[140px]',
    equest: 'h-5 max-w-[100px] md:h-6 md:max-w-[120px]',
    divider: 'text-base md:text-lg',
    gap: 'gap-2 md:gap-3',
  },
  md: {
    vietmy: 'h-12 max-w-[180px] md:h-14 md:max-w-[200px]',
    equest: 'h-9 max-w-[150px] md:h-11 md:max-w-[170px]',
    divider: 'text-lg md:text-xl',
    gap: 'gap-3 md:gap-4',
  },
  lg: {
    vietmy: 'h-14 max-w-[200px] md:h-16 md:max-w-[220px]',
    equest: 'h-10 max-w-[160px] md:h-12 md:max-w-[180px]',
    divider: 'text-xl md:text-2xl',
    gap: 'gap-3 md:gap-5',
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
