import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const BALKAN_LANGS = ["bs", "hr", "sr"];

function detectLocale(acceptLanguageHeader: string | null): "bs" | "en" {
  if (!acceptLanguageHeader) return "en";

  const priorityLanguage = acceptLanguageHeader
    ?.split(",")[0] // for example "en" or "fr-FR"
    ?.split("-")[0] // if there is no "-", return the whole string (for example "en")
    ?.toLowerCase();

  if (BALKAN_LANGS.includes(priorityLanguage)) return "bs";

  return "en"; // fallback
}

export default function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  const detectedLocale = detectLocale(acceptLanguage);

  const intlMiddleware = createMiddleware({
    ...routing,
    defaultLocale: detectedLocale,
  });

  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
