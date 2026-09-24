import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Wifi, Sparkles, Bus } from "lucide-react";
import { PageHero, PageCta } from "@/components/site/page-hero";
import { OUTSIDE, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The House",
  description:
    "The C4 student house in Windhoek: secure, dedicated to students, with fibre Wi-Fi, cleaning, laundry and transport. Khomasdal and Rocky Crest locations.",
  alternates: { canonical: "/the-house" },
};

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Safe and dedicated to students",
    text: "The house is secure and managed by a caring on-site team. It exists for students only, which is what makes it calm, predictable and trusted by parents.",
  },
  {
    icon: Wifi,
    title: "Connected for real study",
    text: "Fibre Wi-Fi runs through the whole property, with a dedicated study area and free PC use. Online lectures, research and assignment uploads never wait.",
  },
  {
    icon: Sparkles,
    title: "Handled housekeeping",
    text: "Rooms are cleaned on schedule and laundry service is part of the rate. The shared kitchen and bathroom stay guest-ready all year.",
  },
  {
    icon: Bus,
    title: "The campus run, covered",
    text: "A paid shuttle and pre-booked student transport connect both houses to campus routes, so the daily trip is simple and reliable.",
  },
];

export default function TheHousePage() {
  return (
    <>
      <PageHero
        title="The house, and where it stands"
        lead={`Two student stays in ${SITE.city}: one in Khomasdal, one in Rocky Crest. Established residential streets, close to campuses, shops and transport routes, with the Windhoek hills over the roofline.`}
      />

      <section aria-label="The house outside" className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {OUTSIDE.map((photo, i) => (
            <figure
              key={photo.src}
              className={`group relative overflow-hidden rounded-sm bg-warmgrey aspect-[4/5] ${
                i % 2 === 1 ? "lg:translate-y-10" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={65}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>

      <section aria-labelledby="pillars-heading" className="pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <h2 id="pillars-heading" className="display-2 max-w-3xl text-balance">
            What the house is built around
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {PILLARS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-bone p-7 sm:p-9">
                <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-semibold text-brand tracking-[-0.01em]">
                  {title}
                </h3>
                <p className="mt-3 text-ink/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta text="Come see the house before you decide. Parents welcome, always." />
    </>
  );
}
