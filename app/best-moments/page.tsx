import type { Metadata } from "next";
import { MomentsLibrary } from "@/components/best-moments/moments-library";
import { SiteNav } from "@/components/site-nav";
import { bodyText, contentMaxWidth, eyebrowText, sectionPad } from "@/lib/site/ui";

export const metadata: Metadata = {
  title: "Canada's Best Moments | Short Track Speed Skating",
  description:
    "The races, rivalries, comebacks, and celebrations that made Canadian short track history.",
};

export default function BestMomentsPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <SiteNav activeHref="/best-moments" />

      <main id="main-content">
        <section className="border-b border-[#202a3a] bg-[#0a0f1c]">
          <div
            className={`${contentMaxWidth} ${sectionPad} pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-28 lg:pt-32`}
          >
            <p className={eyebrowText}>Canada · Short Track</p>
            <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">
              Canada&apos;s Best Races
            </h1>
            <div className="mt-8 h-px w-16 bg-[#e31837] sm:mt-10" aria-hidden />
            <p className={`mt-8 max-w-2xl sm:mt-10 ${bodyText}`}>
              The races, rivalries, comebacks, and celebrations that made
              Canadian short track history.
            </p>
          </div>
        </section>

        <MomentsLibrary />
      </main>
    </div>
  );
}
