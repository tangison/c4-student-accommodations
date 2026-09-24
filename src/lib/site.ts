/**
 * C4 Student Accommodations CC, central site configuration.
 * Single source of truth for contact details, pricing and content data.
 */

export const SITE = {
  name: "C4 Student Accommodations CC",
  shortName: "C4 Student Accommodations",
  tagline: "The only student stay that cares and matters",
  description:
    "Safe, secure and fully furnished student accommodation in Khomasdal & Rocky Crest, Windhoek. Fibre Wi-Fi, cleaning, laundry and transport included. 2027 bookings now open from N$2,800 per person per month.",
  url: "https://c4-student-accommodations.vercel.app",
  email: "c4studentstay@gmail.com",
  phoneDisplay: "+264 81 437 8400",
  phoneRaw: "+264814378400",
  whatsapp: "https://wa.me/264814378400",
  whatsappBooking:
    "https://wa.me/264814378400?text=" +
    encodeURIComponent(
      "Hi C4 Student Accommodations! I would like to book a room for 2027. Please send me more details."
    ),
  locations: ["Khomasdal", "Rocky Crest"],
  city: "Windhoek",
  country: "Namibia",
  pricePerMonth: "N$2,800",
  deposit: "N$2,000",
  bookingYear: "2027",
} as const;

/** Primary site navigation (priority pages only; the rest live in the footer). */
export const NAV_LINKS = [
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
] as const;

/** Every page, for the menu takeover, search index and footer. */
export const PAGES = [
  { href: "/", label: "Home", note: "Start here" },
  { href: "/rooms", label: "Rooms", note: "Furnished and made up" },
  { href: "/the-house", label: "The House", note: "Khomasdal and Rocky Crest" },
  { href: "/gallery", label: "Gallery", note: "Every photo we have" },
  { href: "/book", label: "Book", note: "2027 bookings open" },
  { href: "/faq", label: "FAQ", note: "Questions, answered" },
  { href: "/contact", label: "Contact", note: "WhatsApp, call, email" },
] as const;

export const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/brand", label: "Brand" },
] as const;

/**
 * Real interior photographs of the C4 stay (supplied by the client).
 * src: processed 2x WebP derivatives in /public/photos.
 * aspect: intrinsic w/h ratio of the processed file, for layout.
 */
export const TOUR = [
  {
    src: "/photos/living-room.webp",
    alt: "Residents relaxing on a couch in the C4 shared living room",
    caption: "The living room",
    note: "Common space to unwind after class",
    w: 1168,
    h: 1280,
  },
  {
    src: "/photos/bedroom.webp",
    alt: "Student studying at a desk next to a made-up bed in a C4 bedroom",
    caption: "The bedroom",
    note: "Desk, bed and storage, made up before you arrive",
    w: 1168,
    h: 1280,
  },
  {
    src: "/photos/kitchen-a.webp",
    alt: "Two residents preparing coffee in the shared C4 kitchen",
    caption: "The kitchen",
    note: "Cook, brew, share a table with the house",
    w: 1168,
    h: 1142,
  },
  {
    src: "/photos/kitchen-b.webp",
    alt: "Residents chatting over the stove in the C4 kitchen",
    caption: "The kitchen, second angle",
    note: "Full stove, sink and prep space",
    w: 1164,
    h: 1142,
  },
  {
    src: "/photos/bathroom.webp",
    alt: "Clean tiled bathroom with shower and bath at C4",
    caption: "The bathroom",
    note: "Shower over bath, cleaned on schedule",
    w: 1176,
    h: 1280,
  },
  {
    src: "/photos/toilet.webp",
    alt: "Clean separate toilet with basin at C4",
    caption: "The guest loo",
    note: "Separate and always guest-ready",
    w: 1168,
    h: 1142,
  },
] as const;

/**
 * Real exterior photographs of the C4 house and its streets.
 */
