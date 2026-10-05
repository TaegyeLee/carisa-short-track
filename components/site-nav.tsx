"use client";

import Link from "next/link";
import { useState } from "react";
import { siteNavItems } from "@/lib/site-nav-items";

type SiteNavProps = {
  activeHref: string;
};

export function SiteNav({ activeHref }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[#202a3a] bg-[#070b14]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-end gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[#202a3a] text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>

        <nav
          id="site-navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full max-h-[calc(100dvh-3rem)] flex-col gap-0.5 overflow-y-auto border-b border-[#202a3a] bg-[#070b14] px-4 py-3 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-1 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {siteNavItems.map((item) => {
            const isActive = item.href === activeHref;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`px-2.5 py-2 text-xs font-medium tracking-wide transition-[color,border-color] duration-200 sm:text-sm lg:text-[0.8125rem] ${
                  isActive
                    ? "border-b-2 border-[#e31837] text-white"
                    : "border-b-2 border-transparent text-white/80 hover:border-[#e31837]/40 hover:text-white"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
