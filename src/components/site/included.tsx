import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { IN_ROOM, IN_RATE, SITE } from "@/lib/site";

/**
 * What you get: a ledger, not cards. Two honest lists of exactly what
 * sits inside the N$2,800, with the real bed as the only illustration.
 */
export function Included() {
  return (
    <section id="included" className="py-20 md:py-28 bg-warmgrey scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="reveal max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-brand leading-[1.08] text-balance">
            One rate, everything handled
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            {SITE.pricePerMonth} per person each month. Here is exactly what
            that covers, item by item. No fine print.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6">
          {/* Ledger */}
          <div className="reveal grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white rounded-2xl p-7 sm:p-10 shadow-soft">
            <div>
              <h3 className="font-bold text-brand mb-5">In your room</h3>
              <ul className="check-list text-[0.95rem] text-ink/75">
                {IN_ROOM.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-brand mb-5">Handled by the house</h3>
              <ul className="check-list text-[0.95rem] text-ink/75">
                {IN_RATE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="sm:col-span-2 text-xs text-ink/55 leading-relaxed border-t border-border pt-4">
              Printing carries a small fee. The shuttle is a paid service you
              pre-book. Both are arranged with the on-site team.
            </p>
          </div>

          {/* Bed panel: the real bedding, on the brand colour */}
          <div className="reveal relative rounded-2xl bg-brand overflow-hidden min-h-[380px] flex items-end">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-24 breeze-tint opacity-[0.08]"
            />
            <Image
              src="/cutouts/bed-b.webp"
              alt="A C4 bed made up with teal bedding, matching the house brand"
              width={806}
              height={502}
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="absolute -right-6 sm:right-0 bottom-14 w-[85%] max-w-md h-auto drop-shadow-[0_24px_32px_rgba(2,46,46,0.45)]"
            />
            <div className="relative p-7 sm:p-9 w-full">
              <p className="text-white font-extrabold text-xl leading-snug max-w-[16rem]">
                Your bed is made up before move-in day.
              </p>
              <a
                href={SITE.whatsappBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 px-5 py-3 text-sm font-bold rounded-lg text-brand bg-white hover:bg-gold-soft active:translate-y-px transition-[background-color,transform] duration-200"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Reserve for {SITE.bookingYear}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
