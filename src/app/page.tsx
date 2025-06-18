import { Metadata } from "next";
import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const amenities = [
  { icon: "wifi", label: "WiFi" },
  { icon: "parking", label: "Parking" },
  { icon: "ac", label: "Klima" },
  { icon: "view", label: "Pogled" },
  { icon: "terrace", label: "Terasa" },
  { icon: "washer", label: "Veš mašina" },
  { icon: "kitchen", label: "Kuhinja" },
  { icon: "tv", label: "TV" },
];

const testimonials = [
  {
    name: "Ana, Hrvatska",
    text: "Predivan apartman, čist i prostran. Lokacija odlična! Vratit ćemo se sigurno.",
  },
  {
    name: "Marko, Srbija",
    text: "Domaćini ljubazni, sve preporuke! Parking ispred zgrade i odličan WiFi.",
  },
  {
    name: "Ivana, Crna Gora",
    text: "Mirno okruženje, a centar grada je blizu. Terasa s pogledom na vrt je top!",
  },
  {
    name: "Jasmin, BiH",
    text: "Apartman ima sve što treba za duži boravak. Posebno nam se svidjela kuhinja.",
  },
  {
    name: "Petra, Slovenija",
    text: "Veoma čisto, moderno i udobno. Klima i veš mašina su veliki plus!",
  },
  {
    name: "Milan, Srbija",
    text: "Dobar omjer cijene i kvaliteta. Sve preporuke za porodice.",
  },
  {
    name: "Lejla, Austrija",
    text: "Domaćini su nas dočekali s osmijehom. Parking i WiFi odlični.",
  },
  {
    name: "Dario, Hrvatska",
    text: "Apartman je prostran, terasa je savršena za jutarnju kafu.",
  },
  {
    name: "Sara, Njemačka",
    text: "Lokacija je mirna, a opet blizu centra. Sve pohvale!",
  },
  {
    name: "Nikola, Srbija",
    text: "Sve je bilo kao na slikama. Vratit ćemo se opet!",
  },
];

const faqs = [
  {
    q: "Is parking free?",
    a: "Yes, there is free private parking for guests in front of the property.",
  },
  {
    q: "What are the check-in and check-out times?",
    a: "Check-in is from 14:00, check-out until 10:00. Flexible by arrangement if possible.",
  },
  {
    q: "Are pets allowed?",
    a: "On request, small pets are welcome at no extra charge.",
  },
  {
    q: "Is there WiFi and air conditioning?",
    a: "Yes, both apartments have free WiFi and air conditioning.",
  },
  {
    q: "Is there a washing machine in the apartment?",
    a: "Yes, both apartments have a washing machine available for guests.",
  },
];

function AmenityIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "wifi":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13a10 10 0 0114 0M8.5 16.5a5 5 0 017 0M12 20h.01"
          />
        </svg>
      );
    case "parking":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2zm5 4v8"
          />
        </svg>
      );
    case "ac":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8h18M3 16h18M4 12h16"
          />
        </svg>
      );
    case "view":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="3" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      );
    case "terrace":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="3" y="10" width="18" height="7" rx="2" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 10V7a5 5 0 0110 0v3"
          />
        </svg>
      );
    case "washer":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="12" cy="12" r="5" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 7h.01M7 7h.01"
          />
        </svg>
      );
    case "kitchen":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 4v16M16 4v16"
          />
        </svg>
      );
    case "tv":
      return (
        <svg
          className="text-primary h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <rect x="2" y="7" width="20" height="13" rx="2" />
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 21h8"
          />
        </svg>
      );
    default:
      return null;
  }
}

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/all/1.webp"
            alt="Hero background image"
            fill
            className="h-full w-full object-cover opacity-70 blur-xs"
            priority
          />
          {/* White overlay for readability */}
          <div className="absolute inset-0 bg-white/40" />
        </div>
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="text-primary mb-4 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Relax Apartments
          </h1>
          <div className="mb-8 max-w-2xl">
            <h4 className="text-primary/90 mb-3 text-lg leading-snug font-semibold md:mb-4 md:text-2xl">
              Enjoy your stay in Stolac, Bosnia and Herzegovina!
            </h4>
            <h6 className="text-base leading-relaxed font-normal text-gray-600 md:text-lg md:leading-8">
              Relax Apartments offers two comfortable and modern apartments with
              a spacious terrace, private parking, and a rose-filled garden.
              Ideally located in the city center, perfect for exploring
              Herzegovina and relaxing in a peaceful setting with views of the
              Old Town fortress.
            </h6>
          </div>
          {/* Instant reservation label above booking buttons */}
          <div className="mx-auto mb-2 w-full max-w-lg text-center">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              Instant reservation
            </span>
          </div>
          {/* CTA Book Now */}
          <div className="mx-auto flex w-full max-w-lg flex-col gap-4 sm:max-w-md sm:flex-row md:min-w-lg">
            <a
              href="https://airbnb.com/your-listing-link"
              target="_blank"
              rel="noopener noreferrer"
              className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 min-h-12 w-full flex-1 items-center justify-center gap-2 rounded-xs px-4 text-base font-medium whitespace-nowrap text-white transition duration-300 sm:w-auto"
            >
              <Image
                src="/images/hero/airbnb-logo.svg"
                alt="Airbnb logo"
                width={28}
                height={28}
                style={{ display: "inline", verticalAlign: "middle" }}
              />
              <span className="whitespace-nowrap">Book on Airbnb</span>
            </a>
            <a
              href="https://booking.com/your-listing-link"
              target="_blank"
              rel="noopener noreferrer"
              className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 min-h-12 w-full flex-1 items-center justify-center gap-2 rounded-xs px-4 text-base font-medium whitespace-nowrap text-white transition duration-300 sm:w-auto"
            >
              <Image
                src="/images/hero/bookingcom-logo.svg"
                alt="Booking.com logo"
                width={28}
                height={28}
                style={{ display: "inline", verticalAlign: "middle" }}
              />
              <span className="whitespace-nowrap">Book on Booking.com</span>
            </a>
          </div>
          {/* Separator with 'or' */}
          <div className="mx-auto flex w-full max-w-lg items-center gap-3 py-2">
            <div className="flex-1 border-t border-gray-300" />
            <span className="text-sm font-medium text-gray-400 select-none">
              or
            </span>
            <div className="flex-1 border-t border-gray-300" />
          </div>
          {/* Contact Us Directly button below booking buttons */}
          <div className="mx-auto mt-0 flex w-full max-w-lg justify-center">
            <a
              href="/contact"
              className="ease-in-up shadow-btn hover:shadow-btn-hover hover:bg-primary/10 border-primary text-primary flex h-12 w-full items-center justify-center gap-2 rounded-xs border bg-white px-10 py-3.5 text-base font-medium transition duration-300 sm:w-auto"
              style={{ minWidth: "0" }}
            >
              <span className="whitespace-nowrap">Contact Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* APARTMENTS INFO SECTION */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto grid gap-8 md:grid-cols-2">
          {/* Upper Level Apartment */}
          <div className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-md">
            <h2 className="text-primary mb-2 text-2xl font-bold">
              Upper Level Apartment (3 bedrooms)
            </h2>
            <p className="mb-4 text-gray-700">
              Spacious apartment with living room, three separate bedrooms, and
              a bathroom with a bathtub. The kitchen is fully equipped (stove,
              fridge, dishes, oven). The apartment has air conditioning, washing
              machine, TV, private entrance, soundproof walls, and a balcony.
              Total 7 beds.
            </p>
            <ul className="mb-2 text-sm text-gray-600">
              <li>• 3 bedrooms</li>
              <li>• 1 living room</li>
              <li>• 1 bathroom (bathtub)</li>
              <li>• 7 beds</li>
              <li>• Spacious Terrace</li>
              <li>• Air conditioning, WiFi, TV, washing machine</li>
            </ul>
            {/* Amenities icons */}
            <div className="mt-4 flex flex-wrap">
              {amenities.map((a) => (
                <div
                  key={a.label}
                  className="flex min-w-[70px] flex-col items-center text-center"
                >
                  <AmenityIcon icon={a.icon} />
                  <span className="mt-1 text-xs text-gray-600">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Ground Level Apartment */}
          <div className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-md">
            <h2 className="text-primary mb-2 text-2xl font-bold">
              Ground Level Apartment (2 bedrooms)
            </h2>
            <p className="mb-4 text-gray-700">
              Spacious apartment with living room, two separate bedrooms, and a
              bathroom with bathtub or shower. The kitchen is fully equipped
              (stove, fridge, dishes, coffee/tea maker). The apartment has air
              conditioning, washing machine, TV, private entrance, soundproof
              walls, and a balcony. Total 6 beds.
            </p>
            <ul className="mb-2 text-sm text-gray-600">
              <li>• 2 bedrooms</li>
              <li>• 1 living room</li>
              <li>• 1 bathroom (bathtub or shower)</li>
              <li>• 6 beds</li>
              <li>• Flower garden</li>
              <li>• Air conditioning, WiFi, TV, washing machine</li>
            </ul>
            {/* Amenities icons */}
            <div className="mt-4 flex flex-wrap">
              {amenities.map((a) => (
                <div
                  key={a.label}
                  className="flex min-w-[70px] flex-col items-center text-center"
                >
                  <AmenityIcon icon={a.icon} />
                  <span className="mt-1 text-xs text-gray-600">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION / MAP */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto flex flex-col items-center gap-8 md:flex-row">
          <div className="h-72 w-full flex-1 overflow-hidden rounded-xl shadow-md">
            <iframe
              title="Apartment Relax Stolac map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.0281669949077!2d17.95858047586986!3d43.08290317113487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b7d8ed612feab%3A0x5006be3804c358c3!2sApartment%20Relax!5e0!3m2!1sen!2sba!4v1749629448823!5m2!1sen!2sba"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-primary mb-2 text-2xl font-bold">Location</h3>
            <p className="text-lg text-gray-700">
              We are located in a quiet area, just a 3-minute walk from the city
              center. Perfect for relaxing, yet close to everything you need!
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS CAROUSEL */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h3 className="text-primary mb-6 text-center text-2xl font-bold">
            What our guests say
          </h3>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <h3 className="text-primary mb-6 text-center text-2xl font-bold">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group cursor-pointer rounded-lg bg-white p-4 shadow"
              >
                <summary className="group-open:text-primary flex items-center justify-between font-medium text-gray-800">
                  {faq.q}
                  <span className="ml-2 transition-transform group-open:rotate-90">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-2 text-sm text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
