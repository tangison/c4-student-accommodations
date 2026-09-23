import {
  Home,
  GraduationCap,
  Sparkles,
  Bus,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { AMENITIES, SITE } from "@/lib/site";

const ICONS = {
  "Comfortable Living": Home,
  "Study & Connectivity": GraduationCap,
  "Clean & Convenient": Sparkles,
  Transport: Bus,
  "Safe & Secure": ShieldCheck,
  "A Place That Cares": HeartHandshake,
} as const;

export function Amenities() {
  return (
    <section id="amenities" className="py-20 md:py-24 bg-warmgrey scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-bold tracking-widest uppercase text-gold">
            Everything you need
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-brand">
            What You Get
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            We provide a fully equipped, caring environment so you can focus
            entirely on your studies — and on becoming who you are meant to be.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {AMENITIES.map((amenity) => {
            const Icon = ICONS[amenity.title];
            const isGold = amenity.accent === "gold";
            return (
              <article
                key={amenity.title}
                className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 hover:-translate-y-1 ${
                  isGold ? "border-gold" : "border-brand"
                }`}
              >
                <div className="p-7">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                      isGold ? "bg-cream text-gold" : "bg-brand-pale/60 text-brand"
                    }`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-4">{amenity.title}</h3>
                  <ul className="check-list text-sm sm:text-[0.95rem] text-ink/75">
                    {amenity.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={SITE.whatsappBooking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-brand hover:bg-gold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Reserve Your Spot for {SITE.bookingYear}
          </a>
        </div>
      </div>
    </section>
  );
}
