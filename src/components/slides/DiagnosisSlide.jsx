import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup, Typewriter } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80';

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
      <SlideShell image={BG} alt="Báo cáo chẩn đoán y khoa" overlay="dark" fx="ecg-pulse">
        <div className="m-auto flex min-h-full max-w-6xl flex-col justify-center">
          <SlideEntrance>
            <div className="glass-strong relative mb-8 overflow-hidden rounded-3xl p-6 md:p-8 mri-sweep">
              <p className="mb-2 font-mono text-xs tracking-widest text-teal-glow uppercase">
                Báo cáo chẩn đoán · APC Diagnostic
              </p>
              <h2 className="font-serif text-balance text-2xl font-bold text-white md:text-4xl">
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
                  <h3 className="mb-2 text-sm font-bold text-white md:text-base">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-400 md:text-sm">{s.desc}</p>
                </article>
              </StaggerChild>
            ))}
          </StaggerGroup>

          <SlideEntrance delay={0.4} className="mt-8">
            <Typewriter
              className="text-balance text-center text-sm text-slate-300 md:text-base"
              text="Đã đến lúc giải quyết triệt để rào cản này bằng phương pháp thực chiến."
            />
          </SlideEntrance>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
