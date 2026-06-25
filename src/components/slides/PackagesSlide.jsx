import { Check, Star } from 'lucide-react';
import SlideBackground from '../SlideBackground';
import { SlideEntrance, StaggerChild, StaggerGroup, SnapAnimationProvider } from '../SlideEntrance';

const BG =
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80';

const packages = [
  {
    name: 'Foundation Medical English',
    badge: 'PHỔ BIẾN NHẤT',
    duration: '60 giờ / 3 tháng',
    points: [
      'Từ vựng y khoa, Giao tiếp bệnh nhân, Đọc tài liệu lâm sàng.',
      'Chuẩn đầu ra: B2 CEFR.',
      'Dành cho: Toàn bộ đội ngũ y tế.',
    ],
    featured: true,
  },
  {
    name: 'OET Intensive Preparation',
    badge: null,
    duration: '80 giờ / 4 tháng',
    points: [
      '4 kỹ năng OET Medicine/Nursing, Mock tests toàn diện, Feedback cá nhân từ giám khảo.',
      'Cam kết: Grade B trong 2 lần thi.',
      'Dành cho: Bác sĩ có kế hoạch hành nghề quốc tế.',
    ],
    featured: false,
  },
  {
    name: 'Chuyên khoa ESP',
    badge: null,
    duration: 'Theo thỏa thuận',
    points: [
      'Nội - Ngoại - ICU - Sản Nhi - Cấp cứu.',
      'KPI theo hợp đồng ràng buộc.',
      'Dành cho: Đào tạo theo khoa/chuyên môn.',
    ],
    featured: false,
  },
];

export default function PackagesSlide() {
  return (
    <SnapAnimationProvider>
      <SlideBackground
        image={BG}
        alt="Đội ngũ y tế chuyên nghiệp"
        overlay="bright"
      >
        <div className="flex h-full flex-col justify-center px-5 py-10 md:px-10">
          <SlideEntrance className="mb-6 text-center">
            <h2 className="text-balance text-2xl font-bold text-white md:text-4xl">
              3 Gói Đào Tạo Linh Hoạt
            </h2>
          </SlideEntrance>

          <StaggerGroup className="mx-auto grid max-h-[52vh] w-full max-w-6xl grid-cols-1 gap-4 overflow-y-auto pr-1 md:max-h-none md:grid-cols-3 md:gap-5 md:overflow-visible">
            {packages.map((pkg) => (
              <StaggerChild key={pkg.name}>
                <article
                  className={`relative flex h-full flex-col rounded-2xl p-5 md:p-6 ${
                    pkg.featured
                      ? 'glass-strong ring-2 ring-teal-accent/60 shadow-2xl shadow-teal-accent/10'
                      : 'glass'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-teal-accent to-cyan-400 px-3 py-1 text-[10px] font-bold text-medical-950 md:text-xs">
                      <Star className="h-3 w-3" aria-hidden="true" />
                      {pkg.badge}
                    </div>
                  )}
                  <h3 className="mb-1 text-base font-bold text-white md:text-lg">
                    {pkg.name}
                  </h3>
                  <p className="mb-4 text-sm font-semibold text-teal-glow">
                    {pkg.duration}
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-xs leading-relaxed text-slate-300 md:text-sm"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-teal-accent"
                          aria-hidden="true"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerChild>
            ))}
          </StaggerGroup>

          <SlideEntrance delay={0.35} className="mt-6 text-center">
            <p className="glass mx-auto max-w-3xl rounded-xl px-4 py-3 text-xs text-slate-300 md:text-sm">
              Hình thức: Tại bệnh viện, Tại APC, hoặc Hybrid - linh hoạt theo lịch
              trực ca thực tế.
            </p>
          </SlideEntrance>
        </div>
      </SlideBackground>
    </SnapAnimationProvider>
  );
}
