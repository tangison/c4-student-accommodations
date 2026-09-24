import { ScrollReveal } from "@/components/site/scroll-reveal";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Bento } from "@/components/site/bento";
import { RateAccordion } from "@/components/site/rate-accordion";
import { Statement } from "@/components/site/statement";
import { TestimonialCarousel } from "@/components/site/testimonial-carousel";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <Marquee />
      <Bento />
      <RateAccordion />
      <Statement />
      <TestimonialCarousel />
    </>
  );
}
