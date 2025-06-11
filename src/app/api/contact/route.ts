import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message, dates } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Configure your SMTP transport (for Gmail, use App Passwords)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "relax.stolac@gmail.com",
      pass: process.env.GMAIL_APP_PASSWORD, // Removed for now - set again later with new email
    },
  });

  const mailOptions = {
    from: "Relax Stolac <relax.stolac@gmail.com>",
    to: "relax.stolac@gmail.com",
    subject: `New Booking Inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nDates: ${dates}\nMessage: ${message}`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
