import { Globe, Mail, Phone } from 'lucide-react';
import Reveal from '../motion/Reveal';

export default function CTASection() {
  return (
    <section
      id="prognosis"
      className="relative flex min-h-screen items-center px-5 py-32 pb-40 md:px-12"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        <Reveal>
          <h2 className="font-serif text-balance mb-5 text-3xl font-extrabold tracking-wide text-white md:text-5xl">
            BƯỚC TIẾP THEO: BẮT ĐẦU BẰNG KHẢO SÁT MIỄN PHÍ
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-balance mx-auto mb-8 max-w-xl text-base text-slate-300 md:text-lg">
            Đánh giá trong 2 tuần, không ràng buộc. Báo cáo gap kỹ năng chi tiết.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="glass mb-8 rounded-3xl p-6 text-left md:p-8">
            <h3 className="mb-3 text-sm font-bold tracking-wider text-gold-glow uppercase">
              Chính sách đầu tư
            </h3>
            <ul className="space-y-2 text-sm text-slate-300 md:text-base">
              <li>
                Chiết khấu: ≥30 người (-10%), ≥50 (-15%), ≥100 (-20%).
              </li>
              <li>Thanh toán: 50% trước khóa - 50% sau nghiệm thu.</li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.35}>
          <a
            href="mailto:tuyensinh.hn@caodangvietmy.edu.vn?subject=Đặt%20lịch%20khảo%20sát%20Tiếng%20Anh%20Y%20Khoa"
            className="heartbeat-cta inline-block rounded-3xl bg-gradient-to-r from-gold-cta to-amber-400 px-10 py-5 text-lg font-extrabold text-medical-950 transition-transform hover:scale-[1.03] md:text-xl"
          >
            ĐẶT LỊCH KHẢO SÁT NGAY
          </a>
        </Reveal>

        <Reveal delay={0.45} className="mt-10">
          <div className="flex flex-col items-center justify-center gap-4 text-sm text-slate-400 md:flex-row md:gap-8">
            <a href="tel:02473051212" className="flex items-center gap-2 hover:text-teal-glow">
              <Phone className="h-4 w-4" aria-hidden="true" />
              0247 305 1212
            </a>
            <a
              href="mailto:tuyensinh.hn@caodangvietmy.edu.vn"
              className="flex items-center gap-2 hover:text-teal-glow"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              tuyensinh.hn@caodangvietmy.edu.vn
            </a>
            <a
              href="https://caodangvietmyhanoi.edu.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-teal-glow"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              caodangvietmyhanoi.edu.vn
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
