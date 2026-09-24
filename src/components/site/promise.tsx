import { SITE } from "@/lib/site";

/**
 * The promise strip: the client's own tagline carried at full weight on
 * deep teal, with the two hard facts beside it. Replaces the old gold
 * pricing banner.
 */
export function Promise() {
  return (
    <section aria-label="Our promise and pricing" className="bg-brand text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl xl:text-[2.9rem] font-extrabold tracking-[-0.02em] leading-[1.12] text-balance">
              &ldquo;The only student stay that cares and matters&rdquo;
            </h2>
            <p className="mt-5 text-white/80 leading-relaxed max-w-xl text-[0.95rem] sm:text-base">
              Everything a student needs under one roof, handled by people
              who treat the house like family. Parents get peace of mind,
              residents get a room that is ready when they arrive.
            </p>
          </div>

          <dl className="reveal grid grid-cols-2 gap-x-6 gap-y-7 lg:border-l lg:border-white/15 lg:pl-10">
            <div>
              <dd className="text-2xl sm:text-3xl font-extrabold text-gold-soft tnum leading-none">
                {SITE.pricePerMonth}
              </dd>
              <dt className="mt-2 text-xs font-semibold text-white/75 leading-snug">
                per person / month, not per room
              </dt>
            </div>
            <div>
              <dd className="text-2xl sm:text-3xl font-extrabold text-gold-soft tnum leading-none">
                {SITE.deposit}
              </dd>
              <dt className="mt-2 text-xs font-semibold text-white/75 leading-snug">
                deposit required to secure the room
              </dt>
            </div>
            <div>
              <dd className="text-2xl sm:text-3xl font-extrabold text-gold-soft tnum leading-none">
                {SITE.bookingYear}
              </dd>
              <dt className="mt-2 text-xs font-semibold text-white/75 leading-snug">
                bookings now open, move-in ready
              </dt>
            </div>
            <div>
              <dd className="text-2xl sm:text-3xl font-extrabold text-gold-soft tnum leading-none">
                14
              </dd>
              <dt className="mt-2 text-xs font-semibold text-white/75 leading-snug">
                room and house essentials included
              </dt>
            </div>
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="h-1.5 bg-gold" />
    </section>
  );
}
