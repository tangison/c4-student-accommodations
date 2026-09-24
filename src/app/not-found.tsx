import Image from "next/image";
import Link from "next/link";
import { PAGES } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-5 py-24 bg-bone">
      <Link href="/" aria-label="C4 Student Accommodations home" className="mb-10">
        <Image
          src="/c4-logo.svg"
          unoptimized
          alt="C4 Student Accommodations CC logo"
          width={220}
          height={74}
          className="h-12 w-auto object-contain"
          priority
        />
      </Link>

      <p aria-hidden="true" className="display-1 text-brand/10 select-none tnum">
        404
      </p>
      <h1 className="display-3 -mt-6 text-brand">This page checked out</h1>
      <p className="mt-4 max-w-md text-ink/70 leading-relaxed">
        The page you are looking for does not exist or has moved. The rooms,
        however, are exactly where we left them.
      </p>

      <Link
        href="/"
        className="mt-9 inline-flex items-center px-8 py-4 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep active:translate-y-px transition-[background-color,transform] duration-200"
      >
        Back to the home page
      </Link>

      <nav aria-label="Popular pages" className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {PAGES.filter((p) => p.href !== "/").map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="text-sm font-medium text-brand border-b border-brand/25 hover:border-gold hover:text-gold transition-colors pb-0.5"
          >
            {page.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
