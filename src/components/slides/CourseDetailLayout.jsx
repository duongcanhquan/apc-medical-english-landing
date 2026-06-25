import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import { FloatingDetailItem, WaveBadge, WaveHeadline } from '../motion/WaveTypography';
import SlideShell from './SlideShell';

export default function CourseDetailLayout({
  bg,
  alt,
  overlay,
  fx,
  badge,
  badgeIcon: BadgeIcon,
  badgeColor = 'teal',
  tagline,
  title,
  headlineAccent = 'teal',
  items,
}) {
  return (
    <SnapAnimationProvider>
      <SlideShell image={bg} alt={alt} overlay={overlay} fx={fx}>
        <div className="m-auto flex min-h-full w-full max-w-4xl flex-col justify-center gap-6 py-4 md:gap-8">
          <SlideEntrance className="text-center md:text-left">
            <div className="mb-4 flex flex-col items-center gap-3 md:items-start">
              <WaveBadge color={badgeColor}>
                {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
                {badge}
              </WaveBadge>
              {tagline && (
                <p className="font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase md:text-xs">
                  {tagline}
                </p>
              )}
            </div>
            <WaveHeadline accent={headlineAccent === 'sky' ? 'sky' : headlineAccent === 'violet' ? 'violet' : 'teal'}>
              {title}
            </WaveHeadline>
          </SlideEntrance>

          <StaggerGroup className="flex flex-col gap-5 md:gap-6">
            {items.map((item, i) => (
              <StaggerChild key={item.label}>
                <FloatingDetailItem
                  label={item.label}
                  highlight={item.highlight}
                  desc={item.desc}
                  index={i}
                  color={badgeColor}
                />
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
