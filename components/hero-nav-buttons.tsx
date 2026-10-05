import Link from "next/link";

const heroLinks = [
  {
    label: "CANADA'S NATIONAL TEAM",
    href: "/national-team",
    positionClass:
      "md:absolute md:top-[max(4.5rem,12%)] md:left-[max(0.75rem,2.5vw)] md:right-auto md:bottom-auto lg:top-[max(4.75rem,13%)]",
  },
  {
    label: "SKATING TRAINING",
    href: "/training",
    positionClass:
      "md:absolute md:top-[max(4.5rem,12%)] md:right-[max(0.75rem,2.5vw)] md:left-auto md:bottom-auto lg:top-[max(4.75rem,13%)]",
  },
  {
    label: "EQUIPMENT & BLADE SHARPENING",
    href: "/equipment",
    positionClass:
      "md:absolute md:bottom-[max(1rem,7%)] md:left-[max(0.75rem,2.5vw)] md:right-auto md:top-auto",
  },
  {
    label: "CARISA",
    href: "/carisa",
    positionClass:
      "md:absolute md:bottom-[max(1rem,7%)] md:right-[max(0.75rem,2.5vw)] md:left-auto md:top-auto",
  },
] as const;

const tileClassName =
  "group inline-flex w-full max-w-[11.25rem] flex-col items-center justify-center gap-2 rounded-lg border border-white/10 bg-linear-to-b from-white/16 to-black/30 px-4 py-3.5 text-center font-display text-[0.625rem] font-bold leading-snug tracking-[0.13em] text-white/95 shadow-[0_10px_36px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-lg transition-[transform,background-color,box-shadow,border-color,filter] duration-300 ease-out hover:scale-[1.03] hover:border-white/18 hover:from-white/24 hover:to-black/24 hover:shadow-[0_14px_44px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.18)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/45 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 sm:max-w-none sm:px-5 sm:py-4 sm:text-[0.6875rem] md:absolute md:max-w-[9.75rem] md:px-4 md:py-3.5 md:text-[0.625rem] lg:max-w-[11rem] lg:px-5 lg:py-4 lg:text-[0.75rem] xl:max-w-[12.5rem] xl:px-6 xl:py-5 xl:text-[0.8125rem]";

export function HeroNavButtons() {
  return (
    <nav
      aria-label="Hero section navigation"
      className="pointer-events-auto absolute inset-x-0 bottom-0 z-20 px-4 pb-5 pt-2 sm:px-5 sm:pb-6 md:inset-0 md:px-0 md:pb-0 md:pt-0"
    >
      <ul className="mx-auto grid max-w-md grid-cols-2 gap-2.5 sm:max-w-lg sm:gap-3 md:relative md:mx-0 md:h-full md:max-w-none md:grid-cols-1 md:gap-0">
        {heroLinks.map((item) => (
          <li key={item.href} className="flex justify-center md:contents">
            <Link
              href={item.href}
              className={`${tileClassName} ${item.positionClass}`}
            >
              <span>{item.label}</span>
              <span
                aria-hidden
                className="text-sm font-normal leading-none text-white/35 transition-[color,transform] duration-300 ease-out group-hover:translate-x-0.5 group-hover:text-white/90 sm:text-base"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
