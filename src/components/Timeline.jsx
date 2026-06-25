import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ClipboardList, FlaskConical, Rocket, Search } from 'lucide-react';
import FadeInView from './FadeInView';

const steps = [
  {
    icon: Search,
    title: 'Khảo sát (Miễn phí)',
    description:
      'Đánh giá đầu vào, phỏng vấn nhu cầu, Gap analysis.',
  },
  {
    icon: ClipboardList,
    title: 'Thiết kế',
    description: 'Syllabus chuyên khoa, bài test, lịch học.',
  },
  {
    icon: FlaskConical,
    title: 'Pilot',
    description: '10-15 học viên đại diện, đánh giá giữa khóa.',
  },
  {
    icon: Rocket,
    title: 'Triển khai',
    description: 'Mở rộng toàn đội ngũ, báo cáo KPI cho BGĐ.',
  },
];

export default function Timeline() {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.4'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="px-4 py-24 md:px-8" ref={containerRef}>
      <div className="mx-auto max-w-3xl">
        <FadeInView className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Lộ Trình Hợp Tác
          </h2>
        </FadeInView>

        <div className="relative">
          <div
            className="absolute top-0 left-6 h-full w-0.5 bg-white/10 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          >
            <motion.div
              className="w-full origin-top bg-gradient-to-b from-teal-accent to-gold-cta"
              style={reduceMotion ? { height: '100%' } : { height: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <FadeInView
                  key={step.title}
                  direction={isEven ? 'left' : 'right'}
                  delay={index * 0.1}
                >
                  <div
                    className={`relative flex items-center gap-6 md:gap-0 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="hidden flex-1 md:block" />

                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-teal-accent bg-medical-900 shadow-lg shadow-teal-accent/30 md:absolute md:left-1/2 md:-translate-x-1/2">
                      <Icon className="h-5 w-5 text-teal-glow" aria-hidden="true" />
                    </div>

                    <article className="glass flex-1 rounded-2xl p-6 md:max-w-[calc(50%-3rem)]">
                      <span className="mb-1 block text-xs font-bold tracking-widest text-teal-accent uppercase">
                        Bước {index + 1}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300">
                        {step.description}
                      </p>
                    </article>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
