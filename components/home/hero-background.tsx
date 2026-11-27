"use client";

import { useEffect, useRef, useState } from "react";

export function HeroBackground() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    let active = true;
    const play = () => {
      el.muted = true;
      el.defaultMuted = true;
      if (document.visibilityState === "visible") {
        el.play().catch(() => { if (active) setBlocked(true); });
      }
    };
    play();
    document.addEventListener("visibilitychange", play);
    return () => {
      active = false;
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return (
    <>
      <div className="absolute inset-0 bg-[url('/images/william-hero.png')] bg-cover bg-center bg-no-repeat" aria-hidden />
      <video
        ref={video}
        src="/videos/short-track-hero.mp4"
        poster="/images/william-hero.png"
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${playing ? "opacity-100" : "opacity-0"}`}
        autoPlay muted loop playsInline preload="auto" aria-hidden
        onPlaying={() => { setPlaying(true); setBlocked(false); }}
        onPause={() => { setPlaying(false); setBlocked(true); }}
        onError={() => { setPlaying(false); setBlocked(true); }}
      />
      {blocked && !playing && (
        <button type="button" className="absolute bottom-6 right-5 z-20 rounded border border-white/40 bg-black/70 px-4 py-2 text-sm text-white" onClick={() => {
          const el = video.current;
          if (!el) return;
          el.muted = true;
          if (el.error) el.load();
          el.play().catch(() => setBlocked(true));
        }}>Play background video</button>
      )}
    </>
  );
}
