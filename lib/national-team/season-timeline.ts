import type { JourneyTimelineItem } from "@/components/journey-timeline";

export const nationalTeamSeasonTimeline: JourneyTimelineItem[] = [
  {
    id: "development",
    period: "Development",
    title: "Clubs & Provincial Sport",
    description:
      "Building skills through clubs, provincial programs, and national development events.",
    status: "default",
  },
  {
    id: "national",
    period: "National",
    title: "Championships & Trials",
    description:
      "Domestic championships and selection pathways toward the national team.",
    status: "active",
  },
  {
    id: "international",
    period: "International",
    title: "World Stage",
    description:
      "World Cups, World Championships, and the Olympic Winter Games.",
    status: "future",
  },
];
