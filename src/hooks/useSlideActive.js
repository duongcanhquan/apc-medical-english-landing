import { useReducedMotion } from 'framer-motion';
import { useSwiperSlide } from 'swiper/react';
import { useIsMobile } from './useMediaQuery';

/** True when this slide is the one currently shown in the vertical swiper. */
export function useSlideActive() {
  const { isActive } = useSwiperSlide();
  return isActive;
}

/** Gate decorative / infinite motion: active slide only, respect reduced motion & mobile. */
export function useFxMotion() {
  const { isActive } = useSwiperSlide();
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const run = isActive && !reduceMotion;

  return {
    isActive,
    reduceMotion,
    isMobile,
    run,
    /** Heavy FX (SVG morph, animateMotion, mouse tracking) — desktop + active only. */
    runHeavy: run && !isMobile,
  };
}
