import { AlertTriangle, BookOpen, Globe, Mic } from 'lucide-react';
import FadeInView, { StaggerContainer, StaggerItem } from './FadeInView';

const painPoints = [
  {
    icon: Globe,
    title: 'Bỏ lỡ thời cơ vàng.',
    description:
      'Mất cơ hội tu nghiệp, fellowship quốc tế vì thiếu chứng chỉ OET/IELTS.',
    accent: 'from-red-500/20 to-orange-500/10',
  },
  {
    icon: BookOpen,
    title: 'Chậm cập nhật phác đồ.',
    description:
      'Đánh vật với tài liệu The Lancet, NEJM làm chậm tốc độ tiếp cận y văn.',
    accent: 'from-amber-500/20 to-yellow-500/10',
  },
  {
    icon: AlertTriangle,
    title: 'Lúng túng trong giao tiếp.',
    description:
      'Rủi ro sai lệch thông tin khi khai thác bệnh sử bệnh nhân nước ngoài.',
    accent: 'from-rose-500/20 to-pink-500/10',
  },
  {
    icon: Mic,
    title: 'Bất lực tại hội nghị.',
    description:
      'Không tự tin trình bày, phản biện nghiên cứu lâm sàng trước quốc tế.',
    accent: 'from-purple-500/20 to-indigo-500/10',
  },
];

export default function PainPoints() {
  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeInView className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Những Rào Cản Thầm Lặng
          </h2>
          <p className="text-slate-400">
            Bốn thách thức khiến đội ngũ y tế Việt Nam chậm bước trên hành trình quốc tế
          </p>
        </FadeInView>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <article
                  className={`glass group h-full rounded-2xl p-6 transition-transform hover:-translate-y-1 bg-gradient-to-br ${item.accent}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-6 w-6 text-teal-glow" aria-hidden="true" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {item.description}
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
