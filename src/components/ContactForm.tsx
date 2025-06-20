"use client";

import { MAX_PERSONS } from "@/constants/apartments";
import { useState } from "react";
import DatePicker from "react-datepicker";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    checkIn: new Date(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 1)), // Default to tomorrow
    apartment: "upper",
    numOfPersons: 1,
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [statusText, setStatusText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dateError, setDateError] = useState<string | null>(null);

  const APARTMENTS = [
    { label: "Ground Level", value: "ground" },
    { label: "Upper Level", value: "upper" },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "numOfPersons" ? Number(value) : value,
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

  // Reset numOfPersons if apartment changes
  const handleApartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, apartment: value, numOfPersons: 1 }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dateError) return;

    setLoading(true);
    setStatusText(null);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatusText(
          "Thank you for your enquiry! We will get back to you within a few hours.",
        );
        setStatus("success");
        setForm({
          fullName: "",
          email: "",
          checkIn: new Date(),
          checkOut: new Date(new Date().setDate(new Date().getDate() + 1)),
          apartment: "upper",
          numOfPersons: 1,
          message: "",
        });
      } else {
        setStatusText("Something went wrong. Please try again later.");
        setStatus("error");
      }
    } catch {
      setStatusText("Something went wrong. Please try again later.");
      setStatus("error");
    }
    setLoading(false);
  };

  const maxPersons = MAX_PERSONS[form.apartment as keyof typeof MAX_PERSONS];

  return (
    <section className="shadow-three rounded-2xl bg-white p-8">
      <p className="text-body-color mb-8 rounded-lg border border-gray-100 bg-gray-50 p-4 text-center text-base">
        Use the form below to contact us about your stay. We will get back to
        you within a few hours with all the details you need!
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
            autoCapitalize="words"
            value={form.fullName}
            onChange={handleChange}
            disabled={loading}
            className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black capitalize transition placeholder:text-gray-400 focus:ring-2 focus:outline-none"
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
              wrapperClassName="w-full"
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
              wrapperClassName="w-full"
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
          <label htmlFor="numOfPersons" className="mb-1 block font-medium">
            Number of Persons
          </label>
          <select
            id="numOfPersons"
            name="numOfPersons"
            value={form.numOfPersons}
            onChange={handleChange}
            disabled={loading}
            className="focus:border-primary focus:ring-primary/30 w-full rounded border border-gray-200 bg-white px-4 py-2 text-black transition focus:ring-2 focus:outline-none"
          >
            {Array.from({ length: maxPersons }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
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
            autoCapitalize="sentences"
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
        {statusText && (
          <div
            className={`mt-2 text-center font-medium text-${
              status === "success" ? "green-600" : "red-600"
            }`}
          >
            {statusText}
          </div>
        )}
      </form>
    </section>
  );
}
