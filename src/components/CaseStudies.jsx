import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';
import FadeInView from './FadeInView';

const cases = [
  {
    quote:
      "Bệnh nhân nam, 45 tuổi, quốc tịch Anh nhập viện vì đau ngực cấp. Việc không hiểu chính xác 'crushing chest pain' có thể làm chậm trễ can thiệp mạch vành. Tiếng Anh y khoa là công cụ cứu người.",
    source: 'Chuyện ở phòng Cấp cứu',
  },
  {
    quote:
      'Một bác sĩ ngoại khoa tại Hà Nội đã vuột mất cơ hội huấn luyện phẫu thuật Robot tại Hàn Quốc năm 2023 chỉ vì kỹ năng nghe hiểu tiếng Anh chuyên ngành không đạt.',
    source: 'Nấc thang sự nghiệp',
  },
];

export default function CaseStudies() {
  const scrollRef = useRef(null);
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <FadeInView className="mb-10">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Câu Chuyện Thực Tế
          </h2>
          <p className="mt-3 text-slate-400">
            Kéo ngang để khám phá — mỗi giây đều có thể thay đổi số phận bệnh nhân
          </p>
        </FadeInView>

        <div
          ref={scrollRef}
          className="hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        >
          {cases.map((item, index) => (
            <motion.blockquote
              key={item.source}
              className="glass min-w-[85vw] shrink-0 snap-center rounded-2xl p-8 md:min-w-[60vw] lg:min-w-[45vw]"
              initial={reduceMotion ? false : { opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Quote
                className="mb-4 h-10 w-10 text-teal-accent/60"
                aria-hidden="true"
              />
              <p className="mb-6 text-lg leading-relaxed text-slate-200 italic md:text-xl">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-teal-glow">
                — {item.source}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
