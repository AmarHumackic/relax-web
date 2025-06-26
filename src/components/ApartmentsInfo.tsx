import { useTranslations } from "next-intl";
import AmenityIcon from "./AmenityIcon";

export default function ApartmentsInfo() {
  const tGroundLevel = useTranslations("home.apartments.groundLevel");
  const tUpperLevel = useTranslations("home.apartments.upperLevel");
  const tCommon = useTranslations("common");

  const groundLevelAmenities = {
    parking: tCommon("amenitiesIcons.parking"),
    courtyard: tCommon("amenitiesIcons.courtyard"),
    garden: tCommon("amenitiesIcons.garden"),
    washingMachine: tCommon("amenitiesIcons.washingMachine"),
    wifi: tCommon("amenitiesIcons.wifi"),
    airConditioning: tCommon("amenitiesIcons.airConditioning"),
    tv: tCommon("amenitiesIcons.tv"),
  };

  const upperLevelAmenities = {
    parking: tCommon("amenitiesIcons.parking"),
    terrace: tCommon("amenitiesIcons.terrace"),
    garden: tCommon("amenitiesIcons.garden"),
    washingMachine: tCommon("amenitiesIcons.washingMachine"),
    wifi: tCommon("amenitiesIcons.wifi"),
    airConditioning: tCommon("amenitiesIcons.airConditioning"),
    tv: tCommon("amenitiesIcons.tv"),
  };

  return (
    <section className="bg-gray-50 py-6 md:pt-10 md:pb-12">
      <div className="container mx-auto grid grid-cols-1 gap-4 px-4 md:grid-cols-2 md:gap-8 md:px-3">
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
          <div className="mt-4 flex flex-wrap gap-4 lg:flex-nowrap">
            {Object.entries(groundLevelAmenities).map(
              ([key, value]: [string, string]) => (
                <div
                  key={key}
                  className="flex max-w-[80px] min-w-[50px] flex-col items-center text-center lg:max-w-[100px]"
                >
                  <AmenityIcon icon={key} />
                  <span className="mt-1 block text-xs break-words text-gray-600">
                    {value}
                  </span>
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
          <div className="mt-4 flex flex-wrap gap-4 lg:flex-nowrap">
            {Object.entries(upperLevelAmenities).map(
              ([key, value]: [string, string]) => (
                <div
                  key={key}
                  className="flex max-w-[80px] min-w-[50px] flex-col items-center text-center lg:max-w-[100px]"
                >
                  <AmenityIcon icon={key} />
                  <span className="mt-1 block text-xs break-words text-gray-600">
                    {value}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
