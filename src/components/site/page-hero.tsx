import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * PageHero: the compact opening for inner pages. Deep teal ground, breeze
 * texture, one wide headline, one supporting line, breadcrumb-free and
 * label-free per the meta-label ban.
 */
export function PageHero({
  title,
  lead,
}: {
  title: string;
  lead: string;
}) {
  return (
    <section className="relative bg-brand-deep text-white overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 breeze-mask opacity-[0.06]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-36 sm:pt-44 pb-16 sm:pb-20">
        <h1 className="display-1 max-w-5xl text-balance">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed text-pretty">
          {lead}
        </p>
        <a
          href={SITE.whatsappBooking}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-brand-deep font-semibold hover:bg-brand-pale active:translate-y-px transition-[background-color,transform] duration-200"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          Secure your room
        </a>
      </div>
    </section>
  );
}

/** Closing CTA for inner pages, quieter than the footer band. */
export function PageCta({ text }: { text: string }) {
  return (
    <section className="border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="display-3 max-w-xl text-balance">{text}</p>
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep active:translate-y-px transition-[background-color,transform] duration-200 shrink-0"
        >
          Book for {SITE.bookingYear}
        </Link>
      </div>
    </section>
  );
}
