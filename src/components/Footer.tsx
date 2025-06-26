import { LINKS } from "@/constants/links";
import { useTranslations } from "next-intl";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiViber, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  const tContact = useTranslations("contact.contactInfo");
  const tFooter = useTranslations("footer");

  return (
    <footer className="relative mt-16 bg-[#FCFCFC] pt-16 pb-8">
      {/* Decorative top border */}
      <div className="from-primary/20 via-primary to-primary/20 absolute top-0 right-0 left-0 h-1 bg-gradient-to-r"></div>

      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-gray-900">
              {tContact("contactUs")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-primary mr-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </span>
                <span className="text-base text-gray-600">
                  {`Stolac, ${tContact("country")}`}
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.62 10.79a15.091 15.091 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.35.27 2.67.76 3.88a1 1 0 0 1-.21 1.11l-2.2 2.2z" />
                  </svg>
                </span>
                <a
                  href={`tel:${LINKS.phone}`}
                  className="text-base text-gray-600 hover:underline"
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
                  href={`https://wa.me/${LINKS.phone}`}
                  className="text-primary ml-2"
                  aria-label="Open WhatsApp chat"
                >
                  <SiWhatsapp size={22} color="#25D366" />
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18v-9.99l8 7.99 8-7.99V18H4z" />
                  </svg>
                </span>
                <a
                  href={`mailto:${LINKS.email}`}
                  className="text-base text-gray-600 hover:underline"
                >
                  {LINKS.email}
                </a>
              </li>
            </ul>
            {/* Social Media Links */}
            <div className="mt-6 flex items-center space-x-4">
              <a
                href={LINKS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-primary hover:bg-primary flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href={LINKS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-primary hover:bg-primary flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="lg:col-span-2">
            <div className="space-y-4 text-gray-600">
              <p>{tFooter("description1")}</p>
              <p>{tFooter("description2")}</p>
              <p>{tFooter("description3")}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-600">
            {tFooter("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
