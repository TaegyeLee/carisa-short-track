import type { Metadata } from "next";
import { SectionHeading } from "@/components/national-team/section-heading";
import { RaceStrategyVisual } from "@/components/training/race-strategy-visual";
import { TrainingTopicCard } from "@/components/training/training-topic-card";
import { TrainingVisualPanel } from "@/components/training/training-visual-panel";
import { SiteNav } from "@/components/site-nav";
import { RevealSection } from "@/components/site/reveal-section";
import {
  drylandCards,
  onIceCards,
  specializedCards,
} from "@/lib/training/content";
import { bodyText, contentMaxWidth, eyebrowText, sectionPad } from "@/lib/site/ui";

export const metadata: Metadata = {
  title: "Skating Training | Short Track Speed Skating",
  description:
    "How short track athletes train: dryland work, on-ice technique, specialized drills, and race strategy.",
};

export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <SiteNav activeHref="/training" />

      <main id="main-content">
        {/* Hero */}
        <section className="border-b border-[#202a3a] bg-[#0a0f1c]">
          <div
            className={`${contentMaxWidth} ${sectionPad} pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-28 lg:pt-32`}
          >
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="lg:col-span-7">
                <p className={eyebrowText}>Short Track</p>
                <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">
                  Training
                </h1>
                <div className="mt-8 h-px w-16 bg-[#e31837] sm:mt-10" aria-hidden />
                <p className="mt-8 max-w-2xl font-display text-2xl font-bold uppercase leading-snug tracking-wide text-white sm:mt-10 sm:text-3xl lg:text-4xl">
                  Built for Speed.
                  <span className="mt-2 block text-white/95">
                    Built for the Ice.
                  </span>
                </p>
                <p className={`mt-8 max-w-xl sm:mt-10 ${bodyText}`}>
                  Short track training is more than skating fast. It combines
                  strength, explosive power, technique, endurance and race
                  strategy.
                </p>
              </div>
              <div className="lg:col-span-5">
                <TrainingVisualPanel
                  variant="on-ice"
                  className="min-h-[220px] lg:min-h-[280px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Dryland */}
        <RevealSection className={`${contentMaxWidth} ${sectionPad}`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
            <div className="lg:col-span-5 lg:self-center">
              <SectionHeading
                title="Dryland Training"
                subtitle="Build the engine off the ice."
              />
            </div>
            <div className="lg:col-span-7">
              <TrainingVisualPanel variant="dryland" className="min-h-[200px]" />
            </div>
          </div>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {drylandCards.map((card) => (
              <li key={card.step}>
                <TrainingTopicCard {...card} />
              </li>
            ))}
          </ul>
        </RevealSection>

        <div className={`${contentMaxWidth} px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24`}>
          <div className="mx-auto w-full max-w-4xl xl:max-w-5xl">
            <div className="relative aspect-video w-full overflow-hidden border border-[#202a3a] bg-[#0d1422] shadow-[0_0_0_1px_rgba(227,24,55,0.08)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/de-O0NKXORA"
                title="Dryland training for short track speed skating"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* On-ice */}
        <RevealSection className="border-y border-[#202a3a] bg-[#0a0f1c]">
          <div className={`${contentMaxWidth} ${sectionPad}`}>
            <SectionHeading
              title="On-Ice Training"
              subtitle="Where technique becomes speed."
            />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
              {onIceCards.map((card) => (
                <li key={card.step}>
                  <TrainingTopicCard {...card} emphasis="tall" />
                </li>
              ))}
            </ul>
            <div className="mt-10 lg:mt-14">
              <TrainingVisualPanel
                variant="on-ice"
                className="min-h-[180px] lg:min-h-[200px]"
              />
            </div>
          </div>
        </RevealSection>

        {/* Specialized */}
        <RevealSection className={`${contentMaxWidth} ${sectionPad}`}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
            <div>
              <SectionHeading
                title="Specialized Training"
                subtitle="Training beyond the standard workout."
              />
              <div className="mt-10 hidden sm:block lg:mt-12">
                <TrainingVisualPanel variant="specialized" className="min-h-[200px]" />
              </div>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2">
              {specializedCards.map((card) => (
                <li key={card.step}>
                  <TrainingTopicCard {...card} />
                </li>
              ))}
            </ul>
          </div>
        </RevealSection>

        {/* Mental game */}
        <RevealSection className="border-y border-[#202a3a] bg-[#0a0f1c]">
          <div className={`${contentMaxWidth} ${sectionPad}`}>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-[#e31837] sm:text-sm">
              Race craft
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              The Mental Game
            </h2>
            <div className="mt-6 h-px w-20 bg-[#e31837]" aria-hidden />

            <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div>
                <p className="font-display text-xl font-bold uppercase leading-snug tracking-wide text-white sm:text-2xl lg:text-3xl">
                  See the Race.
                  <span className="mt-2 block text-[#e31837]">
                    Read the Race.
                  </span>
                  <span className="mt-2 block">Make the Move.</span>
                </p>
                <p className={`mt-8 max-w-xl ${bodyText}`}>
                  Short track racing happens in a pack. Athletes must constantly
                  read the position of other skaters, anticipate movement,
                  choose the right line and make decisions under pressure.
                </p>
                <ul className="mt-8 space-y-4 border-l border-[#202a3a] pl-5 sm:pl-6">
                  {[
                    "Track position in the pack",
                    "Anticipate passes and blocks",
                    "Commit to the right line",
                  ].map((item) => (
                    <li
                      key={item}
                      className={`font-display text-sm font-semibold uppercase tracking-[0.12em] text-[#9aa8bc] sm:text-base`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <RaceStrategyVisual />
            </div>
          </div>
        </RevealSection>

        {/* Final */}
        <RevealSection className={`${contentMaxWidth} ${sectionPad}`}>
          <div className="border border-[#202a3a] bg-[#0d1422] px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
              Train Hard. Skate Smart.
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-[#e31837]" aria-hidden />
            <p className={`mx-auto mt-8 max-w-lg ${bodyText}`}>
              Speed is built off the ice.
              <span className="mt-3 block">Racing is perfected on it.</span>
            </p>
          </div>
        </RevealSection>
      </main>
    </div>
  );
}
