const BANNER_TEXT =
  'Y thuật chữa lành thể xác – Ngôn ngữ mở ra cơ hội. Nâng tầm sự nghiệp y khoa quốc tế của bạn ngay hôm nay!';

export default function MotivationalBanner() {
  const repeated = `${BANNER_TEXT}   •   ${BANNER_TEXT}   •   ${BANNER_TEXT}   •   `;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 border-b border-teal-accent/30 bg-medical-900/90 backdrop-blur-md"
      role="banner"
      aria-label="Thông điệp truyền động lực"
    >
      <div className="overflow-hidden py-2.5">
        <div className="marquee-track flex w-max whitespace-nowrap">
          <span className="px-4 text-sm font-semibold tracking-wide text-teal-glow md:text-base">
            {repeated}
          </span>
          <span
            className="px-4 text-sm font-semibold tracking-wide text-teal-glow md:text-base"
            aria-hidden="true"
          >
            {repeated}
          </span>
        </div>
      </div>
    </div>
  );
}
