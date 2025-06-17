import { format } from "date-fns";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const {
    fullName,
    email,
    checkIn,
    checkOut,
    apartment,
    numOfPersons,
    message,
  } = await req.json();

  if (!fullName || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Configure your SMTP transport (for Gmail, use App Passwords)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.CONTACT_GMAIL_USER,
      pass: process.env.CONTACT_GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Relax Contact <${process.env.CONTACT_GMAIL_USER}>`,
    to: "relax.stolac@gmail.com",
    subject: `New Booking Enquiry from ${fullName}`,
    text: `Name: ${fullName}\nEmail: ${email}\nDates: ${format(checkIn, "EEEE, d MMMM yyyy")} - ${format(checkOut, "EEEE, d MMMM yyyy")}\nApartment: ${apartment}\nNumber of Persons: ${numOfPersons}\nMessage: ${message}`,
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
