"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
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
        500
      </p>
      <h1 className="display-3 -mt-6 text-brand">Something broke on our side</h1>
      <p className="mt-4 max-w-md text-ink/70 leading-relaxed">
        A technical error occurred and nothing was lost on your end. Try again,
        or WhatsApp us at {SITE.phoneDisplay} and we will sort it out.
      </p>

      <div className="mt-9 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand text-white font-semibold hover:bg-brand-deep active:translate-y-px transition-[background-color,transform] duration-200"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-brand/30 text-brand font-semibold hover:bg-brand hover:text-white transition-colors duration-200"
        >
          Back to the home page
        </Link>
      </div>
    </div>
  );
}
