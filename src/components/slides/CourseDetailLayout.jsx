import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import { CourseCertHero } from '../CertPromo';
import { FloatingDetailItem, WaveBadge, WaveHeadline } from '../motion/WaveTypography';
import SlideContent from './SlideContent';
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
  certHero,
  items,
}) {
  const accent = headlineAccent === 'sky' ? 'sky' : headlineAccent === 'violet' ? 'violet' : 'teal';
  const hookAccent =
    badgeColor === 'sky' ? 'hook-label-sky' : badgeColor === 'violet' ? 'hook-label-violet' : 'hook-label-teal';

  return (
    <SnapAnimationProvider>
      <SlideShell image={bg} alt={alt} overlay={overlay} fx={fx} desktopFit>
        <SlideContent maxWidth="max-w-6xl" className="course-detail-content">
          <SlideEntrance>
            {/* Mobile: cert hero full width above header */}
            {certHero && (
              <div className="mb-3 lg:hidden">
                <CourseCertHero {...certHero} color={badgeColor} compact />
              </div>
            )}

            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-5">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2 md:gap-3">
                  <WaveBadge color={badgeColor}>
                    {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
                    {badge}
                  </WaveBadge>
                  {tagline && <p className={`hook-label text-[10px] md:text-xs ${hookAccent}`}>{tagline}</p>}
                </div>
                <WaveHeadline accent={accent} size="compact">
                  {title}
                </WaveHeadline>
              </div>

              {certHero && (
                <div className="hidden w-full shrink-0 lg:block lg:max-w-[280px] xl:max-w-xs">
                  <CourseCertHero {...certHero} color={badgeColor} compact />
                </div>
              )}
            </div>
          </SlideEntrance>

          <StaggerGroup className="course-detail-grid grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {items.map((item, i) => (
              <StaggerChild key={item.label} className={i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}>
                <FloatingDetailItem
                  label={item.label}
                  highlight={item.highlight}
                  desc={item.desc}
                  index={i}
                  color={badgeColor}
                  layout="grid"
                />
              </StaggerChild>
            ))}
          </StaggerGroup>
        </SlideContent>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
