import { Metadata } from "next";
import Hero from "@/components/Hero";
import ApartmentsInfo from "@/components/ApartmentsInfo";
import LocationMap from "@/components/LocationMap";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import {
  generateMetadata as generateSEOMetadata,
  pageMetadata,
} from "@/lib/seo";
import FAQStructuredData from "@/components/FAQStructuredData";
import PhotoGalleryPreview from "@/components/PhotoGalleryPreview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata = pageMetadata.home[locale as keyof typeof pageMetadata.home];
  return generateSEOMetadata(metadata, locale);
}

export default function HomePage() {
  return (
    <main>
      {/* FAQ Structured Data for SEO */}
      <FAQStructuredData />
      {/* HERO SECTION */}
      <Hero />

      {/* PHOTO GALLERY PREVIEW SECTION */}
      <PhotoGalleryPreview />

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
