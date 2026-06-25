import { Layers } from 'lucide-react';
import CourseDetailLayout from './CourseDetailLayout';

const BG =
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1920&q=80';

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
    label: 'Cam kết',
    highlight: 'KPI ràng buộc',
    desc: 'Đo lường KPI theo hợp đồng — kết quả minh bạch cho Ban Giám Đốc.',
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
      bg={BG}
      alt="Chuyên khoa ESP"
      overlay="neural"
      fx="brain-waves"
      badge="Precision Medicine"
      badgeIcon={Layers}
      badgeColor="violet"
      tagline="ESP · Bước 3"
      title="Chuyên Khoa ESP"
      headlineAccent="violet"
      items={items}
    />
  );
}
