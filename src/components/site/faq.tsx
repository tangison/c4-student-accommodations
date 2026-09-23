import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-24 bg-white scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-gold">
            Good Questions
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-brand">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Everything parents and students usually ask before booking.
          </p>
        </div>

        <div className="reveal"><Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="bg-warmgrey rounded-xl border border-border px-5 shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-bold text-ink hover:text-brand hover:no-underline py-4 text-[0.95rem] sm:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/70 leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion></div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Still have a question?{" "}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand underline decoration-gold decoration-2 underline-offset-4 hover:text-gold transition-colors"
          >
            WhatsApp us directly
          </a>{" "}
          — we reply fast.
        </p>
      </div>
    </section>
  );
}
