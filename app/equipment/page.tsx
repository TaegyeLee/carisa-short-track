import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/national-team/section-heading";
import { SiteNav } from "@/components/site-nav";
import { RevealSection } from "@/components/site/reveal-section";
import { bodyText, contentMaxWidth, eyebrowText, sectionPad } from "@/lib/site/ui";

export const metadata: Metadata = {
  title: "Equipment & Blade Sharpening | Carisa Lee",
  description:
    "Speed skating equipment, blade setup, sharpening, and maintenance.",
};

const sharpeningSteps = [
  { step: "01", title: "Clean" },
  { step: "02", title: "Inspect" },
  { step: "03", title: "Sharpen" },
  { step: "04", title: "Deburr" },
  { step: "05", title: "Check" },
];

const equipmentFeatureCards = [
  {
    label: "01 — PROTECTION",
    title: "Cut-Resistant Suit",
    description:
      "Short-track skaters wear specialized cut-resistant protective clothing designed to reduce the risk of serious injuries from skate blades.",
    icon: "suit" as const,
  },
  {
    label: "02 — PROTECTION",
    title: "Cut-Resistant Gloves",
    description:
      "These specialized gloves help protect the hands from extremely sharp skate blades during close racing and high-speed cornering.",
    icon: "gloves" as const,
  },
  {
    label: "03 — PERFORMANCE",
    title: "Long Blades",
    description:
      "Short-track blades are longer and shaped specifically for high-speed cornering, stability, and control on a very tight track.",
    icon: "blades" as const,
  },
];

const builtForIcePoints = [
  {
    label: "01 — PROTECTION",
    text: "Cut-resistant suits and gloves help protect athletes from sharp blades during high-speed racing.",
  },
  {
    label: "02 — BLADE SETUP",
    text: "Blade position, alignment, and rocker shape are carefully adjusted to suit the skater and their style.",
  },
  {
    label: "03 — CORNERING",
    text: "Short-track blades are designed to help athletes maintain speed, balance, and control through tight corners.",
  },
  {
    label: "04 — MAINTENANCE",
    text: "Regular sharpening, alignment checks, and equipment maintenance are essential for consistent performance.",
  },
];

