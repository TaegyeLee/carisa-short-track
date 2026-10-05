"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryItem = {
  id: string;
  src?: string;
  alt: string;
  caption?: string;
  category: string;
  placeholderLabel?: string;
};

type MediaGalleryProps = {
  items: GalleryItem[];
};

export function MediaGallery({ items }: MediaGalleryProps) {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {items.map((item) => (
        <li key={item.id}>
          <GalleryCard item={item} />
        </li>
      ))}
    </ul>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  const [failed, setFailed] = useState(false);
  const showImage = item.src && !failed;

  return (
    <article className="group overflow-hidden border border-[#202a3a] bg-[#0d1422] transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#e31837]/35">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0f1c]">
        {showImage ? (
          <Image
            src={item.src!}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-[0.625rem] font-medium uppercase tracking-[0.18em] text-[#9aa8bc]">
            {item.placeholderLabel ?? "Photo coming soon"}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e31837]/80" aria-hidden />
      </div>
      <div className="p-4 sm:p-5">
        <p className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.22em] text-[#e31837]">
          {item.category}
        </p>
        {item.caption ? (
          <p className="mt-2 text-sm text-[#9aa8bc]">{item.caption}</p>
        ) : null}
      </div>
    </article>
  );
}
