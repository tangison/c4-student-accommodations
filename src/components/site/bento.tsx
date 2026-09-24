import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TOUR, OUTSIDE, SITE } from "@/lib/site";

/**
 * Bento: the Interest block. A gapless grid (grid-flow-dense, hairline
 * seams, zero empty cells: 4 x 3 = 12 cells fully interlocked on md).
 * The heading carries an inline typography image, a real kitchen photo.
 */
export function Bento() {
  const [livingRoom, bedroom, kitchenA, , bathroom] = TOUR;
  const [entrance] = OUTSIDE;

  const factCell =
    "flex flex-col justify-between bg-brand text-white p-6 sm:p-7 min-h-[10rem]";

  return (
    <section aria-labelledby="bento-heading" className="py-28 md:py-44">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 id="bento-heading" className="display-2 max-w-5xl text-balance reveal">
          Everything a student needs,
          <span
            aria-hidden="true"
            className="inline-block align-middle h-[0.68em] w-[1.5em] rounded-full mx-2 sm:mx-3 bg-cover bg-center shadow-soft"
            style={{ backgroundImage: "url(/photos/pill-kitchen.webp)" }}
          />
          already in the rate.
        </h2>
        <p className="reveal mt-5 max-w-2xl text-lg text-ink/65 leading-relaxed">
          {SITE.pricePerMonth} a month covers the room, the house and the
          chores. These are the real rooms, photographed this year.
        </p>

        <div
          className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 grid-flow-dense gap-px bg-ink/10 border border-ink/10"
          role="list"
        >
          {/* Living room: the anchor image, 2 x 2 */}
          <div role="listitem" className="col-span-2 row-span-2 relative group overflow-hidden bg-warmgrey min-h-[16rem]">
            <Image
              src={livingRoom.src}
              alt={livingRoom.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
          quality={65}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 bg-gradient-to-t from-brand-deep/80 to-transparent">
              <p className="text-white font-semibold text-lg">{livingRoom.caption}</p>
              <p className="text-white/70 text-sm mt-0.5">{livingRoom.note}</p>
            </div>
          </div>

          {/* Bedroom: wide image, links to the rooms page */}
          <Link
            href="/rooms"
            role="listitem"
            className="col-span-2 relative group overflow-hidden bg-warmgrey min-h-[11rem]"
          >
            <Image
              src={bedroom.src}
              alt={bedroom.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
          quality={65}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-brand-deep/75 to-transparent flex items-end justify-between gap-3">
              <span>
                <span className="block text-white font-semibold">{bedroom.caption}</span>
                <span className="block text-white/70 text-sm">{bedroom.note}</span>
              </span>
              <span className="flex items-center gap-1.5 text-white text-sm font-semibold whitespace-nowrap">
                Rooms
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>

          {/* Fact cells + photos: the 12-cell interlock */}
          <div role="listitem" className={factCell}>
            <p className="text-2xl sm:text-3xl font-semibold tnum">{SITE.pricePerMonth}</p>
            <p className="text-sm text-white/70 mt-2">per person / month, everything below included</p>
          </div>

          <div role="listitem" className="relative group overflow-hidden bg-warmgrey min-h-[10rem]">
            <Image
              src={kitchenA.src}
              alt={kitchenA.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
          quality={65}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          <div role="listitem" className={factCell}>
            <p className="text-2xl sm:text-3xl font-semibold tnum">{SITE.deposit}</p>
            <p className="text-sm text-white/70 mt-2">deposit secures your spot for {SITE.bookingYear}</p>
          </div>

          <div role="listitem" className="relative group overflow-hidden bg-warmgrey min-h-[10rem]">
            <Image
              src={bathroom.src}
              alt={bathroom.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
          quality={65}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Entrance: wide closing image */}
          <div role="listitem" className="col-span-2 relative group overflow-hidden bg-warmgrey min-h-[11rem]">
            <Image
              src={entrance.src}
              alt={entrance.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
          quality={65}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-brand-deep/75 to-transparent">
              <p className="text-white font-semibold">{entrance.caption}</p>
              <p className="text-white/70 text-sm">{SITE.locations.join(" and ")}, {SITE.city}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
