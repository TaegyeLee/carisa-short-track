type StageCardProps = {
  step: string;
  title: string;
  description: string;
  emphasis?: "default" | "milestone";
};

export function StageCard({
  step,
  title,
  description,
  emphasis = "default",
}: StageCardProps) {
  const stepClass =
    emphasis === "milestone"
      ? "text-base sm:text-lg tracking-[0.22em]"
      : "text-sm sm:text-base tracking-[0.2em]";

  return (
    <article className="h-full border border-[#202a3a] bg-[#0d1422] p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#e31837]/40 sm:p-8 lg:pt-10">
      <p
        className={`font-display font-bold text-[#e31837] ${stepClass}`}
      >
        {step}
      </p>
      <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
        {title}
      </h3>
      <div className="mt-3 h-px w-10 bg-[#e31837]/80" aria-hidden />
      <p className="mt-4 whitespace-pre-line text-sm leading-[1.75] text-[#9aa8bc] sm:text-base lg:leading-[1.8]">
        {description}
      </p>
    </article>
  );
}
