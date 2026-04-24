import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getTransport() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "587");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP environment variables are missing.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass
    }
  });
}

export async function POST(request) {
  try {
    const { name, email, purpose, message } = await request.json();

    if (!name || !email || !purpose || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "shivendra286@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;
    const transporter = getTransport();

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New Shivendra.ai Inquiry - ${purpose}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Purpose: ${purpose}`,
        "",
        "Message:",
        message
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Purpose:</strong> ${escapeHtml(purpose)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json(
      { error: "Unable to send inquiry." },
      { status: 500 }
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
