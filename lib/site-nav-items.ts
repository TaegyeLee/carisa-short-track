export const siteNavItems = [
  { label: "Home", href: "/" },
  { label: "Canada's National Team", href: "/national-team" },
  {
    label: "Canada's Best Races",
    labelFr: "Les meilleures courses du Canada",
    href: "/best-moments",
  },
  { label: "Skating Training", href: "/training" },
  { label: "Equipment & Blade Sharpening", href: "/equipment" },
  { label: "Carisa", href: "/carisa" },
] as const;

export function getSiteNavLabel(
  item: { label: string; labelFr?: string },
  locale = "en",
) {
  if (locale.startsWith("fr") && item.labelFr) {
    return item.labelFr;
  }

  return item.label;
}
