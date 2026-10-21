/**
 * Canadian short track highlight videos.
 *
 * Store verified CBC Sports (or other official) YouTube IDs on `youtubeId`.
 * Never guess an ID. Cards without `youtubeId` render as an external-source
 * link instead of a fake embed.
 */

export const momentCategories = [
  "olympic-glory",
  "canadian-stars",
  "canadian-racing",
  "athlete-stories",
] as const;

export type MomentCategory = (typeof momentCategories)[number];

export type BestMoment = {
  id: string;
  title: string;
  athletes: string[];
  event: string;
  year: string;
  category: MomentCategory;
  description: string;
  /** Verified YouTube video ID. Omit when only an external source is available. */
  youtubeId?: string;
  /** Original video or article URL. */
  watchUrl: string;
  source: string;
  /** Optional label for the YouTube fallback / outbound link. */
  watchLinkLabel?: string;
};

export type MomentSection = {
  id: MomentCategory;
  title: string;
  subtitle: string;
};

export const momentSections: MomentSection[] = [
  {
    id: "olympic-glory",
    title: "Olympic Glory",
    subtitle:
      "Canadian skaters have written Olympic history in individual races and on the podium.",
  },
  {
    id: "canadian-stars",
    title: "Canadian Stars",
    subtitle:
      "From legendary careers to the athletes carrying Canada's program forward.",
  },
  {
    id: "canadian-racing",
    title: "Canadian Racing",
    subtitle:
      "National championships and World Tour racing, covered by CBC Sports.",
  },
  {
    id: "athlete-stories",
    title: "Athlete Stories",
    subtitle:
      "The people behind the results — how Canadian skaters arrived on the world stage.",
  },
];

export const bestMoments: BestMoment[] = [
  {
    id: "hamelin-500-vancouver-2010",
    title: "Home Ice Gold in the 500m",
    athletes: ["Charles Hamelin"],
    event: "Olympic Winter Games · Men's 500m",
    year: "2010",
    category: "olympic-glory",
    description:
      "Charles Hamelin won Olympic gold in the men's 500m at Vancouver 2010, racing in front of a home crowd at the Pacific Coliseum.",
    youtubeId: "llSTR61mGwg",
    watchUrl: "https://youtu.be/llSTR61mGwg",
    source: "Official Vancouver 2010 Olympic video",
    watchLinkLabel: "Watch on YouTube",
  },
  {
    id: "dandjinou-world-tour-1500",
    title: "William Dandjinou Wins World Tour 1500m Gold",
    athletes: ["William Dandjinou"],
    event: "ISU Short Track World Tour",
    year: "Men's 1500m",
    category: "canadian-stars",
    description:
      "CBC Sports coverage of Montreal's William Dandjinou winning gold in the men's 1,500m at an ISU Short Track World Tour final.",
    youtubeId: "A08pPAs6efw",
    watchUrl: "https://www.youtube.com/watch?v=A08pPAs6efw",
    source: "CBC Sports",
  },
  {
    id: "canadian-championships-day-1",
    title: "Canadian Short Track Speed Skating Championships — Day 1",
    athletes: [
      "William Dandjinou",
      "Courtney Sarault",
      "Kim Boutin",
      "Steven Dubois",
      "Félix Roussel",
    ],
    event: "Canadian Championships",
    year: "Day 1",
    category: "canadian-racing",
    description:
      "CBC Sports live coverage of Day 1 at the Canadian Short Track Speed Skating Championships, featuring Canada's national-team skaters.",
    youtubeId: "Y6hqUB81vLY",
    watchUrl: "https://www.youtube.com/watch?v=Y6hqUB81vLY",
    source: "CBC Sports",
  },
  {
    id: "canadian-championships-day-2",
    title: "Canadian Short Track Speed Skating Championships — Day 2",
    athletes: [
      "William Dandjinou",
      "Courtney Sarault",
      "Kim Boutin",
      "Steven Dubois",
      "Félix Roussel",
    ],
    event: "Canadian Championships",
    year: "Day 2",
    category: "canadian-racing",
    description:
      "CBC Sports live coverage of Day 2 at the Canadian Short Track Speed Skating Championships, including the 1,000m and 1,500m distances.",
    youtubeId: "FjUTTZO1E_8",
    watchUrl: "https://www.youtube.com/watch?v=FjUTTZO1E_8",
    source: "CBC Sports",
  },
  {
    id: "dandjinou-road-to-olympic-debut",
    title: "William Dandjinou — Road to Olympic Debut",
    athletes: ["William Dandjinou"],
    event: "Road to the Olympic Winter Games",
    year: "Olympic debut",
    category: "athlete-stories",
    description:
      "CBC Sports feature on William Dandjinou ahead of his Olympic debut, talking about passion for short track, family, and representing Canada.",
    youtubeId: "Vbg1aRXB1Yc",
    watchUrl: "https://www.youtube.com/watch?v=Vbg1aRXB1Yc",
    source: "CBC Sports",
  },
];

export function momentsByCategory(category: MomentCategory): BestMoment[] {
  return bestMoments.filter((moment) => moment.category === category);
}

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedSrc(videoId: string) {
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`;
}

export function youtubeThumbnailSrc(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function youtubeThumbnailSrc16x9(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
}
