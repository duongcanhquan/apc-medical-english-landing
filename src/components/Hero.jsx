import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, FlaskConical, Stethoscope, TrendingUp } from 'lucide-react';
import FadeInView from './FadeInView';

const badges = [
  { icon: FlaskConical, label: '70% Thực hành' },
  { icon: Stethoscope, label: 'Sát vị trí lâm sàng' },
  { icon: TrendingUp, label: 'Kết quả đo được' },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToFooter = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-20 md:px-8">
      <div className="relative mx-auto max-w-5xl text-center">
        <FadeInView delay={0.1}>
          <p className="mb-4 inline-block rounded-full border border-teal-accent/40 bg-teal-accent/10 px-5 py-2 text-sm font-medium tracking-widest text-teal-glow uppercase">
            Giải pháp đào tạo ngôn ngữ nghề nghiệp
          </p>
        </FadeInView>

        <FadeInView delay={0.2}>
          <h1 className="mb-6 text-3xl leading-tight font-extrabold text-white md:text-5xl lg:text-6xl">
            Ngôn Ngữ: Rào Cản Vô Hình Giới Hạn Sự Nghiệp Y Khoa Của Bạn?
          </h1>
        </FadeInView>

        <FadeInView delay={0.35}>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Nghề y đòi hỏi cống hiến trọn vẹn, nhưng rào cản ngôn ngữ có thể khiến
            bạn lỡ nhịp trước nền y học toàn cầu. Đã đến lúc xóa bỏ giới hạn đó.
          </p>
        </FadeInView>

        <div className="relative mb-12 flex flex-wrap items-center justify-center gap-4">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                className="glass flex items-center gap-2 rounded-2xl px-5 py-3"
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, -8, 0], transition: { duration: 3 + i, repeat: Infinity, ease: 'easeInOut' } }
                }
              >
                <Icon className="h-5 w-5 text-teal-glow" aria-hidden="true" />
                <span className="text-sm font-semibold text-white md:text-base">
                  {badge.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <FadeInView delay={0.5}>
          <button
            type="button"
            onClick={scrollToFooter}
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-gold-cta to-amber-500 px-8 py-4 text-lg font-bold text-medical-950 shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-glow focus-visible:ring-offset-2 focus-visible:ring-offset-medical-900"
          >
            Nhận Đánh Giá Năng Lực Miễn Phí
            <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </button>
        </FadeInView>
      </div>
    </section>
  );
}
