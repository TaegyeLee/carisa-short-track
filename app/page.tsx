import { HeroNavButtons } from "@/components/hero-nav-buttons";
import { RevealSection } from "@/components/site/reveal-section";
import { SiteNav } from "@/components/site-nav";
import { bodyText, contentMaxWidth, eyebrowText, sectionPad } from "@/lib/site/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070b14]">
      <SiteNav activeHref="/" />

      {/* Hero */}
      <section className="relative min-h-[100dvh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/william-hero.png')] bg-cover bg-center bg-no-repeat"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-[#070b14]/80 via-[#070b14]/55 to-[#070b14]/85"
          aria-hidden
        />
        <div className="absolute inset-0 z-10 flex flex-col">
          <div
            className={`${contentMaxWidth} pointer-events-none flex flex-1 flex-col items-center justify-center px-5 pb-32 pt-24 text-center sm:px-6 sm:pt-28 lg:px-8`}
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
          <HeroNavButtons />
        </div>
      </section>

      <RevealSection className="border-t border-[#202a3a] bg-[#0a0f1c]">
        <div className={`${contentMaxWidth} ${sectionPad}`}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div
              className="relative aspect-[16/10] overflow-hidden border border-[#202a3a] bg-[#0d1422] bg-[url('/images/william-hero.png')] bg-cover bg-center"
              role="img"
              aria-label="Short track speed skating"
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e31837]/85" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
                One Lap at a Time.
              </h2>
              <div className="mt-5 h-px w-16 bg-[#e31837]" aria-hidden />
              <p className={`mt-8 ${bodyText}`}>
                Speed skating is measured in seconds. The journey is measured in
                years.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
