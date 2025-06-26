import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const PhotoGalleryPreview = () => {
  const tGallery = useTranslations("gallery");
  const tCommon = useTranslations("common");

  const images = [
    // Portrait image
    {
      id: 5,
      src: "/images/gallery/all/5.webp",
      apartment: "all",
      room: tGallery("descriptions.exteriorViewNamePlate"),
      width: 800,
      height: 1200,
    },
    // Landscape image
    {
      id: 2,
      src: "/images/gallery/all/2.webp",
      apartment: "all",
      room: tGallery("descriptions.exteriorView"),
      width: 1200,
      height: 800,
    },
  ];

  return (
    <section className="bg-gray-50 pt-8 pb-4">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col gap-4 md:flex-row md:gap-5">
          {/* Portrait image on the left */}
          <div className="group relative w-full break-inside-avoid md:h-[500px] md:w-1/3">
            <Link
              href="/gallery"
              className="group relative block h-full"
              aria-label={images[0].room}
            >
              <Image
                src={images[0].src}
                alt={images[0].room}
                title={images[0].room}
                width={images[0].width}
                height={images[0].height}
                className="h-full w-full rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-103"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-4 text-center text-lg font-bold text-white">
                  {images[0].room}
                </p>
              </div>
            </Link>
          </div>

          {/* Landscape image on the right */}
          <div className="w-full md:h-[500px] md:w-2/3">
            <Link
              href="/gallery"
              className="group relative block h-full"
              aria-label={images[1].room}
            >
              <Image
                src={images[1].src}
                alt={images[1].room}
                title={images[1].room}
                width={images[1].width}
                height={images[1].height}
                className="h-full w-full rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-103"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="px-4 text-center text-lg font-bold text-white">
                  {images[1].room}
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Contact Us Directly button below booking buttons */}
        <div className="mx-auto mt-4 flex w-full max-w-lg justify-center md:mt-5">
          <Link
            href="/gallery"
            className="ease-in-up shadow-btn hover:shadow-btn-hover hover:bg-primary/10 border-primary text-primary flex h-12 w-full items-center justify-center gap-2 rounded-xs border bg-white px-10 py-3.5 text-base font-medium transition duration-300 sm:w-auto"
            style={{ minWidth: "0" }}
          >
            <span className="whitespace-nowrap">{tCommon("viewGallery")}</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoGalleryPreview;
