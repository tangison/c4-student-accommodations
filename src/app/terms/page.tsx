import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${SITE.name} website and booking student accommodation.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="1 September 2026"
      intro={`By accessing or using this website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the site. These terms govern the website only; accommodation agreements are concluded separately with ${SITE.name}.`}
      sections={[
        {
          heading: "1. Use of Our Website",
          body: [
            "You may use this website for lawful purposes only. You must not use it in any way that causes damage to the website, impairs its availability, or violates any applicable law of Namibia.",
          ],
        },
        {
          heading: "2. Intellectual Property",
          body: [
            "All content on this site, including text, images, the C4 logo and design, is owned by " +
              SITE.name +
              " or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without written permission.",
          ],
        },
        {
          heading: "3. Pricing & Bookings",
          body: [
            `Advertised pricing (${SITE.pricePerMonth} per person per month and the ${SITE.deposit} deposit) is subject to change without notice. A booking is only confirmed once the required deposit has been paid and the accommodation agreement has been signed. Availability is limited and rooms are allocated on a first-paid basis.`,
          ],
        },
        {
          heading: "4. Disclaimer of Warranties",
          body: [
            'This website and its content are provided "as is" without warranties of any kind, express or implied. We do not warrant that the site will be error-free or uninterrupted.',
          ],
        },
        {
          heading: "5. Limitation of Liability",
          body: [
            `To the fullest extent permitted by law, ${SITE.name} shall not be liable for any indirect, incidental or consequential damages arising from your use of this website.`,
          ],
        },
        {
          heading: "6. Third-Party Links",
          body: [
            "This site links to third-party services such as WhatsApp. We are not responsible for the content or privacy practices of those services.",
          ],
        },
        {
          heading: "7. Governing Law",
          body: [
            "These Terms are governed by the laws of the Republic of Namibia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Windhoek, Namibia.",
          ],
        },
        {
          heading: "8. Changes",
          body: [
            "We may update these Terms at any time. Continued use of the site after changes constitutes acceptance of the revised Terms.",
          ],
        },
      ]}
    />
  );
}
