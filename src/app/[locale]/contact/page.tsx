"use client";

import "react-datepicker/dist/react-datepicker.css";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#FCFCFC] pt-[160px] pb-16 md:pb-20 lg:pb-28">
      <div className="container px-4">
        <h1 className="text-primary mb-8 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Want to Book Your Stay?
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info Card */}
          <ContactInfo />

          {/* Contact Form Card */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
