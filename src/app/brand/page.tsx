import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brand Guidelines",
  description:
    "Official brand guidelines for C4 Student Accommodations CC: logo usage, colour palette, typography and asset requests.",
  alternates: { canonical: "/brand" },
  openGraph: {
    title: "Brand Guidelines | C4 Student Accommodations CC",
    description:
      "Official logo, colour palette and typography for C4 Student Accommodations CC.",
    url: `${SITE.url}/brand`,
  },
};

const colors = [
  { name: "Deep Teal", hex: "#044747", role: "Primary. Headers, dark surfaces, footer", dark: true },
  { name: "Teal Shade", hex: "#022E2E", role: "Pressed states, depth on dark surfaces", dark: true },
  { name: "Gold", hex: "#A1751F", role: "Secondary. CTAs, checkmarks, highlights", dark: false },
  { name: "Gold Deep", hex: "#684C14", role: "Gold on light backgrounds, hover states", dark: false },
  { name: "Gold Soft", hex: "#C1A56D", role: "Gold on dark teal surfaces", dark: false },
  { name: "Gold Pale", hex: "#D9C7A5", role: "Tints, subtle fills", dark: false },
  { name: "Cream", hex: "#F0EADD", role: "Warm section background", dark: false },
  { name: "Warm Grey", hex: "#F7F6F3", role: "Neutral section background", dark: false },
  { name: "Charcoal", hex: "#0D1418", role: "Body text", dark: true },
];

export default function BrandPage() {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-[740px] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand tracking-tight">
          Brand Guidelines
        </h1>
        <p className="mt-2 mb-8 pb-6 border-b border-border text-sm text-muted-foreground">
          How to use the C4 Student Accommodations CC name, logo and colours.
        </p>

        <p className="text-ink/80 leading-relaxed mb-10">
          These guidelines cover the basics anyone needs when mentioning C4
          Student Accommodations CC in print, on a poster or online. Keep the
          logo clear, keep the colours true and do not reshape or recolour
          anything. When in doubt, ask us and we will send you the right file.
        </p>

        {/* Logo */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-brand mb-4">Logo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-white p-6 flex items-center justify-center min-h-36">
              <Image
                src="/c4-logo.svg"
              unoptimized
                alt="C4 Student Accommodations logo for light backgrounds"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="rounded-xl bg-brand p-6 flex items-center justify-center min-h-36">
              <Image
                src="/c4-logo-ondark.svg"
              unoptimized
                alt="C4 Student Accommodations logo for dark backgrounds"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>
          <ul className="mt-5 list-disc pl-6 space-y-1.5 text-ink/75 leading-relaxed">
            <li>Use the standard logo on white or light backgrounds.</li>
            <li>Use the dark-background logo on Deep Teal surfaces.</li>
            <li>
              Keep clear space around the logo of at least half its height. Do
              not stretch, rotate, outline or recolour it.
            </li>
          </ul>
        </section>

        {/* Colour */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-brand mb-4">Colour Palette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {colors.map((c) => (
              <div key={c.hex} className="rounded-xl overflow-hidden border border-border">
                <div
                  className="h-16"
                  style={{ backgroundColor: c.hex }}
                  aria-hidden="true"
                />
                <div className="p-3 bg-white">
                  <p className="font-bold text-sm text-ink">{c.name}</p>
                  <p className="text-xs text-muted-foreground tnum">{c.hex}</p>
                  <p className="text-xs text-ink/60 mt-1 leading-snug">{c.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-brand mb-4">Typography</h2>
          <div className="rounded-xl border border-border p-6">
            <p className="text-3xl font-extrabold text-brand tracking-tight">
              Montserrat ExtraBold
            </p>
            <p className="mt-1 text-lg font-bold text-ink">Montserrat Bold</p>
            <p className="mt-1 text-base text-ink/80">
              Montserrat Regular carries body copy at a comfortable size.
            </p>
            <p className="mt-4 text-sm text-ink/60 leading-relaxed">
              Headings use ExtraBold or Bold with tight tracking. Body copy
              uses Regular at 16px or larger. Prices, phone numbers and dates
              use tabular figures so columns of numbers line up.
            </p>
          </div>
        </section>

        {/* Download + attribution */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-brand mb-4">Assets &amp; Contact</h2>
          <p className="text-ink/80 leading-relaxed">
            Need the logo as a PDF, SVG or high-resolution PNG, or photos of
            the rooms for an article? Email{" "}
            <a
              href={`mailto:${SITE.email}?subject=${encodeURIComponent("Brand asset request")}`}
              className="text-brand font-semibold underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
            >
              {SITE.email}
            </a>{" "}
            or WhatsApp {SITE.phoneDisplay} and we will send what you need.
          </p>
        </section>

        <div className="p-5 bg-warmgrey rounded-xl text-sm text-ink/70 leading-relaxed">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
            The C4 name, logo and brand colours may not be used to imply
            endorsement, partnership or accommodation availability without
            written permission.
          </p>
          <p className="mt-2">
            Website by{" "}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-semibold hover:text-gold"
            >
              Tangison Studio
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
