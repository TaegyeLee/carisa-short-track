type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-4xl ${className}`}>
      {eyebrow ? (
        <p className="mb-3 font-display text-[0.625rem] font-semibold uppercase tracking-[0.3em] text-[#e31837] sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mt-5 h-px w-16 bg-[#e31837] sm:mt-6" aria-hidden />
      {subtitle ? (
        <p className="mt-6 text-base leading-[1.75] text-[#9aa8bc] sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
