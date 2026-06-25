import { Layers } from 'lucide-react';
import { slideImages } from '../../lib/slideImages';
import CourseDetailLayout from './CourseDetailLayout';

const items = [
  {
    label: 'Thời lượng',
    highlight: 'Linh hoạt theo HĐ',
    desc: 'Thiết kế theo thỏa thuận, phù hợp lịch trực ca từng khoa.',
  },
  {
    label: 'Nội dung',
    highlight: 'Nội · Ngoại · ICU · Sản Nhi',
    desc: 'Chương trình chuyên biệt theo chuyên khoa và tình huống lâm sàng thực.',
  },
  {
    label: 'Hình thức',
    highlight: 'Hybrid · On-site',
    desc: 'Học tại bệnh viện, tại APC, hoặc kết hợp linh hoạt.',
  },
  {
    label: 'Chứng nhận',
    highlight: 'KPI ràng buộc',
    desc: 'Báo cáo năng lực theo hợp đồng — kết quả minh bạch cho Ban Giám Đốc.',
  },
  {
    label: 'Lợi ích',
    highlight: 'Handover · Ca trực',
    desc: 'Giải quyết giao ban, chuyên môn sâu — ứng dụng ngay ca trực hôm sau.',
  },
];

export default function ESPSlide() {
  return (
    <CourseDetailLayout
      bg={slideImages.esp.src}
      alt={slideImages.esp.alt}
      overlay="neural"
      fx="brain-waves"
      badge="Precision Medicine"
      badgeIcon={Layers}
      badgeColor="violet"
      tagline="ESP · Bước 3"
      title="Chuyên Khoa ESP"
      headlineAccent="violet"
      certHero={{
        title: 'Chứng nhận chương trình',
        cert: 'ESP May Đo',
        subtitle: 'Theo chuyên khoa & KPI bệnh viện',
      }}
      items={items}
    />
  );
}
