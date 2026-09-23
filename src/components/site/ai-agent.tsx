"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { SITE } from "@/lib/site";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi, I'm the C4 Assistant. Ask me about rooms, pricing, locations or how to book for 2027.";

export function AiAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", content: GREETING }]);
    }
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open, messages.length]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const nextMessages: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    setTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((m) => m.content !== GREETING)
            .slice(-12)
            .map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = (await res.json()) as { reply?: string };
      setTyping(false);
      setMessages((cur) => [
        ...cur,
        {
          role: "assistant",
          content:
            data.reply ??
            `Sorry, something went wrong on my side. Please WhatsApp us on ${SITE.phoneDisplay} and our team will help you right away.`,
        },
      ]);
    } catch {
      setTyping(false);
      setMessages((cur) => [
        ...cur,
        {
          role: "assistant",
          content: `I'm having trouble connecting. Please try WhatsApp on ${SITE.phoneDisplay}. We reply fast.`,
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div id="c4-agent" className="fixed bottom-6 right-6 z-agent font-sans">
      {/* Chat window */}
      {open && (
        <div
          role="dialog"
          aria-label="C4 AI assistant chat"
          className="absolute bottom-[72px] right-0 w-[340px] max-w-[calc(100vw-32px)] h-[480px] max-h-[70vh] bg-white rounded-2xl shadow-2xl border border-black/10 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-brand text-white p-4 flex items-center gap-2.5 shrink-0">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
            <div className="flex-1">
              <p className="font-semibold text-sm leading-tight">C4 Assistant</p>
              <p className="text-[11px] text-white/70">AI-powered · Usually replies instantly</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <X className="w-4.5 h-4.5" aria-hidden="true" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-2.5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[13px] leading-relaxed ${
                  m.role === "user"
                    ? "bg-brand text-white rounded-br-sm ml-auto"
                    : "bg-warmgrey text-ink rounded-bl-sm"
                }`}
              >
                {m.content}
              </div>
            ))}
            {typing && (
              <div className="bg-warmgrey text-brand-fog rounded-xl rounded-bl-sm px-3.5 py-2 w-14 text-lg tracking-[4px] text-center select-none">
                ···
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[10px] text-black/40 pb-1.5">
            Powered by AI · May make mistakes
          </p>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Ask about rooms, pricing, booking..."
              maxLength={500}
              autoComplete="off"
              aria-label="Type your message"
              className="flex-1 border border-border rounded-full px-3.5 py-2 text-[13px] outline-none focus:border-gold transition-colors"
            />
            <button
              type="button"
              onClick={send}
              disabled={loading}
              aria-label="Send message"
              className="w-9 h-9 rounded-full bg-brand hover:bg-gold disabled:opacity-40 text-white flex items-center justify-center shrink-0 transition-colors"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle bubble */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close AI assistant" : "Open AI assistant"}
        className="w-14 h-14 rounded-full bg-gold text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 border-4 border-white"
      >
        {open ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="w-6 h-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
