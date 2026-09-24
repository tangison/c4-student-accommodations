"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { AiAgent } from "@/components/site/ai-agent";
import { SITE } from "@/lib/site";

/** Official WhatsApp glyph, inlined so the widget carries the real mark. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/**
 * FloatingActions: the fixed action stack, bottom right.
 * Order from the bottom: AI agent bubble, WhatsApp icon, scroll-to-top.
 * The WhatsApp widget is a plain round WhatsApp icon on the brand green,
 * and it is conditional: it only appears once the visitor is actually
 * scrolling the page (sentinel observed via IntersectionObserver, never a
 * scroll listener).
 */
export function FloatingActions() {
  const [deep, setDeep] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setDeep(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Sentinel 560px into the document: above it, the widgets show */}
      <div ref={sentinelRef} aria-hidden="true" className="absolute top-[560px] h-px w-px" />

      {/* WhatsApp widget: a plain WhatsApp icon, shown conditionally */}
      <a
        href={SITE.whatsappBooking}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book now via WhatsApp"
        className={`z-actions fixed bottom-[6.25rem] right-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift hover:-translate-y-0.5 transition-[opacity,transform] duration-300 ${
          deep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <WhatsAppGlyph className="w-6 h-6" />
      </a>

      {/* Scroll-to-top widget: top of the stack */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll back to top"
        className={`z-actions fixed bottom-[11.25rem] right-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lift hover:bg-brand-deep hover:-translate-y-0.5 transition-[opacity,transform,background-color] duration-300 ${
          deep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ArrowUp className="w-5 h-5" aria-hidden="true" />
      </button>

      <AiAgent />
    </>
  );
}
