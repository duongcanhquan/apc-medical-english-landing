import { motion, useReducedMotion } from 'framer-motion';
import { FlaskConical, Stethoscope, TrendingUp } from 'lucide-react';
import { HeroECG } from '../motion/ECGSpine';
import Reveal, { Stagger, StaggerItem } from '../motion/Reveal';

const nodes = [
  { icon: Stethoscope, label: 'Sát vị trí lâm sàng' },
  { icon: TrendingUp, label: 'Kết quả đo được' },
  { icon: FlaskConical, label: '70% Thực hành' },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-5 py-24 md:px-12"
    >
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <HeroECG />

        <Reveal delay={0.1}>
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-teal-glow uppercase md:text-sm">
            Giải pháp đào tạo ngôn ngữ nghề nghiệp
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <h1 className="font-serif text-balance gradient-headline mb-5 text-4xl leading-tight font-bold md:text-6xl lg:text-7xl">
            ĐÀO TẠO TIẾNG ANH Y KHOA CHUYÊN BIỆT
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-balance mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 md:text-xl">
            Thiết kế riêng cho từng vị trí lâm sàng – không phải tiếng Anh tổng
            quát
          </p>
        </Reveal>

        <Stagger className="mb-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {nodes.map((n) => {
            const Icon = n.icon;
            return (
              <StaggerItem key={n.label}>
                <motion.div
                  className="glass node-glow flex items-center gap-2 rounded-full px-4 py-2.5 transition-all md:px-5"
                  animate={
                    reduceMotion
                      ? {}
                      : { y: [0, -6, 0] }
                  }
                  transition={{
                    duration: 4 + nodes.indexOf(n),
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Icon className="h-4 w-4 text-teal-glow" aria-hidden="true" />
                  <span className="text-xs font-medium text-white md:text-sm">
                    {n.label}
                  </span>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.55}>
          <p className="text-balance text-xs text-slate-500 md:text-sm">
            APC - Cao đẳng Việt Mỹ Hà Nội, Thành viên Tập đoàn Giáo dục EQuest
          </p>
        </Reveal>
      </div>
    </section>
  );
}
