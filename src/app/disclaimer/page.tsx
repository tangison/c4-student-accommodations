import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Disclaimer for the ${SITE.name} website.`,
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      updated="1 September 2026"
      intro={`The information published on this website is provided by ${SITE.name} in good faith and for general information about our student accommodation services only.`}
      sections={[
        {
          heading: "Accuracy of Information",
          body: [
            "While we strive to keep pricing, availability and amenity details accurate and current, we make no representations or warranties of any kind about the completeness or reliability of this information. Rooms, rates and services are confirmed only at the time of booking.",
          ],
        },
        {
          heading: "Illustrative Imagery",
          body: [
            "Some photographs shown on this website are illustrative preview imagery used during the website preview phase and may not depict the exact rooms or buildings. Prospective residents are encouraged to request current photos or arrange a viewing before booking.",
          ],
        },
        {
          heading: "External Links",
          body: [
            "This website may contain links to external services (such as WhatsApp) that are not provided or maintained by us. We do not guarantee the accuracy or reliability of any information on those external services.",
          ],
        },
        {
          heading: "Limitation",
          body: [
            "Any action you take based on the information on this website is strictly at your own risk, and we will not be liable for any losses or damages in connection with the use of our website.",
          ],
        },
      ]}
    />
  );
}
