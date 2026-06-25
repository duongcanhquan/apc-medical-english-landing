import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function RippleButton({
  children,
  href,
  onClick,
  className = '',
}) {
  const [ripples, setRipples] = useState([]);
  const reduceMotion = useReducedMotion();

  const handleClick = (e) => {
    if (!reduceMotion) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { id, x, y }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 700);
    }
    onClick?.(e);
  };

  const classes = `btn-glow relative overflow-hidden rounded-2xl bg-gradient-to-r from-gold-cta to-amber-400 px-8 py-4 text-base font-extrabold tracking-wide text-medical-950 transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-glow md:px-10 md:py-5 md:text-lg ${className}`;

  const content = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="ripple-span absolute rounded-full bg-white/40"
          style={{ left: r.x, top: r.y }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={handleClick}>
      {content}
    </button>
  );
}
