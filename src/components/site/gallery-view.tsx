"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/site";

/**
 * GalleryView: the requested slider, done properly. An embla drag slider
 * up top, the full grid below, and a keyboard-navigable lightbox over
 * everything. Effects: parallax on the active slide, scale on hover.
 */
export function GalleryView() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Lightbox keyboard navigation and scroll lock.
  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((v) => (v === null ? v : (v + 1) % GALLERY.length));
      if (e.key === "ArrowLeft")
        setLightbox((v) => (v === null ? v : (v - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <>
      {/* Slider */}
      <section aria-label="Photo slider" className="pt-4 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
          <p className="text-sm text-ink/55">
            {selected + 1} / {GALLERY.length}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous photo"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-ink/15 text-brand hover:bg-brand hover:text-white hover:border-brand active:translate-y-px transition-[background-color,color,border-color,transform] duration-200"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next photo"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-ink/15 text-brand hover:bg-brand hover:text-white hover:border-brand active:translate-y-px transition-[background-color,color,border-color,transform] duration-200"
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-6 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-6 px-5 sm:px-8">
            {GALLERY.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Open ${photo.caption} full screen`}
                className={`relative flex-[0_0_86%] sm:flex-[0_0_58%] lg:flex-[0_0_46%] aspect-[4/3] overflow-hidden rounded-sm bg-warmgrey group shrink-0 ${
                  selected === i ? "" : "opacity-70"
                } transition-opacity duration-300`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 86vw, 46vw"
          quality={65}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 p-4 flex items-center justify-between text-white bg-gradient-to-t from-brand-deep/85 to-transparent">
                  <span className="text-sm font-medium">{photo.caption}</span>
                  <Expand className="w-4 h-4 opacity-80" aria-hidden="true" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Full grid */}
      <section aria-label="All photos" className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {GALLERY.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setLightbox(i)}
                aria-label={`Open ${photo.caption} full screen`}
                className="group relative overflow-hidden rounded-sm bg-warmgrey aspect-[4/3]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
          quality={65}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 p-3 text-left text-xs sm:text-sm font-medium text-white bg-gradient-to-t from-brand-deep/85 to-transparent">
                  {photo.caption}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${GALLERY[lightbox].caption}, full screen photo`}
          className="fixed inset-0 z-[95] bg-brand-deep/95 flex items-center justify-center p-4 sm:p-10"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close full screen photo"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-white/15 transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + GALLERY.length) % GALLERY.length);
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 inline-flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-white/15 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % GALLERY.length);
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 inline-flex items-center justify-center w-11 h-11 rounded-full text-white hover:bg-white/15 transition-colors"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
          <figure
            className="relative w-full max-w-5xl aspect-[4/3] max-h-[82vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              fill
              sizes="100vw"
          quality={65}
              className="object-contain"
              priority
            />
            <figcaption className="absolute -bottom-9 inset-x-0 text-center text-sm text-white/70">
              {GALLERY[lightbox].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
