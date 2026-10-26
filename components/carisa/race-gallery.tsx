"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

type RacePhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const racePhotoFiles = [
  { file: "carisa-race-01.jpg", width: 1080, height: 1620 },
  { file: "carisa-race-02.jpg", width: 4000, height: 3396 },
  { file: "carisa-race-03.jpg", width: 1512, height: 792 },
  { file: "carisa-race-04.jpg", width: 3024, height: 4032 },
  { file: "carisa-race-05.jpg", width: 6016, height: 4016 },
  { file: "carisa-race-06.jpg", width: 1080, height: 720 },
  { file: "carisa-race-07.jpg", width: 4032, height: 3024 },
  { file: "carisa-race-08.jpg", width: 4000, height: 2579 },
  { file: "carisa-race-09.jpg", width: 6844, height: 3439 },
  { file: "carisa-race-10.jpg", width: 4032, height: 3024 },
  { file: "carisa-race-11.jpg", width: 4032, height: 2268 },
] as const;

const racePhotos: RacePhoto[] = racePhotoFiles.map((photo, index) => ({
  src: `/images/carisa-gallery/${photo.file}`,
  width: photo.width,
  height: photo.height,
  alt: `Carisa Lee short track speed skating photo ${index + 1}`,
}));

const focusableSelector = [
  "button:not([disabled])",
  "[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function trapTab(event: KeyboardEvent, dialog: HTMLElement) {
  const focusable = Array.from(
    dialog.querySelectorAll<HTMLElement>(focusableSelector),
  ).filter((element) => element.tabIndex !== -1 && element.offsetParent !== null);

  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey && (active === first || !dialog.contains(active))) {
    event.preventDefault();
    last.focus();
    return;
  }

  if (!event.shiftKey && active === last) {
    event.preventDefault();
    first.focus();
  }
}

export function CarisaRaceGallery() {
  const headingId = useId();
  const englishTitleId = useId();
  const frenchTitleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;
  const activePhoto = activeIndex === null ? null : racePhotos[activeIndex];

  function openAt(index: number, trigger: HTMLButtonElement) {
    lastTriggerRef.current = trigger;
    setActiveIndex(index);
  }

  function closeLightbox() {
    setActiveIndex(null);
    const trigger = lastTriggerRef.current;
    window.setTimeout(() => trigger?.focus(), 0);
  }

  function showPrevious() {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + racePhotos.length) % racePhotos.length,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % racePhotos.length,
    );
  }

  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLButtonElement>("[data-lightbox-close]")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveIndex(null);
        const trigger = lastTriggerRef.current;
        window.setTimeout(() => trigger?.focus(), 0);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) =>
          current === null
            ? current
            : (current - 1 + racePhotos.length) % racePhotos.length,
        );
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % racePhotos.length,
        );
        return;
      }

      if (event.key === "Tab" && dialog) {
        trapTab(event, dialog);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="max-w-4xl">
        <h2
          id={headingId}
          className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl"
        >
          <span id={englishTitleId} className="block">
            Carisa&apos;s Race Gallery
          </span>
          <span
            id={frenchTitleId}
            lang="fr"
            className="mt-3 block text-xl font-semibold tracking-wide text-white/80 sm:text-2xl lg:text-3xl"
          >
            Galerie de courses de Carisa
          </span>
        </h2>
        <div className="mt-5 h-px w-16 bg-[#e31837] sm:mt-6" aria-hidden />
      </div>

      <ul
        aria-labelledby={`${englishTitleId} ${frenchTitleId}`}
        className="mt-10 list-none columns-1 gap-4 p-0 sm:columns-2 sm:gap-5 lg:columns-3 lg:gap-6"
      >
        {racePhotos.map((photo, index) => (
          <li key={photo.src} className="mb-4 break-inside-avoid sm:mb-5 lg:mb-6">
            <button
              type="button"
              className="block w-full cursor-pointer overflow-hidden border border-[#202a3a] bg-[#0d1422] text-left transition-colors duration-200 hover:border-[#e31837]/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e31837]"
              onClick={(event) => openAt(index, event.currentTarget)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                className="block h-auto w-full object-contain"
              />
              <span className="block h-1 bg-[#e31837]/85" aria-hidden />
            </button>
          </li>
        ))}
      </ul>

      {activePhoto && activeIndex !== null
        ? createPortal(
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${headingId}-lightbox`}
              className="fixed inset-0 z-50 flex flex-col bg-[#070b14]/95 text-white backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <div
                className="flex items-center justify-between gap-4 border-b border-[#202a3a] px-4 py-3 sm:px-6"
                onClick={(event) => event.stopPropagation()}
              >
                <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#9aa8bc]">
                  <span className="text-white">{activeIndex + 1}</span>
                  <span className="px-1.5 text-[#e31837]" aria-hidden>
                    /
                  </span>
                  <span className="sr-only"> of </span>
                  {racePhotos.length}
                </p>
                <button
                  type="button"
                  data-lightbox-close
                  className="inline-flex h-11 w-11 cursor-pointer items-center justify-center border border-[#202a3a] bg-[#0d1422] text-white transition-colors hover:border-[#e31837]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e31837]"
                  onClick={(event) => {
                    event.stopPropagation();
                    closeLightbox();
                  }}
                >
                  <CloseIcon />
                  <span className="sr-only">Close gallery</span>
                  <span className="sr-only" lang="fr">
                    Fermer la galerie
                  </span>
                </button>
              </div>

              <div className="flex min-h-0 flex-1 items-center justify-center px-4 py-4 sm:px-8">
                <Image
                  key={activePhoto.src}
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  width={activePhoto.width}
                  height={activePhoto.height}
                  sizes="100vw"
                  priority
                  className="h-auto max-h-[calc(100dvh-9.75rem)] w-auto max-w-full object-contain"
                  onClick={(event) => event.stopPropagation()}
                />
              </div>

              <h2 id={`${headingId}-lightbox`} className="sr-only">
                {activePhoto.alt}
              </h2>
              <p className="sr-only" aria-live="polite">
                {activePhoto.alt}
              </p>

              <div
                className="flex items-center justify-between gap-3 border-t border-[#202a3a] px-4 py-4 sm:px-6"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 border border-[#202a3a] bg-[#0d1422] px-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#e31837]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e31837]"
                  onClick={(event) => {
                    event.stopPropagation();
                    showPrevious();
                  }}
                >
                  <Chevron direction="left" />
                  Previous
                  <span className="sr-only" lang="fr">
                    Photo précédente
                  </span>
                </button>
                <button
                  type="button"
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 border border-[#202a3a] bg-[#0d1422] px-4 font-display text-sm font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-[#e31837]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e31837]"
                  onClick={(event) => {
                    event.stopPropagation();
                    showNext();
                  }}
                >
                  Next
                  <span className="sr-only" lang="fr">
                    Photo suivante
                  </span>
                  <Chevron direction="right" />
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      {direction === "left" ? (
        <path d="M14.5 5.5 8 12l6.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d="M9.5 5.5 16 12l-6.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M6 6 18 18M18 6 6 18" strokeLinecap="round" />
    </svg>
  );
}
