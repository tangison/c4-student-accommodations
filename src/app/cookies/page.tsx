import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How the ${SITE.name} website uses cookies.`,
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="1 September 2026"
      intro="This site uses cookies — small text files stored on your device — to improve your browsing experience."
      sections={[
        {
          heading: "What cookies we use",
          body: [
            [
              "Essential cookies: required for the site to function and render correctly. These cannot be disabled.",
              "Preference cookies: remember choices you make on the site (for example interface settings).",
              "No advertising or cross-site tracking cookies are used.",
            ],
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "You can control or delete cookies through your browser settings. Disabling cookies may affect how parts of this site display.",
          ],
        },
        {
          heading: "More information",
          body: [
            "For details on how we handle personal information, see our Privacy Policy.",
          ],
        },
      ]}
    />
  );
}
