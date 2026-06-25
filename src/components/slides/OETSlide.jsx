import { Globe } from 'lucide-react';
import { slideImages } from '../../lib/slideImages';
import CourseDetailLayout from './CourseDetailLayout';

const items = [
  {
    label: 'Thời lượng',
    highlight: '80 giờ · 4 tháng',
    desc: 'Lộ trình chuyên sâu, bám sát format thi thực tế.',
  },
  {
    label: 'Chứng chỉ',
    highlight: 'OET Grade B',
    desc: 'OET Medicine & OET Nursing — chuẩn hành nghề Anh, Úc, New Zealand, Singapore.',
  },
  {
    label: 'Nội dung trọng tâm',
    highlight: '4 kỹ năng OET',
    desc: 'Listening · Reading · Writing · Speaking — mock tests và feedback cá nhân từ giám khảo.',
  },
  {
    label: 'Cam kết',
    highlight: 'Grade B · 2 lần thi',
    desc: 'Cam kết đạt Grade B trong tối đa 2 lần thi — minh bạch trong hợp đồng.',
  },
  {
    label: 'Đối tượng',
    highlight: 'Hành nghề quốc tế',
    desc: 'Bác sĩ, điều dưỡng Việt Nam có kế hoạch tu nghiệp, học bổng nước ngoài.',
  },
];

export default function OETSlide() {
  return (
    <CourseDetailLayout
      bg={slideImages.oet.src}
      alt={slideImages.oet.alt}
      overlay="pulse"
      fx="blood-flow"
      badge="Chứng Chỉ Quốc Tế"
      badgeIcon={Globe}
      badgeColor="sky"
      tagline="OET · Bước 2"
      title="OET Intensive Preparation"
      headlineAccent="sky"
      certHero={{
        title: 'Chứng chỉ mục tiêu',
        cert: 'OET Grade B',
        subtitle: 'Medicine · Nursing · 80 giờ chuyên sâu',
        markets: 'Anh · Úc · Mỹ',
      }}
      items={items}
    />
  );
}
