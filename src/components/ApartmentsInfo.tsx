import { useTranslations } from "next-intl";
import AmenityIcon from "./AmenityIcon";

export default function ApartmentsInfo() {
  const tGroundLevel = useTranslations("home.apartments.groundLevel");
  const tUpperLevel = useTranslations("home.apartments.upperLevel");

  return (
    <section className="bg-gray-50 py-6 md:py-12">
      <div className="container mx-auto grid gap-8 md:grid-cols-2">
        {/* Ground Level Apartment */}
        <div className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-md">
          <h2 className="text-primary mb-2 text-2xl font-bold">
            {tGroundLevel("title")}
          </h2>
          <p className="mb-4 text-gray-700">{tGroundLevel("description")}</p>
          <ul className="mb-2 text-sm text-gray-600">
            {Object.values(tGroundLevel.raw("rooms")).map((r: string) => (
              <li key={r}>• {r}</li>
            ))}
          </ul>
          {/* Amenities icons */}
          <div className="mt-4 flex flex-wrap">
            {Object.entries(tGroundLevel.raw("amenitiesIcons")).map(
              ([key, value]: [string, string]) => (
                <div
                  key={key}
                  className="flex min-w-[70px] flex-col items-center text-center"
                >
                  <AmenityIcon icon={key} />
                  <span className="mt-1 text-xs text-gray-600">{value}</span>
                </div>
              ),
            )}
          </div>
        </div>
        {/* Upper Level Apartment */}
        <div className="flex flex-col justify-between rounded-xl bg-white p-8 shadow-md">
          <h2 className="text-primary mb-2 text-2xl font-bold">
            {tUpperLevel("title")}
          </h2>
          <p className="mb-4 text-gray-700">{tUpperLevel("description")}</p>
          <ul className="mb-2 text-sm text-gray-600">
            {Object.values(tUpperLevel.raw("rooms")).map((r: string) => (
              <li key={r}>• {r}</li>
            ))}
          </ul>
          {/* Amenities icons */}
          <div className="mt-4 flex flex-wrap">
            {Object.entries(tUpperLevel.raw("amenitiesIcons")).map(
              ([key, value]: [string, string]) => (
                <div
                  key={key}
                  className="flex min-w-[70px] flex-col items-center text-center"
                >
                  <AmenityIcon icon={key} />
                  <span className="mt-1 text-xs text-gray-600">{value}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
