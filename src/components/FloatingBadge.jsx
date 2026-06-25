import { motion, useReducedMotion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

export default function FloatingBadge() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.aside
      className="glass badge-glow pointer-events-none fixed right-4 bottom-4 z-50 max-w-[300px] rounded-2xl px-4 py-3 md:right-6 md:bottom-6 md:max-w-sm md:px-5 md:py-4"
      aria-label="Thông điệp truyền động lực"
      animate={
        reduceMotion
          ? {}
          : {
              boxShadow: [
                '0 0 20px rgba(20,184,166,0.25), 0 8px 32px rgba(0,0,0,0.35)',
                '0 0 36px rgba(20,184,166,0.45), 0 8px 32px rgba(0,0,0,0.35)',
                '0 0 20px rgba(20,184,166,0.25), 0 8px 32px rgba(0,0,0,0.35)',
              ],
            }
      }
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-accent/25">
          <HeartPulse className="h-5 w-5 text-teal-glow" aria-hidden="true" />
        </div>
        <p className="text-balance text-xs leading-relaxed font-medium text-slate-100 md:text-sm">
          Y thuật chữa lành thể xác – Ngôn ngữ mở ra cơ hội
        </p>
      </div>
    </motion.aside>
  );
}
