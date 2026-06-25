import { motion } from 'framer-motion';
import Reveal from '../motion/Reveal';

const steps = [
  {
    phase: '01',
    title: 'Khảo sát (Miễn phí)',
    text: 'Đánh giá đầu vào, gap analysis.',
  },
  {
    phase: '02',
    title: 'Thiết kế',
    text: 'Syllabus chuyên khoa, bài test.',
  },
  {
    phase: '03',
    title: 'Pilot',
    text: '10-15 học viên, đánh giá giữa khóa.',
  },
  {
    phase: '04',
    title: 'Triển khai',
    text: 'Mở rộng toàn đội, báo cáo KPI.',
  },
];

export default function RoadmapSection() {
  return (
    <section id="treatment" className="relative min-h-screen px-5 py-28 md:px-12">
      <Reveal className="mb-14 text-center">
        <h2 className="font-serif text-balance text-3xl font-bold text-white md:text-5xl">
          The Treatment Plan
        </h2>
        <p className="mt-3 text-sm text-slate-400">Lộ Trình Hợp Tác — Flowchart</p>
      </Reveal>

      <div className="relative mx-auto max-w-2xl">
        <div
          className="absolute top-0 left-6 h-full w-px bg-white/10 md:left-1/2"
          aria-hidden="true"
        >
          <motion.div
            className="h-full w-full origin-top bg-gradient-to-b from-teal-accent via-cyan-400 to-gold-cta"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <div className="space-y-10 md:space-y-12">
          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <Reveal
                key={step.phase}
                delay={i * 0.1}
                direction={isLeft ? 'left' : 'right'}
              >
                <div
                  className={`relative flex items-center gap-6 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="hidden flex-1 md:block" />
                  <motion.div
                    className="absolute left-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-teal-accent bg-medical-900 text-xs font-bold text-teal-glow shadow-lg shadow-teal-accent/30 md:left-1/2"
                    whileInView={{ scale: [0.5, 1.15, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                  >
                    {step.phase}
                  </motion.div>
                  <article className="glass ml-14 flex-1 rounded-3xl p-5 md:ml-0 md:max-w-[calc(50%-2rem)] md:p-6">
                    <h3 className="font-serif mb-2 text-lg font-bold text-white md:text-xl">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                      {step.text}
                    </p>
                  </article>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
