import { motion, useReducedMotion } from 'framer-motion';
import { FlaskConical, Stethoscope, TrendingUp } from 'lucide-react';
import PartnerLogos from '../PartnerLogos';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1920&q=80';

const badges = [
  { icon: Stethoscope, label: 'Sát vị trí lâm sàng' },
  { icon: TrendingUp, label: 'Kết quả đo được' },
  { icon: FlaskConical, label: '70% Thực hành' },
];

export default function HeroSlide() {
  const reduceMotion = useReducedMotion();

  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Phòng lab y khoa hiện đại" overlay="warm" fx="heartbeat-rings">
        <div className="relative m-auto flex min-h-full max-w-4xl flex-col items-center justify-center text-center">
          <SlideEntrance>
            <PartnerLogos size="lg" className="mb-6" />
            <p className="mb-4 text-xs font-bold tracking-[0.22em] text-teal-glow md:text-sm">
              GIẢI PHÁP ĐÀO TẠO NGÔN NGỮ NGHỀ NGHIỆP
            </p>
          </SlideEntrance>
          <SlideEntrance delay={0.1}>
            <h1 className="font-serif text-balance gradient-headline mb-5 text-3xl font-bold md:text-5xl lg:text-6xl">
              ĐÀO TẠO TIẾNG ANH Y KHOA CHUYÊN BIỆT
            </h1>
          </SlideEntrance>
          <SlideEntrance delay={0.2}>
            <p className="text-balance mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-lg">
              Thiết kế riêng cho từng vị trí lâm sàng – không phải tiếng Anh tổng quát
            </p>
          </SlideEntrance>
          <StaggerGroup className="mb-8 flex flex-wrap justify-center gap-3">
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <StaggerChild key={b.label}>
                  <motion.span
                    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold md:text-sm"
                    animate={reduceMotion ? {} : { y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  >
                    <Icon className="h-4 w-4 text-teal-glow" />
                    {b.label}
                  </motion.span>
                </StaggerChild>
              );
            })}
          </StaggerGroup>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
