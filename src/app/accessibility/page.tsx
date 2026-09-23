import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: `${SITE.name}'s commitment to digital accessibility.`,
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      updated="1 September 2026"
      intro={`${SITE.name} is committed to making this website usable by everyone, including people with disabilities. We aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.`}
      sections={[
        {
          heading: "What We Do",
          body: [
            [
              "Use semantic HTML landmarks (header, nav, main, footer) for easy screen-reader navigation.",
              "Provide descriptive alternative text for meaningful images.",
              "Maintain strong colour contrast between text and backgrounds.",
              "Support full keyboard navigation with visible focus states.",
              "Respect the prefers-reduced-motion system setting for animations.",
              "Include a skip-to-content link as the first interactive element on every page.",
            ],
          ],
        },
        {
          heading: "Known Limitations",
          body: [
            "The AI assistant widget relies on third-party AI services; responses may vary. If you experience any difficulty using this website, please let us know and we will assist you directly through WhatsApp or email.",
          ],
        },
        {
          heading: "Feedback",
          body: [
            `If you encounter any accessibility barriers on this site, please contact us at ${SITE.email} or WhatsApp ${SITE.phoneDisplay} so we can fix them.`,
          ],
        },
      ]}
    />
  );
}
