import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "bs"], // Define in this line the possible languages for translation
  defaultLocale: "en", // Define in this line the default language to be shown
});
