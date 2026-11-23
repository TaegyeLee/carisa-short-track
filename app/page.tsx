import { HeroBackground } from "@/components/home/hero-background";
import { RevealSection } from "@/components/site/reveal-section";
import { SiteNav } from "@/components/site-nav";
import { bodyText, contentMaxWidth, eyebrowText, sectionPad } from "@/lib/site/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b14]">
      <SiteNav activeHref="/" />

      {/* Hero */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden">
        <HeroBackground />
        <div
          className="absolute inset-0 z-[1] bg-linear-to-b from-[#070b14]/80 via-[#070b14]/55 to-[#070b14]/85"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col">
          <div
            className={`${contentMaxWidth} flex flex-1 flex-col items-center justify-center px-5 pb-32 pt-24 text-center sm:px-6 sm:pt-28 lg:px-8`}
          >
            <p className={eyebrowText}>Short Track Speed Skating</p>
            <h1
              lang="fr"
              className="mx-auto mt-6 max-w-5xl font-display text-3xl font-semibold leading-snug tracking-tight text-white text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:mt-8 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl"
            >
              Ne me demande plus au sujet du patinage de vitesse courte-piste!
            </h1>
            <p className={`mt-8 max-w-xl ${bodyText} text-white/80 sm:mt-10`}>
              Training. Competition. Discipline. One lap at a time.
            </p>
          </div>
        </div>
      </section>

      <RevealSection className="border-t border-[#202a3a] bg-[#0a0f1c]">
        <div className={`${contentMaxWidth} ${sectionPad}`}>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className={eyebrowText}>2026/27 ISU Short Track World Tour</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-5xl">
                This Season on Ice
              </h2>
              <p className={`mt-3 ${bodyText}`}>Canada's races, podium moments and skaters to watch.</p>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#9aa8bc]">Results snapshot · Nov 23, 2026</span>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-3">
            <article className="border border-[#26354a] bg-[#101a2a] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e31837]">Seoul · World Tour #3</p>
              <p className="mt-4 font-display text-6xl font-bold text-white">4</p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase text-white">Saturday medals</h3>
              <p className="mt-3 text-sm leading-7 text-[#b7c5d6]">One silver and three bronze medals for Canada on November 21, including a women's 1000m double podium.</p>
              <a href="https://olympic.ca/2026/11/21/canada-captures-four-medals-on-day-one-of-short-track-world-tour-in-seoul/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-white underline decoration-[#e31837] underline-offset-4">Read Team Canada's report ↗</a>
            </article>
            <article className="border border-[#26354a] bg-[#101a2a] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e31837]">Official standings</p>
              <p className="mt-4 font-display text-4xl font-bold uppercase text-white">World Tour Rankings</p>
              <p className="mt-4 text-sm leading-7 text-[#b7c5d6]">See the latest ISU Crystal Globe standings and distance classifications for men, women and teams.</p>
              <a href="https://isu-skating.com/en/short-track/world-standings/?season=47&type=World+Cup+Classification" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-white underline decoration-[#e31837] underline-offset-4">View official ISU rankings ↗</a>
            </article>
            <article className="border border-[#26354a] bg-[#101a2a] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e31837]">Next World Tour stop</p>
              <p className="mt-4 font-display text-4xl font-bold uppercase text-white">Shanghai</p>
              <p className="mt-2 text-lg font-semibold text-white">November 27–29, 2026</p>
              <p className="mt-4 text-sm leading-7 text-[#b7c5d6]">The tour continues in China after the Seoul stop.</p>
              <a href="https://www.isu-skating.com/en/short-track/events/isu-world-tour/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold text-white underline decoration-[#e31837] underline-offset-4">View World Tour calendar ↗</a>
            </article>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-[#202a3a] bg-[#070b14]">
        <div className={`${contentMaxWidth} ${sectionPad}`}>
          <p className={eyebrowText}>Canadian Ice Maples</p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-5xl">Skaters to Watch</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Courtney Sarault", detail: "Women's 1000m · Seoul silver" },
              { name: "Florence Brunelle", detail: "Women's 1000m · Seoul bronze" },
              { name: "Mathieu Pelletier", detail: "Men's 500m · Seoul bronze" },
              { name: "Félix Roussel", detail: "Men's 1500m · Seoul bronze" },
            ].map((skater) => (
              <article key={skater.name} className="border-l-2 border-[#e31837] bg-[#101a2a] px-5 py-6">
                <h3 className="font-display text-2xl font-bold uppercase text-white">{skater.name}</h3>
                <p className="mt-3 text-sm text-[#b7c5d6]">{skater.detail}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs text-[#9aa8bc]">Seoul results, November 21, 2026 · Source: Team Canada</p>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-[#202a3a] bg-[#0a0f1c]">
        <div className={`${contentMaxWidth} ${sectionPad}`}>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className={eyebrowText}>Race highlights</p>
              <h2 className="mt-3 font-display text-3xl font-bold uppercase text-white sm:text-5xl">Canada's Best Races</h2>
              <p className={`mt-5 ${bodyText}`}>Relive memorable Canadian short-track finishes, podiums and race-day moments.</p>
              <a href="/best-moments" className="mt-6 inline-block border border-[#e31837] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#e31837]">Explore race highlights →</a>
            </div>
            <div className="relative aspect-video overflow-hidden border border-[#26354a] bg-[url('/images/william-hero.png')] bg-cover bg-center" role="img" aria-label="Canadian short-track skater racing on ice">
              <div className="absolute inset-0 bg-linear-to-t from-[#070b14]/60 to-transparent" aria-hidden />
              <div className="absolute bottom-0 inset-x-0 h-1 bg-[#e31837]" aria-hidden />
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
