import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Mail,
  CalendarCheck,
} from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Closing CTA: the real front door, the ask, and the three ways to reach
 * the team. WhatsApp leads.
 */
export function Contact() {
  const channels = [
    {
      icon: MessageCircle,
      title: "WhatsApp, fastest",
      value: SITE.phoneDisplay,
      href: SITE.whatsappBooking,
      external: true,
      highlight: true,
    },
    {
      icon: Phone,
      title: "Call",
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
    <section id="contact" className="bg-brand text-white relative overflow-hidden scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        {/* Photo half: the real front door */}
        <div className="relative min-h-[320px] lg:min-h-0">
          <Image
            src="/photos/exterior-entrance.webp"
            alt="A resident arriving at the front door of the C4 house"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-brand-deep/20" />
        </div>

        {/* Copy + channels half */}
        <div className="relative flex flex-col justify-center px-5 sm:px-10 lg:px-16 py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-10 hidden lg:block breeze-tint opacity-[0.06]"
          />
          <p className="reveal inline-flex items-center gap-2 text-sm font-bold text-gold-soft">
            <CalendarCheck className="w-4 h-4" aria-hidden="true" />
            Move-in ready for the {SITE.bookingYear} academic year
          </p>
          <h2 className="reveal mt-4 text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] leading-[1.08] text-balance">
            Secure your room before they&rsquo;re gone
          </h2>
          <p className="reveal mt-5 text-white/80 leading-relaxed max-w-lg text-[0.95rem] sm:text-base">
            Rooms are limited per house and the {SITE.deposit} deposit locks
            yours. Message us and we will walk you through everything, from
            viewing the rooms to moving in.
          </p>

          <div className="reveal mt-9 space-y-3">
            {channels.map(({ icon: Icon, title, value, href, external, highlight }) => (
              <a
                key={title}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`flex items-center gap-4 rounded-xl p-4 transition-all duration-200 active:translate-y-px ${
                  highlight
                    ? "bg-white text-brand hover:bg-gold-soft hover:text-white"
                    : "bg-white/5 border border-white/15 text-white hover:bg-white/10"
                }`}
              >
                <span
                  className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
                    highlight ? "bg-gold text-white" : "bg-white/10 text-gold-soft"
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </span>
                <span>
                  <span
                    className={`block text-xs font-semibold ${
                      highlight ? "text-brand/70" : "text-white/60"
                    }`}
                  >
                    {title}
                  </span>
                  <span className="block font-bold tnum">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
