import { motion, useReducedMotion } from 'framer-motion';
import { useFxMotion } from '../../hooks/useSlideActive';

const STEPS = [
  {
    phase: 'Giai đoạn 1',
    badge: 'MIỄN PHÍ',
    title: 'Khảo sát & Gap Analysis',
    text: 'Đánh giá đầu vào toàn đội ngũ, phân tích khoảng cách năng lực theo vị trí lâm sàng.',
    color: '#2dd4bf',
    glow: 'shadow-[0_0_20px_rgba(45,212,191,0.5)]',
    ring: 'border-teal-glow/60',
    textColor: 'text-teal-glow',
  },
  {
    phase: 'Giai đoạn 2',
    badge: 'THIẾT KẾ',
    title: 'Syllabus May Đo',
    text: 'Xây dựng chương trình theo chuyên khoa, lịch học linh hoạt theo ca trực.',
    color: '#38bdf8',
    glow: 'shadow-[0_0_20px_rgba(56,189,248,0.5)]',
    ring: 'border-sky-400/60',
    textColor: 'text-sky-300',
  },
  {
    phase: 'Giai đoạn 3',
    badge: 'PILOT',
    title: 'Thí điểm Lâm sàng',
    text: '10–15 học viên, mô phỏng phòng khám, đánh giá giữa khóa bằng KPI đo được.',
    color: '#a78bfa',
    glow: 'shadow-[0_0_20px_rgba(167,139,250,0.5)]',
    ring: 'border-violet-400/60',
    textColor: 'text-violet-300',
  },
  {
    phase: 'Giai đoạn 4',
    badge: 'TRIỂN KHAI',
    title: 'Scale Toàn Bộ',
    text: 'Triển khai toàn bệnh viện, báo cáo KPI định kỳ cho Ban Giám Đốc.',
    color: '#fbbf24',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.5)]',
    ring: 'border-gold-glow/60',
    textColor: 'text-gold-glow',
  },
];

/* Desktop: winding road left → right */
const DESKTOP_ROAD =
  'M 40 180 C 120 180 160 180 200 180 C 260 180 280 280 340 280 C 400 280 420 80 500 80 C 580 80 600 280 660 280 C 720 280 740 180 820 180 C 880 180 920 180 960 180';

/* Mobile: vertical road top → bottom */
const MOBILE_ROAD =
  'M 48 30 C 48 80 48 100 120 100 C 192 100 192 200 120 200 C 48 200 48 280 120 280 C 192 280 192 380 120 380 C 48 380 48 430 48 470';

const DESKTOP_STOPS = [
  { x: 200, y: 180, cardPos: 'above' },
  { x: 340, y: 280, cardPos: 'below' },
  { x: 500, y: 80, cardPos: 'above' },
  { x: 660, y: 280, cardPos: 'below' },
];

const MOBILE_STOPS = [
  { x: 48, y: 80, cardSide: 'right' },
  { x: 120, y: 200, cardSide: 'right' },
  { x: 48, y: 320, cardSide: 'right' },
  { x: 120, y: 430, cardSide: 'right' },
];

