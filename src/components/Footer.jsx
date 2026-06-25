import { Mail, Globe, Phone, Percent } from 'lucide-react';
import FadeInView from './FadeInView';

export default function Footer() {
  return (
    <footer id="contact" className="px-4 pt-16 pb-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <FadeInView direction="zoom">
          <div className="glass-strong rounded-3xl p-10 text-center md:p-14">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Bước Tiếp Theo: Bắt Đầu Bằng Khảo Sát Miễn Phí
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-slate-300">
              Khảo sát năng lực trong 2 tuần. Báo cáo gap kỹ năng chi tiết. Không
              ràng buộc hợp đồng.
            </p>

            <a
              href="mailto:tuyensinh.hn@caodangvietmy.edu.vn?subject=Đặt%20lịch%20khảo%20sát%20Tiếng%20Anh%20Y%20Khoa"
              className="cta-glow mb-10 inline-block rounded-2xl bg-gradient-to-r from-gold-cta to-amber-400 px-10 py-5 text-lg font-extrabold tracking-wide text-medical-950 transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-glow focus-visible:ring-offset-2 focus-visible:ring-offset-medical-900"
            >
              ĐẶT LỊCH KHẢO SÁT NGAY
            </a>

            <div className="flex flex-col items-center gap-4 text-sm text-slate-300 md:flex-row md:flex-wrap md:justify-center md:gap-8">
              <a
                href="tel:02473051212"
                className="flex items-center gap-2 transition-colors hover:text-teal-glow"
              >
                <Phone className="h-4 w-4 text-teal-accent" aria-hidden="true" />
                0247 305 1212
              </a>
              <a
                href="mailto:tuyensinh.hn@caodangvietmy.edu.vn"
                className="flex items-center gap-2 transition-colors hover:text-teal-glow"
              >
                <Mail className="h-4 w-4 text-teal-accent" aria-hidden="true" />
                tuyensinh.hn@caodangvietmy.edu.vn
              </a>
              <a
                href="https://caodangvietmyhanoi.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-teal-glow"
              >
                <Globe className="h-4 w-4 text-teal-accent" aria-hidden="true" />
                caodangvietmyhanoi.edu.vn
              </a>
              <span className="flex items-center gap-2 text-gold-glow">
                <Percent className="h-4 w-4" aria-hidden="true" />
                Chiết khấu lên đến 20% cho nhóm lớn.
              </span>
            </div>
          </div>
        </FadeInView>

        <p className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} APC - Cao Đẳng Việt Mỹ Hà Nội · EQuest Education
          Group
        </p>
      </div>
    </footer>
  );
}
