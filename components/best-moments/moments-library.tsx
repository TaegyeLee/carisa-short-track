"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/national-team/section-heading";
import { RevealSection } from "@/components/site/reveal-section";
import { MomentVideoCard } from "@/components/best-moments/moment-video-card";
import {
  momentSections,
  momentsByCategory,
} from "@/lib/best-moments/content";
import { contentMaxWidth, sectionPad } from "@/lib/site/ui";

export function MomentsLibrary() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <>
      {momentSections.map((section, index) => {
        const moments = momentsByCategory(section.id);
        if (moments.length === 0) return null;
        const isAlt = index % 2 === 1;

        return (
          <RevealSection
            key={section.id}
            className={isAlt ? "border-y border-[#202a3a] bg-[#0a0f1c]" : ""}
          >
            <div className={`${contentMaxWidth} ${sectionPad}`}>
              <SectionHeading
                title={section.title}
                subtitle={section.subtitle}
              />
              <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
                {moments.map((moment) => (
                  <li key={moment.id}>
                    <MomentVideoCard
                      moment={moment}
                      isPlaying={playingId === moment.id}
                      onPlay={setPlayingId}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </RevealSection>
        );
      })}
    </>
  );
}
