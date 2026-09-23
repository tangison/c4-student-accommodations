import { SITE } from "@/lib/site";

type Section = { heading: string; body: (string | string[])[] };

/**
 * Shared legal-page shell: on-brand, minimal, print-friendly.
 * body items: string = paragraph, string[] = bullet list.
 */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <div className="legal-page py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-[740px] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand tracking-tight">
          {title}
        </h1>
        <p className="mt-2 mb-8 pb-6 border-b border-border text-sm text-muted-foreground">
          Last updated: {updated}
        </p>

        <p className="text-ink/80 leading-relaxed mb-8">{intro}</p>

        {sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-lg font-bold text-brand mb-3">{section.heading}</h2>
            <div className="space-y-3">
              {section.body.map((item, i) =>
                Array.isArray(item) ? (
                  <ul key={i} className="list-disc pl-6 space-y-1.5 text-ink/75 leading-relaxed">
                    {item.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p key={i} className="text-ink/75 leading-relaxed">
                    {item}
                  </p>
                )
              )}
            </div>
          </section>
        ))}

        <div className="mt-10 p-5 bg-warmgrey rounded-xl text-sm text-ink/70 leading-relaxed">
          <strong className="text-brand">{SITE.name}</strong>
          <br />
          Email:{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand font-semibold hover:text-gold">
            {SITE.email}
          </a>
          <br />
          WhatsApp / Call: {SITE.phoneDisplay}
          <br />
          {SITE.locations.join(" & ")}, {SITE.city}, {SITE.country}
        </div>
      </div>
    </div>
  );
}
