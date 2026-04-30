import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import "../../styles/index.css";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { SEO_BUSINESS } from "@/constants/SEO_BUSINESS";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://relaxstolac.com"),
  title: {
    default:
      "Relax Apartments Stolac - Comfortable Stay in Bosnia and Herzegovina",
    template: "%s | Relax Apartments Stolac",
  },
  description: SEO_BUSINESS.description,
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  authors: [{ name: SEO_BUSINESS.name }],
  creator: SEO_BUSINESS.name,
  publisher: SEO_BUSINESS.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      bs: "/bs",
    },
  },
  openGraph: {
    type: "website",
    locale: "en",
    alternateLocale: "bs",
    url: SEO_BUSINESS.url,
    siteName: SEO_BUSINESS.name,
    title: SEO_BUSINESS.name + " - Comfortable Stay in Bosnia and Herzegovina",
    description: SEO_BUSINESS.description,
    images: [
      {
        url: SEO_BUSINESS.image[0],
        width: 1200,
        height: 630,
        alt:
          SEO_BUSINESS.name +
          " - Comfortable accommodation in the heart of Stolac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_BUSINESS.name + " - Comfortable Stay in Bosnia and Herzegovina",
    description: SEO_BUSINESS.description,
    images: [SEO_BUSINESS.image[0]],
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

        {/* LodgingBusiness Structured Data - everything in one place */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              ...SEO_BUSINESS,
            }),
          }}
        />
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
