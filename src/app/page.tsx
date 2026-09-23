import { Hero } from "@/components/site/hero";
import { PricingBanner } from "@/components/site/pricing-banner";
import { Amenities } from "@/components/site/amenities";
import { Gallery } from "@/components/site/gallery";
import { About } from "@/components/site/about";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { ScrollReveal } from "@/components/site/scroll-reveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <PricingBanner />
      <Amenities />
      <Gallery />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
