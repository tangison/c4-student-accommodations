"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { AiAgent } from "@/components/site/ai-agent";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp quick action — sits above the AI agent bubble */}
      <a
        href={SITE.whatsappBooking}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book now via WhatsApp"
        className={`fixed bottom-6 right-24 z-[9998] flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3.5 pr-4 py-3 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <MessageCircle className="w-5 h-5" aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-bold">Book via WhatsApp</span>
      </a>

      <AiAgent />
    </>
  );
}
