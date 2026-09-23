"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Expand, Info } from "lucide-react";
import { GALLERY } from "@/lib/site";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + GALLERY.length) % GALLERY.length
      ),
    []
  );

  return (
    <section id="gallery" className="py-20 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand">
            Take a Look Around
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A glimpse of the spaces waiting for you: rooms built for rest,
            corners built for study.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open photo: ${img.caption}`}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 focus-visible:outline-gold aspect-[4/3] bg-warmgrey"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-0 left-0 right-0 p-3 text-left text-white text-xs sm:text-sm font-semibold opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {img.caption}
              </span>
              <span className="absolute top-2.5 right-2.5 bg-white/90 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-3.5 h-3.5 text-brand" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>

        <p className="mt-8 flex items-start sm:items-center justify-center gap-2 text-sm text-muted-foreground text-left sm:text-center max-w-2xl mx-auto">
          <Info className="w-4 h-4 shrink-0 mt-0.5 sm:mt-0 text-gold" aria-hidden="true" />
          Illustrative preview imagery. WhatsApp us for real, current photos of
          the rooms before you book.
        </p>
      </div>

      {/* Lightbox */}
      <Dialog open={active !== null} onOpenChange={(o) => !o && close()}>
        <DialogContent className="max-w-3xl p-2 bg-black/95 border-brand-pale/20 [&>button]:text-white [&>button]:hover:text-gold-soft">
          {active !== null && (
            <div className="relative">
              <DialogTitle className="sr-only">{GALLERY[active].caption}</DialogTitle>
              <DialogDescription className="sr-only">{GALLERY[active].alt}</DialogDescription>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={GALLERY[active].src}
                  alt={GALLERY[active].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain"
                  priority
                />
              </div>
              <p className="text-center text-white/90 text-sm font-semibold mt-2 pb-1">
                {GALLERY[active].caption}
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
