"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

const CONTACT = {
  address: "Lazara Lazarevića 27, Stolac, Bosnia and Herzegovina",
  phone: "+387 61 234 567",
  email: "relax.stolac@gmail.com",
  googleMaps:
    "https://maps.google.com/?q=Lazara Lazarevića 27, Stolac, Bosnia and Herzegovina",
  appleMaps:
    "https://maps.apple.com/?q=Lazara Lazarevića 27, Stolac, Bosnia and Herzegovina",
  airbnb: "https://airbnb.com/your-listing-link",
  booking: "https://booking.com/your-listing-link",
};

const APARTMENTS = [
  { label: "Upper Level", value: "upper" },
  { label: "Ground Level", value: "ground" },
];

const MAX_PERSONS = {
  upper: 8,
  ground: 7,
};

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    checkIn: new Date(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 1)), // Default to tomorrow
    apartment: "upper",
    persons: 1,
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "persons" ? Number(value) : value,
    }));
  };

  const handleCheckInChange = (date: Date) => {
    setForm((prev) => {
      const newCheckIn = date;
      const newCheckOut =
        prev.checkOut < newCheckIn ? newCheckIn : prev.checkOut;
      setDateError(null);
      return { ...prev, checkIn: newCheckIn, checkOut: newCheckOut };
    });
  };

  const handleCheckOutChange = (date: Date) => {
    setForm((prev) => {
      if (date < prev.checkIn) {
        setDateError("Check-out date cannot be before check-in date");
        return prev;
      }
      setDateError(null);
      return { ...prev, checkOut: date };
    });
  };

  // Reset persons if apartment changes
  const handleApartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, apartment: value, persons: 1 }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dateError) return;

    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus(
          "Thank you for your inquiry! We will get back to you within a few hours.",
        );
        setForm({
          fullName: "",
          email: "",
          checkIn: new Date(),
          checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
          apartment: "upper",
          persons: 1,
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  const maxPersons = MAX_PERSONS[form.apartment as keyof typeof MAX_PERSONS];

  return (
    <section className="relative z-10 overflow-hidden bg-[#FCFCFC] pt-16 pb-16 md:pb-20 lg:pt-[160px] lg:pb-28">
      <div className="container px-4">
        <h1 className="text-primary mb-8 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Want to Book Your Stay?
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Info Card */}
          <div className="shadow-three rounded-2xl bg-white p-8">
            <h3 className="text-primary mb-4 text-xl font-bold">
              Contact Information
            </h3>
            <ul className="text-body-color mb-6 space-y-3 text-base">
              <li>
                <strong>AAddress:</strong> {CONTACT.address}
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-primary hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-primary hover:underline"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <strong>Location:</strong>
                <div className="mt-1 flex gap-3">
                  <a
                    href={CONTACT.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Google Maps
                  </a>
                  <a
                    href={CONTACT.appleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    Apple Maps
                  </a>
                </div>
              </li>
            </ul>
            <div className="mb-6 overflow-hidden rounded shadow">
              <iframe
                title="Google Maps"
                src="https://maps.google.com/maps?q=Lazara Lazarevića 27, Stolac, Bosnia and Herzegovina&z=16&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Separator with 'or' */}
            <div className="mx-auto mb-4 flex w-full max-w-lg items-center gap-3 py-2">
              <div className="flex-1 border-t border-gray-300" />
              <span className="text-sm font-medium text-gray-400 select-none">
                or
              </span>
              <div className="flex-1 border-t border-gray-300" />
            </div>
            {/* Instant reservation label above booking buttons */}
            <div className="mx-auto mb-2 w-full max-w-lg text-center">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                Instant reservation
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={CONTACT.airbnb}
                target="_blank"
                rel="noopener noreferrer"
                className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 items-center justify-center gap-2 rounded-xs px-4 text-base font-medium text-white transition duration-300"
              >
                <Image
                  src="/images/hero/airbnb-logo.svg"
                  alt="Airbnb logo"
                  width={24}
                  height={24}
                  className="mr-2"
                  style={{ display: "inline", verticalAlign: "middle" }}
                />
                <span className="whitespace-nowrap">Book on Airbnb</span>
              </a>
              <a
                href={CONTACT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 items-center justify-center gap-2 rounded-xs px-4 text-base font-medium text-white transition duration-300"
              >
                <Image
                  src="/images/hero/bookingcom-logo.svg"
                  alt="Booking.com logo"
                  width={24}
                  height={24}
                  className="mr-2"
                  style={{ display: "inline", verticalAlign: "middle" }}
                />
                <span className="whitespace-nowrap">Book on Booking.com</span>
              </a>
            </div>
          </div>
          {/* Contact Form Card */}
          <div className="shadow-three rounded-2xl bg-white p-8">
            <p className="text-body-color mb-8 rounded-lg border border-gray-100 bg-gray-50 p-4 text-center text-base">
              Use the form below to contact us about your stay. We will get back
              to you within a few hours with all the details you need!
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="mb-1 block font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  disabled={loading}
                  className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black transition placeholder:text-gray-400 focus:ring-2 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black transition placeholder:text-gray-400 focus:ring-2 focus:outline-none"
                />
              </div>
              <div className="flex w-full gap-2">
                <div className="w-1/2">
                  <label htmlFor="checkIn" className="mb-1 block font-medium">
                    Check In
                  </label>
                  <DatePicker
                    selected={form.checkIn}
                    onChange={handleCheckInChange}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select check-in date"
                    disabled={loading}
                    minDate={new Date()}
                    className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black transition placeholder:text-gray-400 focus:ring-2 focus:outline-none"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="checkOut" className="mb-1 block font-medium">
                    Check Out
                  </label>
                  <DatePicker
                    selected={form.checkOut}
                    onChange={handleCheckOutChange}
                    dateFormat="MMMM d, yyyy"
                    placeholderText="Select check-out date"
                    disabled={loading}
                    minDate={form.checkIn}
                    className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black transition placeholder:text-gray-400 focus:ring-2 focus:outline-none"
                  />
                </div>
              </div>
              {dateError && (
                <div className="mt-1 text-sm text-red-500">{dateError}</div>
              )}
              <div>
                <label htmlFor="apartment" className="mb-1 block font-medium">
                  Apartment
                </label>
                <select
                  id="apartment"
                  name="apartment"
                  value={form.apartment}
                  onChange={handleApartmentChange}
                  disabled={loading}
                  className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black transition focus:ring-2 focus:outline-none"
                >
                  {APARTMENTS.map((apt) => (
                    <option key={apt.value} value={apt.value}>
                      {apt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="persons" className="mb-1 block font-medium">
                  Number of Persons
                </label>
                <select
                  id="persons"
                  name="persons"
                  value={form.persons}
                  onChange={handleChange}
                  disabled={loading}
                  className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black transition focus:ring-2 focus:outline-none"
                >
                  {Array.from({ length: maxPersons }, (_, i) => i + 1).map(
                    (num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ),
                  )}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Write your message or any special requests..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={loading}
                  className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black transition placeholder:text-gray-400 focus:ring-2 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary shadow-submit hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded px-6 py-3 font-medium text-white transition disabled:opacity-60"
                disabled={loading || !!dateError}
              >
                {loading && (
                  <svg
                    className="h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    ></path>
                  </svg>
                )}
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
              {status && (
                <div className="mt-2 text-center font-medium text-green-600">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
