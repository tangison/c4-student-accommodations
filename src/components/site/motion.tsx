"use client";

import { useEffect } from "react";

/**
 * SiteMotion: the scroll-motion engine, loaded once per page.
 *
 * Two gpt-taste-assigned GSAP paradigms, both scrub-driven:
 * 1. [data-scrub]    Scrubbing text reveals: words go from 0.12 opacity to 1
 *                    as the statement scrolls through the viewport.
 * 2. [data-scale-img] Image scale & fade: photos start at scale 0.86 and grow
 *                    to 1 as they enter, then fade toward the exit.
 *
 * GSAP is dynamically imported so pages that skip the markup never pay for
 * it. Elements are fully visible without JS (gsap.fromTo only runs after
 * hydration), and prefers-reduced-motion disables everything.
 */
export function SiteMotion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const scrubs = Array.from(document.querySelectorAll<HTMLElement>("[data-scrub]"));
    const scales = Array.from(document.querySelectorAll<HTMLElement>("[data-scale-img]"));
    if (scrubs.length === 0 && scales.length === 0) return;

    let cleanup = () => {};
    let cancelled = false;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      scrubs.forEach((el) => {
        if (el.dataset.scrubReady === "1") return;
        el.dataset.scrubReady = "1";
        // Split into word spans once; keep layout identical.
        const words = el.textContent?.split(/\s+/).filter(Boolean) ?? [];
        if (words.length === 0) return;
        el.setAttribute("aria-label", el.textContent ?? "");
        el.textContent = "";
        words.forEach((word, i) => {
          const span = document.createElement("span");
          span.textContent = word;
          span.setAttribute("aria-hidden", "true");
          el.appendChild(span);
          if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
        });

        gsap.fromTo(
          el.querySelectorAll("span"),
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              end: "top 30%",
              scrub: 0.6,
            },
          }
        );
      });

      scales.forEach((el) => {
        const img = el.querySelector("img");
        if (!img || el.dataset.scaleReady === "1") return;
        el.dataset.scaleReady = "1";

        gsap.fromTo(
          img,
          { scale: 0.86, opacity: 0.55 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "top 45%",
              scrub: 0.6,
            },
          }
        );
        // Fade toward the exit so the strip feels continuous.
        gsap.fromTo(
          img,
          { opacity: 1 },
          {
            opacity: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "bottom 60%",
              end: "bottom 15%",
              scrub: 0.6,
            },
          }
        );
      });

      ScrollTrigger.refresh();
      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    })();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return null;
}
