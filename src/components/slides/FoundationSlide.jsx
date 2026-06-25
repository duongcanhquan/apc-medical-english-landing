import { Star } from 'lucide-react';
import CourseDetailLayout from './CourseDetailLayout';

const BG =
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1920&q=80';

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
    label: 'Mục tiêu đầu ra',
    highlight: 'B2 CEFR',
    desc: 'Tự tin giao tiếp y lệnh cơ bản, sẵn sàng học sâu hơn.',
  },
  {
    label: 'Đối tượng',
    highlight: 'Toàn đội ngũ y tế',
    desc: 'Bác sĩ, điều dưỡng, kỹ thuật viên — xóa rào cản giao tiếp hàng ngày.',
  },
];

export default function FoundationSlide() {
  return (
    <CourseDetailLayout
      bg={BG}
      alt="Foundation Medical English"
      overlay="aurora"
      fx="dna-helix"
      badge="Gói Phổ Biến Nhất"
      badgeIcon={Star}
      badgeColor="teal"
      tagline="Foundation · Bước 1"
      title="Foundation Medical English"
      items={items}
    />
  );
}
