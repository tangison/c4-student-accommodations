import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-warmgrey">
      <Link href="/" aria-label="C4 Student Accommodations home" className="mb-8">
        <Image
          src="/c4-logo.svg"
              unoptimized
          alt="C4 Student Accommodations CC logo"
          width={220}
          height={74}
          className="h-14 w-auto object-contain"
          priority
        />
      </Link>

      <p
        aria-hidden="true"
        className="text-[7rem] leading-none font-extrabold text-brand opacity-10 select-none"
      >
        404
      </p>
      <h1 className="-mt-8 text-2xl sm:text-3xl font-extrabold text-brand">
        This page checked out
      </h1>
      <p className="mt-3 max-w-md text-ink/70 leading-relaxed">
        The page you are looking for doesn&apos;t exist or may have been moved.
        Let&apos;s get you back to a safe room.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center px-8 py-3.5 rounded-lg bg-brand text-white font-bold hover:bg-gold transition-colors shadow-lg"
      >
        Back to Home
      </Link>

      <nav aria-label="Popular pages" className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-semibold text-brand border-b border-brand/25 hover:border-gold hover:text-gold transition-colors pb-0.5"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
