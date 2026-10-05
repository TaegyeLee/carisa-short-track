import { SectionHeading } from "@/components/national-team/section-heading";

const bodyText =
  "text-base leading-[1.8] text-[#9aa8bc] sm:text-[1.0625rem] lg:leading-[1.85]";

const statCard =
  "border border-[#202a3a] bg-[#0d1422] p-6 sm:p-8 lg:p-10";

function MedalStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className={`${statCard} text-center`}>
      <p className="font-display text-4xl font-bold tabular-nums text-white sm:text-5xl lg:text-6xl">
        {value}
      </p>
      <p className="mt-3 font-display text-xs font-semibold uppercase tracking-[0.22em] text-[#e31837] sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function HighlightStat({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <div className={`${statCard} flex flex-col justify-center`}>
      <p className="font-display text-5xl font-bold tabular-nums leading-none text-white sm:text-6xl lg:text-7xl">
        {value}
      </p>
      <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#e31837] sm:text-base">
        {label}
      </p>
      {detail ? (
        <p className={`mt-4 text-sm leading-[1.75] sm:text-base ${bodyText}`}>
          {detail}
        </p>
      ) : null}
    </div>
  );
}

type CanadaLegacySectionsProps = {
  contentMaxWidth: string;
};

export function CanadaLegacySections({
  contentMaxWidth,
}: CanadaLegacySectionsProps) {
  return (
    <>
      {/* Canada's Short Track Legacy */}
      <section className="border-y border-[#202a3a] bg-[#0a0f1c]">
        <div
          className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
        >
          <SectionHeading
            eyebrow="A Powerhouse in Short Track"
            title="Canada's Short Track Legacy"
            subtitle="Canada has been one of the world's strongest nations in short track speed skating for decades."
          />

          <div className="mt-12 lg:mt-16">
            <div
              className={`${statCard} border-[#e31837]/35 lg:flex lg:items-center lg:gap-12 xl:gap-16`}
            >
              <div className="shrink-0 text-center lg:text-left">
                <p
                  className="font-display text-[4.5rem] font-bold tabular-nums leading-[0.9] text-white sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem]"
                  aria-label="42 Olympic short track medals"
                >
                  42
                </p>
                <p className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.24em] text-[#e31837] sm:text-base lg:max-w-[14rem]">
                  Olympic Short Track Medals
                </p>
              </div>
              <div className="mt-8 border-t border-[#202a3a] pt-8 lg:mt-0 lg:flex-1 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12 xl:pl-16">
                <p className={bodyText}>
                  Since short track speed skating officially became an Olympic
                  sport in 1992, Canadian athletes have won 42 Olympic medals
                  in short track speed skating.
                </p>
                <ul className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
                  <li>
                    <MedalStat value="11" label="Gold" />
                  </li>
                  <li>
                    <MedalStat value="15" label="Silver" />
                  </li>
                  <li>
                    <MedalStat value="16" label="Bronze" />
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 border border-[#202a3a] bg-[#070b14] p-6 sm:mt-8 sm:p-8">
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-[#e31837] sm:text-sm">
                Milano Cortina 2026
              </p>
              <p className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
                5 Olympic Short Track Medals
              </p>
              <p className={`mt-4 ${bodyText}`}>
                This total includes Canada&apos;s 5 short track medals from
                the Milano Cortina 2026 Olympic Winter Games: 1 gold, 2 silver,
                and 2 bronze.
              </p>
            </div>

            <p className={`mt-10 max-w-3xl sm:mt-12 ${bodyText}`}>
              Canada has built one of the strongest traditions in Olympic short
              track speed skating. From the early years of the sport to
              today&apos;s generation of athletes, Canadian skaters have
              consistently competed for medals on the world&apos;s biggest
              stage.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Momentum */}
      <section
        className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
      >
        <SectionHeading
          title="Recent Momentum"
          subtitle="Canada's success is continuing into a new generation."
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-8">
          <li>
            <HighlightStat
              value="5"
              label="Olympic Medals · Milano Cortina 2026"
              detail="Canada won five short track Olympic medals at the Milano Cortina 2026 Olympic Winter Games."
            />
          </li>
          <li>
            <HighlightStat
              value="31"
              label="World Tour Medals · 2025–26"
              detail="During the 2025–26 season, Canada's short track team won 31 World Tour medals."
            />
          </li>
          <li>
            <HighlightStat
              value="3"
              label="ISU Crystal Globes · 2025–26"
              detail="Canadian athletes captured all three ISU Crystal Globes during the season."
            />
          </li>
        </ul>

        <p className="mt-10 max-w-3xl font-display text-lg font-semibold uppercase leading-snug tracking-wide text-white sm:mt-12 sm:text-xl lg:text-2xl">
          Canada is not simply carrying a successful tradition — a new
          generation is continuing to push the program forward.
        </p>
      </section>

      {/* The Next Generation */}
      <section className="border-y border-[#202a3a] bg-[#0a0f1c]">
        <div
          className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
        >
          <SectionHeading title="The Next Generation" />
          <div className="mt-8 max-w-3xl space-y-6 sm:mt-10 sm:space-y-8">
            <p className={bodyText}>
              Canada&apos;s strength extends beyond its senior athletes. For
              the 2026–27 season, 40 skaters were selected across
              Canada&apos;s National, NextGen and National B short track teams,
              representing three provinces.
            </p>
            <p className={bodyText}>
              Canada also has a structured junior pathway. The Canadian Junior
              Short Track Championships brings together athletes aged 15–18,
              with results contributing to selection for the ISU World Junior
              Short Track Championships and the Junior World Cup circuit.
            </p>
            <p className={`border-l-2 border-[#e31837] pl-5 sm:pl-6 ${bodyText}`}>
              Strong junior and development programs help create a continuous
              pathway from youth competition to the national team and eventually
              the international stage.
            </p>
          </div>
        </div>
      </section>

      {/* From Clubs to the World Stage */}
      <section
        className={`${contentMaxWidth} px-5 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32`}
      >
        <SectionHeading title="From Clubs to the World Stage" />
        <div className="mt-8 max-w-3xl space-y-6 sm:mt-10 sm:space-y-8">
          <p className={bodyText}>
            Canada&apos;s short track strength is built from the ground up —
            through local clubs, provincial programs, youth and junior
            competitions, national championships, and high-performance training.
          </p>
          <p className={bodyText}>
            That pathway gives young Canadian skaters the opportunity to
            develop, compete, and dream of representing Canada on the world
            stage.
          </p>
        </div>
      </section>
    </>
  );
}
