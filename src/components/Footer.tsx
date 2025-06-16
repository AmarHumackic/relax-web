import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-16 bg-[#FCFCFC] pt-16 pb-8">
      {/* Decorative top border */}
      <div className="from-primary/20 via-primary to-primary/20 absolute top-0 right-0 left-0 h-1 bg-gradient-to-r"></div>

      <div className="container px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-primary mr-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C6.12 0 3 3.12 3 7C3 11.5 10 19 10 19C10 19 17 11.5 17 7C17 3.12 13.88 0 10 0ZM10 9.5C8.62 9.5 7.5 8.38 7.5 7C7.5 5.62 8.62 4.5 10 4.5C11.38 4.5 12.5 5.62 12.5 7C12.5 8.38 11.38 9.5 10 9.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-base text-gray-600">
                  Stolac, Bosnia and Herzegovina
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 14.1667V15.8333C17.501 16.0543 17.4451 16.272 17.3373 16.4639C17.2296 16.6558 17.0736 16.8149 16.8856 16.9249C16.6976 17.0349 16.4843 17.0922 16.2671 17.0911C16.0499 17.09 15.8373 17.0305 15.6508 16.9183L13.5917 15.6917C11.0683 16.3854 8.38163 16.2493 5.93333 15.3C3.74833 14.4492 1.92504 12.8827 0.823333 10.8583C-0.278333 8.83417 -0.196667 6.50583 0.933333 4.54167L-0.291667 2.5C-0.401786 2.31324 -0.458588 2.10088 -0.456988 1.88452C-0.455388 1.66816 -0.395428 1.45679 -0.283333 1.27167C-0.171238 1.08654 -0.0107527 0.933796 0.181907 0.827893C0.374566 0.72199 0.591907 0.666992 0.808333 0.666667H2.5C3.23667 0.663333 3.92667 0.968333 4.41667 1.5C4.825 1.95167 5.30167 2.34167 5.83333 2.65833C6.27917 2.91667 6.55167 3.38 6.55167 3.875C6.55167 4.37 6.27917 4.83333 5.83333 5.09167L5.09167 5.83333C5.86333 7.34083 7.15917 8.63667 8.66667 9.40833L9.40833 8.66667C9.66667 8.22083 10.13 7.94833 10.625 7.94833C11.12 7.94833 11.5833 8.22083 11.8417 8.66667C12.1583 9.19833 12.5483 9.675 13 10.0833C13.5317 10.5733 13.8367 11.2633 13.8333 12V13.6917C13.8333 13.9083 13.7783 14.1257 13.6724 14.3183C13.5665 14.511 13.4138 14.6715 13.2287 14.7836C13.0435 14.8957 12.8322 14.9557 12.6158 14.9573C12.3995 14.9589 12.1871 14.9021 12 14.7917L10.8333 14.1667C10.8333 14.1667 10.8333 14.1667 10.8333 14.1667H17.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-base text-gray-600">+387 61 422 877</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 4.16667H2.5C1.57917 4.16667 0.833333 4.9125 0.833333 5.83333V14.1667C0.833333 15.0875 1.57917 15.8333 2.5 15.8333H17.5C18.4208 15.8333 19.1667 15.0875 19.1667 14.1667V5.83333C19.1667 4.9125 18.4208 4.16667 17.5 4.16667ZM17.5 5.83333V6.0875L10 10.8333L2.5 6.0875V5.83333H17.5ZM2.5 14.1667V8.0875L9.70833 12.5C9.80583 12.5622 9.91583 12.5942 10.0275 12.5942C10.1392 12.5942 10.2492 12.5622 10.3467 12.5L17.5 8.0875V14.1667H2.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span className="text-base text-gray-600">
                  relax.stolac@gmail.com
                </span>
              </li>
            </ul>
            {/* Social Media Links */}
            <div className="mt-6 flex items-center space-x-4">
              <a
                href="https://www.facebook.com/relaxstolac"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:border-primary hover:bg-primary flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/relaxstolac"
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
              <p>
                At Apartment Relax Stolac, we believe that every guest deserves
                a perfect stay. Our modern, fully-equipped apartments offer the
                perfect blend of comfort and convenience, set against the
                stunning backdrop of Stolac's natural beauty.
              </p>
              <p>
                Whether you're seeking a peaceful retreat or an adventure-filled
                holiday, our apartments provide the ideal base for exploring the
                rich history and natural wonders of Herzegovina. We take pride
                in ensuring your stay is memorable, comfortable, and truly
                relaxing.
              </p>
              <p>
                From the moment you arrive, you'll experience our warm
                hospitality and attention to detail. We're here to make your
                stay in Stolac exceptional in every way.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-600">
            Apartment Relax Stolac © 2025 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
