"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
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
        500
      </p>
      <h1 className="-mt-8 text-2xl sm:text-3xl font-extrabold text-brand">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-ink/70 leading-relaxed">
        We&apos;re experiencing a technical issue on our end. Please try again
        in a few minutes, or contact us at {SITE.email}.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand text-white font-bold hover:bg-gold transition-colors shadow-lg"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-brand text-brand font-bold hover:bg-brand hover:text-white transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
