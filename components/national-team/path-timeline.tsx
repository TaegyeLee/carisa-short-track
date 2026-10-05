import { pathStages } from "@/lib/national-team/content";
import { StageCard } from "./stage-card";

export function PathTimeline() {
  return (
    <ol className="relative mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-4">
      <div
        className="absolute left-4 top-0 bottom-0 w-px bg-[#e31837]/25 md:hidden"
        aria-hidden
      />
      <div
        className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-linear-to-r from-[#e31837]/15 via-[#202a3a] to-[#e31837]/35 lg:block"
        aria-hidden
      />
      {pathStages.map((stage, index) => (
        <li key={stage.step} className="relative pl-8 md:pl-0 md:py-0">
          <span
            className="absolute left-[13px] top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-[#e31837]/70 md:hidden"
            aria-hidden
          />
          {index < pathStages.length - 1 ? (
            <span
              className="pointer-events-none absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 font-display text-base text-[#e31837]/50 lg:block"
              aria-hidden
            >
              →
            </span>
          ) : null}
          <StageCard
            step={stage.step}
            title={stage.title}
            description={stage.description}
          />
        </li>
      ))}
    </ol>
  );
}
