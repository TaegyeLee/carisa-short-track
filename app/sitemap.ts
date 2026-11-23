import type { MetadataRoute } from "next";

const baseUrl = "https://canada-short-track.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/national-team", priority: 0.9 },
    { path: "/best-moments", priority: 0.9 },
    { path: "/training", priority: 0.8 },
    { path: "/equipment", priority: 0.8 },
    { path: "/carisa", priority: 0.8 },
  ];

  return pages.map(({ path, priority }) => ({
    url: new URL(path, baseUrl).toString(),
    changeFrequency: "monthly",
    priority,
  }));
}
