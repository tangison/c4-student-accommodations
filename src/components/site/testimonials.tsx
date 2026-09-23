import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="py-20 md:py-24 bg-brand text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold opacity-10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-bold tracking-widest uppercase text-gold-soft">
            Student Stories
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            What Students &amp; Parents Say
          </h2>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            Real comfort, real focus, real peace of mind.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 flex flex-col hover:bg-white/10 transition-colors"
            >
              <Quote className="w-8 h-8 text-gold-soft mb-4" aria-hidden="true" />
              <blockquote className="text-white/90 leading-relaxed flex-1">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="w-11 h-11 rounded-full bg-gold text-white font-extrabold text-sm flex items-center justify-center shrink-0"
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block font-bold text-sm">{t.name}</span>
                  <span className="block text-xs text-white/65">{t.role}</span>
                </span>
                <span className="ml-auto flex gap-0.5" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-soft text-gold-soft" aria-hidden="true" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/50">
          Sample reviews shown for preview purposes — verified student stories
          will be added as our 2027 residents move in.
        </p>
      </div>
    </section>
  );
}
