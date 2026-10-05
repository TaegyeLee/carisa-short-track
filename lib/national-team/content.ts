export type PathStage = {
  step: string;
  title: string;
  description: string;
};

export type CompetitionEntry = {
  slug: string;
  title: string;
  category: string;
  location?: string;
  description: string;
  detailLines?: string[];
  image?: string;
  imageAlt?: string;
};

export type MilestoneEntry = {
  step: string;
  title: string;
  description: string;
};

export const pathStages: PathStage[] = [
  {
    step: "01",
    title: "Clubs & Youth",
    description:
      "Athletes develop through local clubs, learn racing fundamentals, and gain early competitive experience across Canada.",
  },
  {
    step: "02",
    title: "Provincial Programs",
    description:
      "Provincial teams and high-performance pathways connect club skaters to stronger training environments and higher-level domestic competition.",
  },
  {
    step: "03",
    title: "National Development",
    description:
      "National camps, trials, and development programs identify athletes ready for advanced training and national-level competition.",
  },
  {
    step: "04",
    title: "Team Canada",
    description:
      "Elite athletes represent Canada at the highest levels of short track speed skating on the national and international stage.",
  },
];

export const competitions: CompetitionEntry[] = [
  {
    slug: "national-program",
    title: "The National Program",
    category: "Program",
    description:
      "A high-performance pathway that supports athletes through advanced training, competition, coaching, and athlete development.",
  },
  {
    slug: "provincial-pathways",
    title: "Provincial Pathways",
    category: "Development",
    description:
      "Provincial programs help athletes progress from club competition toward national development opportunities.",
  },
  {
    slug: "international-stage",
    title: "International Stage",
    category: "International",
    description:
      "Canada competes internationally at events such as World Cups, World Championships, and the Olympic Games.",
  },
];

export const milestones: MilestoneEntry[] = [
  {
    step: "01",
    title: "Canada's National Team",
    description:
      "Elite athletes representing Canada in short track speed skating at national and international competitions.",
  },
  {
    step: "02",
    title: "The National Program",
    description:
      "A high-performance pathway that supports athletes through advanced training, competition, coaching, and athlete development.",
  },
  {
    step: "03",
    title: "National Competitions",
    description:
      "Canadian athletes compete through national championships, trials, and other major domestic events to earn opportunities at the highest level.",
  },
  {
    step: "04",
    title: "International Stage",
    description:
      "Canada competes internationally at events such as World Cups, World Championships, and the Olympic Games.",
  },
];

/** Image paths are resolved at build/request time in `lib/national-team/image-paths.ts`. */
