import Image from "next/image";
import Link from "next/link";
import { PAGES, LEGAL_LINKS, SITE } from "@/lib/site";

/**
 * SiteFooter: ultra minimal by design. The on-dark logo sits straight on
 * the deep teal, one slim booking line, one row of links, one clean bottom
 * bar carrying the copyright and the Tangison Studio signature.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-brand-deep text-white border-t border-brand">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-14 pb-6 sm:pt-16">
        {/* Brand + one booking line */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <Image
              src="/c4-logo-ondark.svg"
              unoptimized
              alt={`${SITE.name} logo`}
              width={176}
              height={59}
              loading="lazy"
              className="h-10 sm:h-11 w-auto object-contain"
            />
            <p className="hidden md:block text-sm text-white/60 max-w-[24ch] leading-snug">
              {SITE.tagline}.
            </p>
          </div>
          <p className="text-sm text-white/75">
            {SITE.bookingYear} bookings open.{" "}
            <a
              href={SITE.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline decoration-gold-soft decoration-2 underline-offset-4 hover:text-gold-soft transition-colors tnum"
            >
              WhatsApp {SITE.phoneDisplay}
            </a>
          </p>
        </div>

        {/* One link row: every page */}
        <nav aria-label="Footer navigation" className="mt-10 pt-6 border-t border-white/10">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {PAGES.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm text-white/75 hover:text-gold-soft transition-colors"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/50 hover:text-gold-soft transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom bar: copyright + studio signature, one clean row */}
        <div className="mt-8 pt-5 pb-16 sm:pb-2 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-white/55">
            &copy; <span className="copyright-year">{year}</span> {SITE.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/55">
            <span>Made by</span>
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/85 hover:text-white font-medium transition-colors"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
