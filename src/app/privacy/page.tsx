import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 September 2026"
      intro={`${SITE.name} ("we", "us" or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use and safeguard your data when you visit our website or contact us about student accommodation.`}
      sections={[
        {
          heading: "1. Information We Collect",
          body: [
            "We may collect the following types of information:",
            [
              "Contact information: your name, phone number and email address — when you message us on WhatsApp, call us, or send an email about a booking.",
              "Enquiry details: the content of your messages with us, including questions about rooms, pricing and move-in dates.",
              "Usage data: pages visited and general browsing behaviour, collected anonymously to help us improve the website.",
            ],
          ],
        },
        {
          heading: "2. How We Use Your Information",
          body: [
            "We use your information to:",
            [
              "Respond to your enquiries and process accommodation bookings.",
              "Contact you about your booking, viewing or move-in arrangements.",
              "Improve our website, services and student experience.",
              "Comply with our legal and regulatory obligations.",
            ],
          ],
        },
        {
          heading: "3. Data Sharing",
          body: [
            "We do not sell your personal data. We may share your information with trusted service providers (such as communication platforms) strictly as needed to operate our business, and these parties are expected to keep your data confidential.",
          ],
        },
        {
          heading: "4. Data Retention",
          body: [
            "We retain your personal information only as long as necessary to handle your enquiry or booking, or as required by law. Old enquiries that do not lead to bookings are routinely discarded.",
          ],
        },
        {
          heading: "5. Your Rights",
          body: [
            "You have the right to:",
            [
              "Ask what personal information we hold about you.",
              "Request correction of inaccurate information.",
              "Request deletion of your information where no legal obligation requires us to keep it.",
              "Opt out of any further communication at any time.",
            ],
            `To exercise these rights, contact us at ${SITE.email}.`,
          ],
        },
        {
          heading: "6. Cookies",
          body: [
            "This website uses only essential cookies needed for the site to function properly. See our Cookie Policy for details.",
          ],
        },
        {
          heading: "7. Security",
          body: [
            "We apply reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure or destruction.",
          ],
        },
        {
          heading: "8. Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. Significant changes will be reflected by updating the date at the top of this page.",
          ],
        },
      ]}
    />
  );
}
