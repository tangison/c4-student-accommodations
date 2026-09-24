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

export const NAV_LINKS = [
  { href: "#tour", label: "The Rooms" },
  { href: "#included", label: "What You Get" },
  { href: "#outside", label: "The House" },
  { href: "#book", label: "How To Book" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
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

/**
 * The honest ledger: everything included in the monthly rate.
 * Two groups: what is in your room, and what the house handles.
 */
export const IN_ROOM = [
  "Fully furnished room",
  "Bunk beds with mattresses",
  "Bedding and linen provided",
  "Study desk and charging cables",
  "Crockery, cutlery, microwave, kettle",
  "Iron and ironing board",
  "Hot water",
] as const;

export const IN_RATE = [
  "Fibre Wi-Fi throughout",
  "Free PC use for residents",
  "Dedicated study area",
  "Room cleaning on schedule",
  "Laundry service included",
  "Printing available at a small fee",
  "Paid shuttle and pre-booked student transport",
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

export const FACTS = [
  { value: "N$2,800", label: "per person / month" },
  { value: SITE.deposit, label: "deposit secures your spot" },
  { value: "2", label: "locations: Khomasdal & Rocky Crest" },
  { value: "14", label: "room and house essentials included" },
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

export const FAQS = [
  {
    q: "How do I book a room for 2027?",
    a: `Bookings for 2027 are now open. Tap any "Book Now" button on this site to chat with us on WhatsApp at ${SITE.phoneDisplay}, or email ${SITE.email}. A ${SITE.deposit} deposit secures your spot.`,
  },
  {
    q: "What does the N$2,800 per month include?",
    a: "N$2,800 is per person (not per room) per month. It covers your fully furnished room, fibre Wi-Fi, room cleaning, laundry service, hot water and use of the study area and free PCs. Printing is available at an additional cost.",
  },
  {
    q: "Is C4 safe?",
    a: "Safety is the foundation of C4. The house is secure, dedicated to students and managed by a caring on-site team, built to give parents full peace of mind.",
  },
  {
    q: "Where are the accommodations located?",
    a: "We have student stays in Khomasdal and Rocky Crest, Windhoek. Both are established residential areas with easy access to campuses, shops and student transport routes.",
  },
  {
    q: "Is transport available to campus?",
    a: "Yes. A paid shuttle service is available and student transport can be pre-booked, making the daily trip to campus simple and reliable.",
  },
  {
    q: "What should I bring with me?",
    a: "Rooms come fully furnished with beds, mattresses, bedding and linen, and the kitchen is equipped with crockery, cutlery, a microwave and kettle. Just bring your personal items, textbooks and ambitions.",
  },
  {
    q: "Is the Wi-Fi good enough for online classes?",
    a: "Yes. Fibre Wi-Fi runs throughout the property, and there is a dedicated study area plus free PC use for residents, so online lectures and research are never a struggle.",
  },
  {
    q: "How does the deposit work?",
    a: `A ${SITE.deposit} deposit is required to secure your booking. Please WhatsApp or email us for the full booking terms and payment details.`,
  },
] as const;
