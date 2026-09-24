import Image from "next/image";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/brand", label: "Brand" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-brand text-white pt-16 pb-8 border-t-[6px] border-gold">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/15">
          {/* Brand */}
          <div>
            <div className="bg-white p-2.5 rounded-lg inline-block mb-4">
              <Image
                src="/c4-logo.svg"
              unoptimized
                alt={`${SITE.name} logo`}
                width={180}
                height={60}
                loading="lazy"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              Safe, secure and fully furnished accommodation for students.
              The only student stay that cares and matters.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-gold-soft font-bold uppercase tracking-wide text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-gold-soft transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-gold-soft font-bold uppercase tracking-wide text-sm mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/80 hover:text-gold-soft transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-gold-soft shrink-0" aria-hidden="true" />
                  WhatsApp {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white/80 hover:text-gold-soft transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-soft shrink-0" aria-hidden="true" />
                  Call {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-white/80 hover:text-gold-soft transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-gold-soft shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-gold-soft font-bold uppercase tracking-wide text-sm mb-4">
              Find Us
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              {SITE.locations.map((loc) => (
                <li key={loc} className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-gold-soft shrink-0" aria-hidden="true" />
                  {loc}, {SITE.city}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/70 leading-relaxed">
              {SITE.bookingYear} bookings now open: {SITE.pricePerMonth} per
              person / month, {SITE.deposit} deposit.
            </p>
          </div>
        </div>

        {/* Legal links */}
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2 py-6">
          {LEGAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-white/70 hover:text-gold-soft transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Bottom bar with copyright and Tangison Studio signature.
            Right padding keeps the credit clear of the floating action buttons. */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 pb-14 sm:pb-0 sm:pr-72 border-t border-white/15">
          <p className="text-xs text-white/70">
            &copy; <span className="copyright-year">{year}</span> {SITE.name}. All
            rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/70">
            <span>Made by</span>
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white font-medium transition-colors"
            >
              Tangison Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
