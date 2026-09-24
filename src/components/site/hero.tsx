import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { HERO_PHOTO, SITE } from "@/lib/site";

/**
 * Hero: Cinematic Center (gpt-taste RNG pick). The real house fills the
 * screen behind a deep teal wash; one one-line headline, exactly two CTAs,
 * two resident cutouts anchored to the ground line. No badges, no pill
 * tags, no raw stats, no bottom decoration strip.
 */
export function Hero() {
  return (
    <section className="relative min-h-[94svh] flex items-center justify-center overflow-hidden">
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

      {/* Resident cutouts, client assets without background, on the ground line */}
      <div aria-hidden="true" className="absolute bottom-0 left-4 sm:left-14 lg:left-24 hidden sm:block">
        <Image
          src="/cutouts/student-backpack.webp"
          alt=""
          width={462}
          height={1270}
          sizes="200px"
          quality={65}
          className="h-[38svh] lg:h-[50svh] w-auto object-contain object-bottom drop-shadow-[0_18px_24px_rgba(2,46,46,0.35)]"
        />
      </div>
      <div aria-hidden="true" className="absolute bottom-0 right-4 sm:right-14 lg:right-24 hidden md:block">
        <Image
          src="/cutouts/student-mug.webp"
          alt=""
          width={360}
          height={1232}
          sizes="160px"
          quality={65}
          className="h-[34svh] lg:h-[45svh] w-auto object-contain object-bottom drop-shadow-[0_18px_24px_rgba(2,46,46,0.35)]"
        />
      </div>

      {/* Center stage: one line, two CTAs */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-20 sm:pb-24 text-center">
        <h1
          className="display-1 text-white hero-in"
          style={{ "--stagger": 0 } as React.CSSProperties}
        >
          Your room is ready.
        </h1>
        <p
          className="hero-in mx-auto mt-6 max-w-xl text-lg sm:text-xl text-white/85 leading-relaxed"
          style={{ "--stagger": 1 } as React.CSSProperties}
        >
          Safe, fully furnished student stays in Khomasdal and Rocky Crest.
          2027 bookings are open.
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
    </section>
  );
}
