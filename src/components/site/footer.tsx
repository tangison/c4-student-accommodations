import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, PAGES, LEGAL_LINKS, SITE } from "@/lib/site";

/**
 * SiteFooter: the Action block of every page, kept minimal. The bottom bar
 * carries the copyright and the Tangison Studio signature with no layout
 * hacks; mobile clearance for the floating stack is plain padding.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-brand-deep text-white border-t border-brand">
      {/* CTA band */}
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 breeze-mask opacity-[0.05]"
        />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <p className="text-gold-soft text-sm font-semibold">
              {SITE.bookingYear} bookings now open
            </p>
            <p className="display-2 mt-3 text-white text-balance max-w-2xl">
              Your room is ready for {SITE.bookingYear}.
            </p>
            <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
              From {SITE.pricePerMonth} per person per month, {SITE.deposit} deposit.
              WhatsApp us and it is sorted the same day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={SITE.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-brand-deep font-semibold hover:bg-brand-pale active:translate-y-px transition-[background-color,transform] duration-200"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Secure your room
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 active:translate-y-px transition-[background-color,transform] duration-200"
            >
              How booking works
            </Link>
          </div>
        </div>
      </div>

      {/* Directory */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white p-2 rounded inline-block mb-4">
              <Image
                src="/c4-logo.svg"
                unoptimized
                alt={`${SITE.name} logo`}
                width={180}
                height={60}
                loading="lazy"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              {SITE.tagline}.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-gold-soft mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {PAGES.filter((p) => p.href !== "/").map((page) => (
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
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-gold-soft mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/75 hover:text-gold-soft transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gold-soft shrink-0" aria-hidden="true" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white/75 hover:text-gold-soft transition-colors tnum"
                >
                  <Phone className="w-4 h-4 text-gold-soft shrink-0" aria-hidden="true" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-white/75 hover:text-gold-soft transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-gold-soft shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold-soft mb-4">Find us</h3>
            <ul className="space-y-3 text-sm text-white/75">
              {SITE.locations.map((loc) => (
                <li key={loc} className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-soft shrink-0" aria-hidden="true" />
                  {loc}, {SITE.city}
                </li>
              ))}
            </ul>
            <nav aria-label="Site sections" className="mt-6 lg:hidden">
              <ul className="space-y-2.5">
                {NAV_LINKS.slice(0, 2).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 hover:text-gold-soft transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Legal links */}
      <div className="border-t border-white/10">
        <nav aria-label="Legal" className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap gap-x-6 gap-y-2">
          {LEGAL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-white/60 hover:text-gold-soft transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom bar: copyright + studio signature, one clean row */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-5 pb-24 sm:pb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-white/60">
            &copy; <span className="copyright-year">{year}</span> {SITE.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/60">
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
