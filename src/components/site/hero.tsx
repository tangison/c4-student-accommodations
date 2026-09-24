import Image from "next/image";
import { MessageCircle, ShieldCheck, Wifi, BedDouble } from "lucide-react";
import { SITE } from "@/lib/site";

const trustItems = [
  { icon: ShieldCheck, label: "Safe & secure" },
  { icon: Wifi, label: "Fibre Wi-Fi" },
  { icon: BedDouble, label: "Fully furnished" },
];

/**
 * Hero: warm plaster panel with the headline, and the real house filling
 * the right half behind a breeze-block screen edge. One orchestrated
 * load-in, staggered; everything GPU-only.
 */
export function Hero() {
  return (
    <section id="home" className="relative bg-warmgrey overflow-hidden scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.08fr] min-h-[calc(100svh-5rem)]">
        {/* Copy panel */}
        <div className="relative flex flex-col justify-center px-5 sm:px-8 lg:pl-10 xl:pl-16 py-14 lg:py-20 order-2 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-10 hidden lg:block breeze-tint opacity-[0.06]"
          />
          <p
            className="hero-in text-sm font-bold uppercase tracking-[0.14em] text-ochre-deep"
            style={{ "--stagger": 0 } as React.CSSProperties}
          >
            Khomasdal &amp; Rocky Crest, Windhoek
          </p>
          <h1
            className="hero-in mt-5 text-[2.6rem] leading-[1.04] sm:text-6xl xl:text-[4.6rem] font-extrabold tracking-[-0.03em] text-brand text-balance"
            style={{ "--stagger": 1 } as React.CSSProperties}
          >
            A safe second home for students in Windhoek
          </h1>

          <p
            className="hero-in mt-6 text-lg text-ink/75 leading-relaxed max-w-lg"
            style={{ "--stagger": 2 } as React.CSSProperties}
          >
            The only student stay that cares and matters. Fully furnished
            rooms, fibre Wi-Fi, laundry and a caring on-site team, so you
            can focus on your success.
          </p>

          <div
            className="hero-in mt-8 flex flex-col sm:flex-row gap-3.5"
            style={{ "--stagger": 3 } as React.CSSProperties}
          >
            <a
              href={SITE.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold rounded-lg text-white bg-gold hover:bg-gold-deep active:translate-y-px transition-[background-color,transform] duration-200 shadow-lift"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Secure your room
            </a>
            <a
              href="#tour"
              className="inline-flex items-center justify-center px-7 py-4 text-base font-bold rounded-lg text-brand border-2 border-brand/20 hover:border-brand hover:bg-brand hover:text-white active:translate-y-px transition-[background-color,color,border-color,transform] duration-200"
            >
              See the rooms
            </a>
          </div>

          <ul
            className="hero-in mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink/70"
            style={{ "--stagger": 4 } as React.CSSProperties}
          >
            {trustItems.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo panel: the real house, taken this year */}
        <div className="relative order-1 lg:order-2 min-h-[62svh] lg:min-h-0">
          <Image
            src="/photos/exterior-garage.webp"
            alt="The C4 student house with its sign, brick courtyard and Windhoek hills behind"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          {/* breeze-block screen edge, the house boundary wall */}
          <div
            aria-hidden="true"
            className="hero-in absolute inset-y-0 left-0 w-14 lg:w-20 bg-warmgrey breeze-mask"
            style={{ "--stagger": 5 } as React.CSSProperties}
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-deep/55 to-transparent"
          />

          {/* residents cutouts, anchored to the seam */}
          <div aria-hidden="true" className="hidden sm:block absolute bottom-0 left-16 lg:left-24">
            <Image
              src="/cutouts/student-backpack.webp"
              alt=""
              width={462}
              height={1270}
              sizes="230px"
              className="h-[42svh] lg:h-[52svh] w-auto object-contain object-bottom drop-shadow-[0_18px_24px_rgba(2,46,46,0.35)]"
            />
          </div>
          <div aria-hidden="true" className="hidden md:block absolute bottom-0 left-40 lg:left-64">
            <Image
              src="/cutouts/student-mug.webp"
              alt=""
              width={360}
              height={1232}
              sizes="180px"
              className="h-[38svh] lg:h-[47svh] w-auto object-contain object-bottom drop-shadow-[0_18px_24px_rgba(2,46,46,0.35)]"
            />
          </div>

          {/* price chip on the seam */}
          <div
            className="hero-in absolute top-5 right-5 sm:right-8 bg-white text-brand rounded-xl shadow-lift px-5 py-4"
            style={{ "--stagger": 6 } as React.CSSProperties}
          >
            <p className="text-2xl font-extrabold leading-none tnum">{SITE.pricePerMonth}</p>
            <p className="text-xs font-semibold text-gold-deep mt-1">
              per person / month &middot; {SITE.deposit} deposit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
