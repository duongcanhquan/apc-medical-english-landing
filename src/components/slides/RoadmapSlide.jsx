import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ClipboardList,
  FileSearch,
  FlaskConical,
  LineChart,
} from 'lucide-react';
import PartnerLogos from '../PartnerLogos';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80';

const steps = [
  {
    phase: 'Giai đoạn 1',
    badge: 'MIỄN PHÍ',
    title: 'Khảo sát & Gap Analysis',
    text: 'Đánh giá đầu vào toàn đội ngũ, phân tích khoảng cách năng lực theo vị trí lâm sàng.',
    icon: FileSearch,
    color: 'from-teal-accent/30 to-teal-glow/10',
    ring: 'border-teal-glow/50 text-teal-glow',
  },
  {
    phase: 'Giai đoạn 2',
    badge: 'THIẾT KẾ',
    title: 'Syllabus May Đo',
    text: 'Xây dựng chương trình theo chuyên khoa, lịch học linh hoạt theo ca trực.',
    icon: ClipboardList,
    color: 'from-sky-500/25 to-blue-500/10',
    ring: 'border-sky-400/50 text-sky-300',
  },
  {
    phase: 'Giai đoạn 3',
    badge: 'PILOT',
    title: 'Thí điểm Lâm sàng',
    text: '10–15 học viên, mô phỏng phòng khám, đánh giá giữa khóa bằng KPI đo được.',
    icon: FlaskConical,
    color: 'from-violet-500/20 to-purple-500/10',
    ring: 'border-violet-400/50 text-violet-300',
  },
  {
    phase: 'Giai đoạn 4',
    badge: 'TRIỂN KHAI',
    title: 'Scale Toàn Bộ',
    text: 'Triển khai toàn bệnh viện, báo cáo KPI định kỳ cho Ban Giám Đốc.',
    icon: LineChart,
    color: 'from-amber-500/25 to-gold-cta/10',
    ring: 'border-gold-cta/50 text-gold-glow',
  },
];

function PartnerLogosHeader() {
  return (
    <div className="mb-8 md:mb-10">
      <PartnerLogos size="lg" label="Đối tác triển khai" animated />
    </div>
  );
}

function PathwayLine({ reduceMotion }) {
  return (
    <div className="pointer-events-none absolute top-[4.5rem] right-0 left-0 hidden h-1 md:block">
      <div className="mx-auto h-full w-[88%] overflow-hidden rounded-full bg-white/10">
        {!reduceMotion && (
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-teal-glow to-transparent"
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>
    </div>
  );
}

export default function RoadmapSlide() {
  const reduceMotion = useReducedMotion();

  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Lộ trình hợp tác" overlay="aurora" fx="laser-pathway">
        <div className="m-auto flex min-h-full w-full max-w-7xl flex-col justify-center">
          <PartnerLogosHeader />

          <SlideEntrance className="mb-8 text-center md:mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-glow/30 bg-teal-accent/10 px-4 py-1.5 text-xs font-bold text-teal-glow">
              <Activity className="h-3.5 w-3.5" /> Clinical Partnership Pathway
            </div>
            <h2 className="font-serif mt-4 text-3xl font-bold text-white md:text-5xl">
              Lộ Trình Hợp Tác
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Quy trình 4 giai đoạn chuẩn y khoa — từ chẩn đoán năng lực đến triển khai toàn diện
            </p>
          </SlideEntrance>

          <div className="relative">
            <PathwayLine reduceMotion={reduceMotion} />

            <StaggerGroup className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <StaggerChild key={step.title}>
                    <motion.article
                      className={`glass-strong relative overflow-hidden rounded-3xl p-5 md:p-6 bg-gradient-to-br ${step.color}`}
                      whileHover={reduceMotion ? {} : { y: -4, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="absolute top-0 right-0 rounded-bl-2xl bg-white/5 px-3 py-1 font-mono text-[10px] text-slate-400">
                        {String(i + 1).padStart(2, '0')}
                      </div>

                      <div
                        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border-2 ${step.ring} bg-medical-950/40`}
                      >
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>

                      <p className="mb-1 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                        {step.phase}
                      </p>
                      <span className="mb-2 inline-block rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white">
                        {step.badge}
                      </span>
                      <h3 className="font-serif mb-2 text-lg font-bold text-white md:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-slate-300 md:text-sm">{step.text}</p>

                      {!reduceMotion && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-teal-glow/0 via-teal-glow/60 to-teal-glow/0"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                        />
                      )}
                    </motion.article>
                  </StaggerChild>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
