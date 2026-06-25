import { motion } from 'framer-motion';
import PartnerLogos from '../PartnerLogos';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80';

const nodes = [
  {
    id: 'n1',
    title: '20+ NĂM',
    text: 'Nền tảng EQuest, hệ thống VATC, IVY Prep, 200.000+ học viên. Nền tảng học thuật tiếng Anh lớn nhất VN.',
    pos: 'top-[6%] left-[4%] md:left-[6%]',
    x2: 18,
    y2: 20,
  },
  {
    id: 'n2',
    title: 'ESP PROVEN',
    text: 'Chương trình xây từ vị trí công việc thực tế, đã vận hành cho Khách sạn, Kinh doanh, Phiên dịch.',
    pos: 'top-[6%] right-[4%] md:right-[6%]',
    x2: 82,
    y2: 20,
  },
  {
    id: 'n3',
    title: 'AI + HUMAN',
    text: 'AI cá nhân hóa lộ trình. Simulation lab – 70% thực hành, 30% lý thuyết ứng dụng.',
    pos: 'bottom-[6%] left-1/2 -translate-x-1/2',
    x2: 50,
    y2: 82,
  },
];

export default function WhyAPCSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Tại sao chọn APC" overlay="dark" fx="synapse-web">
        <div className="m-auto flex min-h-full max-w-6xl flex-col justify-center">
          <SlideEntrance className="mb-6 text-center">
            <h2 className="font-serif text-balance text-xl font-bold text-white md:text-3xl">
              Kết hợp 20 năm kinh nghiệm EQuest và phương pháp thực chiến Việt Mỹ
            </h2>
          </SlideEntrance>

          <div className="relative mx-auto h-[min(58vh,520px)] w-full">
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {nodes.map((n, i) => (
                <motion.path
                  key={n.id}
                  d={`M 50 50 L ${n.x2} ${n.y2}`}
                  stroke="url(#proofGrad)"
                  strokeWidth="0.35"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.75 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.12 }}
                />
              ))}
              <defs>
                <linearGradient id="proofGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
            </svg>

            <motion.div
              className="glass-strong absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full px-4 py-3 md:px-5 md:py-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PartnerLogos size="sm" />
            </motion.div>

            <StaggerGroup>
              {nodes.map((n) => (
                <StaggerChild key={n.id}>
                  <article
                    className={`glass absolute ${n.pos} w-[90%] max-w-xs rounded-3xl p-4 md:w-64 md:p-5`}
                  >
                    <h3 className="font-serif mb-2 text-base font-bold text-teal-glow md:text-lg">
                      {n.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-300 md:text-sm">{n.text}</p>
                  </article>
                </StaggerChild>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
