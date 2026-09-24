import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Bento } from "@/components/site/bento";
import { Statement } from "@/components/site/statement";
import { TestimonialCarousel } from "@/components/site/testimonial-carousel";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Bento />
      <Statement />
      <TestimonialCarousel />
    </>
  );
}
