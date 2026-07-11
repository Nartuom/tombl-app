import { Resend } from "resend";
import { NextResponse } from "next/server";

const RESEND_KEY = process.env.RESEND_API_KEY;
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL;
const FROM_ADDRESS = process.env.CONTACT_FROM_EMAIL ?? "contact@tombl.co.uk";
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

const resend = RESEND_KEY ? new Resend(RESEND_KEY) : null;

const sanitize = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

async function verifyRecaptcha(token: string) {
  if (!RECAPTCHA_SECRET) return false;

  const params = new URLSearchParams({ secret: RECAPTCHA_SECRET, response: token });
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const result = await response.json().catch(() => null);

  return Boolean(
    result?.success && result.action === "contact_form" && (result.score ?? 0) >= 0.5
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const clientEmail = typeof body?.clientEmail === "string" ? body.clientEmail.trim() : "";
    const token = typeof body?.token === "string" ? body.token : "";

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    if (message.length > 3000 || name.length > 120) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    if (!token || !(await verifyRecaptcha(token))) {
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
    }

    if (!resend || !TO_ADDRESS || !clientEmail) {
      return NextResponse.json(
        { error: "Contact service is not configured. Please try a different channel." },
        { status: 503 }
      );
    }

    const subject = `Portfolio contact from ${name}`;

    await resend.emails.send({
      to: TO_ADDRESS,
      from: FROM_ADDRESS,
      replyTo: clientEmail,
      subject,
      text: `Name: ${name}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${sanitize(name)}</p><p>${sanitize(message).replace(/\r?\n/g, "<br />")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);

    return NextResponse.json(
      { error: "We couldn't send your message just now. Please try again soon." },
      { status: 500 }
    );
  }
}
