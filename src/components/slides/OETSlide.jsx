import { Globe } from 'lucide-react';
import CourseDetailLayout from './CourseDetailLayout';

const BG =
  'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80';

const items = [
  {
    label: 'Thời lượng',
    highlight: '80 giờ · 4 tháng',
    desc: 'Lộ trình chuyên sâu, bám sát format thi thực tế.',
  },
  {
    label: 'Nội dung trọng tâm',
    highlight: '4 kỹ năng OET',
    desc: 'OET Medicine/Nursing — mock tests toàn diện và feedback cá nhân từ giám khảo.',
  },
  {
    label: 'Cam kết',
    highlight: 'Grade B · 2 lần thi',
    desc: 'Cam kết đạt Grade B trong tối đa 2 lần thi.',
  },
  {
    label: 'Đối tượng',
    highlight: 'Hành nghề quốc tế',
    desc: 'Bác sĩ, điều dưỡng có kế hoạch tu nghiệp, học bổng nước ngoài.',
  },
  {
    label: 'Lợi ích',
    highlight: 'Anh · Úc · Mỹ',
    desc: 'Mở khóa chứng chỉ hành nghề toàn cầu, tự tin làm việc tại nền y tế tiên tiến.',
  },
];

export default function OETSlide() {
  return (
    <CourseDetailLayout
      bg={BG}
      alt="OET Intensive Preparation"
      overlay="pulse"
      fx="blood-flow"
      badge="Nấc Thang Quốc Tế"
      badgeIcon={Globe}
      badgeColor="sky"
      tagline="OET · Bước 2"
      title="OET Intensive Preparation"
      headlineAccent="sky"
      items={items}
    />
  );
}
