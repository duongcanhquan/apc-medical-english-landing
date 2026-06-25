import { createContext, useContext, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useSwiperSlide } from 'swiper/react';

const SnapContext = createContext(false);

export function SnapAnimationProvider({ children, snapDelay = 520 }) {
  const [snapComplete, setSnapComplete] = useState(false);

  return (
    <SnapContext.Provider value={snapComplete}>
      <SnapListener snapDelay={snapDelay} onSnap={setSnapComplete} />
      {children}
    </SnapContext.Provider>
  );
}

function SnapListener({ snapDelay, onSnap }) {
  const { isActive } = useSwiperSlide();

  useEffect(() => {
    if (!isActive) {
      onSnap(false);
      return undefined;
    }
    const timer = setTimeout(() => onSnap(true), snapDelay);
    return () => clearTimeout(timer);
  }, [isActive, snapDelay, onSnap]);

  return null;
}

function useSnapReady(isActive) {
  const snapComplete = useContext(SnapContext);
  return isActive && snapComplete;
}

export function SlideEntrance({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const { isActive } = useSwiperSlide();
  const ready = useSnapReady(isActive);
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { y: 48, x: 0 },
    down: { y: -48, x: 0 },
    left: { y: 0, x: -48 },
    right: { y: 0, x: 48 },
  };
  const offset = offsets[direction] || offsets.up;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={ready ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.7, delay: ready ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className = '', baseDelay = 0.08 }) {
  const { isActive } = useSwiperSlide();
  const ready = useSnapReady(isActive);
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={ready ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: baseDelay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
