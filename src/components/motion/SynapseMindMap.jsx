import { useCallback, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import PartnerLogos from '../PartnerLogos';
import { useIsMobile } from '../../hooks/useMediaQuery';

const CENTER = { x: 50, y: 50 };

const NODES = [
  {
    id: 'n1',
    title: '20+ NĂM',
    text: 'Nền tảng EQuest, hệ thống VATC, IVY Prep, 200.000+ học viên. Nền tảng học thuật tiếng Anh lớn nhất VN.',
    x: 16,
    y: 22,
    pos: 'top-[4%] left-[2%] md:left-[4%]',
    color: '#2dd4bf',
  },
  {
    id: 'n2',
    title: 'ESP PROVEN',
    text: 'Chương trình xây từ vị trí công việc thực tế, đã vận hành cho Khách sạn, Kinh doanh, Phiên dịch.',
    x: 84,
    y: 22,
    pos: 'top-[4%] right-[2%] md:right-[4%]',
    color: '#38bdf8',
  },
  {
    id: 'n3',
    title: 'AI + HUMAN',
    text: 'AI cá nhân hóa lộ trình. Simulation lab – 70% thực hành, 30% lý thuyết ứng dụng.',
    x: 50,
    y: 80,
    pos: 'bottom-[4%] left-1/2 -translate-x-1/2',
    color: '#a78bfa',
  },
];

function curvePath(nx, ny, mx, my, bend = 1) {
  const dx = (mx - CENTER.x) * bend * 0.35;
  const dy = (my - CENTER.y) * bend * 0.35;
  const cpx = (CENTER.x + nx) / 2 + dx;
  const cpy = (CENTER.y + ny) / 2 + dy;
  return `M ${CENTER.x} ${CENTER.y} Q ${cpx} ${cpy} ${nx} ${ny}`;
}

function PulseDot({ path, color, delay = 0, duration = 2.8 }) {
  return (
    <circle r="1.1" fill={color} filter="url(#synapseGlow)">
      <animateMotion
        dur={`${duration}s`}
        repeatCount="indefinite"
        begin={`${delay}s`}
        path={path}
        calcMode="linear"
      />
    </circle>
  );
}

export default function SynapseMindMap() {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const [mouse, setMouse] = useState(CENTER);
  const [hovered, setHovered] = useState(null);
  const [activeNode, setActiveNode] = useState(null);

  const rawX = useMotionValue(CENTER.x);
  const rawY = useMotionValue(CENTER.y);
  const springX = useSpring(rawX, { stiffness: 90, damping: 22, mass: 0.6 });
  const springY = useSpring(rawY, { stiffness: 90, damping: 22, mass: 0.6 });

  const hubX = useTransform(springX, [0, 100], [-14, 14]);
  const hubY = useTransform(springY, [0, 100], [-10, 10]);

  const updateMouse = useCallback(
    (clientX, clientY) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      const y = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
      setMouse({ x, y });
      rawX.set(x);
      rawY.set(y);
    },
    [rawX, rawY],
  );

  const onPointerMove = (e) => {
    if (reduceMotion || isMobile) return;
    updateMouse(e.clientX, e.clientY);
  };

  const onPointerLeave = () => {
    if (reduceMotion || isMobile) return;
    setMouse(CENTER);
    rawX.set(CENTER.x);
    rawY.set(CENTER.y);
  };

  const bend = reduceMotion ? 0.3 : 1;
  const paths = NODES.map((n) => curvePath(n.x, n.y, mouse.x, mouse.y, bend));

  return (
    <div
      ref={containerRef}
      className="relative mx-auto h-[min(62vh,540px)] w-full touch-none select-none"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {/* Ambient mouse glow */}
      {!reduceMotion && !isMobile && (
        <motion.div
          className="pointer-events-none absolute h-40 w-40 rounded-full bg-teal-glow/10 blur-3xl"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            x: '-50%',
            y: '-50%',
          }}
          transition={{ type: 'spring', stiffness: 120, damping: 25 }}
        />
      )}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <filter id="synapseGlow">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring — breathes with mouse */}
        <motion.ellipse
          cx={CENTER.x}
          cy={CENTER.y}
          rx={28}
          ry={22}
          fill="none"
          stroke="rgba(45,212,191,0.12)"
          strokeWidth="0.3"
          animate={
            reduceMotion
              ? {}
              : {
                  rx: 28 + (mouse.x - 50) * 0.08,
                  ry: 22 + (mouse.y - 50) * 0.06,
                }
          }
          transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        />

        {NODES.map((node, i) => {
          const path = paths[i];
          const lit = hovered === node.id || activeNode === node.id;

          return (
            <g key={node.id}>
              {/* Ghost trail */}
              <path
                d={path}
                fill="none"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
              />
              {/* Main connection */}
              <motion.path
                d={path}
                fill="none"
                stroke={lit ? node.color : 'url(#synapseGrad)'}
                strokeWidth={lit ? 0.55 : 0.38}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                animate={{ opacity: lit ? 1 : 0.65 }}
                transition={{ duration: 0.25 }}
              />
              {/* Flow pulse */}
              {!reduceMotion && (
                <>
                  <PulseDot path={path} color={node.color} delay={i * 0.9} duration={2.6 + i * 0.3} />
                  <PulseDot path={path} color="#fff" delay={i * 0.9 + 1.3} duration={2.6 + i * 0.3} />
                </>
              )}
              {/* Node anchor dot on SVG */}
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={lit ? 2.2 : 1.4}
                fill={node.color}
                filter="url(#synapseGlow)"
                animate={reduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              />
            </g>
          );
        })}

        {/* Center hub pulse */}
        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="3"
          fill="rgba(45,212,191,0.5)"
          animate={reduceMotion ? {} : { r: [2.5, 3.5, 2.5], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
      </svg>

      {/* Center hub — follows mouse */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        style={reduceMotion || isMobile ? {} : { x: hubX, y: hubY }}
      >
        <motion.div
          className="glass-strong rounded-2xl px-5 py-4 ring-1 ring-teal-glow/30 md:px-8 md:py-5"
          animate={reduceMotion ? {} : { scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <PartnerLogos size="sm" />
        </motion.div>
      </motion.div>

      {/* Node cards */}
      {NODES.map((node, i) => {
        const lit = hovered === node.id || activeNode === node.id;
        const parallaxX = reduceMotion || isMobile ? 0 : (mouse.x - 50) * (i === 1 ? -0.06 : 0.06);
        const parallaxY = reduceMotion || isMobile ? 0 : (mouse.y - 50) * 0.04;

        return (
          <motion.article
            key={node.id}
            className={`absolute ${node.pos} z-10 w-[88%] max-w-[280px] cursor-default md:w-60`}
            style={{ x: parallaxX, y: parallaxY }}
            onHoverStart={() => !isMobile && setHovered(node.id)}
            onHoverEnd={() => !isMobile && setHovered(null)}
            onClick={() => isMobile && setActiveNode((prev) => (prev === node.id ? null : node.id))}
            whileHover={reduceMotion ? {} : { scale: 1.04, y: -4 }}
            transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          >
            <div
              className={`relative overflow-hidden rounded-3xl border p-4 backdrop-blur-md transition-all duration-300 md:p-5 ${
                lit
                  ? 'border-teal-glow/50 bg-white/10 shadow-[0_0_30px_rgba(45,212,191,0.25)]'
                  : 'border-white/10 bg-white/[0.06]'
              }`}
            >
              {/* Connector accent line */}
              <motion.div
                className="absolute top-0 left-0 h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, transparent, ${node.color}, transparent)` }}
                animate={lit ? { opacity: 1, scaleX: 1 } : { opacity: 0.4, scaleX: 0.6 }}
              />
              <h3
                className="font-serif mb-2 text-base font-bold md:text-lg"
                style={{ color: lit ? node.color : '#2dd4bf' }}
              >
                {node.title}
              </h3>
              <p className="text-xs leading-relaxed text-slate-300 md:text-sm">{node.text}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