function EquipmentFeatureIcon({ type }: { type: "suit" | "gloves" | "blades" }) {
  const shared = "h-7 w-7 text-[#e31837] sm:h-8 sm:w-8";

  if (type === "suit") {
    return (
      <svg
        className={shared}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 4L22 10v14H10V10L16 4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 14h8M14 18h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "gloves") {
    return (
      <svg
        className={shared}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 14V9a2 2 0 012-2h1v7M17 7h1a2 2 0 012 2v5M20 14v8a3 3 0 01-3 3h-2a3 3 0 01-3-3v-9a2 2 0 012-2h1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      className={shared}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 22c8-2 12-2 20 0M8 20l16-6M10 18l12-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="12" r="2" fill="currentColor" />
    </svg>
  );
}

export default function EquipmentPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <SiteNav activeHref="/equipment" />

      <main id="main-content">
        <section className="border-b border-[#202a3a] bg-[#0a0f1c]">
          <div className={`${contentMaxWidth} ${sectionPad} pt-24 sm:pt-28`}>
            <p className={eyebrowText}>Equipment</p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl lg:text-6xl">
              Equipment &amp; Blade Sharpening
            </h1>
            <p className="mt-6 font-display text-lg font-semibold uppercase tracking-wide text-[#9aa8bc]">
              Precision matters.
            </p>
          </div>
        </section>

        <RevealSection className={`${contentMaxWidth} ${sectionPad}`}>
          <ul className="grid gap-8 sm:gap-10 lg:grid-cols-3 lg:gap-8">
            {equipmentFeatureCards.map((card) => (
              <li
                key={card.title}
                className="group relative flex h-full flex-col overflow-hidden border border-[#202a3a] bg-[#0d1422] p-7 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#e31837]/45 sm:p-8"
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#e31837] to-transparent opacity-80"
                  aria-hidden
                />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.24em] text-[#e31837] sm:text-xs">
                    {card.label}
                  </p>
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#e31837]/35 bg-[#e31837]/10 transition-colors duration-200 group-hover:border-[#e31837]/55 group-hover:bg-[#e31837]/15 sm:h-14 sm:w-14"
                    aria-hidden
                  >
                    <EquipmentFeatureIcon type={card.icon} />
                  </div>
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:text-[1.65rem] lg:text-3xl">
                  {card.title}
                </h2>
                <div className="mt-3 h-px w-12 bg-[#e31837]/80" aria-hidden />
                <p className={`mt-5 flex-1 ${bodyText}`}>{card.description}</p>
              </li>
            ))}
          </ul>

          <figure className="mx-auto mt-12 w-full max-w-5xl lg:mt-16">
            <Image
              src="/images/short-track-speed-skating-equipment-guide.png"
              alt="Diagram explaining the basic structure and characteristics of short-track speed skating equipment"
              width={1200}
              height={800}
              className="mx-auto h-auto w-full max-w-full border border-[#202a3a] bg-[#0d1422]"
              sizes="(max-width: 1280px) 100vw, 1024px"
            />
          </figure>

          <div className="mt-12 lg:mt-16">
            <SectionHeading title="Understanding the Equipment" />
            <p className={`mt-8 max-w-[750px] ${bodyText}`}>
              Short-track speed skating equipment is designed for stability,
              control, and speed. Unlike recreational skates, short-track skates
              are built specifically for tight corners, powerful pushes, and
              high-speed racing.
            </p>

            <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-3 lg:gap-8">
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                  Skates
                </h3>
                <div className="mt-3 h-px w-10 bg-[#e31837]/80" aria-hidden />
                <p className={`mt-4 ${bodyText}`}>
                  Short-track boots are designed to provide a secure fit and
                  strong support while allowing athletes to maintain control
                  through fast, tight turns.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                  Blades
                </h3>
                <div className="mt-3 h-px w-10 bg-[#e31837]/80" aria-hidden />
                <p className={`mt-4 ${bodyText}`}>
                  Short-track blades are longer and specially shaped for racing.
                  Their setup, alignment, and positioning are carefully adjusted
                  to help athletes maintain stability and maximize speed.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
                  Sharpening
                </h3>
                <div className="mt-3 h-px w-10 bg-[#e31837]/80" aria-hidden />
                <p className={`mt-4 ${bodyText}`}>
                  Blade sharpening is an essential part of short-track
                  preparation. A properly sharpened and maintained blade helps
                  provide consistent grip on the ice, especially when entering
                  and exiting corners.
                </p>
              </div>
            </div>

            <p className={`mt-10 max-w-[750px] text-sm leading-[1.75] text-[#9aa8bc] sm:mt-12 sm:text-base`}>
              Equipment setup can vary depending on the athlete, skating style,
              and level of competition.
            </p>
          </div>
        </RevealSection>

        <RevealSection className="border-y border-[#202a3a] bg-[#0a0f1c]">
          <div className={`${contentMaxWidth} ${sectionPad}`}>
            <SectionHeading title="Sharpening" subtitle="Step-by-step routine (general)" />
            <ol className="mt-12 grid gap-4 sm:grid-cols-5 sm:gap-3">
              {sharpeningSteps.map((item) => (
                <li
                  key={item.step}
                  className="border border-[#202a3a] bg-[#0d1422] p-5 text-center transition-colors duration-200 hover:border-[#e31837]/35"
                >
                  <p className="font-display text-sm font-bold text-[#e31837]">
                    {item.step}
                  </p>
                  <p className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-white">
                    {item.title}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mx-auto mt-12 w-full max-w-4xl lg:mt-16 xl:max-w-5xl">
              <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.28em] text-[#e31837] sm:text-sm">
                Watch: Blade Sharpening
              </p>
              <div className="relative mt-5 aspect-video w-full overflow-hidden border border-[#202a3a] bg-[#0d1422] shadow-[0_0_0_1px_rgba(227,24,55,0.08)]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/cwL6B6dTN8o"
                  title="Blade sharpening demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </RevealSection>

        <RevealSection className={`${contentMaxWidth} ${sectionPad}`}>
          <SectionHeading
            title="Built for the Ice"
            subtitle="Every piece of equipment is designed around speed, control, protection, and precision."
          />

          <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">
            <div className="relative h-full min-h-[220px] w-full overflow-hidden border border-[#202a3a] bg-[#0d1422] sm:min-h-[280px] lg:min-h-[420px]">
              <Image
                src="/images/short-track-equipment-protection.png"
                alt="Short-track speed skating equipment and protective gear"
                fill
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover object-center"
              />
              <div
                className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-[#e31837]/85"
                aria-hidden
              />
            </div>

            <div className="flex flex-col justify-center border border-[#202a3a] bg-[#0d1422]/40 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <ul className="divide-y divide-[#202a3a]">
                {builtForIcePoints.map((point) => (
                  <li key={point.label} className="py-6 first:pt-0 last:pb-0">
                    <p className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.26em] text-[#e31837] sm:text-xs">
                      {point.label}
                    </p>
                    <p className={`mt-3 max-w-md ${bodyText}`}>{point.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </RevealSection>
      </main>
    </div>
  );
}
