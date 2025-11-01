import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

const SENDGRID_KEY = process.env.SENDGRID_API_KEY;
const TO_ADDRESS = process.env.CONTACT_TO_EMAIL;
if (SENDGRID_KEY) {
  sgMail.setApiKey(SENDGRID_KEY);
}

const sanitize = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);

    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const FROM_ADDRESS = typeof body?.clientEmail === "string" ? body.clientEmail.trim() : "";
    console.log(name, message, FROM_ADDRESS)
    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required." }, { status: 400 });
    }

    if (message.length > 3000 || name.length > 120) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    if (!SENDGRID_KEY || !TO_ADDRESS || !FROM_ADDRESS) {
      return NextResponse.json(
        { error: "Contact service is not configured. Please try a different channel." },
        { status: 503 }
      );
    }

    const subject = `Portfolio contact from ${name}`;

    await sgMail.send({
      to: TO_ADDRESS,
      from: FROM_ADDRESS,
      subject,
      text: `Name: ${name}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${sanitize(name)}</p><p>${sanitize(message).replace(/\r?\n/g, "<br />")}</p>`
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
