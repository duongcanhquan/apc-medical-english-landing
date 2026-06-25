import { Activity } from 'lucide-react';
import PartnershipJourney from '../motion/PartnershipJourney';
import PartnerLogos from '../PartnerLogos';
import { slideImages } from '../../lib/slideImages';
import { SlideEntrance, SnapAnimationProvider } from '../motion/SlideEntrance';
import SlideContent from './SlideContent';
import SlideShell from './SlideShell';

export default function RoadmapSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={slideImages.roadmap.src} alt={slideImages.roadmap.alt} overlay="aurora">
        <SlideContent maxWidth="max-w-7xl">
          <SlideEntrance>
            <div className="mb-2 flex flex-col items-center md:mb-4">
              <PartnerLogos size="md" label="Đối tác triển khai" animated />
            </div>
          </SlideEntrance>

          <SlideEntrance delay={0.08} className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-glow/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-bold text-teal-glow">
              <Activity className="h-3.5 w-3.5" /> Clinical Partnership Pathway
            </div>
            <h2 className="font-serif mt-3 text-2xl font-bold text-white md:mt-4 md:text-4xl lg:text-5xl">
              Lộ Trình Hợp Tác
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-xs text-slate-400 md:text-sm">
              Con đường 4 giai đoạn — ánh sáng tiến trình di chuyển qua từng mốc triển khai
            </p>
          </SlideEntrance>

          <SlideEntrance delay={0.18}>
            <PartnershipJourney />
          </SlideEntrance>
        </SlideContent>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