export const OUTSIDE = [
  {
    src: "/photos/exterior-path.webp",
    alt: "Brick pathway and trees along the side of the C4 house",
    caption: "The side path",
    w: 1168,
    h: 1166,
  },
  {
    src: "/photos/exterior-roof.webp",
    alt: "Red tiled roof of the C4 house against the Windhoek hills",
    caption: "The roofline",
    w: 1162,
    h: 1252,
  },
  {
    src: "/photos/exterior-entrance.webp",
    alt: "Resident arriving at the C4 front entrance with plants beside the door",
    caption: "The front door",
    w: 1188,
    h: 1166,
  },
  {
    src: "/photos/exterior-dishes.webp",
    alt: "Clear blue sky over the C4 roof and its satellite dishes",
    caption: "Windhoek sky",
    w: 1166,
    h: 1252,
  },
] as const;

/** The hero photo: the real house with its C4 sign. */
export const HERO_PHOTO = {
  src: "/photos/exterior-garage.webp",
  alt: "The C4 student house with its sign, brick courtyard and Windhoek hills behind",
  w: 1200,
  h: 900,
} as const;

/** Full photo index for the gallery page and search. */
export const GALLERY = [...TOUR, ...OUTSIDE] as const;

/** The honest ledger: what is inside your room. */
export const IN_ROOM = [
  "Fully furnished room",
  "Bunk beds with mattresses",
  "Bedding and linen provided",
  "Study desk and charging cables",
  "Crockery, cutlery, microwave, kettle",
  "Iron and ironing board",
  "Hot water",
] as const;

/** What the monthly rate handles for you. */
export const IN_RATE = [
  "Fibre Wi-Fi throughout",
  "Free PC use for residents",
  "Dedicated study area",
  "Room cleaning on schedule",
  "Laundry service included",
  "Printing available at a small fee",
  "Paid shuttle and pre-booked student transport",
] as const;

/**
 * Horizontal accordion slices: each one opens the house up.
 * img: real photo revealed inside the expanded slice.
 */
export const RATE_SLICES = [
  {
    key: "wifi",
    title: "Fibre Wi-Fi and a study area",
    text: "Fibre runs through the whole house, with a dedicated study area and free PC use for residents. Online lectures and late-night research never stall.",
    img: "/photos/bedroom.webp",
    alt: "Student studying at a desk in a C4 bedroom",
  },
  {
    key: "cleaning",
    title: "Cleaning and laundry",
    text: "Rooms are cleaned on schedule and laundry is part of the rate. Your focus stays on your books, not on the chores.",
    img: "/photos/bathroom.webp",
    alt: "Clean tiled bathroom at C4",
  },
  {
    key: "kitchen",
    title: "Kitchen and hot water",
    text: "A full shared kitchen with stove, sink and prep space, stocked with crockery, cutlery, a microwave and a kettle. Hot water always on.",
    img: "/photos/kitchen-a.webp",
    alt: "Two residents preparing coffee in the shared C4 kitchen",
  },
  {
    key: "transport",
    title: "Transport and printing",
    text: "A paid shuttle and pre-booked student transport cover the campus run. Printing is available at a small fee when deadlines stack up.",
    img: "/photos/living-room.webp",
    alt: "Residents relaxing in the C4 shared living room",
  },
] as const;

/** Marquee facts: real, sourced from the booking terms. */
export const MARQUEE = [
  `${SITE.bookingYear} bookings now open`,
  `${SITE.pricePerMonth} per person / month`,
  `${SITE.deposit} deposit secures your spot`,
  "Khomasdal",
  "Rocky Crest",
  "Fibre Wi-Fi",
  "Cleaning included",
  "Laundry included",
] as const;

export const FACTS = [
  { value: SITE.pricePerMonth, label: "per person / month" },
  { value: SITE.deposit, label: "deposit secures your spot" },
  { value: "2", label: "locations: Khomasdal & Rocky Crest" },
  { value: "14", label: "room and house essentials included" },
] as const;

