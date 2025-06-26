import CityAttractions from "@/components/CityAttractions";
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
    pageMetadata.attractions[locale as keyof typeof pageMetadata.attractions];
  return generateSEOMetadata(metadata, locale);
}

const AttractionsPage = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-[#FCFCFC] pt-[160px] pb-16 md:pb-20 lg:pb-28">
      <div className="container mx-auto px-4 md:px-0">
        {/* City Attractions Section */}
        <CityAttractions />
      </div>
    </section>
  );
};

export default AttractionsPage;
