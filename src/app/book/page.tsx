import type { Metadata } from "next";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { STEPS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book for 2027",
  description:
    "How to book a C4 student room for 2027: message us on WhatsApp, secure with a N$2,000 deposit, move in ready. From N$2,800 per person per month.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <>
      <PageHero
        title="Book for 2027"
        lead={`Three steps, one conversation. Most bookings are finished the same day on WhatsApp. A ${SITE.deposit} deposit secures the room; the rest is ${SITE.pricePerMonth} per person per month.`}
      />

      {/* Steps: a true sequence, so numbered markers are earned here */}
      <section aria-labelledby="steps-heading" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 id="steps-heading" className="display-2 max-w-3xl text-balance">
            Three steps and the room is yours
          </h2>
          <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
            {STEPS.map((step) => (
              <li key={step.n} className="bg-bone p-8 sm:p-10">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-brand text-white font-semibold tnum"
                >
                  {step.n}
                </span>
                <h3 className="mt-6 text-xl font-semibold text-brand tracking-[-0.01em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Channels */}
      <section aria-labelledby="channels-heading" className="pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 id="channels-heading" className="display-2 max-w-3xl text-balance">
            Where to reach us
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <a
              href={SITE.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand text-white p-8 rounded-sm hover:bg-brand-deep transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6 text-gold-soft" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold">WhatsApp</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed tnum">
                {SITE.phoneDisplay}. Fastest route to a booked room.
              </p>
            </a>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="group bg-bone border border-ink/10 p-8 rounded-sm hover:border-brand transition-colors duration-300"
            >
              <Phone className="w-6 h-6 text-gold" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-brand">Call</h3>
              <p className="mt-2 text-ink/70 text-sm leading-relaxed tnum">
                {SITE.phoneDisplay}. Ask for the house manager.
              </p>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="group bg-bone border border-ink/10 p-8 rounded-sm hover:border-brand transition-colors duration-300"
            >
              <Mail className="w-6 h-6 text-gold" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-semibold text-brand">Email</h3>
              <p className="mt-2 text-ink/70 text-sm leading-relaxed break-all">
                {SITE.email}. Good for documents and proof of payment.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
