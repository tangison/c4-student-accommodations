import Image from "next/image";
import { ShieldCheck, BookOpenCheck, HeartHandshake, Sparkles } from "lucide-react";
import { STATS, SITE } from "@/lib/site";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "A secure, dedicated female-only environment where parents rest easy and students relax.",
  },
  {
    icon: BookOpenCheck,
    title: "Built for Study",
    text: "Fibre Wi-Fi, free PC use and a dedicated study area keep the focus where it belongs.",
  },
  {
    icon: Sparkles,
    title: "Clean Living",
    text: "Regular cleaning, laundry service and well-maintained spaces — comfort without the chores.",
  },
  {
    icon: HeartHandshake,
    title: "Care That Matters",
    text: "We are the only student stay that cares and matters — and our residents feel it daily.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-warmgrey scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/building-twilight.jpg"
                alt="Student residence building glowing warmly at twilight"
                width={1200}
                height={800}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-2 sm:right-8 w-40 sm:w-52 rounded-xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
              <Image
                src="/images/community.jpg"
                alt="Students chatting and laughing together around a table"
                width={600}
                height={320}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Copy side */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-bold tracking-widest uppercase text-gold">About C4</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-brand leading-tight">
              The Only Student Stay That Cares and Matters
            </h2>
            <p className="mt-5 text-lg text-ink/75 leading-relaxed">
              C4 Student Accommodations CC provides dedicated housing for female
              students in {SITE.locations.join(" and ")}, {SITE.city}. We exist
              for one reason: to give young women pursuing their studies a
              place that is safe, nurturing and completely set up for academic
              success.
            </p>
            <p className="mt-4 text-ink/70 leading-relaxed">
              From the fully furnished rooms and fibre Wi-Fi to the cleaning,
              laundry and caring on-site team, every detail is handled so
              parents have peace of mind and students can give their energy to
              what matters — their future.
            </p>

            <dl className="grid grid-cols-2 gap-4 mt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl shadow-md p-4 border-l-4 border-gold">
                  <dt className="order-2 text-xs font-semibold text-ink/60 leading-snug mt-1">
                    {stat.label}
                  </dt>
                  <dd className="text-2xl font-extrabold text-brand leading-none">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Values */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {values.map(({ icon: Icon, title, text }) => (
            <article key={title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-brand-pale/60 text-brand flex items-center justify-center mb-4">
                <Icon className="w-5.5 h-5.5" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-ink mb-2">{title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
