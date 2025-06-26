import { LINKS } from "@/constants/links";
import { useTranslations } from "next-intl";

export default function LocationMap() {
  const tLocation = useTranslations("home.location");

  return (
    <section className="container mx-auto px-4 md:px-0">
      <h3 className="text-primary mb-6 text-center text-2xl font-bold">
        {tLocation("title")}
      </h3>
      <div className="mx-auto flex flex-col items-center gap-6 md:flex-row md:gap-8">
        <div className="h-72 w-full flex-1 overflow-hidden rounded-xl">
          <iframe
            title="Apartment Relax Stolac map"
            src={LINKS.googleMaps}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-lg text-gray-700">{tLocation("description")}</p>
        </div>
      </div>
    </section>
  );
}
