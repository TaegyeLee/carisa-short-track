"use client";

import Image from "next/image";
import { useState } from "react";
import { PhotoPlaceholder } from "@/components/national-team/photo-placeholder";

type AthleteImageProps = {
  src?: string;
  alt: string;
  label: string;
  variant?: "default" | "cinematic" | "editorial";
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
};

export function AthleteImage({
  src,
  alt,
  label,
  variant = "default",
  className = "",
  priority = false,
  objectFit = "cover",
}: AthleteImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <PhotoPlaceholder
        variant={variant}
        label={label}
        imageAlt={alt}
        className={className}
      />
    );
  }

  const aspectClass =
    variant === "cinematic"
      ? "aspect-[16/9] w-full"
      : variant === "editorial"
        ? "aspect-[3/4] lg:aspect-[4/5]"
        : "aspect-[16/10]";

  const objectClass =
    objectFit === "contain"
      ? "object-contain object-center"
      : "object-cover object-center";

  return (
    <div
      className={`relative overflow-hidden border border-[#202a3a] bg-[#0d1422] ${aspectClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1280px"
        className={objectClass}
        onError={() => setFailed(true)}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-[#e31837]/85"
        aria-hidden
      />
    </div>
  );
}

type HeroImageProps = Omit<AthleteImageProps, "variant">;

export function HeroImage(props: HeroImageProps) {
  return <AthleteImage variant="cinematic" objectFit="cover" {...props} />;
}

export function JourneyImage(props: Omit<AthleteImageProps, "variant">) {
  return (
    <AthleteImage variant="editorial" objectFit="cover" {...props} />
  );
}
