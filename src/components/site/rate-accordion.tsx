"use client";

import { useState } from "react";
import Image from "next/image";
import { RATE_SLICES } from "@/lib/site";

/**
 * RateAccordion: horizontal slices that expand on hover (desktop) or tap
 * (all devices, via buttons). Keyboard accessible: each slice is a real
 * button with aria-expanded. On small screens the slices stack vertically.
 */
export function RateAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="rate-heading" className="pb-28 md:pb-44">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 id="rate-heading" className="display-2 max-w-3xl text-balance reveal">
          The rate, item by item.
        </h2>
        <p className="reveal mt-5 max-w-2xl text-lg text-ink/65 leading-relaxed">
          Open a slice to see exactly what the month buys. No fine print, no
          surprise line items.
        </p>
      </div>

      <div
        className="reveal mt-14 flex flex-col lg:flex-row gap-px bg-ink/10 border-y border-ink/10 max-w-full"
        role="group"
        aria-label="What the monthly rate includes"
      >
        {RATE_SLICES.map((slice, i) => {
          const open = active === i;
          return (
            <button
              key={slice.key}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              aria-expanded={open}
              className={`relative text-left overflow-hidden transition-[flex-grow] duration-500 ease-out bg-bone flex flex-col items-stretch ${
                open ? "lg:grow-[3.2] lg:basis-0" : "lg:grow lg:basis-0"
              }`}
            >
              {/* Collapsed face: the slice title, pinned to the top.
                  Closed slices keep the tall face; the open one collapses
                  so the photo sits right under its title. */}
              <div
                className={`flex lg:flex-col lg:items-start gap-3 p-5 sm:p-6 min-h-[5.5rem] ${
                  open ? "" : "lg:min-h-[26rem]"
                }`}
              >
                <span
                  className={`font-semibold transition-colors duration-300 ${
                    open ? "text-brand" : "text-ink/45"
                  } text-base lg:text-lg max-w-[24rem]`}
                >
                  {slice.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`hidden lg:block w-10 h-px mt-2 transition-colors duration-300 ${
                    open ? "bg-gold" : "bg-ink/30"
                  }`}
                />
              </div>

              {/* Expanded face: photo + text */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 lg:pb-8">
                    <div className="relative overflow-hidden rounded-sm h-52 lg:h-64 w-full bg-warmgrey">
                      <Image
                        src={slice.img}
                        alt={slice.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 46vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 max-w-xl text-ink/75 leading-relaxed">
                      {slice.text}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
