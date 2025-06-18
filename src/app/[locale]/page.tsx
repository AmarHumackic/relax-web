import { Metadata } from "next";
import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection";
import ApartmentsInfo from "@/components/ApartmentsInfo";

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

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  const t = useTranslations("home");
  return (
    <main>
      {/* HERO SECTION */}
      <HeroSection />

      {/* APARTMENTS INFO SECTION */}
      <ApartmentsInfo />

      {/* LOCATION / MAP */}
      <section className="container mx-auto bg-gray-50">
        <h3 className="text-primary mb-6 text-center text-2xl font-bold">
          Location
        </h3>
        <div className="mx-auto flex flex-col items-center gap-8 md:flex-row">
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
