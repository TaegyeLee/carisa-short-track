import type { Metadata } from "next";
import Link from "next/link";
import { HeroImage, JourneyImage } from "@/components/images/athlete-image";
import { CompetitionCard } from "@/components/national-team/competition-card";
import { PathTimeline } from "@/components/national-team/path-timeline";
import { SectionHeading } from "@/components/national-team/section-heading";
import { CanadaLegacySections } from "@/components/national-team/canada-legacy-sections";
import { StageCard } from "@/components/national-team/stage-card";
import { SiteNav } from "@/components/site-nav";
import { competitions, milestones } from "@/lib/national-team/content";
import { JourneyTimeline } from "@/components/journey-timeline";
import { RevealSection } from "@/components/site/reveal-section";
import type { CompetitionEntry } from "@/lib/national-team/content";
import {
  getJourneyPhotoSrc,
  getNationalTeamHeroSrc,
  getTeamOntarioCompetitionSrc,
} from "@/lib/national-team/image-paths";
import { nationalTeamSeasonTimeline } from "@/lib/national-team/season-timeline";

export const metadata: Metadata = {
  title: "Canada's National Team | Short Track Speed Skating",
  description:
    "Learn about Canada's national short track speed skating team, development pathways, national competitions, and international competition.",
};

const contentMaxWidth = "mx-auto w-full max-w-[1280px]";

const bodyText =
  "text-base leading-[1.8] text-[#9aa8bc] sm:text-[1.0625rem] lg:leading-[1.85]";

function getCompetitionsWithImages(): CompetitionEntry[] {
  const provincialImageSrc = getTeamOntarioCompetitionSrc();

  return competitions.map((competition) => {
    if (competition.slug === "provincial-pathways" && provincialImageSrc) {
      return {
        ...competition,
        image: provincialImageSrc,
        imageAlt:
          "Provincial short track speed skating development in Canada",
      };
    }
    return competition;
  });
}

export default function NationalTeamPage() {
  const nationalTeamPhotoSrc = getNationalTeamHeroSrc();
  const journeyPhotoSrc = getJourneyPhotoSrc();
  const competitionsWithImages = getCompetitionsWithImages();

  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <SiteNav activeHref="/national-team" />

      <main id="main-content">
        {/* Hero */}
        <section className="border-b border-[#202a3a] bg-[#0a0f1c]">
          <div
            className={`${contentMaxWidth} px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32`}
          >
            <div className="max-w-3xl">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-[#e31837] sm:text-sm">
                Team Canada · Short Track
              </p>
              <h1 className="mt-6 font-display text-[2.25rem] font-bold uppercase leading-[0.92] tracking-wide text-white sm:mt-8 sm:text-5xl md:text-6xl lg:mt-10 lg:text-7xl">
                Canada&apos;s
                <br />
                National
                <br />
                Team
              </h1>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-white/85 sm:mt-10 sm:text-lg lg:mt-12">
                Canada&apos;s national short track program and the athletes who
                represent the country on the ice.
              </p>
            </div>

            <HeroImage
              src={nationalTeamPhotoSrc}
              alt="Canadian short track speed skating national team"
              label="National team photo — coming soon"
              className="mt-12 w-full sm:mt-14 lg:mt-16"
              priority
            />
          </div>
        </section>

        {/* Introduction */}
        <section
          className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
        >
          <div className="max-w-[750px]">
            <SectionHeading eyebrow="Team Canada" title="Canada's National Team" />
            <p className={`mt-8 sm:mt-10 ${bodyText}`}>
              Canada has a strong tradition in short track speed skating, with
              athletes competing at the highest levels of national and
              international competition.
            </p>
            <p className={`mt-6 sm:mt-8 ${bodyText}`}>
              The national team brings together elite Canadian skaters who train,
              compete, and represent the country through discipline, teamwork,
              and high-performance preparation.
            </p>
          </div>
        </section>

        <CanadaLegacySections contentMaxWidth={contentMaxWidth} />

        {/* Path to Team Canada */}
        <section className="border-y border-[#202a3a] bg-[#0a0f1c]">
          <div
            className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
          >
            <SectionHeading
              title="The Path to the National Team"
              subtitle="Athletes develop through clubs, provincial programs, youth competitions, and increasingly higher levels of competition before reaching the national stage."
            />
            <PathTimeline />
          </div>
        </section>

        {/* Competitions & program */}
        <section
          className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
        >
          <SectionHeading
            title="Competitions"
            subtitle="National development, domestic championships, and the international stage."
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            {competitionsWithImages.map((competition) => (
              <li key={competition.slug}>
                <CompetitionCard competition={competition} />
              </li>
            ))}
          </ul>
        </section>

        {/* Program overview */}
        <section className="border-y border-[#202a3a] bg-[#0a0f1c]">
          <div
            className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
          >
            <SectionHeading title="National Team Overview" />
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-5">
              {milestones.map((item) => (
                <li key={item.step}>
                  <StageCard
                    step={item.step}
                    title={item.title}
                    description={item.description}
                    emphasis="milestone"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* More than racing */}
        <section
          className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
        >
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
            <JourneyImage
              src={journeyPhotoSrc}
              alt="Canadian short track speed skating training and competition"
              label="Journey photography — coming soon"
              className="mx-auto w-full lg:mx-0"
            />
            <div className="max-w-xl lg:max-w-none">
              <p className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.3em] text-[#e31837] sm:text-xs">
                Team Canada
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
                More Than Racing
              </h2>
              <div className="mt-4 h-px w-14 bg-[#e31837]" aria-hidden />
              <p className={`mt-6 sm:mt-8 ${bodyText}`}>
                Representing Canada requires discipline, teamwork, commitment,
                preparation, and the ability to perform under pressure.
              </p>
              <p className={`mt-6 sm:mt-8 ${bodyText}`}>
                Training, travel, coaching, and competition together shape the
                daily work of national-team sport.
              </p>
              <p className="mt-8 font-display text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-[#9aa8bc] sm:text-xs">
                Training · Competition · Travel · Team
              </p>
            </div>
          </div>
        </section>

        {/* Continue exploring */}
        <section className="border-t border-[#202a3a] bg-[#0a0f1c]">
          <div
            className={`${contentMaxWidth} px-5 py-20 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
          >
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
              Continue Exploring
            </h2>
            <div
              className="mx-auto mt-5 h-px w-16 bg-[#e31837] sm:mt-6"
              aria-hidden
            />
            <p className={`mx-auto mt-8 max-w-2xl sm:mt-10 ${bodyText}`}>
              Learn more about training, equipment, and the wider world of
              Canadian short track speed skating.
            </p>
            <Link
              href="/training"
              className="mt-10 inline-flex items-center justify-center border border-[#202a3a] bg-transparent px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-white transition-[border-color,color,background-color] duration-200 hover:border-[#e31837]/60 hover:bg-[#e31837]/10 hover:text-white sm:mt-12 sm:px-10 sm:py-4"
            >
              Skating Training
            </Link>
          </div>
        </section>

        <RevealSection className="border-t border-[#202a3a] bg-[#070b14]">
          <div
            className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
          >
            <SectionHeading title="Competition Pathway" />
            <JourneyTimeline items={nationalTeamSeasonTimeline} layout="horizontal" />
          </div>
        </RevealSection>
      </main>
    </div>
  );
}
