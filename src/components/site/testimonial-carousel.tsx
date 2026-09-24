"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

/**
 * TestimonialCarousel: the requested carousel, rebuilt clean. One quote on
 * stage at a time, an overlapping portrait disc, subtle arrow controls and
 * dot state. Sample reviews stay honestly labelled.
 */
export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start" });
  const [selected, setSelected] = useState(0);

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

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section aria-labelledby="testimonials-heading" className="py-28 md:py-44">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal flex items-end justify-between gap-6 flex-wrap">
          <h2 id="testimonials-heading" className="display-2 max-w-2xl text-balance">
            What residents and parents say
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous testimonial"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-ink/15 text-brand hover:bg-brand hover:text-white hover:border-brand active:translate-y-px transition-[background-color,color,border-color,transform] duration-200"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next testimonial"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-ink/15 text-brand hover:bg-brand hover:text-white hover:border-brand active:translate-y-px transition-[background-color,color,border-color,transform] duration-200"
            >
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="reveal mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="flex-[0_0_100%] min-w-0 pr-2">
                <blockquote className="max-w-3xl text-xl sm:text-2xl lg:text-[1.7rem] font-medium leading-snug tracking-[-0.01em] text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="w-12 h-12 rounded-full bg-brand text-white font-semibold text-sm flex items-center justify-center ring-2 ring-gold ring-offset-2 ring-offset-bone shrink-0"
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-ink/55">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="reveal mt-10 flex items-center justify-between gap-6 flex-wrap">
          <div className="flex gap-2" role="tablist" aria-label="Testimonial position">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={selected === i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selected === i ? "w-8 bg-brand" : "w-3 bg-ink/20 hover:bg-ink/40"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-ink/50">
            Sample reviews shown for preview. Verified resident stories will be
            added as our {`2027`} residents move in.
          </p>
        </div>
      </div>
    </section>
  );
}
