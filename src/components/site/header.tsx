"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PAGES, LEGAL_LINKS, SITE } from "@/lib/site";
import { SearchDialog } from "@/components/site/search-dialog";

/**
 * SiteHeader: a floating glass pill (gpt-taste premium nav), with a
 * full-screen takeover menu. The menu is deliberately customisable: every
 * page, contact channel and legal link lives in one PAGES/LEGAL_LINKS
 * array in lib/site.ts, so editing the site map never touches this file.
 *
 * Scroll state comes from an IntersectionObserver sentinel (never a scroll
 * listener), per the taste-skill animation rules.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // Sentinel sits at the top of the document; once it leaves the viewport
  // the page has scrolled and the pill tightens.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  // Close the menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Scroll lock + focus management + Esc for the takeover menu.
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => closeBtnRef.current?.focus(), 80);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        clearTimeout(t);
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuBtnRef.current?.focus();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="absolute top-0 h-px w-px" />
      <div className="fixed top-3 inset-x-3 sm:top-4 z-50 flex justify-center pointer-events-none">
        <header
          role="banner"
          className={`pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-2 rounded-full border border-ink/8 bg-bone/85 backdrop-blur-md transition-all duration-300 ${
            scrolled ? "pl-3 pr-1.5 py-1.5 shadow-soft" : "pl-4 pr-2 py-2"
          }`}
        >
          <Link
            href="/"
            aria-label={`${SITE.name} home`}
            className="flex-shrink-0 flex items-center"
          >
            <Image
              src="/c4-logo.svg"
              unoptimized
              alt={`${SITE.name} logo`}
              width={176}
              height={59}
              priority
              className={`w-auto object-contain transition-[height] duration-300 ${scrolled ? "h-7" : "h-8"}`}
            />
          </Link>

          {/* Desktop links: priority pages only */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-1.5 text-[0.9rem] font-medium rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-brand bg-brand-pale/70"
                      : "text-ink/75 hover:text-brand hover:bg-brand-pale/40"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search the site"
              aria-keyshortcuts="Meta+K"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-brand hover:bg-brand-pale/60 transition-colors"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
            </button>
            <Link
              href="/book"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full text-white bg-brand hover:bg-brand-deep active:translate-y-px transition-[background-color,transform] duration-200"
            >
              Book for {SITE.bookingYear}
            </Link>
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              aria-label="Open menu"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full text-brand hover:bg-brand-pale/60 transition-colors"
            >
              <Menu className="w-[1.1rem] h-[1.1rem]" aria-hidden="true" />
            </button>
          </div>
        </header>
      </div>

      {/* Full-screen takeover menu */}
      {menuOpen && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="menu-open fixed inset-0 z-[96] bg-brand-deep text-white flex flex-col"
        >
          <div className="flex items-center justify-between px-5 sm:px-10 h-[4.5rem] sm:h-20 border-b border-white/10">
            <Image
              src="/c4-logo-ondark.svg"
              unoptimized
              alt={`${SITE.name} logo`}
              width={176}
              height={59}
              className="h-9 w-auto object-contain"
            />
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="inline-flex items-center gap-2 h-10 px-4 rounded-full text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
            >
              Close
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 px-5 sm:px-10 py-10 lg:py-14">
            {/* Pages */}
            <nav aria-label="Menu navigation">
              <ul className="divide-y divide-white/10">
                {PAGES.map((page, i) => (
                  <li key={page.href} className="menu-link" style={{ "--stagger": i } as React.CSSProperties}>
                    <Link
                      href={page.href}
                      onClick={closeMenu}
                      className="group flex items-baseline justify-between gap-4 py-4 sm:py-5"
                    >
                      <span className="display-2 text-white group-hover:text-gold-soft transition-colors duration-300">
                        {page.label}
                      </span>
                      <span className="hidden sm:flex items-center gap-2 text-sm text-white/55 group-hover:text-white/80 transition-colors shrink-0">
                        {page.note}
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact + legal */}
            <div className="flex flex-col justify-between gap-10">
              <div className="menu-link" style={{ "--stagger": 7 } as React.CSSProperties}>
                <p className="text-sm font-semibold text-gold-soft mb-5">Talk to us</p>
                <ul className="space-y-3 text-white/85">
                  <li>
                    <a
                      href={SITE.whatsappBooking}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-gold-soft transition-colors"
                    >
                      WhatsApp {SITE.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-lg font-medium hover:text-gold-soft transition-colors break-all"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li className="text-white/60 text-sm pt-2">
                    {SITE.locations.join(" and ")}, {SITE.city}, {SITE.country}
                  </li>
                </ul>
              </div>

              <nav aria-label="Legal" className="menu-link" style={{ "--stagger": 8 } as React.CSSProperties}>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {LEGAL_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="text-xs text-white/55 hover:text-gold-soft transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
