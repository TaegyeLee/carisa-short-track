import { bodyText } from "@/lib/site/ui";

type TrainingTopicCardProps = {
  step: string;
  title: string;
  description: string;
  emphasis?: "default" | "tall";
};

export function TrainingTopicCard({
  step,
  title,
  description,
  emphasis = "default",
}: TrainingTopicCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden border border-[#202a3a] bg-[#0d1422] p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#e31837]/40 sm:p-8 ${
        emphasis === "tall" ? "lg:p-10" : ""
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e31837]/70 to-transparent"
        aria-hidden
      />
      <p className="font-display text-sm font-bold tabular-nums text-[#e31837] sm:text-base">
        {step}
      </p>
      <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-wide text-white sm:text-2xl">
        {title}
      </h3>
      <div className="mt-3 h-px w-12 bg-[#e31837]/85" aria-hidden />
      <p className={`mt-4 flex-1 ${bodyText}`}>{description}</p>
    </article>
  );
}
