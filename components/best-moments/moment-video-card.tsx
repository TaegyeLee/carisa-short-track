"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { BestMoment } from "@/lib/best-moments/content";
import {
  youtubeEmbedSrc,
  youtubeThumbnailSrc,
  youtubeThumbnailSrc16x9,
} from "@/lib/best-moments/content";

type MomentVideoCardProps = {
  moment: BestMoment;
  isPlaying: boolean;
  onPlay: (id: string) => void;
};

type YTPlayer = {
  destroy: () => void;
};

type YTNamespace = {
  Player: new (
    element: HTMLElement | string,
    options: {
      events?: {
        onError?: () => void;
      };
    },
  ) => YTPlayer;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 16.5v15l13-7.5-13-7.5z" fill="currentColor" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5h5v5M19 5l-8 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13.5V18a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 014 18V6A1.5 1.5 0 015.5 4.5H10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function loadYouTubeIframeApi(): Promise<YTNamespace> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("YouTube API is browser-only"));
  }

  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  return new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      if (window.YT) resolve(window.YT);
    };

    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]',
    );
    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }

    const interval = window.setInterval(() => {
      if (window.YT?.Player) {
        window.clearInterval(interval);
        resolve(window.YT);
      }
    }, 100);
  });
}

function VideoThumbnail({ youtubeId }: { youtubeId: string }) {
  const [src, setSrc] = useState(youtubeThumbnailSrc16x9(youtubeId));

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      onError={() => setSrc(youtubeThumbnailSrc(youtubeId))}
    />
  );
}

export function MomentVideoCard({
  moment,
  isPlaying,
  onPlay,
}: MomentVideoCardProps) {
  const iframeTitle = `${moment.title} — ${moment.athletes.join(", ")} — ${moment.event} ${moment.year}`;
  const playLabel = `Play video: ${moment.title}`;
  const watchLinkLabel = moment.watchLinkLabel ?? "Watch on YouTube";
  const playerHostId = useId().replace(/:/g, "");
  const playerRef = useRef<YTPlayer | null>(null);
  const [embedFailed, setEmbedFailed] = useState(false);

  const canEmbed = Boolean(moment.youtubeId) && !embedFailed;
  const showPlayer = Boolean(isPlaying && canEmbed && moment.youtubeId);

  useEffect(() => {
    setEmbedFailed(false);
  }, [moment.youtubeId, isPlaying]);

  useEffect(() => {
    if (!showPlayer || !moment.youtubeId) {
      playerRef.current?.destroy();
      playerRef.current = null;
      return;
    }

    let cancelled = false;

    loadYouTubeIframeApi()
      .then((YT) => {
        if (cancelled) return;
        const host = document.getElementById(playerHostId);
        if (!host) return;

        playerRef.current?.destroy();
        playerRef.current = new YT.Player(playerHostId, {
          events: {
            onError: () => {
              if (!cancelled) setEmbedFailed(true);
            },
          },
        });
      })
      .catch(() => {
        if (!cancelled) setEmbedFailed(true);
      });

    return () => {
      cancelled = true;
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [showPlayer, moment.youtubeId, playerHostId]);

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#202a3a] bg-[#0d1422] transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#e31837]/35">
      <div className="relative aspect-video overflow-hidden bg-[#0a0f1c]">
        {showPlayer && moment.youtubeId ? (
          <iframe
            id={playerHostId}
            className="absolute inset-0 h-full w-full"
            src={youtubeEmbedSrc(moment.youtubeId)}
            title={iframeTitle}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : canEmbed && moment.youtubeId ? (
          <button
            type="button"
            className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31837] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1c]"
            onClick={() => onPlay(moment.id)}
            aria-label={playLabel}
          >
            <VideoThumbnail youtubeId={moment.youtubeId} />
            <span
              className="absolute inset-0 bg-[#070b14]/35 transition-colors duration-200 group-hover:bg-[#070b14]/20"
              aria-hidden
            />
            <PlayIcon className="relative z-10 h-14 w-14 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] transition-transform duration-200 group-hover:scale-105 sm:h-16 sm:w-16" />
          </button>
        ) : (
          <a
            href={moment.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31837] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0f1c]"
            aria-label={
              moment.youtubeId
                ? watchLinkLabel
                : `Read ${moment.title} on ${moment.source}`
            }
          >
            {moment.youtubeId ? (
              <VideoThumbnail youtubeId={moment.youtubeId} />
            ) : null}
            <span
              className={`absolute inset-0 ${
                moment.youtubeId ? "bg-[#070b14]/55" : "bg-[#070b14]/20"
              }`}
              aria-hidden
            />
            <ExternalIcon className="relative z-10 h-10 w-10 text-white sm:h-12 sm:w-12" />
            <p className="relative z-10 font-display text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[#e31837]">
              {moment.youtubeId ? watchLinkLabel : `Read on ${moment.source}`}
            </p>
            {moment.youtubeId ? (
              <p className="relative z-10 max-w-[16rem] text-xs leading-relaxed text-[#9aa8bc] sm:text-sm">
                Embedding is unavailable for this video. Open it on YouTube.
              </p>
            ) : null}
          </a>
        )}
        {showPlayer ? null : (
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 bg-[#e31837]/80"
            aria-hidden
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[#e31837]">
          {moment.event}
          <span className="text-white/45"> · </span>
          {moment.year}
        </p>
        <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-wide text-white sm:text-2xl">
          {moment.title}
        </h3>
        <div className="mt-3 h-px w-12 bg-[#e31837]/85" aria-hidden />
        <p className="mt-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white/80 sm:text-sm">
          {moment.athletes.join(" · ")}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#9aa8bc] sm:text-[0.9375rem]">
          {moment.description}
        </p>
        <p className="mt-5 font-display text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-[#9aa8bc]">
          {moment.youtubeId ? "Video: " : "Source: "}
          <a
            href={moment.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e31837] underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            {moment.source}
          </a>
        </p>
        {moment.youtubeId ? (
          <a
            href={moment.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-fit items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition-colors hover:text-white"
          >
            {watchLinkLabel}
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        ) : (
          <a
            href={moment.watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-fit items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition-colors hover:text-white"
          >
            Read on CBC Sports
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
