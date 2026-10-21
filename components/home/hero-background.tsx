"use client";

import { useState } from "react";

export function HeroBackground() {
  const [failed, setFailed] = useState(false);

  return (
    <>
      <div
        className="absolute inset-0 bg-[url('/images/william-hero.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />
      {failed ? null : (
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          onError={() => setFailed(true)}
        >
          <source src="/videos/short-track-hero.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
