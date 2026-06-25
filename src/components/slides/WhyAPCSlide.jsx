import { SlideEntrance, SnapAnimationProvider } from '../motion/SlideEntrance';
import SynapseMindMap from '../motion/SynapseMindMap';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80';

export default function WhyAPCSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Tại sao chọn APC" overlay="dark" fx="synapse-web">
        <div className="m-auto flex min-h-full max-w-6xl flex-col justify-center">
          <SlideEntrance className="mb-4 text-center md:mb-6">
            <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-teal-glow uppercase md:text-xs">
              Hệ sinh thái APC
            </p>
            <h2 className="font-serif text-balance text-xl font-bold text-white md:text-3xl">
              Kết hợp 20 năm kinh nghiệm EQuest và phương pháp thực chiến Việt Mỹ
            </h2>
            <p className="mt-2 hidden text-xs text-slate-500 md:block md:text-sm">
              Di chuột để khám phá liên kết giữa 3 yếu tố cốt lõi
            </p>
          </SlideEntrance>

          <SlideEntrance delay={0.15}>
            <SynapseMindMap />
          </SlideEntrance>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
