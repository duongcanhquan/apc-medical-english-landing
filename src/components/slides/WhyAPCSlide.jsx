import { SlideEntrance, SnapAnimationProvider } from '../motion/SlideEntrance';
import SynapseMindMap from '../motion/SynapseMindMap';
import { slideImages } from '../../lib/slideImages';
import SlideContent from './SlideContent';
import SlideShell from './SlideShell';

export default function WhyAPCSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={slideImages.whyApc.src} alt={slideImages.whyApc.alt} overlay="dark" fx="synapse-web">
        <SlideContent>
          <SlideEntrance className="text-center">
            <p className="hook-label hook-label-teal mb-2 text-[10px] md:text-xs">
              Hệ sinh thái APC
            </p>
            <h2 className="headline-display text-balance text-lg sm:text-xl md:text-3xl">
              Kết hợp 20 năm kinh nghiệm EQuest và phương pháp thực chiến Việt Mỹ
            </h2>
            <p className="text-muted mt-2 hidden text-xs md:block md:text-sm">
              Di chuột để khám phá liên kết giữa 3 yếu tố cốt lõi
            </p>
          </SlideEntrance>

          <SlideEntrance delay={0.15}>
            <SynapseMindMap />
          </SlideEntrance>
        </SlideContent>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
