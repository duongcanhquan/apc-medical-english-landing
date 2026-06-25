import { Check, ClipboardList, Star } from 'lucide-react';
import Reveal, { Stagger, StaggerItem } from '../motion/Reveal';

const packages = [
  {
    name: 'Foundation Medical English',
    badge: 'Phổ biến nhất',
    duration: '60 giờ / 3 tháng',
    points: [
      'Từ vựng y khoa, Giao tiếp, Đọc tài liệu.',
      'Đầu ra: B2 CEFR.',
    ],
    featured: true,
  },
  {
    name: 'OET Intensive Preparation',
    badge: null,
    duration: '80 giờ / 4 tháng',
    points: [
      '4 kỹ năng OET, Mock tests.',
      'Cam kết Grade B (2 lần thi).',
    ],
    featured: false,
  },
  {
    name: 'Chuyên khoa ESP',
    badge: null,
    duration: 'Nội, Ngoại, ICU, Sản Nhi, Cấp cứu',
    points: ['Lộ trình theo hợp đồng KPI.'],
    featured: false,
  },
];

export default function PackagesSection() {
  return (
    <section id="prescriptions" className="relative min-h-screen px-5 py-28 md:px-12">
      <Reveal className="mb-12 text-center">
        <h2 className="font-serif text-balance text-3xl font-bold text-white md:text-5xl">
          The Prescriptions
        </h2>
        <p className="mt-3 text-sm text-slate-400">3 Gói Đào Tạo Linh Hoạt</p>
      </Reveal>

      <Stagger className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <StaggerItem key={pkg.name}>
            <article
              className={`vial-hover glass relative flex h-full flex-col rounded-3xl p-6 transition-all duration-300 md:p-7 ${
                pkg.featured ? 'ring-1 ring-teal-accent/40' : ''
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <ClipboardList
                  className="h-8 w-8 text-teal-glow/80"
                  aria-hidden="true"
                />
                {pkg.badge && (
                  <span className="flex items-center gap-1 rounded-full bg-teal-accent/20 px-2.5 py-1 text-[10px] font-bold text-teal-glow md:text-xs">
                    <Star className="h-3 w-3" aria-hidden="true" />
                    {pkg.badge}
                  </span>
                )}
              </div>
              <h3 className="font-serif mb-1 text-lg font-bold text-white md:text-xl">
                {pkg.name}
              </h3>
              <p className="mb-4 text-sm font-medium text-teal-glow">{pkg.duration}</p>
              <ul className="mt-auto space-y-2">
                {pkg.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-accent" />
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.2} className="mt-8 text-center">
        <p className="glass mx-auto inline-block rounded-full px-5 py-2.5 text-xs text-slate-300 md:text-sm">
          Học tại bệnh viện, APC hoặc Hybrid
        </p>
      </Reveal>
    </section>
  );
}
