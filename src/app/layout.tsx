import type { Metadata, Viewport } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingActions } from "@/components/site/floating-actions";
import { SITE } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `C4 Student Accommodations CC | Student Housing in Windhoek`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "student accommodation Windhoek",
    "student accommodation Namibia",
    "Khomasdal student housing",
    "Rocky Crest student stay",
    "2027 student bookings Windhoek",
    "C4 Student Accommodations",
  ],
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "C4 Student Accommodations CC | Safe Student Living in Windhoek",
    description: SITE.description,
    url: SITE.url,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "C4 Student Accommodations CC: 2027 bookings now open in Windhoek",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C4 Student Accommodations CC | Safe Student Living in Windhoek",
    description: SITE.description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#044747",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon-512.png`,
  image: `${SITE.url}/og-image.jpg`,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phoneRaw,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Windhoek",
    addressRegion: "Khomas",
    addressCountry: "NA",
  },
  areaServed: ["Khomasdal, Windhoek", "Rocky Crest, Windhoek"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneRaw,
    contactType: "customer service",
    availableLanguage: ["English", "Afrikaans"],
  },
  sameAs: [SITE.whatsapp],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
        <FloatingActions />
        <Toaster />
      </body>
    </html>
  );
}
