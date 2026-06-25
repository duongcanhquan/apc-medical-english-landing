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
    const t = setTimeout(() => onSnap(true), snapDelay);
    return () => clearTimeout(t);
  }, [isActive, snapDelay, onSnap]);
  return null;
}

function useSnapReady(isActive) {
  return isActive && useContext(SnapContext);
}

export function SlideEntrance({ children, className = '', delay = 0, direction = 'up' }) {
  const { isActive } = useSwiperSlide();
  const ready = useSnapReady(isActive);
  const reduceMotion = useReducedMotion();
  const offsets = { up: { y: 40, x: 0 }, left: { y: 0, x: -40 }, right: { y: 0, x: 40 } };
  const offset = offsets[direction] || offsets.up;

  if (reduceMotion) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={ready ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.65, delay: ready ? delay : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({ children, className = '', baseDelay = 0.1 }) {
  const { isActive } = useSwiperSlide();
  const ready = useSnapReady(isActive);
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;

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
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Typewriter({ text, className = '', speed = 28 }) {
  const { isActive } = useSwiperSlide();
  const ready = useSnapReady(isActive);
  const reduceMotion = useReducedMotion();
  const [len, setLen] = useState(reduceMotion ? text.length : 0);

  useEffect(() => {
    if (!ready || reduceMotion) {
      setLen(text.length);
      return undefined;
    }
    setLen(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setLen(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [ready, text, speed, reduceMotion]);

  return (
    <p className={className}>
      {text.slice(0, len)}
      {len < text.length && (
        <span className="ml-0.5 inline-block h-4 w-0.5 animate-pulse bg-teal-glow align-middle" />
      )}
    </p>
  );
}
