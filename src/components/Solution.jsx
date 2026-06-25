import { Bot, Building2, Microscope } from 'lucide-react';
import FadeInView, { StaggerContainer, StaggerItem } from './FadeInView';

const features = [
  {
    icon: Building2,
    title: '20+ NĂM Nền tảng EQuest',
    description:
      'Kế thừa hệ thống giáo dục với hơn 200.000 học viên.',
  },
  {
    icon: Microscope,
    title: 'Simulation Lab',
    description:
      'Đóng vai trực tiếp vào ca lâm sàng, rèn luyện giao tiếp, báo cáo giao ban (handover).',
  },
  {
    icon: Bot,
    title: 'AI + Human',
    description:
      'Cá nhân hóa lộ trình, tối ưu thời gian vàng ngọc của y bác sĩ.',
  },
];

export default function Solution() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeInView className="mb-14 text-center">
          <h2 className="text-3xl leading-tight font-bold text-white md:text-4xl">
            APC EQuest – Đào Tạo Tiếng Anh Y Khoa Từ Vị Trí Lâm Sàng Thực Tế
          </h2>
        </FadeInView>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <article className="glass-strong h-full rounded-2xl p-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-accent/30 to-blue-600/30">
                    <Icon className="h-8 w-8 text-teal-glow" aria-hidden="true" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-slate-300">
                    {feature.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
