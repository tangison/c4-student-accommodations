import Image from "next/image";
import { MapPin } from "lucide-react";
import { OUTSIDE, SITE } from "@/lib/site";

/**
 * The house and its streets: real exterior photographs of the C4 stay,
 * with the two locations stated plainly.
 */
export function Outside() {
  return (
    <section id="outside" className="py-20 md:py-28 bg-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="reveal max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-brand leading-[1.08] text-balance">
            The house, the yard, the hills behind it
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            An established Windhoek home turned student stay, in two quiet
            neighbourhoods with campus routes close by.
          </p>
        </div>

        {/* Editorial exterior wall: wide lead photo + staggered columns */}
        <div className="reveal grid grid-cols-2 md:grid-cols-12 gap-4">
          <figure className="col-span-2 md:col-span-7 relative rounded-xl overflow-hidden shadow-soft h-[280px] md:h-[420px]">
            <Image
              src={OUTSIDE[0].src}
              alt={OUTSIDE[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              loading="lazy"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-brand-deep/70 to-transparent text-white text-sm font-bold">
              {OUTSIDE[0].caption}
            </figcaption>
          </figure>

          <figure className="md:col-span-5 relative rounded-xl overflow-hidden shadow-soft h-[280px] md:h-[420px]">
            <Image
              src={OUTSIDE[1].src}
              alt={OUTSIDE[1].alt}
              fill
              sizes="(max-width: 768px) 50vw, 42vw"
              loading="lazy"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-brand-deep/70 to-transparent text-white text-sm font-bold">
              {OUTSIDE[1].caption}
            </figcaption>
          </figure>

          <figure className="md:col-span-4 relative rounded-xl overflow-hidden shadow-soft h-[240px] md:h-[300px]">
            <Image
              src={OUTSIDE[2].src}
              alt={OUTSIDE[2].alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-brand-deep/70 to-transparent text-white text-sm font-bold">
              {OUTSIDE[2].caption}
            </figcaption>
          </figure>

          <figure className="md:col-span-4 relative rounded-xl overflow-hidden shadow-soft h-[240px] md:h-[300px]">
            <Image
              src={OUTSIDE[3].src}
              alt={OUTSIDE[3].alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-brand-deep/70 to-transparent text-white text-sm font-bold">
              {OUTSIDE[3].caption}
            </figcaption>
          </figure>

          {/* Locations panel */}
          <div className="col-span-2 md:col-span-4 rounded-xl bg-warmgrey border border-border p-6 flex flex-col justify-center gap-5">
            <h3 className="font-bold text-brand text-lg">Find the house</h3>
            <ul className="space-y-4">
              {SITE.locations.map((loc) => (
                <li key={loc} className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-ink text-sm">{loc}</p>
                    <p className="text-sm text-ink/60">
                      {SITE.city}, {SITE.country}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-ink/65 leading-relaxed">
              Exact addresses are shared when you book, so residents and
              parents always know where they are headed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
