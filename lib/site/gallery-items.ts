import type { GalleryItem } from "@/components/media-gallery";

export const trainingGalleryItems: GalleryItem[] = [
  {
    id: "training-journey",
    src: "/journey-photo.jpg",
    alt: "Carisa Lee short track speed skating journey",
    category: "TRAINING",
    caption: "Training and development on the journey.",
  },
  {
    id: "training-team-ontario",
    src: "/team-ontario-photo.jpg",
    alt: "Carisa Lee representing Team Ontario",
    category: "TEAM",
    caption: "Team Ontario experience.",
  },
  {
    id: "training-national",
    src: "/images/national_team_photo.jpg",
    alt: "Canadian short track speed skating national team environment",
    category: "COMPETITION",
    caption: "National-level competition environment.",
  },
];

export const equipmentGalleryItems: GalleryItem[] = [
  {
    id: "eq-skates",
    category: "EQUIPMENT",
    alt: "Speed skating equipment",
    placeholderLabel: "Skates — photo coming soon",
    caption: "Skates and setup.",
  },
  {
    id: "eq-blades",
    category: "EQUIPMENT",
    alt: "Speed skating blades",
    placeholderLabel: "Blades — photo coming soon",
    caption: "Blades and alignment.",
  },
  {
    id: "eq-sharpening",
    category: "EQUIPMENT",
    alt: "Blade sharpening",
    placeholderLabel: "Sharpening — photo coming soon",
    caption: "Sharpening routine.",
  },
  {
    id: "eq-setup",
    category: "EQUIPMENT",
    alt: "Equipment setup",
    placeholderLabel: "Setup — photo coming soon",
    caption: "Equipment preparation.",
  },
];
