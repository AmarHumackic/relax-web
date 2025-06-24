"use client";

import { LINKS } from "@/constants/links";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

type AirbnbBtnProps = {
  isHeader?: boolean;
};

export default function AirbnbBtn({ isHeader = false }: AirbnbBtnProps) {
  const tCommon = useTranslations("common");
  const [airbnbDropdownOpen, setAirbnbDropdownOpen] = useState(false); // Airbnb dropdown toggle

  // Airbnb apartment options
  const airbnbApartments = [
    {
      name: tCommon("tabs.groundLevel"),
      url: LINKS.airbnbGroundLevel,
    },
    {
      name: tCommon("tabs.upperLevel"),
      url: LINKS.airbnbUpperLevel,
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (airbnbDropdownOpen && !event.target.closest(".airbnb-dropdown")) {
        setAirbnbDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [airbnbDropdownOpen]);

  // Airbnb dropdown handler
  const handleAirbnbDropdown = () => {
    setAirbnbDropdownOpen(!airbnbDropdownOpen);
  };

  return (
    <div className="group airbnb-dropdown relative">
      <button
        onClick={handleAirbnbDropdown}
        className={`${!isHeader ? "sm:min-w-54 md:min-w-62 xl:px-6" : "xl:px-3"} ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xs px-4 py-3 text-base font-medium whitespace-nowrap text-white transition duration-300`}
      >
        <Image
          src="/images/hero/airbnb-logo.svg"
          alt="Airbnb logo"
          width={24}
          height={24}
          style={{ display: "inline", verticalAlign: "middle" }}
        />
        <span className="whitespace-nowrap">{tCommon("bookOnAirbnb")}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${
            airbnbDropdownOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Airbnb Dropdown Menu */}
      <div
        className={`ring-opacity-5 absolute top-full right-0 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black transition-all duration-200 ${
          airbnbDropdownOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex w-full flex-col items-start py-2">
          {airbnbApartments.map(({ name, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setAirbnbDropdownOpen(false)}
              className="hover:text-primary block px-4 py-3 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-100"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
