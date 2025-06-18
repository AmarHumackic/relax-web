import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const tHero = useTranslations("home.hero");

  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-white pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/all/1.webp"
          alt="Hero background image"
          fill
          className="h-full w-full object-cover opacity-70 blur-xs"
          priority
        />
        {/* White overlay for readability */}
        <div className="absolute inset-0 bg-white/40" />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-primary mb-4 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          {tHero("title")}
        </h1>
        <div className="mb-8 max-w-2xl">
          <h4 className="text-primary/90 mb-3 text-lg leading-snug font-semibold md:mb-4 md:text-2xl">
            {tHero("subtitle")}
          </h4>
          <h6 className="text-base leading-relaxed font-normal text-gray-600 md:text-lg md:leading-8">
            {tHero("description")}
          </h6>
        </div>
        {/* Instant reservation label above booking buttons */}
        <div className="mx-auto mb-2 w-full max-w-lg text-center">
          <span className="text-primary text-sm font-semibold tracking-wide uppercase">
            {tHero("instantReservation")}
          </span>
        </div>
        {/* CTA Book Now */}
        <div className="mx-auto flex w-full max-w-lg flex-col gap-4 sm:max-w-md sm:flex-row md:min-w-lg">
          <a
            href="https://booking.com/your-listing-link"
            target="_blank"
            rel="noopener noreferrer"
            className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 min-h-12 w-full flex-1 items-center justify-center gap-2 rounded-xs px-4 text-base font-medium whitespace-nowrap text-white transition duration-300 sm:w-auto"
          >
            <Image
              src="/images/hero/bookingcom-logo.svg"
              alt="Booking.com logo"
              width={28}
              height={28}
              style={{ display: "inline", verticalAlign: "middle" }}
            />
            <span className="whitespace-nowrap">{tHero("bookOnBooking")}</span>
          </a>
          <a
            href="https://airbnb.com/your-listing-link"
            target="_blank"
            rel="noopener noreferrer"
            className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 min-h-12 w-full flex-1 items-center justify-center gap-2 rounded-xs px-4 text-base font-medium whitespace-nowrap text-white transition duration-300 sm:w-auto"
          >
            <Image
              src="/images/hero/airbnb-logo.svg"
              alt="Airbnb logo"
              width={28}
              height={28}
              style={{ display: "inline", verticalAlign: "middle" }}
            />
            <span className="whitespace-nowrap">{tHero("bookOnAirbnb")}</span>
          </a>
        </div>
        {/* Separator with 'or' */}
        <div className="mx-auto flex w-full max-w-lg items-center gap-3 py-2">
          <div className="flex-1 border-t border-gray-300" />
          <span className="text-sm font-medium text-gray-400 select-none">
            {tHero("or")}
          </span>
          <div className="flex-1 border-t border-gray-300" />
        </div>
        {/* Contact Us Directly button below booking buttons */}
        <div className="mx-auto mt-0 flex w-full max-w-lg justify-center">
          <a
            href="/contact"
            className="ease-in-up shadow-btn hover:shadow-btn-hover hover:bg-primary/10 border-primary text-primary flex h-12 w-full items-center justify-center gap-2 rounded-xs border bg-white px-10 py-3.5 text-base font-medium transition duration-300 sm:w-auto"
            style={{ minWidth: "0" }}
          >
            <span className="whitespace-nowrap">
              {tHero("contactUsDirectly")}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
