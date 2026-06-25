import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const reduceMotion = useReducedMotion();
  const map = {
    up: { y: 48 },
    down: { y: -48 },
    left: { x: -48 },
    right: { x: 48 },
    none: {},
  };
  const offset = map[direction] || map.up;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className = '' }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
