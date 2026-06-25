import { motion, useReducedMotion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&q=80';

const details = [
  'Thời lượng: Theo thỏa thuận linh hoạt.',
  'Nội dung: Thiết kế chuyên biệt cho: Nội, Ngoại, ICU, Sản Nhi, Cấp cứu.',
  'Hình thức: Học tại bệnh viện, tại APC, hoặc Hybrid (linh hoạt theo lịch trực ca).',
  'Cam kết: Đo lường KPI theo hợp đồng ràng buộc.',
  'Đối tượng: Đào tạo theo khoa/chuyên môn của bệnh viện.',
  'Lợi ích: Giải quyết trực tiếp các tình huống giao ban (handover) và chuyên môn sâu của từng khoa, ứng dụng ngay vào ca trực hôm sau.',
];

function NeuralIcon() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className="mx-auto mb-6 h-20 w-20"
      aria-hidden="true"
      animate={reduceMotion ? {} : { scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <circle cx="50" cy="50" r="8" fill="rgba(45,212,191,0.6)" />
      <circle cx="25" cy="30" r="5" fill="rgba(56,189,248,0.5)" />
      <circle cx="75" cy="30" r="5" fill="rgba(56,189,248,0.5)" />
      <circle cx="25" cy="70" r="5" fill="rgba(56,189,248,0.5)" />
      <circle cx="75" cy="70" r="5" fill="rgba(56,189,248,0.5)" />
      <line x1="50" y1="50" x2="25" y2="30" stroke="rgba(45,212,191,0.4)" />
      <line x1="50" y1="50" x2="75" y2="30" stroke="rgba(45,212,191,0.4)" />
      <line x1="50" y1="50" x2="25" y2="70" stroke="rgba(45,212,191,0.4)" />
      <line x1="50" y1="50" x2="75" y2="70" stroke="rgba(45,212,191,0.4)" />
    </motion.svg>
  );
}

export default function ESPSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Chuyên khoa ESP" overlay="neural" fx="brain-waves">
        <div className="m-auto flex min-h-full max-w-3xl flex-col justify-center">
          <NeuralIcon />
          <SlideEntrance>
            <p className="mb-2 text-xs font-bold tracking-widest text-teal-glow uppercase">
              Precision Medicine
            </p>
            <h2 className="font-serif text-balance mb-6 text-3xl font-bold text-white md:text-4xl">
              Chuyên Khoa ESP
            </h2>
            <p className="mb-4 text-sm text-slate-400">Đào Tạo May Đo Theo Khoa</p>
          </SlideEntrance>
          <StaggerGroup className="glass-strong max-h-[50vh] space-y-3 overflow-y-auto rounded-3xl p-6 md:max-h-none md:p-8">
            {details.map((d) => (
              <StaggerChild key={d}>
                <div className="flex items-start gap-3 text-sm text-slate-200 md:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-accent" />
                  {d}
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
