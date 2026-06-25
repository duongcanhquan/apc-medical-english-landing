import { AlertTriangle, BookOpen, HeartPulse } from 'lucide-react';
import SlideBackground from '../SlideBackground';
import { SlideEntrance, StaggerChild, StaggerGroup, SnapAnimationProvider } from '../SlideEntrance';

const BG =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80';

const cards = [
  {
    icon: HeartPulse,
    tag: 'Cấp cứu',
    text: "Bệnh nhân ngoại quốc nhập viện vì đau ngực. Việc không hiểu chính xác 'crushing chest pain' có thể làm chậm trễ can thiệp vàng. Tiếng Anh y khoa là công cụ cứu người.",
  },
  {
    icon: AlertTriangle,
    tag: 'Sự nghiệp',
    text: 'Mất cơ hội tu nghiệp, fellowship tại các bệnh viện quốc tế chỉ vì lúng túng trong giao tiếp và thiếu chứng chỉ OET/IELTS.',
  },
  {
    icon: BookOpen,
    tag: 'Chuyên môn',
    text: 'Chậm cập nhật phác đồ điều trị mới do rào cản khi đọc tài liệu lâm sàng từ The Lancet hay NEJM.',
  },
];

export default function PainPointsSlide() {
  return (
    <SnapAnimationProvider>
      <SlideBackground
        image={BG}
        alt="Bác sĩ làm việc với hồ sơ bệnh án"
        overlay="dark"
      >
        <div className="flex h-full flex-col justify-center px-5 py-14 md:px-10">
          <SlideEntrance className="mb-8 text-center">
            <h2 className="text-balance text-2xl font-bold text-white md:text-4xl">
              Nỗi Đau Nghề Nghiệp
            </h2>
            <p className="mt-2 text-sm text-slate-400 md:text-base">
              Case Studies & Pain Points
            </p>
          </SlideEntrance>

          <StaggerGroup className="mx-auto grid max-h-[65vh] w-full max-w-6xl grid-cols-1 gap-4 overflow-y-auto pr-1 md:max-h-none md:grid-cols-3 md:gap-5 md:overflow-visible">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <StaggerChild key={card.tag}>
                  <article className="glass h-full rounded-2xl p-5 md:p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-accent/20">
                        <Icon className="h-5 w-5 text-teal-glow" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-bold tracking-wide text-teal-glow uppercase">
                        {card.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-200 md:text-base">
                      {card.text}
                    </p>
                  </article>
                </StaggerChild>
              );
            })}
          </StaggerGroup>
        </div>
      </SlideBackground>
    </SnapAnimationProvider>
  );
}
