"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TOUR, SITE } from "@/lib/site";

/**
 * The tour: real interior photographs of the house, laid out as an
 * editorial wall rather than a uniform grid. Click opens the lightbox.
 */
export function Tour() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + TOUR.length) % TOUR.length
      ),
    []
  );

  const spans = [
    "md:col-span-7 md:row-span-2",
    "md:col-span-5",
    "md:col-span-5",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-4",
  ];

  return (
    <section id="tour" className="py-20 md:py-28 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-brand leading-[1.08] text-balance">
              Every room, ready before you arrive
            </h2>
            <p className="mt-4 text-lg text-ink/70 leading-relaxed">
              These are the actual rooms at C4. No renders, no stock photos:
              the house exactly as residents find it.
            </p>
          </div>
          <a
            href={SITE.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-lg text-brand border-2 border-brand/20 hover:border-brand hover:bg-brand hover:text-white transition-[background-color,color,border-color] duration-200"
          >
            Ask for a viewing on WhatsApp
          </a>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 auto-rows-[240px] md:auto-rows-[210px] lg:auto-rows-[240px] gap-4">
          {TOUR.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open photo: ${img.caption}`}
              className={`group relative rounded-xl overflow-hidden shadow-soft hover:shadow-lift transition-shadow duration-200 focus-visible:outline-gold ${
                spans[i % spans.length]
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 45vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-deep/70 to-transparent"
              />
              <span className="absolute bottom-0 left-0 p-4 text-left">
                <span className="block text-white text-sm font-bold">{img.caption}</span>
                <span className="block text-white/80 text-xs mt-0.5">{img.note}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={active !== null} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-3xl p-2 bg-black/95 border-brand-pale/20 [&>button]:text-white [&>button]:hover:text-gold-soft">
          {active !== null && (
            <div className="relative">
              <DialogTitle className="sr-only">{TOUR[active].caption}</DialogTitle>
              <DialogDescription className="sr-only">{TOUR[active].alt}</DialogDescription>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={TOUR[active].src}
                  alt={TOUR[active].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-center text-white/90 text-sm font-semibold mt-2 pb-1">
                {TOUR[active].caption}
              </p>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2.5 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/25 text-white rounded-full p-2.5 transition-colors"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
