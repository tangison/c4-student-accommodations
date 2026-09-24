import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { STEPS, SITE } from "@/lib/site";

/**
 * How to book: three steps, numbered because booking genuinely is a
 * sequence. The walking residents cutout carries the movement.
 */
export function Booking() {
  return (
    <section id="book" className="py-20 md:py-28 bg-cream relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="reveal max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.02em] text-brand leading-[1.08] text-balance">
            Three steps to your room
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            No forms, no waiting queues. Booking happens on WhatsApp, the
            same way you talk to us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
          <ol className="reveal grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {STEPS.map((step) => (
              <li key={step.n} className="border-t-2 border-brand/15 pt-5">
                <span
                  aria-hidden="true"
                  className="block text-5xl font-extrabold text-ochre tnum leading-none"
                >
                  {step.n}
                </span>
                <h3 className="mt-3 font-bold text-brand text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="reveal hidden lg:block relative self-end justify-self-end pr-4">
            <Image
              src="/cutouts/couple-walking.webp"
              alt="Two residents walking together on the C4 grounds"
              width={402}
              height={592}
              loading="lazy"
              sizes="200px"
              className="h-[300px] w-auto object-contain drop-shadow-[0_16px_20px_rgba(2,46,46,0.25)]"
            />
          </div>
        </div>

        <div className="reveal mt-12">
          <a
            href={SITE.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-lg text-white bg-brand hover:bg-gold active:translate-y-px transition-[background-color,transform] duration-200 shadow-soft hover:shadow-lift"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Start step one: message us
          </a>
        </div>
      </div>
    </section>
  );
}
