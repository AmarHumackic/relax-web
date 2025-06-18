import { Metadata } from "next";
import TestimonialsCarousel from "@/components/Reviews";
import { useTranslations } from "next-intl";
import HeroSection from "@/components/HeroSection";
import ApartmentsInfo from "@/components/ApartmentsInfo";
import LocationMap from "@/components/LocationMap";
import Reviews from "@/components/Reviews";

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
      <LocationMap />

      {/* TESTIMONIALS CAROUSEL */}
      <Reviews />

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
