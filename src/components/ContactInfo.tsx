import { LINKS } from "@/constants/links";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BookingBtn from "./BookingBtn";
import AirbnbBtn from "./AirbnbBtn";
import { SiViber, SiWhatsapp } from "react-icons/si";

export default function ContactInfo() {
  const tContactInfo = useTranslations("contact.contactInfo");
  const tCommon = useTranslations("common");

  return (
    <section className="shadow-three rounded-2xl bg-white p-8">
      <h3 className="text-primary mb-4 text-xl font-bold">
        {tContactInfo("contactInformation")}
      </h3>
      <ul className="text-body-color mb-4 space-y-3 text-base">
        <li>
          <strong>{`${tContactInfo("address")}:`}</strong>{" "}
          {`${tContactInfo("addressValue")}, ${tContactInfo("country")}`}
        </li>
        <li className="flex items-center">
          <strong>{`${tContactInfo("phone")}:`}</strong>{" "}
          <a
            href={`tel:${LINKS.phone}`}
            className="text-primary hover:underline"
          >
            {LINKS.phone}
          </a>
          <a
            href={`viber://chat?number=${LINKS.phone}`}
            className="text-primary ml-2"
            aria-label="Open Viber chat"
          >
            <SiViber size={22} color="#665CAC" />
          </a>
          <a
            href={`https://wa.me/${LINKS.whatsApp}`}
            className="text-primary ml-2"
            aria-label="Open WhatsApp chat"
          >
            <SiWhatsapp size={22} color="#25D366" />
          </a>
        </li>
        <li>
          <strong>{`${tContactInfo("email")}:`}</strong>{" "}
          <a
            href={`mailto:${LINKS.email}`}
            className="text-primary hover:underline"
          >
            {LINKS.email}
          </a>
        </li>
        <li>
          <strong>{`${tContactInfo("location")}:`}</strong>
          {/* <div className="mt-1 flex gap-3">
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              {tContactInfo("googleMaps")}
            </a>
            <a
              href={LINKS.appleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              {tContactInfo("appleMaps")}
            </a> 
          </div> */}
        </li>
      </ul>
      <div className="mb-6 overflow-hidden rounded shadow">
        <iframe
          title={tContactInfo("googleMaps")}
          src={`${LINKS.googleMaps}&z=16&output=embed`}
          width="100%"
          height="220"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Separator with 'or' */}
      <div className="mx-auto mb-4 flex w-full max-w-lg items-center gap-3 py-2">
        <div className="flex-1 border-t border-gray-300" />
        <span className="text-sm font-medium text-gray-400 select-none">
          {tCommon("or")}
        </span>
        <div className="flex-1 border-t border-gray-300" />
      </div>
      {/* Instant reservation label above booking buttons */}
      <div className="mx-auto mb-2 w-full max-w-lg text-center">
        <span className="text-primary text-sm font-semibold tracking-wide uppercase">
          {tCommon("instantReservation")}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <BookingBtn />

        {/* Airbnb Button with Dropdown */}
        <AirbnbBtn />
      </div>
    </section>
  );
}
