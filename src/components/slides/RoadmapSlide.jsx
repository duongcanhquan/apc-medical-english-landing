import { Activity } from 'lucide-react';
import PartnershipJourney from '../motion/PartnershipJourney';
import PartnerLogos from '../PartnerLogos';
import { SlideEntrance, SnapAnimationProvider } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80';

export default function RoadmapSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Lộ trình hợp tác" overlay="aurora">
        <div className="m-auto flex min-h-full w-full max-w-7xl flex-col justify-center py-2">
          <SlideEntrance>
            <div className="mb-4 flex flex-col items-center md:mb-6">
              <PartnerLogos size="md" label="Đối tác triển khai" animated />
            </div>
          </SlideEntrance>

          <SlideEntrance delay={0.08} className="mb-4 text-center md:mb-6">
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
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
