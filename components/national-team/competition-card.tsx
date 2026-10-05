import Image from "next/image";
import type { CompetitionEntry } from "@/lib/national-team/content";

type CompetitionCardProps = {
  competition: CompetitionEntry;
};

export function CompetitionCard({ competition }: CompetitionCardProps) {
  return (
    <article
      data-slug={competition.slug}
      className="group flex h-full min-h-[240px] flex-col overflow-hidden border border-[#202a3a] bg-[#0d1422] transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#e31837]/35"
    >
      {competition.image ? (
        <div className="relative aspect-[16/9] w-full shrink-0 border-b border-[#202a3a] bg-[#0a0f1c]">
          <Image
            src={competition.image}
            alt={competition.imageAlt ?? competition.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 400px"
            className="object-cover object-center"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-8 sm:p-10">
        <p className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.25em] text-[#e31837]">
          {competition.category}
        </p>
        <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
          {competition.title}
        </h3>
        <div className="mt-4 h-px w-12 bg-[#e31837]" aria-hidden />
        <div className="mt-5 space-y-2 text-sm leading-relaxed text-[#9aa8bc] sm:text-base">
          {competition.detailLines?.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>{competition.description}</p>
        </div>
      </div>
    </article>
  );
}
