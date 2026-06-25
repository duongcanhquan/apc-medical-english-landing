import { Award, Globe, GraduationCap } from 'lucide-react';

const COLOR = {
  teal: {
    ring: 'ring-teal-glow/50',
    bg: 'from-teal-glow/20 to-teal-accent/10',
    text: 'text-teal-glow',
    border: 'border-teal-glow/40',
    glow: 'shadow-[0_0_24px_rgba(45,212,191,0.25)]',
  },
  sky: {
    ring: 'ring-sky-400/50',
    bg: 'from-sky-400/20 to-blue-500/10',
    text: 'text-sky-300',
    border: 'border-sky-400/40',
    glow: 'shadow-[0_0_28px_rgba(56,189,248,0.35)]',
  },
  violet: {
    ring: 'ring-violet-400/50',
    bg: 'from-violet-400/20 to-purple-500/10',
    text: 'text-violet-300',
    border: 'border-violet-400/40',
    glow: 'shadow-[0_0_24px_rgba(167,139,250,0.25)]',
  },
};

export function VietnamContextTag({ className = '' }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-medical-950/85 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white md:text-xs ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]" aria-hidden="true" />
      Đào tạo cho đội ngũ y tế Việt Nam · APC Hà Nội × EQuest
    </p>
  );
}

export function CertBadge({ cert, label, detail, markets, color = 'teal', featured = false }) {
  const c = COLOR[color] || COLOR.teal;

  return (
    <div
      className={`cert-badge relative flex flex-col rounded-2xl border p-3 text-left md:p-4 ${c.border} ${featured ? `ring-2 ${c.ring} ${c.glow} cert-badge-featured` : ''}`}
    >
      {featured && (
        <span className="absolute -top-2.5 right-3 rounded-full bg-gold-cta px-2 py-0.5 text-[9px] font-bold tracking-wide text-medical-950 uppercase">
          Chứng chỉ quốc tế
        </span>
      )}
      <p className={`hook-label text-[9px] md:text-[10px] ${c.text}`}>{label}</p>
      <p className="font-serif text-xl font-extrabold text-white md:text-2xl">{cert}</p>
      <p className="text-body mt-0.5 text-[11px] md:text-xs">{detail}</p>
      {markets && (
        <p className={`mt-1.5 flex items-center gap-1 text-[10px] font-semibold md:text-xs ${c.text}`}>
          <Globe className="h-3 w-3 shrink-0" aria-hidden="true" />
          {markets}
        </p>
      )}
    </div>
  );
}

export function CertPromoStrip({ programs, className = '' }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {programs.map((p) => (
        <CertBadge key={p.id} {...p} />
      ))}
    </div>
  );
}

export function CourseCertHero({ title, cert, subtitle, markets, color = 'teal' }) {
  const c = COLOR[color] || COLOR.teal;

  return (
    <div
      className={`cert-hero-callout mb-5 flex flex-col gap-3 rounded-2xl border p-4 sm:flex-row sm:items-center sm:justify-between md:p-5 ${c.border} ${c.glow}`}
    >
      <div className="flex items-start gap-3">
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ${c.ring}`}>
          {color === 'sky' ? (
            <Globe className={`h-5 w-5 ${c.text}`} aria-hidden="true" />
          ) : color === 'violet' ? (
            <Award className={`h-5 w-5 ${c.text}`} aria-hidden="true" />
          ) : (
            <GraduationCap className={`h-5 w-5 ${c.text}`} aria-hidden="true" />
          )}
        </div>
        <div>
          <p className={`hook-label text-[10px] ${c.text}`}>{title}</p>
          <p className="font-serif text-2xl font-extrabold text-white md:text-3xl">{cert}</p>
          {subtitle && <p className="text-body text-sm">{subtitle}</p>}
        </div>
      </div>
      {markets && (
        <p className={`text-sm font-semibold sm:text-right ${c.text}`}>
          Mở khóa hành nghề
          <br />
          <span className="text-base text-white md:text-lg">{markets}</span>
        </p>
      )}
    </div>
  );
}
