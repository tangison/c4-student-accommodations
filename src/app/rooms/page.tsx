import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, PageCta } from "@/components/site/page-hero";
import { TOUR, IN_ROOM, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Rooms",
  description:
    "Fully furnished student rooms in Khomasdal and Rocky Crest, Windhoek. Beds made up, desk, storage, hot water. From N$2,800 per person per month for 2027.",
  alternates: { canonical: "/rooms" },
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        title="The rooms"
        lead="Furnished before you arrive, made up and ready. Bunk beds with mattresses, bedding and linen, a study desk, storage and charging cables. You bring your personal things and your books."
      />

      <section aria-label="Room and house interiors" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {TOUR.map((photo) => (
            <figure key={photo.src} className="group overflow-hidden rounded-sm bg-warmgrey">
              <div className="relative aspect-[13/10] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
          quality={65}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <figcaption className="p-5">
                <p className="font-semibold text-brand">{photo.caption}</p>
                <p className="text-sm text-ink/60 mt-1">{photo.note}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="inroom-heading" className="pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 id="inroom-heading" className="display-2 text-balance">
              What is waiting in the room
            </h2>
            <p className="mt-5 text-lg text-ink/65 leading-relaxed">
              Every item below is inside the {SITE.pricePerMonth} monthly rate.
              Nothing here is an extra.
            </p>
            <ul className="check-list mt-8 text-ink/85">
              {IN_ROOM.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-brand text-white p-8 sm:p-10 rounded-sm relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0 breeze-mask opacity-[0.07]" />
            <div className="relative">
              <p className="text-gold-soft text-sm font-semibold">
                {SITE.bookingYear} bookings open
              </p>
              <p className="mt-3 text-5xl font-semibold tnum tracking-tight">
                {SITE.pricePerMonth}
              </p>
              <p className="mt-2 text-white/70">
                per person / month &middot; {SITE.deposit} deposit
              </p>
              <div className="mt-8 border-t border-white/15 pt-6 space-y-2 text-sm text-white/75">
                <p>Rate covers the room, Wi-Fi, cleaning, laundry, hot water and the study area.</p>
                <p>Share the room with one housemate or ask us about current availability.</p>
              </div>
              <a
                href={SITE.whatsappBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center w-full px-7 py-4 rounded-full bg-white text-brand-deep font-semibold hover:bg-brand-pale active:translate-y-px transition-[background-color,transform] duration-200"
              >
                Ask about a room on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <PageCta text="Want to see the rooms in person? We will walk you through the house on a quick call." />
    </>
  );
}
