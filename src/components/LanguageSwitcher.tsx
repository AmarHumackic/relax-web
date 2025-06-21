"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;

  const handleLanguageChange = () => {
    const newLocale = currentLocale === "bs" ? "en" : "bs";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="flex h-6 w-8 items-center justify-center rounded-sm transition-all duration-200 hover:scale-110"
      aria-label={`Switch to ${currentLocale === "bs" ? "English" : "Bosnian"}`}
    >
      {currentLocale === "bs" ? (
        // UK Flag
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <rect
            x="1"
            y="4"
            width="30"
            height="24"
            rx="4"
            ry="4"
            fill="#071b65"
          ></rect>
          <path
            d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
            fill="#fff"
          ></path>
          <path
            d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
            fill="#b92932"
          ></path>
          <path
            d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
            fill="#b92932"
          ></path>
          <path
            d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
            fill="#fff"
          ></path>
          <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
          <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
          <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
          <rect
            x="14"
            y="1"
            width="4"
            height="30"
            transform="translate(32) rotate(90)"
            fill="#b92932"
          ></rect>
          <path
            d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
            fill="#b92932"
          ></path>
          <path
            d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
            fill="#b92932"
          ></path>
          <path
            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
            opacity=".15"
          ></path>
          <path
            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
            fill="#fff"
            opacity=".2"
          ></path>
        </svg>
      ) : (
        // BiH Flag
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <rect
            x="1"
            y="4"
            width="30"
            height="24"
            rx="4"
            ry="4"
            fill="#091c91"
          ></rect>
          <rect
            x="1"
            y="4"
            width="30"
            height="24"
            rx="4"
            ry="4"
            fill="#091c91"
          ></rect>
          <path fill="#f6ce46" d="M24 28L8 4 24 4 24 28z"></path>
          <path
            d="M5,4c-.542,0-1.058,.11-1.529,.306l.442,.321-.527,1.623,1.381-1.003,1.381,1.003-.527-1.623,.862-.627h-1.482Z"
            fill="#fff"
          ></path>
          <path
            fill="#fff"
            d="M8.713 9.377L10.094 8.373 8.387 8.373 7.859 6.75 7.332 8.373 5.625 8.373 7.006 9.377 6.478 11 7.859 9.997 9.24 11 8.713 9.377z"
          ></path>
          <path
            fill="#fff"
            d="M11.807 14.127L13.187 13.123 11.481 13.123 10.953 11.5 10.426 13.123 8.719 13.123 10.1 14.127 9.572 15.75 10.953 14.747 12.334 15.75 11.807 14.127z"
          ></path>
          <path
            fill="#fff"
            d="M14.9 18.877L16.281 17.873 14.574 17.873 14.047 16.25 13.519 17.873 11.813 17.873 13.193 18.877 12.666 20.5 14.047 19.497 15.428 20.5 14.9 18.877z"
          ></path>
          <path
            fill="#fff"
            d="M17.994 23.627L19.375 22.623 17.668 22.623 17.141 21 16.613 22.623 14.906 22.623 16.287 23.627 15.76 25.25 17.141 24.247 18.522 25.25 17.994 23.627z"
          ></path>
          <path
            fill="#fff"
            d="M21.606 28L22.469 27.373 20.762 27.373 20.234 25.75 19.707 27.373 18 27.373 18.862 28 21.606 28z"
          ></path>
          <path
            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
            opacity=".15"
          ></path>
          <path
            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
            fill="#fff"
            opacity=".2"
          ></path>
        </svg>
      )}
    </button>
  );
}
