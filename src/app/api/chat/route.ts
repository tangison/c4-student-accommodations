import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the C4 Assistant, a friendly AI helper for ${SITE.name}, a dedicated student accommodation business in Windhoek, Namibia.

Your role: answer questions from website visitors about rooms, pricing, locations, amenities and bookings. Be warm, concise and professional.

About the business:
- Name: ${SITE.name}
- Industry: dedicated student accommodation
- Locations: Khomasdal and Rocky Crest, Windhoek, Namibia
- Price: ${SITE.pricePerMonth} per person per month (NOT per room)
- Deposit: ${SITE.deposit} required to secure a booking
- Bookings: ${SITE.bookingYear} bookings are now open
- Amenities: fully furnished rooms, double bunk beds, mattresses/bedding/linen, charging cables, crockery & cutlery, iron & ironing board, microwave & kettle, hot water, room cleaning, laundry service, fibre Wi-Fi, free PC use, dedicated study area, printing at an additional cost, paid shuttle service and pre-booked student transport
- Environment: safe, secure, student-focused, managed by a caring on-site team
- Contact email: ${SITE.email}
- Phone/WhatsApp: ${SITE.phoneRaw}
- Tagline: "The only student stay that cares and matters"

Rules:
- If you cannot answer confidently, say: "I'm not sure about that. Please contact us directly at ${SITE.email} or on WhatsApp at ${SITE.phoneRaw} and our team will help you."
- Keep responses under 3 sentences unless the question clearly needs more detail.
- Do not make up prices, availability, policies or facts not provided above.
- Do not discuss competitors.`;

const FALLBACK_REPLY = `Thanks for your message. I'm offline right now, but our team can help you directly on WhatsApp at ${SITE.phoneDisplay} or by email at ${SITE.email}. For 2027 bookings, a ${SITE.deposit} deposit secures your room.`;

/**
 * Local FAQ knowledge base used when no LLM backend is available
 * (e.g. deployments without the sandbox SDK). Matches visitor questions
 * to known facts about the business; escalates to WhatsApp otherwise.
 */
const KB: { keywords: string[][]; answer: string }[] = [
  {
    keywords: [["price", "rent", "cost", "how much", "fee", "monthly", "per month", "2800", "rate"]],
    answer: `The rate is N$2,800 per person per month (not per room). It covers your fully furnished room, fibre Wi-Fi, room cleaning, laundry service, hot water and use of the study area and free PCs. Printing is available at an additional cost.`,
  },
  {
    keywords: [["deposit", "2000", "secure", "reserv"]],
    answer: `A N$2,000 deposit is required to secure your booking for 2027. Please WhatsApp us on +264 81 437 8400 for the full booking terms and payment details.`,
  },
  {
    keywords: [["book", "booking", "apply", "register", "open", "availability", "available", "space", "room left"]],
    answer: `2027 bookings are now open. Just tap any “Book Now” button on this site to chat with us on WhatsApp at +264 81 437 8400, or email c4studentstay@gmail.com. A N$2,000 deposit secures your spot.`,
  },
  {
    keywords: [["where", "location", "located", "address", "khomasdal", "rocky", "crest", "windhoek", "find you"]],
    answer: `We have student stays in Khomasdal and Rocky Crest, Windhoek. Both are safe residential areas with easy access to campuses, shops and student transport routes.`,
  },
  {
    keywords: [["safe", "safety", "security", "secure", "parent", "worried"]],
    answer: `Safety is our priority: C4 is a secure, dedicated student environment managed by a caring on-site team. It's built to give parents full peace of mind.`,
  },
  {
    keywords: [["wifi", "wi-fi", "internet", "fibre", "fiber", "pc", "computer", "study", "printing", "print"]],
    answer: `Fibre Wi-Fi runs throughout the property, and there is a dedicated study area plus free PC use for residents. Printing is available at an additional cost, which is handy for assignments.`,
  },
  {
    keywords: [["transport", "shuttle", "bus", "taxi", "campus", "travel"]],
    answer: `A paid shuttle service is available and student transport can be pre-booked, making the daily trip to campus simple and reliable.`,
  },
  {
    keywords: [["furnish", "bed", "bring", "linen", "kitchen", "microwave", "kettle", "cutlery", "crockery", "iron", "hot water", "mattress"]],
    answer: `Rooms come fully furnished with bunk beds, mattresses, bedding and linen, and the kitchen has crockery, cutlery, a microwave and a kettle, plus hot water. Just bring your personal items, textbooks and ambitions.`,
  },
  {
    keywords: [["clean", "laundry", "washing", "chores"]],
    answer: `Room cleaning and a laundry service are both included in your monthly rate, so you can focus entirely on your studies.`,
  },
  {
    keywords: [["contact", "whatsapp", "phone", "call", "email", "number", "speak", "human"]],
    answer: `You can reach our team any time on WhatsApp or by calling +264 81 437 8400, or email c4studentstay@gmail.com. We reply fast.`,
  },
  {
    keywords: [["hello", "hi", "hey", "good day", "molo", "how are you"]],
    answer: `Hello, I'm the C4 Assistant. Ask me about rooms, pricing, locations or how to book for 2027, or type “book” and I'll show you how.`,
  },
  {
    keywords: [["thank", "thanks", "great", "awesome", "nice"]],
    answer: `You're welcome. If there's anything else, rooms, pricing or transport, just ask. We look forward to welcoming you home in 2027.`,
  },
];

function localAnswer(question: string): string | null {
  const q = question.toLowerCase();
  let best: { score: number; answer: string } | null = null;
  for (const entry of KB) {
    let score = 0;
    for (const alternatives of entry.keywords) {
      if (alternatives.some((k) => q.includes(k))) score += 1;
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: entry.answer };
    }
  }
  return best ? best.answer : null;
}

export async function POST(req: Request) {
  let userMessages: { role: string; content: string }[] = [];

  try {
    const body = (await req.json()) as {
      messages?: { role: string; content: string }[];
    };
    userMessages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
  } catch {
    // fall through to validation below
  }

  if (userMessages.length === 0 || !userMessages[userMessages.length - 1]?.content) {
    return NextResponse.json({ reply: "Please type a question and I'll do my best to help." });
  }

  const lastMessage = userMessages[userMessages.length - 1].content;

  try {
    // Lazy import so the sandbox SDK is only loaded server-side when available.
    const mod = await import("z-ai-web-dev-sdk");
    const ZAI = mod.default ?? (mod as unknown as { ZAI?: typeof mod.default }).ZAI;
    if (!ZAI) throw new Error("z-ai-web-dev-sdk did not export a ZAI class");
    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...userMessages.map((m) => ({
          role: m.role === "assistant" ? ("assistant" as const) : ("user" as const),
          content: m.content,
        })),
      ],
    });

    const reply =
      completion?.choices?.[0]?.message?.content?.trim() || localAnswer(lastMessage) || FALLBACK_REPLY;
    return NextResponse.json({ reply });
  } catch (error) {
    // No LLM backend available (e.g. standalone deployments): answer from the
    // local FAQ knowledge base, else escalate the visitor to WhatsApp/email.
    console.error("AI agent falling back to local FAQ:", error instanceof Error ? error.message : error);
    const local = localAnswer(lastMessage);
    return NextResponse.json({ reply: local ?? FALLBACK_REPLY });
  }
}
