"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteNavItems } from "@/lib/site-nav-items";

const defaultFooterLinks = [
  { label: "Home", href: "/" },
  { label: "Carisa", href: "/carisa" },
  { label: "Competitions", href: "/national-team" },
  { label: "Training", href: "/training" },
  { label: "Equipment", href: "/equipment" },
] as const;

const pageFooterContent: Record<
  string,
  { heading: string; tagline: string; useMainNav: true }
> = {
  "/equipment": {
    heading: "Built for Short Track.",
    tagline: "Speed. Precision. Control.",
    useMainNav: true,
  },
  "/training": {
    heading: "Short Track Speed Skating.",
    tagline: "Speed. Precision. Strategy.",
    useMainNav: true,
  },
  "/national-team": {
    heading: "Canada's Short Track Speed Skating.",
    tagline: "Canada's National Team · Short Track Speed Skating",
    useMainNav: true,
  },
};

const bodyMuted =
  "text-sm leading-[1.8] text-[#9aa8bc] sm:text-[0.9375rem] lg:leading-[1.85]";

function FooterNav({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <nav
      aria-label="Footer"
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
    >
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-white/75 transition-colors duration-200 hover:text-white"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const pageFooter = pageFooterContent[pathname ?? ""];

  const heading = pageFooter?.heading ?? "The Journey Continues.";
  const tagline =
    pageFooter?.tagline ?? "Carisa Lee · Short Track Speed Skating";
  const footerLinks = pageFooter?.useMainNav ? siteNavItems : defaultFooterLinks;
  const editorialTagline = Boolean(pageFooter);

  if (isHomePage) {
    return (
      <footer className="border-t border-[#202a3a] bg-[#070b14]">
        <div className="mx-auto max-w-[1280px] px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Canada&apos;s Short Track Speed Skating
          </p>
          <div className="mx-auto mt-5 h-px w-16 bg-[#e31837]" aria-hidden />
          <p className="mt-6 text-sm text-white/90 sm:text-base">
            A personal project by Carisa Lee
          </p>
          <p className="mt-2 text-xs tracking-[0.08em] text-[#9aa8bc] sm:text-sm">
            Grade 8 · Harry Bowes Public School · 2026
          </p>
          <p className={`mx-auto mt-8 max-w-2xl ${bodyMuted}`}>
            Built to share the excitement of short track speed skating with people
            across Canada — a country with a strong tradition and a bright future
            in the sport.
          </p>
          <p className={`mx-auto mt-6 max-w-2xl ${bodyMuted}`}>
            This website will continue to grow and be updated with new information,
            athletes, training, equipment, and stories from the world of short
            track.
          </p>
          <div className="mt-10 sm:mt-12">
            <FooterNav links={siteNavItems} />
          </div>
          <p className="mt-10 text-xs text-[#9aa8bc]/90 sm:mt-12">
            Copyright © 2026 Carisa Lee. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-[#202a3a] bg-[#070b14]">
      <div className="mx-auto max-w-[1280px] px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        <p className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          {heading}
        </p>
        <div className="mx-auto mt-5 h-px w-16 bg-[#e31837]" aria-hidden />
        <p
          className={`mt-6 text-sm text-[#9aa8bc] ${
            editorialTagline ? "tracking-[0.12em]" : "uppercase tracking-[0.2em]"
          }`}
        >
          {tagline}
        </p>
        <div className="mt-8">
          <FooterNav links={footerLinks} />
        </div>
      </div>
      <div className="border-t border-[#202a3a]">
        <p className="mx-auto max-w-[1280px] px-5 py-5 text-center text-xs text-[#9aa8bc] sm:px-6 lg:px-8">
          © 2026 Carisa Lee. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
