"use client";

import { useEffect, useId, useRef, useState } from "react";

const HERO_VIDEO_ID = "zJE3ZXp2_lw";
const CLIP_START_SECONDS = 84;
const CLIP_END_SECONDS = 114;
const PLAY_TIMEOUT_MS = 8000;

const HERO_EMBED_SRC =
  `https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}` +
  `?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEO_ID}` +
  `&start=${CLIP_START_SECONDS}&end=${CLIP_END_SECONDS}` +
  `&playsinline=1&rel=0&cc_load_policy=0&enablejsapi=1`;

type YTPlayer = {
  destroy: () => void;
  mute: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  unloadModule?: (moduleName: string) => void;
};

type YTNamespace = {
  Player: new (
    element: HTMLElement | string,
    options: {
      events?: {
        onReady?: (event: { target: YTPlayer }) => void;
        onStateChange?: (event: { data: number; target: YTPlayer }) => void;
        onError?: () => void;
      };
    },
  ) => YTPlayer;
  PlayerState?: {
    ENDED: number;
    PLAYING: number;
  };
};

function getYouTubeApi(): YTNamespace | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as Window & { YT?: YTNamespace }).YT;
}

function loadYouTubeIframeApi(): Promise<YTNamespace> {
  const existing = getYouTubeApi();
  if (existing?.Player) return Promise.resolve(existing);

  return new Promise((resolve, reject) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      const api = getYouTubeApi();
      if (api) resolve(api);
    };

    const scriptSrc = "https://www.youtube.com/iframe_api";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onerror = () => reject(new Error("YouTube API failed to load"));
      document.head.appendChild(script);
    }

    const interval = window.setInterval(() => {
      const api = getYouTubeApi();
      if (api?.Player) {
        window.clearInterval(interval);
        resolve(api);
      }
    }, 100);
  });
}

function restartClip(player: YTPlayer) {
  player.mute();
  player.unloadModule?.("captions");
  player.unloadModule?.("cc");
  player.seekTo(CLIP_START_SECONDS, true);
  player.playVideo();
}

export function HeroBackground() {
  const playerHostId = useId().replace(/:/g, "");
  const playerRef = useRef<YTPlayer | null>(null);
  const playingRef = useRef(false);
  const [embedFailed, setEmbedFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (embedFailed) return;

    let cancelled = false;
    let pollId = 0;
    let timeoutId = 0;

    timeoutId = window.setTimeout(() => {
      if (cancelled || playingRef.current) return;
      if (playerRef.current) {
        setEmbedFailed(true);
        return;
      }
      setIsPlaying(true);
    }, PLAY_TIMEOUT_MS);

    loadYouTubeIframeApi()
      .then((YT) => {
        if (cancelled) return;
        const host = document.getElementById(playerHostId);
        if (!host) return;

        playerRef.current?.destroy();
        playerRef.current = new YT.Player(playerHostId, {
          events: {
            onReady: (event) => {
              if (cancelled) return;
              restartClip(event.target);
            },
            onStateChange: (event) => {
              if (cancelled) return;
              const ended = YT.PlayerState?.ENDED ?? 0;
              const playing = YT.PlayerState?.PLAYING ?? 1;

              if (event.data === playing) {
                playingRef.current = true;
                setIsPlaying(true);
              }

              if (event.data === ended) {
                restartClip(event.target);
              }
            },
            onError: () => {
              if (!cancelled) setEmbedFailed(true);
            },
          },
        });

        pollId = window.setInterval(() => {
          const player = playerRef.current;
          if (!player) return;
          const time = player.getCurrentTime?.();
          if (typeof time === "number" && time >= CLIP_END_SECONDS - 0.35) {
            restartClip(player);
          }
        }, 250);
      })
      .catch(() => {
        if (!cancelled && !playingRef.current) {
          setIsPlaying(true);
        }
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      window.clearInterval(pollId);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [embedFailed, playerHostId]);

  return (
    <>
      <div
        className="absolute inset-0 bg-[url('/images/william-hero.png')] bg-cover bg-center bg-no-repeat"
        aria-hidden
      />
      {embedFailed ? null : (
        <div
          className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-500 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        >
          <iframe
            id={playerHostId}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[max(100%,56.25vw)] w-[max(100%,177.78vh)] max-w-none -translate-x-1/2 -translate-y-1/2 scale-[1.15] border-0"
            src={HERO_EMBED_SRC}
            title="Short track speed skating background video"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            tabIndex={-1}
            width={1920}
            height={1080}
          />
        </div>
      )}
    </>
  );
}
