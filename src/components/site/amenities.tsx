import {
  Home,
  GraduationCap,
  Sparkles,
  Bus,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { AMENITIES, SITE } from "@/lib/site";

const ICONS = {
  "Comfortable Living": Home,
  "Study & Connectivity": GraduationCap,
  "Clean & Convenient": Sparkles,
  Transport: Bus,
  "Safe & Secure": ShieldCheck,
  "A Place That Cares": HeartHandshake,
} as const;

/**
 * Asymmetric feature grid. Each amenity gets a surface tone, a span and an
 * internal layout that fits its content, instead of a uniform 3-column
 * card row. Surfaces (white / cream / dark teal / gold tint) carry the
 * hierarchy; no side-tab borders, no repeated identical modules.
 */
export function Amenities() {
  const [comfortable, study, clean, transport, safe, cares] = AMENITIES;

  return (
    <section id="amenities" className="py-20 md:py-24 bg-warmgrey scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand">
            What You Get
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We provide a fully equipped, caring environment so you can focus
            entirely on your studies, and on becoming who you are meant to be.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Comfortable Living: the longest list earns the biggest surface */}
          <article className="md:col-span-2 lg:col-span-7 lg:row-span-2 bg-white rounded-2xl shadow-soft p-7 sm:p-9 flex flex-col">
            <div className="w-12 h-12 rounded-lg bg-brand-pale/60 text-brand flex items-center justify-center mb-6">
              <Home className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-6">{comfortable.title}</h3>
            <ul className="check-list text-sm sm:text-[0.95rem] text-ink/75 grid sm:grid-cols-2 gap-x-8">
              {comfortable.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {/* Study & Connectivity */}
          <article className="lg:col-span-5 bg-cream rounded-2xl p-7 sm:p-9">
            <div className="w-12 h-12 rounded-lg bg-white text-gold flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-5">{study.title}</h3>
            <ul className="check-list text-sm sm:text-[0.95rem] text-ink/75">
              {study.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {/* Safe & Secure: dark feature card, the first thing parents scan for */}
          <article className="lg:col-span-5 bg-brand text-white rounded-2xl p-7 sm:p-9">
            <div className="w-12 h-12 rounded-lg bg-white/10 text-gold-soft flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-5">{safe.title}</h3>
            <ul className="check-list on-dark text-sm sm:text-[0.95rem] text-white/85">
              {safe.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {/* Clean & Convenient */}
          <article className="bg-white rounded-2xl shadow-soft p-7 sm:p-9">
            <div className="w-12 h-12 rounded-lg bg-brand-pale/60 text-brand flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-5">{clean.title}</h3>
            <ul className="check-list text-sm sm:text-[0.95rem] text-ink/75">
              {clean.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {/* Transport */}
          <article className="bg-white rounded-2xl shadow-soft p-7 sm:p-9">
            <div className="w-12 h-12 rounded-lg bg-brand-pale/60 text-brand flex items-center justify-center mb-6">
              <Bus className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-5">{transport.title}</h3>
            <ul className="check-list text-sm sm:text-[0.95rem] text-ink/75">
              {transport.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          {/* A Place That Cares: full-width closing statement */}
          <article className="md:col-span-2 lg:col-span-12 bg-gold-pale/25 rounded-2xl p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 rounded-lg bg-white text-gold flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink">{cares.title}</h3>
            </div>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-semibold text-ink/75">
              {cares.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="w-4 h-4 shrink-0 bg-gold [mask:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22black%22 stroke-width=%223%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M20 6 9 17l-5-5%22/></svg>')] [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-12 text-center">
          <a
            href={SITE.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-brand hover:bg-gold transition-colors duration-300 shadow-soft hover:shadow-lift"
          >
            Reserve Your Spot for {SITE.bookingYear}
          </a>
        </div>
      </div>
    </section>
  );
}
