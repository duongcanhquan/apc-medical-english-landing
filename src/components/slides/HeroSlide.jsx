import { Award, Globe, GraduationCap, Stethoscope, TrendingUp } from 'lucide-react';
import { CertPromoStrip, VietnamContextTag } from '../CertPromo';
import PartnerLogos from '../PartnerLogos';
import { CERT_PROGRAMS, slideImages } from '../../lib/slideImages';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import { HighlightWord } from '../motion/WaveTypography';
import SlideContent from './SlideContent';
import SlideShell from './SlideShell';

const badges = [
  { icon: GraduationCap, label: 'B2 CEFR · Foundation' },
  { icon: Globe, label: 'OET Grade B · Quốc tế' },
  { icon: Stethoscope, label: 'Sát vị trí lâm sàng' },
  { icon: TrendingUp, label: 'Kết quả đo được' },
  { icon: Award, label: 'Chứng chỉ có giá trị' },
];

export default function HeroSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={slideImages.hero.src} alt={slideImages.hero.alt} overlay="warm" fx="heartbeat-rings">
        <SlideContent maxWidth="max-w-5xl" centerShort className="items-center text-center">
          <SlideEntrance>
            <PartnerLogos size="lg" className="mb-4" />
            <VietnamContextTag className="mb-4" />
            <p className="hook-label hook-label-teal mb-3 text-xs md:text-sm">
              KHÓA HỌC & CHỨNG CHỈ TIẾNG ANH Y KHOA
            </p>
          </SlideEntrance>
          <SlideEntrance delay={0.08}>
            <h1 className="font-serif text-balance gradient-headline mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              TỪ <HighlightWord>NỀN TẢNG B2</HighlightWord> ĐẾN{' '}
              <HighlightWord color="sky">CHỨNG CHỈ OET</HighlightWord>
            </h1>
          </SlideEntrance>
          <SlideEntrance delay={0.14}>
            <p className="text-body text-balance mx-auto mb-6 max-w-2xl text-sm leading-relaxed md:text-lg">
              Lộ trình 3 gói đào tạo cho bác sĩ, điều dưỡng Việt Nam — thiết kế theo vị trí lâm sàng,
              cam kết chứng chỉ đo được, không phải tiếng Anh tổng quát.
            </p>
          </SlideEntrance>

          <SlideEntrance delay={0.2} className="mb-6 w-full max-w-3xl">
            <CertPromoStrip programs={CERT_PROGRAMS} />
          </SlideEntrance>

          <StaggerGroup className="flex flex-wrap justify-center gap-2.5 md:gap-3">
            {badges.map((b, i) => {
              const Icon = b.icon;
              return (
                <StaggerChild key={b.label}>
                  <span
                    className="glass-panel-light badge-float inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[11px] font-bold text-white md:px-4 md:text-sm"
                    style={{ animationDelay: `${i * 0.25}s` }}
                  >
                    <Icon className="h-3.5 w-3.5 text-teal-glow md:h-4 md:w-4" />
                    {b.label}
                  </span>
                </StaggerChild>
              );
            })}
          </StaggerGroup>
        </SlideContent>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