export const STEPS = [
  {
    n: "1",
    title: "Message us",
    text: "Tap any WhatsApp button on this site and tell us which year you are booking for. We answer fast and can walk you through the rooms.",
  },
  {
    n: "2",
    title: "Secure with a deposit",
    text: `A ${SITE.deposit} deposit locks your spot. We confirm the details with you directly on WhatsApp or by email.`,
  },
  {
    n: "3",
    title: "Move in ready",
    text: `Your room is furnished and made up before you arrive, for the ${SITE.bookingYear} academic year. Bring your personal items and books.`,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Moving into C4 was the best decision for my studies. The Wi-Fi never lets me down and the study area keeps me focused during exams.",
    name: "L. Hamutenya",
    role: "UNAM Student",
    initials: "LH",
  },
  {
    quote:
      "As a parent, safety was my biggest worry. The C4 team treats the residents like family and I can finally relax knowing where my daughter stays.",
    name: "M. van Wyk",
    role: "Parent, Windhoek",
    initials: "MW",
  },
  {
    quote:
      "Everything is taken care of: cleaning, laundry, even transport when I book the shuttle. I just focus on my books.",
    name: "R. Beukes",
    role: "NUST Student",
    initials: "RB",
  },
] as const;

/** FAQs with stable slugs for deep links and the search index. */
export const FAQS = [
  {
    slug: "how-to-book",
    q: "How do I book a room for 2027?",
    a: `Bookings for 2027 are now open. Tap any "Book Now" button on this site to chat with us on WhatsApp at ${SITE.phoneDisplay}, or email ${SITE.email}. A ${SITE.deposit} deposit secures your spot.`,
  },
  {
    slug: "what-included",
    q: "What does the N$2,800 per month include?",
    a: "N$2,800 is per person (not per room) per month. It covers your fully furnished room, fibre Wi-Fi, room cleaning, laundry service, hot water and use of the study area and free PCs. Printing is available at an additional cost.",
  },
  {
    slug: "is-c4-safe",
    q: "Is C4 safe?",
    a: "Safety is the foundation of C4. The house is secure, dedicated to students and managed by a caring on-site team, built to give parents full peace of mind.",
  },
  {
    slug: "locations",
    q: "Where are the accommodations located?",
    a: "We have student stays in Khomasdal and Rocky Crest, Windhoek. Both are established residential areas with easy access to campuses, shops and student transport routes.",
  },
  {
    slug: "transport",
    q: "Is transport available to campus?",
    a: "Yes. A paid shuttle service is available and student transport can be pre-booked, making the daily trip to campus simple and reliable.",
  },
  {
    slug: "what-to-bring",
    q: "What should I bring with me?",
    a: "Rooms come fully furnished with beds, mattresses, bedding and linen, and the kitchen is equipped with crockery, cutlery, a microwave and kettle. Just bring your personal items, textbooks and ambitions.",
  },
  {
    slug: "wifi-quality",
    q: "Is the Wi-Fi good enough for online classes?",
    a: "Yes. Fibre Wi-Fi runs throughout the property, and there is a dedicated study area plus free PC use for residents, so online lectures and research are never a struggle.",
  },
  {
    slug: "deposit",
    q: "How does the deposit work?",
    a: `A ${SITE.deposit} deposit is required to secure your booking. Please WhatsApp or email us for the full booking terms and payment details.`,
  },
] as const;

/** Search index entries for the command palette. */
export const SEARCH_ENTRIES = [
  ...PAGES.map((p) => ({
    group: "Pages",
    label: p.label,
    hint: p.note,
    href: p.href,
  })),
  ...FAQS.map((f) => ({
    group: "Questions",
    label: f.q,
    hint: f.a.slice(0, 80) + "...",
    href: `/faq#${f.slug}`,
  })),
  {
    group: "Quick answers",
    label: `Monthly rate: ${SITE.pricePerMonth}`,
    hint: `Per person, ${SITE.deposit} deposit secures your spot`,
    href: "/book",
  },
  {
    group: "Quick answers",
    label: "WhatsApp us",
    hint: SITE.phoneDisplay,
    href: SITE.whatsapp,
  },
] as const;
