import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { GalleryView } from "@/components/site/gallery-view";
import { GALLERY } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Gallery",
  description:
    "Every real photo of the C4 student house in Windhoek: bedrooms, kitchen, bathroom, living room and the outside, photographed this year.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="The gallery"
        lead={`All ${GALLERY.length} photos we have of the house, shot this year and unretouched beyond resize. Drag the slider or open any photo full screen.`}
      />
      <GalleryView />
    </>
  );
}
