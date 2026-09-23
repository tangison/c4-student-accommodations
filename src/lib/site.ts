/**
 * C4 Student Accommodations CC — central site configuration.
 * Single source of truth for contact details, pricing and content data.
 */

export const SITE = {
  name: "C4 Student Accommodations CC",
  shortName: "C4 Student Accommodations",
  tagline: "The only student stay that cares and matters",
  description:
    "Safe, secure and fully furnished student accommodation for female students in Khomasdal & Rocky Crest, Windhoek. Fibre Wi-Fi, cleaning, laundry and transport. 2027 bookings now open from N$2,800 per person per month.",
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
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#amenities", label: "What You Get" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const AMENITIES = [
  {
    title: "Comfortable Living",
    accent: "teal" as const,
    items: [
      "Fully furnished rooms",
      "Double bunk beds",
      "Mattresses, bedding & linen",
      "Charging cables",
      "Crockery & cutlery",
      "Iron & ironing board",
      "Microwave & kettle",
      "Hot water",
    ],
  },
  {
    title: "Study & Connectivity",
    accent: "gold" as const,
    items: [
      "Fibre Wi-Fi throughout",
      "FREE PC use for residents",
      "Dedicated study area",
      "Printing available (small fee)",
    ],
  },
  {
    title: "Clean & Convenient",
    accent: "teal" as const,
    items: [
      "Regular room cleaning",
      "Laundry service included",
      "Well-maintained environment",
    ],
  },
  {
    title: "Transport",
    accent: "gold" as const,
    items: [
      "Paid shuttle service available",
      "Pre-booked student transport",
      "Easy access to campus routes",
    ],
  },
  {
    title: "Safe & Secure",
    accent: "teal" as const,
    items: [
      "Secure, dedicated female accommodation",
      "Safe, student-focused environment",
      "Managed by a caring on-site team",
    ],
  },
  {
    title: "A Place That Cares",
    accent: "gold" as const,
    items: [
      "The only stay that cares and matters",
      "Supportive, family-style community",
      "An environment built for your success",
    ],
  },
];

export const GALLERY = [
  { src: "/images/room-bunk-beds.jpg", alt: "Furnished student room with bunk beds and study desk", caption: "Furnished rooms with bunk beds" },
  { src: "/images/room-cozy.jpg", alt: "Cozy student bedroom with study desk and shelving", caption: "A cosy space of your own" },
  { src: "/images/study-session.jpg", alt: "Two students studying together with a laptop", caption: "Study together, pass together" },
  { src: "/images/shared-kitchen.jpg", alt: "Bright shared kitchen with dining table", caption: "Shared kitchen & dining" },
  { src: "/images/kitchenette.jpg", alt: "Compact kitchenette with wooden accents", caption: "Fully equipped kitchenette" },
  { src: "/images/laundry.jpg", alt: "Modern washing machine and dryer", caption: "Laundry taken care of" },
  { src: "/images/room-bright.jpg", alt: "Bright bedroom with two beds and natural light", caption: "Bright, airy bedrooms" },
  { src: "/images/building-twilight.jpg", alt: "Student residence building glowing at twilight", caption: "Home that feels safe" },
];

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
      "As a parent, safety was my biggest worry. The C4 team treats the girls like family and I can finally relax knowing where my daughter stays.",
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
];

export const FAQS = [
  {
    q: "How do I book a room for 2027?",
    a: "Bookings for 2027 are now open. Simply tap any “Book Now” button on this site to chat with us on WhatsApp at +264 81 437 8400, or email c4studentstay@gmail.com. A N$2,000 deposit secures your spot.",
  },
  {
    q: "What does the N$2,800 per month include?",
    a: "N$2,800 is per person (not per room) per month and covers your fully furnished room, fibre Wi-Fi, room cleaning, laundry service, hot water and use of the study area and free PCs. Printing is available at an additional cost.",
  },
  {
    q: "Is C4 only for female students?",
    a: "Yes. C4 is dedicated accommodation for female students, built around safety, security and a student-focused environment where parents can have peace of mind.",
  },
  {
    q: "Where are the accommodations located?",
    a: "We have student stays in Khomasdal and Rocky Crest, Windhoek. Both are safe residential areas with easy access to campuses, shops and student transport routes.",
  },
  {
    q: "Is transport available to campus?",
    a: "Yes. A paid shuttle service is available and student transport can be pre-booked, making the daily trip to campus simple and reliable.",
  },
  {
    q: "What should I bring with me?",
    a: "Rooms come fully furnished with bunk beds, mattresses, bedding and linen, and the kitchen is equipped with crockery, cutlery, a microwave and kettle. Just bring your personal items, textbooks and ambitions.",
  },
  {
    q: "Is the Wi-Fi good enough for online classes?",
    a: "Yes. Fibre Wi-Fi runs throughout the property, and there is a dedicated study area plus free PC use for residents, so online lectures and research are never a struggle.",
  },
  {
    q: "How does the deposit work?",
    a: "A N$2,000 deposit is required to secure your booking. Please WhatsApp or email us for the full booking terms and payment details.",
  },
];

export const STATS = [
  { value: "2", label: "Locations: Khomasdal & Rocky Crest" },
  { value: "100%", label: "Dedicated to female students" },
  { value: "N$2,800", label: "Per person / month, essentials included" },
  { value: "2027", label: "Bookings now open" },
];
