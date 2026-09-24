import { MARQUEE } from "@/lib/site";

/**
 * Marquee: one infinite, factual strip (gpt-taste arsenal pick). Real
 * booking facts only, separated by a small gold block. The track is
 * duplicated for the seamless -50% loop; the copy is aria-hidden on the
 * duplicate.
 */
export function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];

  return (
    <section aria-label="Booking facts" className="bg-brand text-white border-y border-brand-deep overflow-hidden">
      <div className="marquee-track items-center py-4">
        {items.map((fact, i) => (
          <span
            key={i}
            aria-hidden={i >= MARQUEE.length}
            className="flex items-center shrink-0 text-sm font-medium text-white/90"
          >
            <span className="px-6 whitespace-nowrap">{fact}</span>
            <span aria-hidden="true" className="w-1.5 h-1.5 bg-gold-soft rotate-45" />
          </span>
        ))}
      </div>
    </section>
  );
}
