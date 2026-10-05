import type { Metadata } from "next";
import {
  JourneyTimeline,
  type JourneyTimelineItem,
} from "@/components/journey-timeline";
import { SectionHeading } from "@/components/national-team/section-heading";
import { SiteNav } from "@/components/site-nav";
import { RevealSection } from "@/components/site/reveal-section";
import { bodyText, contentMaxWidth, eyebrowText, sectionPad } from "@/lib/site/ui";

export const metadata: Metadata = {
  title: "Carisa Lee | Athlete Profile",
  description: "Athlete profile for Carisa Lee, short track speed skater from Ontario, Canada.",
};

const currentJourney: JourneyTimelineItem[] = [
  {
    id: "local",
    title: "Local Club",
    description:
      "Foundation years with the Newmarket Jets Speed Skating Club and early competitive experience.",
    status: "default",
  },
  {
    id: "provincial",
    title: "Provincial Development",
    description:
      "Building skills and race experience through provincial-level training and competition.",
    status: "default",
  },
  {
    id: "team-ontario",
    title: "Team Ontario",
    description:
      "Selected to represent Team Ontario and gain higher-level training and competition experience.",
    status: "active",
  },
  {
    id: "canada-east",
    title: "Canada East",
    description:
      "National-level competition experience including Canada East Youth Short Track.",
    status: "default",
  },
  {
    id: "future",
    title: "National / International (Future)",
    description:
      "Long-term development toward higher-level national and international competition.",
    status: "future",
  },
];

export default function CarisaPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <SiteNav activeHref="/carisa" />

      <main id="main-content">
        <section className="border-b border-[#202a3a] bg-[#0a0f1c]">
          <div className={`${contentMaxWidth} ${sectionPad} pb-20 pt-24 sm:pt-28`}>
            <p className={eyebrowText}>Athlete Profile</p>
            <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">
              Carisa Lee
            </h1>
            <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:max-w-3xl">
              {[
                ["Year of Birth", "2013"],
                ["Sport", "Short Track Speed Skating"],
                ["Club", "Newmarket Jets Speed Skating Club"],
                ["Province", "Ontario, Canada"],
                ["Discipline", "Short Track"],
                ["Current Focus", "Long-term athlete development"],
              ].map(([term, value]) => (
                <div key={term} className="border border-[#202a3a] bg-[#0d1422] p-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#e31837]">
                    {term}
                  </dt>
                  <dd className="mt-2 text-sm text-white/90 sm:text-base">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <RevealSection className={`${contentMaxWidth} ${sectionPad}`}>
          <SectionHeading title="About Carisa" />
          <p className={`mt-8 max-w-[750px] ${bodyText}`}>
            Carisa began her speed skating journey at a young age and continues
            to develop through training, competition and experiences with
            athletes and coaches across Ontario and Canada.
          </p>
        </RevealSection>

        <RevealSection className="border-y border-[#202a3a] bg-[#0a0f1c]">
          <div className={`${contentMaxWidth} ${sectionPad}`}>
            <SectionHeading title="Current Journey" />
            <JourneyTimeline items={currentJourney} layout="vertical" />
          </div>
        </RevealSection>

        <RevealSection className={`${contentMaxWidth} ${sectionPad}`}>
          <SectionHeading title="Beyond the Ice" />
          <ul className={`mt-8 max-w-[750px] space-y-4 ${bodyText}`}>
            <li>Discipline built through daily training and preparation.</li>
            <li>Teamwork with coaches, teammates, and support around the sport.</li>
            <li>Travel for training camps and competition experiences.</li>
            <li>Learning from coaches and teammates at every stage.</li>
            <li>Balancing school and sport as part of long-term development.</li>
          </ul>
          <p className="mt-12 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
            The Journey Continues.
          </p>
        </RevealSection>
      </main>
    </div>
  );
}
