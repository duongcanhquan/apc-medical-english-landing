import { motion, useReducedMotion } from 'framer-motion';
import { Check, Globe } from 'lucide-react';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80';

const details = [
  'Thời lượng: 80 giờ / 4 tháng.',
  'Nội dung trọng tâm: 4 kỹ năng OET Medicine/Nursing chuyên sâu. Cung cấp mock tests toàn diện và feedback cá nhân từ giám khảo.',
  'Cam kết: Đạt Grade B trong 2 lần thi.',
  'Đối tượng: Bác sĩ, điều dưỡng có kế hoạch hành nghề quốc tế, xin học bổng tu nghiệp nước ngoài.',
  'Lợi ích: Mở khóa chứng chỉ hành nghề toàn cầu, tự tin làm việc tại các nền y tế tiên tiến (Anh, Úc, Mỹ).',
];

function RotatingGlobe() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-500/20 ring-2 ring-blue-400/40"
      animate={reduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity }}
    >
      <Globe className="h-10 w-10 text-sky-300" aria-hidden="true" />
    </motion.div>
  );
}

export default function OETSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="OET Intensive Preparation" overlay="pulse" fx="blood-flow">
        <div className="m-auto flex min-h-full max-w-3xl flex-col justify-center">
          <RotatingGlobe />
          <SlideEntrance>
            <p className="mb-2 text-xs font-bold tracking-widest text-sky-300 uppercase">
              Nấc Thang Quốc Tế
            </p>
            <h2 className="font-serif text-balance mb-6 text-3xl font-bold text-white md:text-4xl">
              OET Intensive Preparation
            </h2>
          </SlideEntrance>
          <StaggerGroup className="glass-strong max-h-[50vh] space-y-3 overflow-y-auto rounded-3xl p-6 md:max-h-none md:p-8">
            {details.map((d) => (
              <StaggerChild key={d}>
                <div className="flex items-start gap-3 text-sm text-slate-200 md:text-base">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
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
