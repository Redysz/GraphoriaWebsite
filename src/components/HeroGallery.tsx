"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt: string;
  youtubeId?: string;
  videoLink?: string;
  showVideoBadge?: boolean;
}

const galleryItems: GalleryItem[] = [
  { type: "image", src: "/screenshots/01.png", alt: "Graphoria - Interactive DAG graph view" },
  {
    type: "image",
    src: "/screenshots/02.png",
    alt: "Graphoria - Detached HEAD prediction preview",
    videoLink: "https://youtu.be/C83DS_6sG18",
    showVideoBadge: true,
  },
  { type: "video", src: "/screenshots/03.png", alt: "Graphoria - Commits list view", youtubeId: "dQw4w9WgXcQ" },
  { type: "image", src: "/screenshots/04.png", alt: "Graphoria - Merge conflict resolver" },
  { type: "image", src: "/screenshots/05.png", alt: "Graphoria - Interactive rebase" },
  { type: "video", src: "/screenshots/06.png", alt: "Graphoria - Pull predict feature", youtubeId: "dQw4w9WgXcQ" },
];

export default function HeroGallery() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const next = useCallback(() => {
    if (!isPlaying) {
      setCurrent((prev) => (prev + 1) % galleryItems.length);
    }
  }, [isPlaying]);

  const prev = useCallback(() => {
    if (!isPlaying) {
      setCurrent((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isPlaying || lightboxOpen) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPlaying, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, next, prev]);

  const item = galleryItems[current];

  return (
    <>
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Main display */}
        <div
          className="relative rounded-xl overflow-hidden group cursor-pointer"
          onClick={() => { if (!isPlaying) setLightboxOpen(true); }}
        >
          {/* Clip container: 1px trimmed from left & right edges */}
          <div className="overflow-hidden rounded-xl mx-px">
            <div className="relative -mx-px">
              {isPlaying && item.youtubeId ? (
                <div className="relative aspect-[16/10]">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                    title={item.alt}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto block transition-opacity duration-700"
                    draggable={false}
                  />
                  {item.type === "video" && (
                    <button
                      onClick={(e) => { e.stopPropagation(); setIsPlaying(true); }}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Play video"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-accent-blue ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-full text-muted hover:text-foreground hover:bg-surface-light transition-colors"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {galleryItems.map((g, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setIsPlaying(false); }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-gradient-to-r from-accent-blue to-accent-purple"
                    : "w-2 bg-border hover:bg-muted"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full text-muted hover:text-foreground hover:bg-surface-light transition-colors"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Caption */}
        <p className="text-center text-sm text-muted mt-3">
          {item.alt}
          {item.showVideoBadge && item.videoLink && (
            <span className="block mt-1">
              <a
                href={item.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline"
              >
                ▶ Video available
              </a>
            </span>
          )}
        </p>
      </div>

      {/* Lightbox modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-[92vw] max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="max-w-full max-h-[88vh] rounded-lg shadow-2xl"
              draggable={false}
            />
          </div>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Caption */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-black/40 px-4 py-2 rounded-full">
            {item.alt} ({current + 1}/{galleryItems.length})
          </p>
        </div>
      )}
    </>
  );
}
