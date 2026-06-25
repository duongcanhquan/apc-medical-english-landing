import { motion, useReducedMotion } from 'framer-motion';

const defaultVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function FadeInView({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -60 },
    right: { y: 0, x: 60 },
    zoom: { y: 0, x: 0, scale: 0.92 },
  };

  const offset = offsets[direction] || offsets.up;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: offset.y,
        x: offset.x,
        scale: offset.scale ?? 1,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className = '', stagger = 0.12 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
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
      variants={defaultVariants}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
