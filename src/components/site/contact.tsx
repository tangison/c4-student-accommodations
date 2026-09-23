import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  CalendarHeart,
} from "lucide-react";
import { SITE } from "@/lib/site";

export function Contact() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp (Fastest)",
      value: SITE.phoneDisplay,
      href: SITE.whatsappBooking,
      external: true,
      highlight: true,
    },
    {
      icon: Phone,
      title: "Call Us",
      value: SITE.phoneDisplay,
      href: `tel:${SITE.phoneRaw}`,
      external: false,
      highlight: false,
    },
    {
      icon: Mail,
      title: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}?subject=${encodeURIComponent("2027 Booking Enquiry")}`,
      external: false,
      highlight: false,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-24 bg-cream relative overflow-hidden scroll-mt-20">
      <div aria-hidden="true" className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gold-pale/50" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-brand/5" />

      <div className="reveal relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Copy + channels */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand leading-tight">
            Secure Your Room Before They&apos;re Gone
          </h2>
          <p className="mt-4 text-lg text-ink/75 leading-relaxed max-w-xl">
            {SITE.bookingYear} bookings are open and rooms are limited. The
            {" "}{SITE.deposit} deposit secures your place. Message us on
            WhatsApp and our team will walk you through everything, from
            viewing the rooms to moving in.
          </p>

          <div className="mt-8 space-y-4">
            {channels.map(({ icon: Icon, title, value, href, external, highlight }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`flex items-center gap-4 rounded-xl p-4 shadow-soft transition-all duration-300 hover:shadow-lift hover:-translate-y-0.5 ${
                  highlight
                    ? "bg-brand text-white hover:bg-gold"
                    : "bg-white text-ink hover:shadow-lg"
                }`}
              >
                <span
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                    highlight ? "bg-gold text-white" : "bg-brand-pale/60 text-brand"
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span>
                  <span className={`block text-xs font-semibold ${highlight ? "text-white/75" : "text-ink/55"}`}>
                    {title}
                  </span>
                  <span className="block font-bold">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Locations card */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/building-exterior.jpg"
              alt="Modern student residence building under a blue sky"
              width={1400}
              height={700}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SITE.locations.map((loc) => (
              <div key={loc} className="bg-white rounded-xl shadow-md p-5 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-ink">{loc}</p>
                  <p className="text-sm text-ink/60">{SITE.city}, {SITE.country}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-brand">
            <CalendarHeart className="w-4 h-4 text-gold" aria-hidden="true" />
            Move-in ready for the {SITE.bookingYear} academic year
          </p>
        </div>
      </div>
    </section>
  );
}
