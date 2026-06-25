/**
 * Wrapper slide content — scroll từ trên xuống, không cắt header/footer.
 * Dùng `centerShort` chỉ cho slide ít nội dung (Hero).
 */
export default function SlideContent({
  children,
  className = '',
  maxWidth = 'max-w-6xl',
  centerShort = false,
}) {
  return (
    <div
      className={[
        'mx-auto w-full',
        maxWidth,
        'flex flex-col gap-4 py-1 md:gap-6 md:py-2',
        centerShort
          ? 'min-h-0 md:min-h-[calc(100dvh-11rem)] md:justify-center'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
      {/* Mobile: đảm bảo nội dung cuối không bị pill che */}
      <div className="slide-end-spacer shrink-0 lg:hidden" aria-hidden="true" />
    </div>
  );
}
