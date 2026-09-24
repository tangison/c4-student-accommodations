import { Hero } from "@/components/site/hero";
import { Promise } from "@/components/site/promise";
import { Tour } from "@/components/site/tour";
import { Included } from "@/components/site/included";
import { Outside } from "@/components/site/outside";
import { Booking } from "@/components/site/booking";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { ScrollReveal } from "@/components/site/scroll-reveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Hero />
      <Promise />
      <Tour />
      <Included />
      <Outside />
      <Booking />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
