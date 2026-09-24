import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OUTSIDE } from "@/lib/site";

/**
 * Statement: the Desire block. A scrubbing text reveal (gpt-taste GSAP
 * paradigm 1) followed by the exterior strip with image scale & fade
 * (paradigm 2). The data attributes are picked up by SiteMotion.
 */
export function Statement() {
  const strip = [OUTSIDE[2], OUTSIDE[1], OUTSIDE[0], OUTSIDE[3]];

  return (
    <section aria-labelledby="statement-heading" className="bg-brand text-white py-28 md:py-44">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 id="statement-heading" className="sr-only">The promise</h2>
        <p
          data-scrub
          className="display-2 max-w-4xl text-balance"
        >
          You bring your books. The house handles the rest.
        </p>
        <p className="reveal mt-8 max-w-2xl text-lg text-white/75 leading-relaxed">
          Wi-Fi, cleaning, laundry, hot water, transport and a caring on-site
          team are all part of one monthly rate. Parents rest. Students focus.
        </p>
        <Link
          href="/book"
          className="reveal group inline-flex items-center gap-2 mt-8 text-lg font-semibold text-gold-soft hover:text-white transition-colors"
        >
          How to book for 2027
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>

        {/* Exterior strip: scale in on enter, fade toward the exit */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {strip.map((photo) => (
            <figure
              key={photo.src}
              data-scale-img
              className="relative overflow-hidden rounded-sm aspect-[4/5] bg-brand-deep"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
          quality={65}
                className="object-cover will-change-transform"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white/90 bg-gradient-to-t from-brand-deep/85 to-transparent">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
