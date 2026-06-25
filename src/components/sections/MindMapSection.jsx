import { motion } from 'framer-motion';
import Reveal, { Stagger, StaggerItem } from '../motion/Reveal';

const nodes = [
  {
    id: 'n1',
    title: '20+ NĂM',
    text: 'Nền tảng EQuest, Hệ thống Anh ngữ VATC, IVY Prep, 200.000+ học viên.',
    pos: 'top-[8%] left-[5%] md:left-[8%]',
    line: 'M 50% 50% L 18% 22%',
  },
  {
    id: 'n2',
    title: 'ESP PROVEN',
    text: 'Thiết kế sát việc làm, từ vị trí công việc thực tế. Chuẩn đầu ra B2 CEFR.',
    pos: 'top-[8%] right-[5%] md:right-[8%]',
    line: 'M 50% 50% L 82% 22%',
  },
  {
    id: 'n3',
    title: 'AI + HUMAN',
    text: 'AI cá nhân hóa lộ trình, Simulation lab (mô phỏng ca lâm sàng), 70% thực hành.',
    pos: 'bottom-[8%] left-1/2 -translate-x-1/2',
    line: 'M 50% 50% L 50% 82%',
  },
];

export default function MindMapSection() {
  return (
    <section id="diagnostic" className="relative min-h-screen px-5 py-28 md:px-12">
      <Reveal className="mb-10 text-center">
        <h2 className="font-serif text-balance text-3xl font-bold text-white md:text-5xl">
          The Diagnostic
        </h2>
        <p className="mt-3 text-sm text-slate-400 md:text-base">
          Tại Sao Chọn APC? — Mind Map
        </p>
      </Reveal>

      <div className="relative mx-auto h-[min(70vh,640px)] w-full max-w-5xl">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {nodes.map((node, i) => {
            const x2 = node.id === 'n1' ? 18 : node.id === 'n2' ? 82 : 50;
            const y2 = node.id === 'n3' ? 82 : 22;
            return (
              <motion.path
                key={node.id}
                d={`M 50 50 L ${x2} ${y2}`}
                stroke="url(#lineGrad)"
                strokeWidth="0.4"
                fill="none"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.15 }}
              />
            );
          })}
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>
        </svg>

        <motion.div
          className="glass-strong absolute top-1/2 left-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full md:h-36 md:w-36"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-serif text-lg font-bold text-teal-glow md:text-2xl">
            APC
          </span>
          <span className="text-[10px] text-slate-400 md:text-xs">Core</span>
        </motion.div>

        <Stagger>
          {nodes.map((node) => (
            <StaggerItem key={node.id}>
              <article
                className={`glass node-glow absolute ${node.pos} w-[88%] max-w-xs rounded-3xl p-5 transition-all md:w-72 md:p-6`}
              >
                <h3 className="font-serif mb-2 text-lg font-bold text-teal-glow md:text-xl">
                  {node.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  {node.text}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
