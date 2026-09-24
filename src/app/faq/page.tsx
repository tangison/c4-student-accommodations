import type { Metadata } from "next";
import { PageHero, PageCta } from "@/components/site/page-hero";
import { FAQS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about C4 Student Accommodations: bookings for 2027, what the N$2,800 rate includes, safety, locations, transport, the deposit and what to bring.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHero
        title="Questions, answered"
        lead="Everything parents and students ask before booking. If your question is not here, WhatsApp us and we will answer it personally."
      />

      <section aria-label="Frequently asked questions" className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQS.map((faq) => (
              <details key={faq.slug} id={faq.slug} className="group scroll-mt-28">
                <summary className="flex items-start justify-between gap-6 py-6 sm:py-7 cursor-pointer list-none">
                  <h2 className="text-lg sm:text-xl font-semibold text-brand tracking-[-0.01em] text-balance">
                    {faq.q}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 w-7 h-7 rounded-full border border-ink/15 flex items-center justify-center text-ink/50 transition-all duration-300 group-open:rotate-45 group-open:border-gold group-open:text-gold"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-7 pr-10 sm:pr-14 text-ink/75 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-10 text-ink/60">
            Still unsure? WhatsApp {SITE.phoneDisplay} or email {SITE.email}. A
            person answers, not a bot.
          </p>
        </div>
      </section>

      <PageCta text="Happy with the answers? The 2027 rooms are going fast." />
    </>
  );
}