function LightPulse({ path, color, delay = 0, dur = 6 }) {
  return (
    <>
      <circle r="6" fill={color} opacity="0.35" filter="url(#journeyGlow)">
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} calcMode="linear" />
      </circle>
      <circle r="3" fill="#fff" filter="url(#journeyGlow)">
        <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${delay}s`} path={path} calcMode="linear" />
      </circle>
    </>
  );
}

function RoadSvg({ roadPath, reduceMotion, isMobile, run }) {
  const vb = isMobile ? '0 0 320 500' : '0 0 1000 360';

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox={vb}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
        </linearGradient>
        <filter id="journeyGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Road bed — wide */}
      <path
        d={roadPath}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={isMobile ? 28 : 36}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Road edge */}
      <path
        d={roadPath}
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth={isMobile ? 2 : 2.5}
        strokeLinecap="round"
        strokeDasharray={isMobile ? '6 8' : '8 12'}
      />

      {/* Active track */}
      <motion.path
        d={roadPath}
        fill="none"
        stroke="url(#roadGrad)"
        strokeWidth={isMobile ? 3 : 4}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.4 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{ duration: 1.8, ease: 'easeInOut' }}
      />

      {/* Traveling light — single pulse when slide active */}
      {run && (
        <LightPulse path={roadPath} color="#38bdf8" delay={0} dur={8} />
      )}

      {/* Milestone dots on road */}
      {(isMobile ? MOBILE_STOPS : DESKTOP_STOPS).map((stop, i) => (
        <g key={i}>
          <motion.circle
            cx={stop.x}
            cy={stop.y}
            r={isMobile ? 10 : 12}
            fill="rgba(2,6,23,0.85)"
            stroke={STEPS[i].color}
            strokeWidth="2.5"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 + i * 0.15, type: 'spring' }}
          />
          <circle
            cx={stop.x}
            cy={stop.y}
            r={isMobile ? 4 : 5}
            fill={STEPS[i].color}
            className={run && !reduceMotion ? 'journey-dot-pulse' : ''}
            style={{ animationDelay: `${i * 0.5}s` }}
          />
          <text
            x={stop.x}
            y={stop.y + (isMobile ? 1 : 1.5)}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={isMobile ? 8 : 9}
            fontWeight="bold"
            fontFamily="monospace"
          >
            {String(i + 1).padStart(2, '0')}
          </text>
        </g>
      ))}
    </svg>
  );
}

function StageCard({ step, index, isMobile, stop, reduceMotion }) {
  const lit = !reduceMotion;

  if (isMobile) {
    return (
      <motion.article
        className="absolute left-[22%] w-[72%] max-w-[240px]"
        style={{ top: `${(stop.y / 500) * 100 - 6}%` }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 + index * 0.12 }}
      >
        <div className={`rounded-2xl border border-white/10 bg-white/[0.07] p-3 backdrop-blur-md ${lit ? 'hover:border-white/20' : ''}`}>
          <StageContent step={step} index={index} compact />
        </div>
      </motion.article>
    );
  }

  const isAbove = stop.cardPos === 'above';
  const leftPct = (stop.x / 1000) * 100;
  const topPct = isAbove ? (stop.y / 360) * 100 - 32 : (stop.y / 360) * 100 + 6;

  return (
    <motion.article
      className="hover-lift absolute w-[24%] min-w-[150px] max-w-[210px] lg:max-w-[220px]"
      style={{ left: `${leftPct}%`, top: `${topPct}%`, x: '-50%' }}
      initial={{ opacity: 0, y: isAbove ? -16 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.12, type: 'spring' }}
    >
      <div
        className={`mx-auto w-px ${isAbove ? 'mb-2 h-6' : 'mt-2 h-6'}`}
        style={{
          background: `linear-gradient(${isAbove ? 'to bottom' : 'to top'}, transparent, ${step.color}88, ${step.color})`,
        }}
      />
      <div
        className={`rounded-2xl border bg-white/[0.07] p-3 backdrop-blur-md md:p-4 ${step.ring} border-opacity-40`}
      >
        <StageContent step={step} index={index} />
      </div>
    </motion.article>
  );
}

function StageContent({ step, index, compact = false }) {
  return (
    <>
      <div className="mb-1 flex items-center justify-between gap-2">
        <span className={`font-mono text-[9px] tracking-wider uppercase ${step.textColor}`}>{step.phase}</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5 text-[8px] font-bold text-white">{step.badge}</span>
      </div>
      <h3 className={`font-serif font-bold text-white ${compact ? 'text-sm' : 'text-sm md:text-base'}`}>
        {step.title}
      </h3>
      <p className={`mt-1 leading-relaxed text-slate-400 ${compact ? 'text-[10px]' : 'text-[10px] md:text-xs'}`}>
        {step.text}
      </p>
      {!compact && (
        <div
          className="mt-2 h-0.5 rounded-full opacity-60"
          style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
        />
      )}
    </>
  );
}

function MobileTimeline({ steps }) {
  return (
    <div className="flex flex-col">
      {steps.map((step, i) => (
        <div key={step.title} className="flex gap-3">
          <div className="flex w-8 shrink-0 flex-col items-center">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold"
              style={{ borderColor: step.color, color: step.color }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            {i < steps.length - 1 && (
              <div
                className="my-1 w-0.5 flex-1 min-h-[2rem] rounded-full"
                style={{ background: `linear-gradient(to bottom, ${step.color}88, ${steps[i + 1].color}44)` }}
              />
            )}
          </div>
          <article className={`flex-1 ${i < steps.length - 1 ? 'pb-5' : 'pb-1'}`}>
            <div className={`rounded-2xl border bg-white/[0.07] p-4 backdrop-blur-md ${step.ring}`}>
              <StageContent step={step} index={i} compact />
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

export default function PartnershipJourney() {
  const reduceMotion = useReducedMotion();
  const { run, isMobile } = useFxMotion();
  const roadPath = isMobile ? MOBILE_ROAD : DESKTOP_ROAD;
  const stops = isMobile ? MOBILE_STOPS : DESKTOP_STOPS;

  if (isMobile) {
    return <MobileTimeline steps={STEPS} />;
  }

  return (
    <div className="relative mx-auto w-full min-h-[480px] h-[min(520px,52vh)] lg:min-h-[500px] lg:h-[min(540px,55vh)]">
      <RoadSvg roadPath={roadPath} reduceMotion={reduceMotion} isMobile={isMobile} run={run} />

      {STEPS.map((step, i) => (
        <StageCard
          key={step.title}
          step={step}
          index={i}
          isMobile={isMobile}
          stop={stops[i]}
          reduceMotion={reduceMotion}
        />
      ))}

      {/* Start / End markers */}
      {!isMobile && (
        <>
          <span className="absolute top-[46%] left-[2%] font-mono text-[9px] text-teal-glow/60">START</span>
          <span className="absolute top-[46%] right-[1%] font-mono text-[9px] text-gold-glow/60">GO LIVE</span>
        </>
      )}
    </div>
  );
}
