import { FAQS, SITE } from "@/lib/site";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/**
 * FAQ: native details/summary rows, no accordion script. The question is
 * the interface; the answer opens under it.
 */
export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16">
          <div className="reveal">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-brand leading-[1.08] text-balance">
              Asked by every parent
            </h2>
            <p className="mt-4 text-lg text-ink/70 leading-relaxed">
              Straight answers to the questions we hear most. Anything else,
              ask us directly and we will reply fast.
            </p>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-bold text-brand underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors"
            >
              WhatsApp us directly
            </a>
          </div>

          <div className="reveal border-t border-border">
            {FAQS.map((faq, i) => (
              <details key={faq.q} className="group border-b border-border" open={i === 0}>
                <summary className="flex items-center justify-between gap-4 py-5 font-bold text-ink group-hover:text-brand group-open:text-brand transition-colors text-[0.95rem] sm:text-base">
                  {faq.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center text-brand group-open:bg-brand group-open:border-brand group-open:text-white transition-colors"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className="w-2.5 h-2.5 transition-transform duration-200 group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M6 1v10M1 6h10" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-ink/70 leading-relaxed max-w-2xl text-[0.95rem]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
