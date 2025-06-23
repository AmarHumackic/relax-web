import Amenities from "@/components/Amenities";
import { Metadata } from "next";
import {
  generateMetadata as generateSEOMetadata,
  pageMetadata,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metadata =
    pageMetadata.amenities[locale as keyof typeof pageMetadata.amenities];
  return generateSEOMetadata(metadata, locale);
}

const AmenitiesPage = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#FCFCFC] pt-[160px] pb-16 md:pb-20 lg:pb-28">
      <div className="container px-4">
        {/* Amenities Section */}
        <Amenities />
      </div>
    </section>
  );
};

export default AmenitiesPage;
