import { Check, Globe, Mail, Phone } from 'lucide-react';
import RegistrationForm from '../forms/RegistrationForm';
import { SlideEntrance, SnapAnimationProvider, StaggerChild, StaggerGroup } from '../motion/SlideEntrance';
import SlideShell from './SlideShell';

const BG =
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1920&q=80';

const checklist = [
  'Khảo sát năng lực đội ngũ trong 2 tuần, không ràng buộc.',
  'Báo cáo gap kỹ năng chi tiết.',
  'Đề xuất chương trình cá nhân hóa.',
  'Học phí sơ bộ rõ ràng, không phí ẩn.',
];

export default function CTASlide() {
  return (
    <SnapAnimationProvider>
      <SlideShell image={BG} alt="Đặt lịch khảo sát" overlay="lab" fx="vitals-monitor">
        <div className="m-auto flex min-h-full w-full max-w-5xl flex-col justify-center gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex-1 text-center lg:text-left">
            <SlideEntrance>
              <h2 className="font-serif text-balance mb-4 text-2xl font-extrabold text-white md:text-4xl">
                BẮT ĐẦU BẰNG KHẢO SÁT MIỄN PHÍ
              </h2>
            </SlideEntrance>

            <StaggerGroup className="glass-strong mb-6 rounded-3xl p-6 text-left md:p-8">
              {checklist.map((item) => (
                <StaggerChild key={item}>
                  <div className="mb-2 flex items-start gap-2 text-sm text-slate-200 md:text-base">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-accent" />
                    {item}
                  </div>
                </StaggerChild>
              ))}
            </StaggerGroup>

            <SlideEntrance delay={0.2}>
              <div className="glass mb-6 rounded-3xl p-5 text-left text-sm text-slate-300 md:text-base">
                <p className="mb-2">
                  Chiết khấu số lượng: ≥30 người (-10%), ≥50 (-15%), ≥100 (-20%).
                </p>
                <p>Thanh toán: 50% trước khóa — 50% sau nghiệm thu.</p>
              </div>
            </SlideEntrance>

            <SlideEntrance delay={0.35}>
              <div className="flex flex-col items-center gap-3 text-xs text-slate-400 md:flex-row md:flex-wrap md:gap-6 md:text-sm lg:justify-start">
                <a href="tel:02473051212" className="flex items-center gap-2 hover:text-teal-glow">
                  <Phone className="h-4 w-4" /> 0247 305 1212
                </a>
                <a href="mailto:tuyensinh.hn@caodangvietmy.edu.vn" className="flex items-center gap-2 hover:text-teal-glow">
                  <Mail className="h-4 w-4" /> tuyensinh.hn@caodangvietmy.edu.vn
                </a>
                <a
                  href="https://caodangvietmyhanoi.edu.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal-glow"
                >
                  <Globe className="h-4 w-4" /> caodangvietmyhanoi.edu.vn
                </a>
              </div>
            </SlideEntrance>
          </div>

          <SlideEntrance delay={0.15} className="w-full flex-1 lg:max-w-md">
            <RegistrationForm />
          </SlideEntrance>
        </div>
      </SlideShell>
    </SnapAnimationProvider>
  );
}
