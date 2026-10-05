export type JourneyTimelineItem = {
  id: string;
  period?: string;
  title: string;
  description: string;
  status?: "active" | "future" | "default";
};

type JourneyTimelineProps = {
  items: JourneyTimelineItem[];
  layout?: "horizontal" | "vertical";
};

export function JourneyTimeline({
  items,
  layout = "horizontal",
}: JourneyTimelineProps) {
  if (layout === "vertical") {
    return (
      <ol className="relative mt-10 space-y-0">
        <div
          className="absolute bottom-4 left-[11px] top-4 w-px bg-[#e31837]/30"
          aria-hidden
        />
        {items.map((item, index) => (
          <li key={item.id} className="relative pl-10 pb-10 last:pb-0">
            <span
              className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border text-[0.625rem] font-bold ${
                item.status === "active"
                  ? "border-[#e31837] bg-[#e31837]/20 text-white"
                  : item.status === "future"
                    ? "border-[#202a3a] bg-[#0a0f1c] text-[#9aa8bc]"
                    : "border-[#202a3a] bg-[#0d1422] text-white"
              }`}
              aria-hidden
            >
              {index + 1}
            </span>
            {index < items.length - 1 ? (
              <span
                className="absolute left-[11px] top-8 font-display text-sm text-[#e31837]/50"
                aria-hidden
              >
                ↓
              </span>
            ) : null}
            <article className="border border-[#202a3a] bg-[#0d1422] p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#e31837]/35 sm:p-8">
              {item.period ? (
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#e31837]">
                  {item.period}
                </p>
              ) : null}
              <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                {item.title}
              </h3>
              <div className="mt-3 h-px w-10 bg-[#e31837]/80" aria-hidden />
              <p className="mt-4 text-sm leading-relaxed text-[#9aa8bc] sm:text-base">
                {item.description}
              </p>
            </article>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="relative mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
      <div
        className="absolute left-[8%] right-[8%] top-8 hidden h-px bg-linear-to-r from-[#e31837]/20 via-[#202a3a] to-[#e31837]/30 md:block"
        aria-hidden
      />
      {items.map((item, index) => (
        <li key={item.id} className="relative">
          {index < items.length - 1 ? (
            <span
              className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 font-display text-base text-[#e31837]/45 md:block"
              aria-hidden
            >
              →
            </span>
          ) : null}
          <article
            className={`h-full border bg-[#0d1422] p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 sm:p-8 ${
              item.status === "active"
                ? "border-[#e31837]/45"
                : "border-[#202a3a] hover:border-[#e31837]/35"
            }`}
          >
            {item.period ? (
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-[#e31837]">
                {item.period}
              </p>
            ) : null}
            <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
              {item.title}
            </h3>
            <div className="mt-3 h-px w-10 bg-[#e31837]/80" aria-hidden />
            <p className="mt-4 text-sm leading-relaxed text-[#9aa8bc] sm:text-base">
              {item.description}
            </p>
          </article>
        </li>
      ))}
    </ol>
  );
}
