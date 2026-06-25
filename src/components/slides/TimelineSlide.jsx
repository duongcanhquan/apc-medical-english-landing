import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ClipboardList, FlaskConical, Rocket, Search } from 'lucide-react';
import SlideBackground from '../SlideBackground';
import { SlideEntrance, SnapAnimationProvider } from '../SlideEntrance';

const BG =
  'https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80';

const steps = [
  {
    icon: Search,
    phase: 'Giai đoạn 1 (MIỄN PHÍ)',
    title: 'Khảo sát',
    text: 'Đánh giá đầu vào, Phỏng vấn nhu cầu, Gap analysis chi tiết.',
  },
  {
    icon: ClipboardList,
    phase: 'Giai đoạn 2',
    title: 'Thiết kế',
    text: 'Syllabus theo chuyên khoa, Bài test chuẩn hóa, Lịch học tối ưu hóa.',
  },
  {
    icon: FlaskConical,
    phase: 'Giai đoạn 3',
    title: 'Pilot',
    text: '10-15 học viên đại diện, Đánh giá giữa khóa, Điều chỉnh theo phản hồi.',
  },
  {
    icon: Rocket,
    phase: 'Giai đoạn 4',
    title: 'Triển khai toàn bộ',
    text: 'Mở rộng toàn đội ngũ, Báo cáo KPI hàng tháng, Gửi trực tiếp Ban Giám Đốc.',
  },
];

export default function TimelineSlide() {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <SnapAnimationProvider>
      <SlideBackground
        image={BG}
        alt="Quy trình hợp tác chuyên nghiệp"
        overlay="dark"
      >
        <div
          ref={containerRef}
          className="flex h-full flex-col justify-center overflow-y-auto px-5 py-12 md:px-10"
        >
          <SlideEntrance className="mb-8 text-center">
            <h2 className="text-balance text-xl font-bold text-white md:text-3xl">
              Lộ Trình Hợp Tác
            </h2>
            <p className="text-balance mx-auto mt-3 max-w-3xl text-sm text-slate-300 md:text-base">
              Từ khảo sát đến triển khai toàn diện – quy trình minh bạch, có kiểm
              soát tại từng giai đoạn.
            </p>
          </SlideEntrance>

          <div className="relative mx-auto w-full max-w-2xl">
            <div
              className="absolute top-0 left-[1.35rem] h-full w-0.5 bg-white/10 md:left-1/2 md:-translate-x-px"
              aria-hidden="true"
            >
              <motion.div
                className="w-full origin-top bg-gradient-to-b from-teal-accent via-cyan-400 to-gold-cta"
                style={reduceMotion ? { height: '100%' } : { height: lineHeight }}
              />
            </div>

            <div className="space-y-6 md:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <SlideEntrance
                    key={step.title}
                    delay={index * 0.1}
                    direction={isEven ? 'left' : 'right'}
                  >
                    <div
                      className={`relative flex items-start gap-4 md:items-center ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className="hidden flex-1 md:block" />

                      <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-teal-accent bg-medical-900 shadow-lg shadow-teal-accent/30 md:absolute md:left-1/2 md:-translate-x-1/2">
                        <Icon className="h-5 w-5 text-teal-glow" aria-hidden="true" />
                      </div>

                      <article className="glass flex-1 rounded-2xl p-4 md:max-w-[calc(50%-2.5rem)] md:p-5">
                        <p className="mb-1 text-[10px] font-bold tracking-wider text-teal-glow uppercase md:text-xs">
                          {step.phase}
                        </p>
                        <h3 className="mb-2 text-base font-bold text-white md:text-lg">
                          {step.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-slate-300 md:text-sm">
                          {step.text}
                        </p>
                      </article>
                    </div>
                  </SlideEntrance>
                );
              })}
            </div>
          </div>
        </div>
      </SlideBackground>
    </SnapAnimationProvider>
  );
}
