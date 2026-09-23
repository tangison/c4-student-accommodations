import { BedDouble, CalendarCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export function PricingBanner() {
  return (
    <section aria-label="Pricing" className="bg-gold py-9 shadow-inner relative overflow-hidden">
      <div aria-hidden="true" className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10" />
      <div aria-hidden="true" className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-brand/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          {SITE.pricePerMonth}
          <span className="text-xl md:text-2xl font-bold text-white/90 ml-3 align-middle">
            per person / month
          </span>
        </h2>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-3">
          <span className="inline-flex items-center gap-2 bg-white text-brand font-bold text-sm md:text-base px-4 py-1.5 rounded-full shadow">
            <BedDouble className="w-4 h-4 text-gold" aria-hidden="true" />
            Not per room — share the stay, split nothing else
          </span>
          <span className="inline-flex items-center gap-2 bg-brand text-white font-bold text-sm md:text-base px-4 py-1.5 rounded-full shadow">
            <CalendarCheck className="w-4 h-4 text-gold-soft" aria-hidden="true" />
            {SITE.deposit} deposit required
          </span>
        </div>
      </div>
    </section>
  );
}
