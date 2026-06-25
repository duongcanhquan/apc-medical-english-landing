import { motion, useReducedMotion } from 'framer-motion';
import { Check, Shield, Star } from 'lucide-react';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1920&q=80';

const details = [
  'Thời lượng: 60 giờ / 3 tháng.',
  'Nội dung trọng tâm: Từ vựng y khoa, Giao tiếp bệnh nhân, Đọc tài liệu lâm sàng.',
  'Phương pháp: Mô phỏng phòng khám thực tế (Simulation).',
  'Mục tiêu đầu ra: B2 CEFR. Tự tin giao tiếp y lệnh cơ bản.',
  'Đối tượng: Dành cho toàn bộ đội ngũ y tế (Bác sĩ, điều dưỡng, kỹ thuật viên).',
  'Lợi ích: Xóa bỏ rào cản giao tiếp hàng ngày tại bệnh viện, xây nền tảng vững chắc để học sâu hơn.',
];

function RotatingShield() {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-teal-accent/20 ring-2 ring-teal-glow/40"
      animate={reduceMotion ? {} : { rotate: 360 }}
      transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
    >
      <Shield className="h-10 w-10 text-teal-glow" aria-hidden="true" />
    </motion.div>
  );
}

export default function FoundationSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Foundation Medical English" overlay="aurora" fx="dna-helix">
        <div className="m-auto flex min-h-full max-w-3xl flex-col justify-center">
          <RotatingShield />
          <SlideEntrance>
            <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-teal-accent/20 px-3 py-1 text-xs font-bold text-teal-glow">
              <Star className="h-3 w-3" /> Gói Phổ Biến Nhất
            </span>
            <h2 className="font-serif text-balance mb-6 text-3xl font-bold text-white md:text-4xl">
              Foundation Medical English
            </h2>
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
