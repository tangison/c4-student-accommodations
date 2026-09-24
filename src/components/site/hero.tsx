import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { HERO_PHOTO, SITE } from "@/lib/site";

/**
 * Hero: Cinematic Center (gpt-taste RNG pick). The real house fills the
 * screen behind a deep teal wash; one wide headline, exactly two CTAs.
 * No badges, no pill tags, no raw stats here.
 */
export function Hero() {
  return (
    <section className="relative min-h-[94svh] flex items-end sm:items-center justify-center overflow-hidden">
      {/* The real house, full bleed */}
      <Image
        src={HERO_PHOTO.src}
        alt={HERO_PHOTO.alt}
        fill
        priority
        sizes="100vw"
        quality={55}
        className="object-cover"
      />
      {/* Deep teal radial wash: legibility without hiding the house */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,46,46,0.38)_0%,rgba(2,46,46,0.62)_58%,rgba(2,46,46,0.82)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-deep/85 to-transparent"
      />

      {/* Center stage */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-36 pb-24 sm:pt-40 sm:pb-32 text-center">
        <h1
          className="display-1 text-white text-balance hero-in"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          A safe second home for students in Windhoek
        </h1>
        <p
          className="hero-in mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/85 leading-relaxed text-pretty"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Fully furnished rooms in Khomasdal and Rocky Crest with fibre Wi-Fi,
          cleaning, laundry and a caring on-site team, so you can focus on your
          studies.
        </p>
        <div
          className="hero-in mt-9 flex flex-col sm:flex-row justify-center gap-3.5"
          style={{ "--stagger": 2 } as React.CSSProperties}
        >
          <a
            href={SITE.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-full bg-white text-brand-deep hover:bg-brand-pale active:translate-y-px transition-[background-color,transform] duration-200"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Secure your room
          </a>
          <a
            href="/rooms"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white border border-white/45 hover:bg-white/12 hover:border-white/70 active:translate-y-px transition-[background-color,border-color,transform] duration-200"
          >
            See the rooms
          </a>
        </div>
      </div>

      {/* Location line, anchored to the bottom edge */}
      <p
        aria-hidden="true"
        className="hero-in hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-white/55 z-10"
        style={{ "--stagger": 3 } as React.CSSProperties}
      >
        {SITE.locations.join("  ")} &middot; {SITE.city}, {SITE.country}
      </p>
    </section>
  );
}
