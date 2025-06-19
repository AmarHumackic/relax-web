import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Hero from "@/components/Hero";
import ApartmentsInfo from "@/components/ApartmentsInfo";
import LocationMap from "@/components/LocationMap";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";

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
      <Hero />

      {/* APARTMENTS INFO SECTION */}
      <ApartmentsInfo />

      {/* LOCATION / MAP */}
      <LocationMap />

      {/* TESTIMONIALS CAROUSEL */}
      <Reviews />

      {/* FAQ SECTION */}
      <Faq />
    </main>
  );
}
