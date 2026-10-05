import type { Metadata } from "next";
import Image from "next/image";
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
            <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10 xl:gap-12">
              <div className="lg:col-span-7">
                <p className={eyebrowText}>Athlete Profile</p>
                <h1 className="mt-4 font-display text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">
                  Carisa Lee
                </h1>
                <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    ["Year of Birth", "2013"],
                    ["Sport", "Short Track Speed Skating"],
                    ["Club", "Newmarket Jets Speed Skating Club"],
                    ["Province", "Ontario, Canada"],
                    ["Discipline", "Short Track"],
                    ["Current Focus", "Long-term athlete development"],
                  ].map(([term, value]) => (
                    <div
                      key={term}
                      className="border border-[#202a3a] bg-[#0d1422] p-4"
                    >
                      <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[#e31837]">
                        {term}
                      </dt>
                      <dd className="mt-2 text-sm text-white/90 sm:text-base">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <figure className="w-full max-w-full lg:col-span-5 lg:flex lg:self-stretch">
                <div className="relative min-h-[280px] w-full overflow-hidden border border-[#202a3a] bg-[#0d1422] sm:min-h-[320px] lg:h-full lg:min-h-0 lg:flex-1">
                  <Image
                    src="/images/carisalee.jpg"
                    alt="Carisa Lee skating in a short track race"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-[center_42%]"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-[#e31837]/85"
                    aria-hidden
                  />
                </div>
              </figure>
            </div>
          </div>
        </section>

        <RevealSection className={`${contentMaxWidth} ${sectionPad}`}>
          <SectionHeading title="About Carisa" />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className={`space-y-6 lg:col-span-7 ${bodyText}`}>
              <p>
                Carisa first stepped onto the ice in 2022 and quickly discovered a
                passion for skating. She began her speed skating journey through
                regional competitions, starting in one of the lower groups and
                gradually working her way up to the provincial level through
                consistent training and determination.
              </p>
              <p>
                In 2025, her hard work led to her selection to Team Ontario,
                representing Ontario at the Canada East Youth Short Track
                Championships. She continues to train and compete, building her
                skills and experience on the ice.
              </p>
              <p>
                The strength and fitness developed through speed skating have also
                encouraged Carisa to explore other sports, where she continues to
                challenge herself and participate in a variety of competitions.
              </p>
            </div>
            <figure className="mx-auto w-full max-w-[500px] lg:col-span-5 lg:mx-0 lg:justify-self-end">
              <div className="overflow-hidden rounded-sm border border-[#202a3a] bg-[#0d1422] p-4 sm:p-5">
                <Image
                  src="/images/carisa_medal.png"
                  alt="Carisa Lee with a competition medal"
                  width={500}
                  height={500}
                  sizes="(max-width: 1024px) min(100vw, 500px), 420px"
                  className="mx-auto h-auto w-full max-w-[420px] object-contain sm:max-w-[480px] lg:max-w-[500px]"
                />
              </div>
            </figure>
          </div>
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
