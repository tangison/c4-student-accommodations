import type { Metadata } from "next";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to C4 Student Accommodations: WhatsApp or call +264 81 437 8400, email info@c4studentstay.com. Khomasdal and Rocky Crest, Windhoek.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: SITE.whatsappBooking,
    note: "Bookings, availability, viewings. Replies are fast.",
    external: true,
  },
  {
    icon: Phone,
    label: "Call",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phoneRaw}`,
    note: "Speak to the house manager directly.",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    note: "Documents, booking forms and proof of payment.",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Talk to us"
        lead="One number, one inbox, two houses. WhatsApp is the fastest way to reach us about 2027 bookings, and a person answers every message."
      />

      <section aria-label="Contact channels" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CHANNELS.map(({ icon: Icon, label, value, href, note, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group bg-bone border border-ink/10 p-8 rounded-sm hover:border-brand hover:bg-white transition-[border-color,background-color] duration-300"
            >
              <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
              <h2 className="mt-5 text-lg font-semibold text-brand">{label}</h2>
              <p className="mt-2 font-medium text-ink tnum break-all">{value}</p>
              <p className="mt-3 text-sm text-ink/60 leading-relaxed">{note}</p>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="locations-heading" className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 id="locations-heading" className="display-2 max-w-3xl text-balance">
            Where to find us
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {SITE.locations.map((loc) => (
              <div key={loc} className="bg-bone p-8 sm:p-10">
                <MapPin className="w-6 h-6 text-gold" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-brand">
                  {loc}, {SITE.city}
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed">
                  An established residential area with easy access to campuses,
                  shops and student transport routes. Exact address shared on
                  booking, for residents and their families.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
