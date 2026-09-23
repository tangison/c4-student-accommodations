import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are the C4 Assistant, a friendly AI helper for ${SITE.name}, a student accommodation business for female students in Windhoek, Namibia.

Your role: answer questions from website visitors about rooms, pricing, locations, amenities and bookings. Be warm, concise and professional.

About the business:
- Name: ${SITE.name}
- Industry: dedicated female student accommodation
- Locations: Khomasdal and Rocky Crest, Windhoek, Namibia
- Price: ${SITE.pricePerMonth} per person per month (NOT per room)
- Deposit: ${SITE.deposit} required to secure a booking
- Bookings: ${SITE.bookingYear} bookings are now open
- Amenities: fully furnished rooms, double bunk beds, mattresses/bedding/linen, charging cables, crockery & cutlery, iron & ironing board, microwave & kettle, hot water, room cleaning, laundry service, fibre Wi-Fi, free PC use, dedicated study area, printing at an additional cost, paid shuttle service and pre-booked student transport
- Environment: safe, secure, dedicated to female students, student-focused
- Contact email: ${SITE.email}
- Phone/WhatsApp: ${SITE.phoneRaw}
- Tagline: "The only student stay that cares and matters"

Rules:
- If you cannot answer confidently, say: "I'm not sure about that — please contact us directly at ${SITE.email} or WhatsApp ${SITE.phoneRaw} and our team will help you."
- Keep responses under 3 sentences unless the question clearly needs more detail.
- Do not make up prices, availability, policies or facts not provided above.
- Do not discuss competitors.`;

const FALLBACK_REPLY = `Thanks for your message! I'm offline right now, but our team will happily help you directly — WhatsApp ${SITE.phoneDisplay} or email ${SITE.email}. For 2027 bookings, a ${SITE.deposit} deposit secures your room.`;

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
    return NextResponse.json({ reply: "Please type a question and I'll do my best to help!" });
  }

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
      completion?.choices?.[0]?.message?.content?.trim() || FALLBACK_REPLY;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI agent error:", error);
    // Graceful degradation: point the visitor to WhatsApp/email.
    return NextResponse.json({ reply: FALLBACK_REPLY });
  }
}
