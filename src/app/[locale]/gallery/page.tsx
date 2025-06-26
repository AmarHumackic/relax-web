import PhotoGallery from "@/components/PhotoGallery";
import { useTranslations } from "next-intl";
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
    pageMetadata.gallery[locale as keyof typeof pageMetadata.gallery];
  return generateSEOMetadata(metadata, locale);
}

const GalleryPage = () => {
  const tGallery = useTranslations("gallery");

  return (
    <section className="relative z-10 overflow-hidden bg-[#FCFCFC] pt-[160px] pb-6">
      <div className="container mx-auto px-4 md:px-3">
        <h1 className="text-primary mb-8 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
          {tGallery("title")}
        </h1>
        <div className="mx-auto max-w-[1200px]">
          <PhotoGallery />
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
