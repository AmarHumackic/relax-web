import { LINKS } from "@/constants/links";
import { useTranslations } from "next-intl";
import Image from "next/image";

type BookingBtnProps = {
  isHeader?: boolean;
};

export default function BookingBtn({ isHeader = false }: BookingBtnProps) {
  const tCommon = useTranslations("common");

  return (
    <a
      href={LINKS.booking}
      target="_blank"
      rel="noopener noreferrer"
      className={`${!isHeader ? "sm:min-w-54 md:min-w-62 xl:px-6" : "xl:px-3"} ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 flex h-12 items-center justify-center gap-2 rounded-xs px-4 py-3 text-base font-medium whitespace-nowrap text-white transition duration-300`}
    >
      <Image
        src="/images/hero/bookingcom-logo.svg"
        alt="Booking.com logo"
        width={24}
        height={24}
        style={{ display: "inline", verticalAlign: "middle" }}
      />
      <span className="whitespace-nowrap">{tCommon("bookOnBooking")}</span>
    </a>
  );
}
