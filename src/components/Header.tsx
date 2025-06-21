"use client";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "@/types/menu";
import { useTranslations } from "next-intl";

const Header = () => {
  const tHeader = useTranslations("header");
  const tCommon = useTranslations("common");
  const [navbarOpen, setNavbarOpen] = useState(false); // Navbar toggle
  const [sticky, setSticky] = useState(false); // Sticky Navbar

  const menuData: Menu[] = [
    {
      id: 1,
      title: tHeader("home"),
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: tHeader("gallery"),
      path: "/gallery",
      newTab: false,
    },
    {
      id: 3,
      title: tHeader("amenities"),
      path: "/amenities",
      newTab: false,
    },
    {
      id: 4,
      title: tHeader("attractions"),
      path: "/attractions",
      newTab: false,
    },
    {
      id: 5,
      title: tHeader("contact"),
      path: "/contact",
      newTab: false,
    },
  ];

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className={`header-logo block ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                }`}
              >
                <Image
                  src="/images/logo/logo-black.svg"
                  alt="logo"
                  width={102}
                  height={62}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden items-center space-x-8 lg:flex xl:space-x-12">
              <ul className="flex space-x-4 xl:space-x-12">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`text-base lg:py-6 ${
                          usePathName === menuItem.path
                            ? "text-primary"
                            : "text-dark hover:text-primary"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-6"
                        >
                          {menuItem.title}
                          <span className="pl-3">
                            <svg
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 18L15.5 12L9.5 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </p>
                        <div
                          className={`submenu relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu?.map((submenuItem, index) => (
                            <Link
                              href={submenuItem.path}
                              key={index}
                              onClick={() => {
                                setOpenIndex(-1);
                              }}
                              className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Booking Buttons */}
            <div className="hidden items-center space-x-3 lg:flex xl:space-x-4">
              <a
                href="https://www.booking.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 items-center gap-2 rounded-xs px-4 py-3 text-base font-medium whitespace-nowrap text-white transition duration-300 xl:px-6"
              >
                <Image
                  src="/images/hero/bookingcom-logo.svg"
                  alt="Booking.com logo"
                  width={24}
                  height={24}
                  style={{ display: "inline", verticalAlign: "middle" }}
                />
                <span className="whitespace-nowrap">
                  {tCommon("bookOnBooking")}
                </span>
              </a>
              <a
                href="https://www.airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 items-center gap-2 rounded-xs px-4 py-3 text-base font-medium whitespace-nowrap text-white transition duration-300 xl:px-6"
              >
                <Image
                  src="/images/hero/airbnb-logo.svg"
                  alt="Airbnb logo"
                  width={24}
                  height={24}
                  style={{ display: "inline", verticalAlign: "middle" }}
                />
                <span className="whitespace-nowrap">
                  {tCommon("bookOnAirbnb")}
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen((prevState) => !prevState)}
              id="navbarToggler"
              aria-label="Mobile Menu"
              className="ring-primary block rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                  navbarOpen ? "top-[7px] rotate-45" : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                  navbarOpen ? "opacity-0" : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 ${
                  navbarOpen ? "top-[-8px] -rotate-45" : " "
                }`}
              />
            </button>

            {/* Mobile Navigation */}
            <nav
              id="navbarCollapse"
              className={`navbar border-body-color/50 absolute top-full right-0 left-0 z-30 w-full rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:hidden ${
                navbarOpen ? "visibility opacity-100" : "invisible opacity-0"
              }`}
            >
              <ul className="block">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        onClick={() => setNavbarOpen(false)}
                        className={`flex py-2 text-base ${
                          usePathName === menuItem.path
                            ? "text-primary"
                            : "text-dark hover:text-primary"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    ) : (
                      <>
                        <p
                          onClick={() => handleSubmenu(index)}
                          className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base"
                        >
                          {menuItem.title}
                          <span className="pl-3">
                            <svg
                              width="25"
                              height="24"
                              viewBox="0 0 25 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.5 18L15.5 12L9.5 6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </p>
                        <div
                          className={`submenu relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                            openIndex === index ? "block" : "hidden"
                          }`}
                        >
                          {menuItem.submenu?.map((submenuItem, index) => (
                            <Link
                              href={submenuItem.path}
                              key={index}
                              onClick={() => {
                                setNavbarOpen(false);
                                setOpenIndex(-1);
                              }}
                              className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3"
                            >
                              {submenuItem.title}
                            </Link>
                          ))}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile Booking Buttons */}
              <div className="mt-6 flex flex-col space-y-3">
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 items-center justify-center gap-2 rounded-xs px-4 py-3 text-base font-medium text-white transition duration-300"
                >
                  <Image
                    src="/images/hero/bookingcom-logo.svg"
                    alt="Booking.com logo"
                    width={24}
                    height={24}
                    style={{ display: "inline", verticalAlign: "middle" }}
                  />
                  <span className="whitespace-nowrap">
                    {tCommon("bookOnBooking")}
                  </span>
                </a>
                <a
                  href="https://www.airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 items-center justify-center gap-2 rounded-xs px-4 py-3 text-base font-medium text-white transition duration-300"
                >
                  <Image
                    src="/images/hero/airbnb-logo.svg"
                    alt="Airbnb logo"
                    width={24}
                    height={24}
                    style={{ display: "inline", verticalAlign: "middle" }}
                  />
                  <span className="whitespace-nowrap">
                    {tCommon("bookOnAirbnb")}
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
