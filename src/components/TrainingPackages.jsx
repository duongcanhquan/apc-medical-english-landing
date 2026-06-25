import { Check, Star } from 'lucide-react';
import FadeInView, { StaggerContainer, StaggerItem } from './FadeInView';

const packages = [
  {
    name: 'Foundation Medical English',
    badge: 'Phổ biến nhất',
    duration: '60 giờ / 3 tháng',
    highlights: [
      'Từ vựng y khoa, giao tiếp, đọc tài liệu.',
      'Chuẩn đầu ra B2 CEFR.',
      'Dành cho toàn bộ đội ngũ y tế.',
    ],
    featured: true,
  },
  {
    name: 'OET Intensive Preparation',
    badge: null,
    duration: '80 giờ / 4 tháng',
    highlights: [
      '4 kỹ năng OET, mock tests.',
      'Cam kết Grade B (2 lần thi).',
    ],
    featured: false,
  },
  {
    name: 'Chuyên khoa ESP',
    badge: null,
    duration: 'Theo thỏa thuận (Nội - Ngoại - ICU - Sản Nhi - Cấp cứu)',
    highlights: ['KPI theo hợp đồng ràng buộc.'],
    featured: false,
  },
];

export default function TrainingPackages() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeInView className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Gói Đào Tạo
          </h2>
        </FadeInView>

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.name}>
              <article
                className={`relative flex h-full flex-col rounded-2xl p-8 ${
                  pkg.featured
                    ? 'glass-strong ring-2 ring-teal-accent/50 shadow-teal-accent/20 shadow-2xl'
                    : 'glass'
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-teal-accent to-cyan-400 px-4 py-1.5 text-xs font-bold text-medical-950">
                    <Star className="h-3.5 w-3.5" aria-hidden="true" />
                    {pkg.badge}
                  </div>
                )}

                <h3 className="mb-2 text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mb-6 text-sm font-medium text-teal-glow">
                  {pkg.duration}
                </p>

                <ul className="mt-auto space-y-3">
                  {pkg.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
