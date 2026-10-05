import fs from "node:fs";
import path from "node:path";

const publicRoot = path.join(process.cwd(), "public");

function publicAssetExists(relativePath: string): boolean {
  return fs.existsSync(path.join(publicRoot, relativePath));
}

function firstPublicAsset(
  candidates: { relativePath: string; url: string }[],
): string | undefined {
  for (const candidate of candidates) {
    if (publicAssetExists(candidate.relativePath)) {
      return candidate.url;
    }
  }
  return undefined;
}

export function getNationalTeamHeroSrc(): string | undefined {
  return firstPublicAsset([
    { relativePath: "images/national_team_photo.jpg", url: "/images/national_team_photo.jpg" },
    { relativePath: "images/national-team.jpg", url: "/images/national-team.jpg" },
  ]);
}

export function getJourneyPhotoSrc(): string | undefined {
  return firstPublicAsset([
    { relativePath: "journey-photo.jpg", url: "/journey-photo.jpg" },
    { relativePath: "images/journey-photo.jpg", url: "/images/journey-photo.jpg" },
    { relativePath: "images/journey-photo.jfif", url: "/images/journey-photo.jfif" },
  ]);
}

export function getTeamOntarioCompetitionSrc(): string | undefined {
  return firstPublicAsset([
    { relativePath: "team-ontario-photo.jpg", url: "/team-ontario-photo.jpg" },
    { relativePath: "images/team-ontario-photo.jpg", url: "/images/team-ontario-photo.jpg" },
    { relativePath: "images/team-ontario.jpg", url: "/images/team-ontario.jpg" },
  ]);
}
