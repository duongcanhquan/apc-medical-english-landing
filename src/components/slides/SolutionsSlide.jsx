import { Globe, Layers, Stethoscope } from 'lucide-react';
import { CertPromoStrip } from '../CertPromo';
import { CERT_PROGRAMS, slideImages } from '../../lib/slideImages';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import { HighlightWord, WaveHeadline } from '../motion/WaveTypography';
import SlideContent from './SlideContent';
import SlideShell from './SlideShell';

const packages = [
  {
    icon: Stethoscope,
    step: '01',
    title: 'Foundation',
    subtitle: 'Medical English',
    tag: 'B2 CEFR',
    certLine: 'Chứng nhận đầu ra B2',
    highlight: 'Nền tảng lâm sàng',
    desc: '60 giờ · Simulation phòng khám · Toàn bộ đội ngũ y tế Việt Nam.',
    color: 'teal',
    glow: 'shadow-teal-glow/20 hover:shadow-teal-glow/40',
    border: 'border-teal-glow/30',
    text: 'text-teal-glow',
  },
  {
    icon: Globe,
    step: '02',
    title: 'OET Intensive',
    subtitle: 'Chứng chỉ quốc tế',
    tag: 'Grade B',
    certLine: 'OET Medicine · Nursing',
    highlight: 'Anh · Úc · Mỹ',
    desc: '80 giờ · Mock test + feedback giám khảo · Cam kết Grade B trong 2 lần thi.',
    color: 'sky',
    glow: 'shadow-sky-400/20 hover:shadow-sky-400/40',
    border: 'border-sky-400/30',
    text: 'text-sky-300',
    featured: true,
  },
  {
    icon: Layers,
    step: '03',
    title: 'Chuyên Khoa ESP',
    subtitle: 'Precision Medicine',
    tag: 'KPI ràng buộc',
    certLine: 'Chứng nhận theo hợp đồng',
    highlight: 'Theo từng khoa',
    desc: 'Linh hoạt · Nội · Ngoại · ICU · Sản Nhi · Hybrid theo ca trực.',
    color: 'violet',
    glow: 'shadow-violet-400/20 hover:shadow-violet-400/40',
    border: 'border-violet-400/30',
    text: 'text-violet-300',
  },
];

function PackageCard({ pkg, index }) {
  const Icon = pkg.icon;
  const drift = index === 1 ? 'md:-translate-y-4' : index === 2 ? 'md:translate-y-2' : '';

  return (
    <article className={`hover-lift group relative ${drift}`}>
      <div
        className={`glass-panel relative overflow-hidden rounded-3xl border p-5 transition-shadow md:p-7 ${pkg.border} ${pkg.glow} ${pkg.featured ? 'ring-2 ring-sky-400/40' : ''}`}
      >
        {pkg.featured && (
          <span className="absolute top-3 right-3 rounded-full bg-gold-cta px-2 py-0.5 text-[9px] font-bold text-medical-950 uppercase">
            Nổi bật
          </span>
        )}
        <span className={`font-mono text-4xl font-black opacity-10 ${pkg.text}`}>{pkg.step}</span>
        <div className="mt-2 mb-3 flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ${pkg.border}`}>
            <Icon className={`h-5 w-5 ${pkg.text}`} />
          </div>
          <div>
            <p className={`text-[10px] font-bold tracking-wider uppercase ${pkg.text}`}>{pkg.tag}</p>
            <h3 className="font-serif text-xl font-extrabold text-white md:text-2xl">{pkg.title}</h3>
            <p className="text-muted text-xs">{pkg.subtitle}</p>
          </div>
        </div>
        <p className={`mb-1 text-[11px] font-extrabold tracking-wide uppercase ${pkg.text}`}>{pkg.certLine}</p>
        <p className="mb-2 text-lg font-extrabold md:text-xl">
          <HighlightWord color={pkg.color}>{pkg.highlight}</HighlightWord>
        </p>
        <p className="text-body text-sm leading-relaxed">{pkg.desc}</p>
        <div
          className={`absolute -bottom-px left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-60 ${pkg.text}`}
        />
      </div>
    </article>
  );
}

export default function SolutionsSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={slideImages.solutions.src} alt={slideImages.solutions.alt} overlay="aurora" fx="dna-helix">
        <SlideContent>
          <SlideEntrance className="text-center">
            <p className="hook-label hook-label-teal mb-3 text-[10px] md:text-xs">
              Khóa học & chứng chỉ APC
            </p>
            <WaveHeadline className="mx-auto">
              3 Gói · 3 Cấp Chứng Chỉ
            </WaveHeadline>
            <p className="text-body mx-auto mt-4 max-w-2xl text-sm md:text-base">
              <HighlightWord>B2 CEFR</HighlightWord> cho nền tảng lâm sàng →{' '}
              <HighlightWord color="sky">OET Grade B</HighlightWord> mở cửa Anh · Úc · Mỹ →{' '}
              <HighlightWord color="violet">ESP chuyên khoa</HighlightWord> theo KPI bệnh viện.
            </p>
          </SlideEntrance>

          <SlideEntrance delay={0.12} className="mb-6">
            <CertPromoStrip programs={CERT_PROGRAMS} />
          </SlideEntrance>

          <StaggerGroup className="grid gap-5 md:grid-cols-3 md:gap-6">
            {packages.map((pkg, i) => (
              <StaggerChild key={pkg.title}>
                <PackageCard pkg={pkg} index={i} />
              </StaggerChild>
            ))}
          </StaggerGroup>

          <SlideEntrance delay={0.35} className="text-center">
            <p className="text-xs text-slate-500 md:text-sm">
              ↓ Vuốt xuống để xem chi tiết từng khóa & cam kết chứng chỉ
            </p>
          </SlideEntrance>
        </SlideContent>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
