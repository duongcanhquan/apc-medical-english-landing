import { motion, useReducedMotion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

export default function MotivationalPill() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.aside
      className="glass pill-glow pointer-events-none fixed bottom-5 left-1/2 z-50 max-w-[94vw] -translate-x-1/2 rounded-full px-5 py-2.5 md:bottom-7 md:px-8 md:py-3"
      aria-label="Thông điệp truyền động lực"
      animate={
        reduceMotion
          ? {}
          : {
              boxShadow: [
                '0 0 16px rgba(45,212,191,0.2)',
                '0 0 32px rgba(45,212,191,0.45)',
                '0 0 16px rgba(45,212,191,0.2)',
              ],
            }
      }
      transition={{ duration: 3.5, repeat: Infinity }}
    >
      <div className="flex items-center gap-2.5">
        <HeartPulse className="h-4 w-4 shrink-0 text-teal-glow" aria-hidden="true" />
        <p className="text-balance text-center text-xs font-medium text-slate-100 md:text-sm">
          Y thuật chữa lành thể xác – Ngôn ngữ mở ra cơ hội.
        </p>
      </div>
    </motion.aside>
  );
}
