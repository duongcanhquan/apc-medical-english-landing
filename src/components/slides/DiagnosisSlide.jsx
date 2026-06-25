import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup, Typewriter } from '../motion/SlideEntrance';
import { slideImages } from '../../lib/slideImages';
import SlideContent from './SlideContent';
import SlideShell from './SlideShell';

const stats = [
  {
    num: '80%',
    title: 'Y văn thế giới bằng tiếng Anh.',
    desc: 'Chậm cập nhật phác đồ từ NEJM, The Lancet nghĩa là lùi bước trong chuyên môn.',
  },
  {
    num: '<20%',
    title: 'Y Bác Sĩ tự tin hội chẩn quốc tế.',
    desc: 'Rào cản cản trở việc báo cáo case study, phản biện tại hội nghị toàn cầu.',
  },
  {
    num: '⚠',
    title: 'Sự cố giao tiếp lâm sàng.',
    desc: 'Rủi ro cực lớn khi khai thác bệnh sử ngoại kiều do không nắm rõ thuật ngữ.',
  },
];

export default function DiagnosisSlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={slideImages.diagnosis.src} alt={slideImages.diagnosis.alt} overlay="dark" fx="ecg-pulse">
        <SlideContent maxWidth="max-w-6xl">
          <SlideEntrance>
            <div className="glass-strong relative mb-8 overflow-hidden rounded-3xl p-6 md:p-8 mri-sweep">
              <p className="hook-label hook-label-teal mb-2 text-xs">
                Báo cáo chẩn đoán · APC Diagnostic
              </p>
              <h2 className="headline-display text-balance text-2xl md:text-4xl">
                Nút Thắt Ngôn Ngữ: Khoảng Trống Giữa Năng Lực Và Cơ Hội
              </h2>
            </div>
          </SlideEntrance>

          <StaggerGroup className="grid gap-4 md:grid-cols-3">
            {stats.map((s) => (
              <StaggerChild key={s.title}>
                <article className="glass rounded-3xl p-5 md:p-6">
                  <p className="stat-glow mb-2 font-serif text-4xl font-bold text-teal-glow md:text-5xl">
                    {s.num}
                  </p>
                  <h3 className="mb-2 text-sm font-extrabold text-white md:text-base">{s.title}</h3>
                  <p className="text-muted text-xs leading-relaxed md:text-sm">{s.desc}</p>
                </article>
              </StaggerChild>
            ))}
          </StaggerGroup>

          <SlideEntrance delay={0.4} className="mt-8">
            <Typewriter
              className="text-body text-balance text-center text-sm md:text-base"
              text="Đã đến lúc giải quyết triệt để rào cản này bằng phương pháp thực chiến."
            />
          </SlideEntrance>
        </SlideContent>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
