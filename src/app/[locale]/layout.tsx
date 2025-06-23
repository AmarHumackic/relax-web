import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import "../../styles/index.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import LocalBusinessStructuredData from "@/components/LocalBusinessStructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://relaxstolac.com"),
  title: {
    default:
      "Relax Apartments Stolac - Comfortable Stay in Bosnia and Herzegovina",
    template: "%s | Relax Apartments Stolac",
  },
  description:
    "Relax Apartments offers two comfortable and modern apartments with a spacious terrace, private parking, and a rose-filled garden. Ideally located in the city center of Stolac, perfect for exploring Herzegovina.",
  keywords: [
    "apartments stolac",
    "accommodation stolac",
    "stolac bosnia herzegovina",
    "herzegovina apartments",
    "stolac accommodation",
    "relax apartments",
    "stolac tourism",
    "bosnia herzegovina travel",
    "stolac attractions",
    "herzegovina tourism",
  ],
  authors: [{ name: "Relax Apartments Stolac" }],
  creator: "Relax Apartments Stolac",
  publisher: "Relax Apartments Stolac",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      bs: "/bs",
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    alternateLocale: "bs",
    url: "https://relaxstolac.com/en",
    siteName: "Relax Apartments Stolac",
    title:
      "Relax Apartments Stolac - Comfortable Stay in Bosnia and Herzegovina",
    description:
      "Relax Apartments offers two comfortable and modern apartments with a spacious terrace, private parking, and a rose-filled garden. Ideally located in the city center of Stolac, perfect for exploring Herzegovina.",
    images: [
      {
        url: "/images/gallery/all/1.webp",
        width: 1200,
        height: 630,
        alt: "Relax Apartments Stolac - Comfortable accommodation in the heart of Stolac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Relax Apartments Stolac - Comfortable Stay in Bosnia and Herzegovina",
    description:
      "Relax Apartments offers two comfortable and modern apartments with a spacious terrace, private parking, and a rose-filled garden. Ideally located in the city center of Stolac, perfect for exploring Herzegovina.",
    images: ["/images/gallery/all/1.webp"],
    creator: "@relaxstolac",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html suppressHydrationWarning lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Relax Apartments Stolac",
              description:
                "Relax Apartments offers two comfortable and modern apartments with a spacious terrace, private parking, and a rose-filled garden. Ideally located in the city center of Stolac, perfect for exploring Herzegovina.",
              url: "https://relaxstolac.com/en",
              telephone: "+387-XX-XXX-XXX",
              email: "info@relaxstolac.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lazara Lazarevića 27",
                addressLocality: "Stolac",
                addressCountry: "BA",
                postalCode: "88360",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.0844",
                longitude: "17.9589",
              },
              image: [
                "https://relaxstolac.com/images/gallery/all/1.webp",
                "https://relaxstolac.com/images/gallery/all/2.webp",
                "https://relaxstolac.com/images/gallery/all/3.webp",
              ],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "WiFi",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Air Conditioning",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Private Parking",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Garden",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Terrace",
                  value: true,
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "15",
              },
              priceRange: "$$",
              currenciesAccepted: "EUR, BAM",
              paymentAccepted: "Cash, Credit Card, Bank Transfer",
            }),
          }}
        />

        {/* Local Business Structured Data */}
        <LocalBusinessStructuredData />
      </head>

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID} />
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
