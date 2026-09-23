import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section aria-label="Testimonials" className="py-20 md:py-24 bg-brand text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold opacity-10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What Students &amp; Parents Say
          </h2>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Real comfort, real focus, real peace of mind.
          </p>
        </div>

        {/* Featured quote gets the room; the rest support it */}
        <figure className="max-w-3xl mx-auto text-center">
          <Quote className="w-9 h-9 text-gold-soft mx-auto mb-6" aria-hidden="true" />
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed text-white/95">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-7 flex items-center justify-center gap-3">
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

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-14">
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

        <p className="mt-10 text-center text-xs text-white/65">
          Sample reviews shown for preview purposes. Verified student stories
          will be added as our 2027 residents move in.
        </p>
      </div>
    </section>
  );
}
