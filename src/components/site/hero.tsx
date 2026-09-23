import Image from "next/image";
import { MessageCircle, ShieldCheck, Wifi, Sparkles } from "lucide-react";
import { SITE } from "@/lib/site";

const trustItems = [
  { icon: ShieldCheck, label: "Safe & secure" },
  { icon: Wifi, label: "Fibre Wi-Fi" },
  { icon: Sparkles, label: "Fully furnished" },
];

export function Hero() {
  return (
    <section id="home" className="relative bg-brand text-white overflow-hidden scroll-mt-20">
      {/* Decorative shapes */}
      <div aria-hidden="true" className="absolute top-0 right-0 -mr-24 -mt-24 w-72 h-72 rounded-full bg-white opacity-5" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 -ml-24 -mb-32 w-96 h-96 rounded-full bg-gold opacity-10" />
      <div aria-hidden="true" className="absolute top-1/3 left-1/2 w-40 h-40 rounded-full bg-gold-soft opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <div className="space-y-7">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-balance">
            A Safe Second Home for{" "}
            <span className="text-gold-soft">Female Students</span> in Windhoek
          </h1>

          <div className="inline-flex items-center bg-white text-brand font-extrabold px-4 py-2 rounded-lg text-lg sm:text-xl shadow-lg -rotate-1">
            {SITE.bookingYear} Bookings Now Open
          </div>

          <p className="text-lg text-white/85 max-w-xl leading-relaxed">
            The only student stay that cares and matters, in Khomasdal and
            Rocky Crest. Fully furnished rooms, fibre Wi-Fi, laundry and a
            secure, student-focused environment, so you can focus on your
            success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <a
              href={SITE.whatsappBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-lg text-white bg-gold hover:bg-gold-deep transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Secure Your Room
            </a>
            <a
              href="#amenities"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white border-2 border-white/30 hover:border-gold-soft hover:text-gold-soft transition-all duration-300"
            >
              Explore What You Get
            </a>
          </div>

          {/* Trust row */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-3 text-sm font-semibold text-white/80">
            {trustItems.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-gold-soft" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual collage */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
            <Image
              src="/images/hero-student.jpg"
              alt="A female student smiling while studying with her laptop"
              width={1600}
              height={983}
              priority
              className="w-full h-auto object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand/60 via-transparent to-transparent" />
          </div>

          {/* Floating price card */}
          <div className="animate-float absolute -bottom-6 -left-3 sm:left-6 bg-white text-brand rounded-xl shadow-2xl px-5 py-4">
            <p className="text-2xl font-extrabold leading-none tnum">{SITE.pricePerMonth}</p>
            <p className="text-xs font-semibold text-gold-deep mt-1">
              per person / month · {SITE.deposit} deposit
            </p>
          </div>

          {/* Floating badge card */}
          <div className="animate-float-slow absolute -top-5 right-4 bg-gold text-white rounded-xl shadow-2xl px-4 py-3 flex items-center gap-2.5">
            <ShieldCheck className="w-7 h-7" aria-hidden="true" />
            <div>
              <p className="text-sm font-extrabold leading-none">Female only</p>
              <p className="text-[11px] font-semibold text-white/85 mt-0.5">dedicated accommodation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
