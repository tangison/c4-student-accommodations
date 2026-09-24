"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, CornerDownLeft } from "lucide-react";
import { SEARCH_ENTRIES, SITE } from "@/lib/site";

/**
 * SearchDialog: the site's search system. A minimal command palette that
 * indexes every page, FAQ and quick answer. Opens from the nav search
 * button or with Cmd/Ctrl+K, closes on Esc or backdrop click.
 */
export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;

  const go = (href: string, external = false) => {
    onOpenChange(false);
    if (external) {
      window.open(href, "_blank", "noopener noreferrer");
    } else {
      router.push(href);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[95] flex items-start justify-center px-4 pt-[12vh] bg-brand-deep/45 backdrop-blur-sm"
      onClick={() => onOpenChange(false)}
      role="presentation"
    >
      <Command
        loop
        className="w-full max-w-xl bg-white text-ink shadow-lift border border-border rounded-lg overflow-hidden"
        onKeyDown={(e) => {
          if (e.key === "Escape") onOpenChange(false);
        }}
      >
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="w-4 h-4 text-brand-mist shrink-0" aria-hidden="true" />
          <Command.Input
            autoFocus
            value={query}
            onValueChange={setQuery}
            placeholder="Search rooms, prices, questions..."
            className="w-full bg-transparent py-4 text-base outline-none placeholder:text-ink/40"
            aria-label="Search the site"
          />
          <kbd className="hidden sm:block text-xs text-ink/40 border border-border rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>
        <Command.List className="max-h-[52vh] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-8 text-center text-sm text-ink/55">
            Nothing matches that. Try "price", "deposit" or "Wi-Fi", or WhatsApp us at{" "}
            {SITE.phoneDisplay}.
          </Command.Empty>

          {["Pages", "Quick answers", "Questions"].map((group) => (
            <Command.Group
              key={group}
              heading={group}
              className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-ink/45"
            >
              {SEARCH_ENTRIES.filter((e) => e.group === group).map((entry) => {
                const external = entry.href.startsWith("http");
                return (
                  <Command.Item
                    key={`${entry.group}-${entry.label}`}
                    value={`${entry.label} ${entry.hint}`}
                    onSelect={() => go(entry.href, external)}
                    className="flex items-center justify-between gap-3 px-3 py-2.5 rounded cursor-pointer aria-selected:bg-brand-pale/60 aria-selected:text-brand"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-medium truncate">{entry.label}</span>
                      <span className="block text-xs text-ink/50 truncate">{entry.hint}</span>
                    </span>
                    <CornerDownLeft className="w-3.5 h-3.5 text-ink/30 shrink-0" aria-hidden="true" />
                  </Command.Item>
                );
              })}
            </Command.Group>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}
