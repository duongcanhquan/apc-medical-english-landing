/** Curated backgrounds — Asian / Southeast Asian healthcare context where possible. */
const q = (w = 1920) => `auto=format&fit=crop&w=${w}&q=80`;

export const slideImages = {
  hero: {
    src: `https://images.unsplash.com/photo-1584984578268-787a6bfdb7a2?${q()}`,
    alt: 'Điều dưỡng viên châu Á tại bệnh viện',
  },
  diagnosis: {
    src: `https://images.unsplash.com/photo-1631217868264-e90b128dda93?${q()}`,
    alt: 'Bác sĩ nữ châu Á tư vấn bệnh nhân',
  },
  solutions: {
    src: `https://images.unsplash.com/photo-1628593292002-ec83ea0bbc45?${q()}`,
    alt: 'Bác sĩ châu Á trong phòng khám',
  },
  foundation: {
    src: `https://images.unsplash.com/photo-1571260899304-425eee4c4efc?${q()}`,
    alt: 'Sinh viên y khoa trong lớp đào tạo',
  },
  oet: {
    src: `https://images.unsplash.com/photo-1612349317150-e22f6bcdfe67?${q()}`,
    alt: 'Đội ngũ y tế đa văn hóa — hướng tới chứng chỉ quốc tế',
  },
  esp: {
    src: `https://images.unsplash.com/photo-1584433149489-3d6130c0e78d?${q()}`,
    alt: 'Điều dưỡng viên châu Á tại khoa lâm sàng',
  },
  whyApc: {
    src: `https://images.unsplash.com/photo-1578493849163-2d8aeb5c3b73?${q()}`,
    alt: 'Bác sĩ châu Á làm việc tại bệnh viện',
  },
  roadmap: {
    src: `https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?${q()}`,
    alt: 'Bệnh viện hiện đại — lộ trình triển khai',
  },
  cta: {
    src: `https://images.unsplash.com/photo-1582750433449-648b1273f2b8?${q()}`,
    alt: 'Chuyên gia y tế châu Á — tư vấn trực tuyến',
  },
};

export const CERT_PROGRAMS = [
  {
    id: 'foundation',
    label: 'Foundation',
    cert: 'B2 CEFR',
    detail: 'Medical English · 60 giờ',
    color: 'teal',
    markets: null,
  },
  {
    id: 'oet',
    label: 'OET Intensive',
    cert: 'Grade B',
    detail: 'Medicine · Nursing',
    color: 'sky',
    markets: 'Anh · Úc · Mỹ',
    featured: true,
  },
  {
    id: 'esp',
    label: 'ESP Chuyên khoa',
    cert: 'May đo KPI',
    detail: 'Nội · Ngoại · ICU',
    color: 'violet',
    markets: null,
  },
];
