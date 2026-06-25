import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import FloatingNav, { AmbientLayer } from '../components/motion/FloatingNav';
import MotivationalPill from '../components/motion/MotivationalPill';
import HeroSlide from '../components/slides/HeroSlide';
import DiagnosisSlide from '../components/slides/DiagnosisSlide';
import FoundationSlide from '../components/slides/FoundationSlide';
import OETSlide from '../components/slides/OETSlide';
import ESPSlide from '../components/slides/ESPSlide';
import WhyAPCSlide from '../components/slides/WhyAPCSlide';
import RoadmapSlide from '../components/slides/RoadmapSlide';
import CTASlide from '../components/slides/CTASlide';

const SLIDES = [
  HeroSlide,
  DiagnosisSlide,
  FoundationSlide,
  OETSlide,
  ESPSlide,
  WhyAPCSlide,
  RoadmapSlide,
  CTASlide,
];

export default function LandingPage() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <AmbientLayer />
      <MotivationalPill />
      <FloatingNav
        activeIndex={activeIndex}
        onNavigate={(i) => swiper?.slideTo(i)}
      />

      <Swiper
        direction="vertical"
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        keyboard={{ enabled: true }}
        speed={900}
        modules={[Mousewheel, Keyboard]}
        className="h-screen w-full"
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
      >
        {SLIDES.map((Slide, i) => (
          <SwiperSlide key={i}>
            <Slide />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
