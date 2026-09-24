import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1.0, "weekly"),
    page("/rooms", 0.9, "weekly"),
    page("/the-house", 0.8, "monthly"),
    page("/gallery", 0.7, "monthly"),
    page("/book", 0.9, "weekly"),
    page("/faq", 0.6, "monthly"),
    page("/contact", 0.7, "monthly"),
    page("/brand", 0.4, "yearly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
    page("/cookies", 0.2, "yearly"),
    page("/disclaimer", 0.2, "yearly"),
    page("/accessibility", 0.2, "yearly"),
  ];
}
