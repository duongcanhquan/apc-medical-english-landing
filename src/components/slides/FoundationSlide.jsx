import { Star } from 'lucide-react';
import { slideImages } from '../../lib/slideImages';
import CourseDetailLayout from './CourseDetailLayout';

const items = [
  {
    label: 'Thời lượng',
    highlight: '60 giờ · 3 tháng',
    desc: 'Lịch học linh hoạt, phù hợp ca trực bệnh viện.',
  },
  {
    label: 'Nội dung trọng tâm',
    highlight: 'Từ vựng · Giao tiếp · Tài liệu lâm sàng',
    desc: 'Từ vựng y khoa, giao tiếp bệnh nhân, đọc tài liệu lâm sàng thực tế.',
  },
  {
    label: 'Phương pháp',
    highlight: 'Simulation phòng khám',
    desc: 'Mô phỏng phòng khám thực tế — 70% thực hành, 30% lý thuyết ứng dụng.',
  },
  {
    label: 'Chứng chỉ đầu ra',
    highlight: 'B2 CEFR',
    desc: 'Chứng nhận năng lực B2 theo khung CEFR — nền tảng bắt buộc trước OET.',
  },
  {
    label: 'Đối tượng',
    highlight: 'Đội ngũ y tế Việt Nam',
    desc: 'Bác sĩ, điều dưỡng, kỹ thuật viên — xóa rào cản giao tiếp hàng ngày.',
  },
];

export default function FoundationSlide() {
  return (
    <CourseDetailLayout
      bg={slideImages.foundation.src}
      alt={slideImages.foundation.alt}
      overlay="aurora"
      fx="dna-helix"
      badge="Gói Phổ Biến Nhất"
      badgeIcon={Star}
      badgeColor="teal"
      tagline="Foundation · Bước 1"
      title="Foundation Medical English"
      certHero={{
        title: 'Chứng chỉ đầu ra',
        cert: 'B2 CEFR',
        subtitle: 'Medical English · 60 giờ · Simulation lâm sàng',
      }}
      items={items}
    />
  );
}
