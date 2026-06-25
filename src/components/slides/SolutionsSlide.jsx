import { motion, useReducedMotion } from 'framer-motion';
import { Globe, Layers, Stethoscope } from 'lucide-react';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import { HighlightWord, WaveHeadline } from '../motion/WaveTypography';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1920&q=80';

const packages = [
  {
    icon: Stethoscope,
    step: '01',
    title: 'Foundation',
    subtitle: 'Medical English',
    tag: 'Phổ biến nhất',
    highlight: 'Nền tảng lâm sàng',
    desc: '60 giờ · B2 CEFR · Simulation phòng khám · Toàn bộ đội ngũ y tế.',
    color: 'teal',
    glow: 'shadow-teal-glow/20 hover:shadow-teal-glow/40',
    border: 'border-teal-glow/30',
    text: 'text-teal-glow',
  },
  {
    icon: Globe,
    step: '02',
    title: 'OET Intensive',
    subtitle: 'Nấc thang quốc tế',
    tag: 'Grade B',
    highlight: 'Chứng chỉ toàn cầu',
    desc: '80 giờ · 4 kỹ năng OET · Mock test + feedback giám khảo · Anh · Úc · Mỹ.',
    color: 'sky',
    glow: 'shadow-sky-400/20 hover:shadow-sky-400/40',
    border: 'border-sky-400/30',
    text: 'text-sky-300',
  },
  {
    icon: Layers,
    step: '03',
    title: 'Chuyên Khoa ESP',
    subtitle: 'Precision Medicine',
    tag: 'May đo',
    highlight: 'Theo từng khoa',
    desc: 'Linh hoạt · Nội · Ngoại · ICU · Sản Nhi · Hybrid theo ca trực.',
    color: 'violet',
    glow: 'shadow-violet-400/20 hover:shadow-violet-400/40',
    border: 'border-violet-400/30',
    text: 'text-violet-300',
  },
];

function PackageCard({ pkg, index }) {
  const reduceMotion = useReducedMotion();
  const Icon = pkg.icon;
  const drift = index === 1 ? 'md:-translate-y-4' : index === 2 ? 'md:translate-y-2' : '';

  return (
    <motion.article
      className={`group relative ${drift}`}
      whileHover={reduceMotion ? {} : { y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 320 }}
    >
      <div
        className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br from-white/[0.07] to-transparent p-5 backdrop-blur-sm transition-shadow md:p-7 ${pkg.border} ${pkg.glow}`}
      >
        <span className={`font-mono text-4xl font-black opacity-10 ${pkg.text}`}>{pkg.step}</span>
        <div className="mt-2 mb-3 flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ${pkg.border}`}>
            <Icon className={`h-5 w-5 ${pkg.text}`} />
          </div>
          <div>
            <p className={`text-[10px] font-bold tracking-wider uppercase ${pkg.text}`}>{pkg.tag}</p>
            <h3 className="font-serif text-xl font-bold text-white md:text-2xl">{pkg.title}</h3>
            <p className="text-xs text-slate-400">{pkg.subtitle}</p>
          </div>
        </div>
        <p className="mb-2 text-lg font-bold md:text-xl">
          <HighlightWord color={pkg.color}>{pkg.highlight}</HighlightWord>
        </p>
        <p className="text-sm leading-relaxed text-slate-300">{pkg.desc}</p>
        <motion.div
          className={`absolute -bottom-px left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-current to-transparent ${pkg.text}`}
          animate={reduceMotion ? {} : { opacity: [0.3, 1, 0.3], scaleX: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
        />
      </div>
    </motion.article>
  );
}

export default function SolutionsSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Giải pháp đào tạo" overlay="aurora" fx="heartbeat-rings">
        <div className="m-auto flex min-h-full w-full max-w-6xl flex-col justify-center gap-8 py-4">
          <SlideEntrance className="text-center">
            <p className="mb-3 font-mono text-[10px] tracking-[0.28em] text-teal-glow uppercase md:text-xs">
              Giải pháp APC
            </p>
            <WaveHeadline className="mx-auto">
              3 Gói Đào Tạo
            </WaveHeadline>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-300 md:text-base">
              Từ <HighlightWord>nền tảng lâm sàng</HighlightWord> đến{' '}
              <HighlightWord color="sky">chứng chỉ quốc tế</HighlightWord> và{' '}
              <HighlightWord color="violet">chuyên khoa sâu</HighlightWord> — lộ trình rõ ràng, đo được KPI.
            </p>
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
              ↓ Vuốt xuống để xem chi tiết từng gói
            </p>
          </SlideEntrance>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
