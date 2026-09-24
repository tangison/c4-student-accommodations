import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

/**
 * What residents and parents say. Sample reviews are labelled honestly
 * until verified stories exist; nothing is fabricated.
 */
export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section aria-label="Testimonials" className="py-20 md:py-28 bg-brand-deep text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="reveal max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08] text-balance">
            What residents and parents say
          </h2>
        </div>

        {/* Featured quote gets the room; the rest support it */}
        <figure className="reveal max-w-3xl mt-12">
          <Quote className="w-9 h-9 text-gold-soft" aria-hidden="true" />
          <blockquote className="mt-5 text-xl sm:text-2xl font-medium leading-relaxed text-white/95">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="w-11 h-11 rounded-full bg-gold text-white font-extrabold text-sm flex items-center justify-center shrink-0"
            >
              {featured.initials}
            </span>
            <span className="text-left">
              <span className="block font-bold text-sm">{featured.name}</span>
              <span className="block text-xs text-white/70">{featured.role}</span>
            </span>
          </figcaption>
        </figure>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mt-12">
          {rest.map((t) => (
            <figure
              key={t.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors"
            >
              <blockquote className="text-white/90 leading-relaxed text-[0.95rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-gold text-white font-extrabold text-xs flex items-center justify-center shrink-0"
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block font-bold text-sm">{t.name}</span>
                  <span className="block text-xs text-white/70">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="reveal mt-10 text-xs text-white/60">
          Sample reviews shown for preview. Verified resident stories will be
          added as our {`2027`} residents move in.
        </p>
      </div>
    </section>
  );
}
