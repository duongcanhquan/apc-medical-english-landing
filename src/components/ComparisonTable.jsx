import { motion, useReducedMotion } from 'framer-motion';
import FadeInView from './FadeInView';

const rows = [
  {
    criteria: 'Mục tiêu',
    general: 'Giao tiếp đời sống',
    apc: 'Sát vị trí lâm sàng, giao tiếp bệnh nhân, đọc y văn.',
  },
  {
    criteria: 'Từ vựng',
    general: 'Cơ bản, ít ứng dụng',
    apc: 'Thuật ngữ chuyên ngành (Giải phẫu, Bệnh học, Dược lý).',
  },
  {
    criteria: 'Phương pháp',
    general: '100% Lý thuyết',
    apc: '70% Thực hành mô phỏng ca lâm sàng.',
  },
  {
    criteria: 'Đầu ra',
    general: 'Bằng cấp chung chung',
    apc: 'Tự tin hành nghề, thi chứng chỉ OET Y khoa.',
  },
];

export default function ComparisonTable() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <FadeInView className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            So Sánh Đột Phá
          </h2>
        </FadeInView>

        <motion.div
          className="glass-strong overflow-hidden rounded-2xl"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/20 bg-white/5">
                  <th className="px-6 py-5 text-sm font-bold text-teal-glow uppercase tracking-wider">
                    Tiêu chí
                  </th>
                  <th className="px-6 py-5 text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Tiếng Anh Tổng Quát
                  </th>
                  <th className="px-6 py-5 text-sm font-bold text-gold-glow uppercase tracking-wider">
                    Tiếng Anh Y Khoa tại APC
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.criteria}
                    className={`border-b border-white/10 ${i % 2 === 0 ? 'bg-white/[0.03]' : ''}`}
                  >
                    <td className="px-6 py-5 font-semibold text-white">
                      {row.criteria}
                    </td>
                    <td className="px-6 py-5 text-slate-400">{row.general}</td>
                    <td className="px-6 py-5 font-medium text-teal-glow">
                      {row.apc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
