export default function SlideBackground({ image, alt = '', children, overlay = 'dark' }) {
  const overlays = {
    dark: 'bg-gradient-to-b from-medical-950/85 via-medical-900/75 to-medical-950/90',
    aurora:
      'bg-gradient-to-br from-medical-950/80 via-blue-950/60 to-teal-950/70',
    bright: 'bg-gradient-to-t from-medical-950/90 via-medical-900/50 to-slate-900/40',
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className={`absolute inset-0 ${overlays[overlay] || overlays.dark}`} />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(20,184,166,0.15),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 flex h-full w-full flex-col">{children}</div>
    </div>
  );
}
