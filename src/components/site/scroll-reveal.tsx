"use client";

import { useEffect } from "react";

/**
 * Activates the `.reveal` CSS class: elements marked with it fade/slide in
 * when they enter the viewport. Respects prefers-reduced-motion (handled in
 * CSS: elements stay visible when motion is reduced).
 *
 * Robustness rules:
 * 1. Elements already within 1.5 viewport heights on load are revealed
 *    immediately (no pop-in for content the user can almost see).
 * 2. A safety timer reveals everything after 6s so content can never get
 *    stuck invisible (full-page screenshots, print, background tabs, bots).
 */
export function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const reveal = (el: HTMLElement) => el.classList.add("revealed");

    if (!("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px 50% 0px" }
    );

    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Already near/on screen: reveal now, skip observing.
      if (rect.top < window.innerHeight * 1.5) {
        reveal(el);
      } else {
        io.observe(el);
      }
    });

    // Safety net: never leave content hidden.
    const safety = setTimeout(() => {
      els.forEach(reveal);
      io.disconnect();
    }, 6000);

    return () => {
      clearTimeout(safety);
      io.disconnect();
    };
  }, []);

  return null;
}
