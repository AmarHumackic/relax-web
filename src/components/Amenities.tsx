"use client";

import { JSX, useState } from "react";
import AmenityIcon from "./AmenityIcon";
import { useTranslations } from "next-intl";
import { CategoryTabKey } from "@/types/categories";
import ApartmentsInfoClient from "./ApartmentsInfoClient";

export default function Amenities() {
  const tAmenities = useTranslations("amenities");
  const tCommon = useTranslations("common");
  const [activeTab, setActiveTab] = useState<CategoryTabKey>("all");

  const categories: { key: CategoryTabKey; name: string }[] = [
    { key: "all", name: tCommon("tabs.all") },
    { key: "groundLevel", name: tCommon("tabs.groundLevel") },
    { key: "upperLevel", name: tCommon("tabs.upperLevel") },
  ];

  const apartmentAmenities: {
    icon: JSX.Element;
    amenity: string;
    apartment: CategoryTabKey;
  }[] = [
    {
      icon: <AmenityIcon icon="parking" />,
      amenity: tCommon("amenitiesIcons.parking"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="courtyard" />,
      amenity: tCommon("amenitiesIcons.courtyard"),
      apartment: "groundLevel",
    },
    {
      icon: <AmenityIcon icon="terrace" />,
      amenity: tCommon("amenitiesIcons.terrace"),
      apartment: "upperLevel",
    },
    {
      icon: <AmenityIcon icon="garden" />,
      amenity: tCommon("amenitiesIcons.garden"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="washingMachine" />,
      amenity: tCommon("amenitiesIcons.washingMachine"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="mosquitoNets" />,
      amenity: tCommon("amenitiesIcons.mosquitoNets"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="wifi" />,
      amenity: tCommon("amenitiesIcons.wifi"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="airConditioning" />,
      amenity: tCommon("amenitiesIcons.airConditioning"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="tv" />,
      amenity: tCommon("amenitiesIcons.tv"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="kitchen" />,
      amenity: tCommon("amenitiesIcons.kitchen"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="balcony" />,
      amenity: tCommon("amenitiesIcons.balcony"),
      apartment: "upperLevel",
    },
    {
      icon: <AmenityIcon icon="privateBathroom" />,
      amenity: tCommon("amenitiesIcons.privateBathroom"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="view" />,
      amenity: tCommon("amenitiesIcons.view"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="safeBox" />,
      amenity: tCommon("amenitiesIcons.safeBox"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="smokeAlarm" />,
      amenity: tCommon("amenitiesIcons.smokeAlarm"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="selfCheckIn" />,
      amenity: tCommon("amenitiesIcons.selfCheckIn"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="lockBox" />,
      amenity: tCommon("amenitiesIcons.lockBox"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="outdoorHangingSwing" />,
      amenity: tCommon("amenitiesIcons.outdoorHangingSwing"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="outdoorDiningArea" />,
      amenity: tCommon("amenitiesIcons.outdoorDiningArea"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="shuttleService" />,
      amenity: tCommon("amenitiesIcons.shuttleService"),
      apartment: "all",
    },
  ];

  const filteredAmenities =
    activeTab === "all"
      ? apartmentAmenities
      : apartmentAmenities.filter(
          ({ apartment }) =>
            !categories
              .filter((c) => !["all", activeTab].includes(c.key))
              .map((c) => c.key)
              .includes(apartment),
        );

  return (
    <section>
      <h1 className="text-primary mb-8 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
        {tAmenities("title")}
      </h1>

      {/* Apartment Amenities */}
      <div className="mb-8">
        {/* Tabs */}
        <div className="mb-8 flex justify-center space-x-4">
          {categories.map(({ key, name }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === key
                  ? "bg-primary text-white"
                  : "hover:bg-primary/80 bg-gray-200 text-gray-800 hover:text-white"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredAmenities.map(({ icon, amenity }, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm"
            >
              <div className="text-primary mb-2">{icon}</div>
              <span className="text-center text-sm font-medium text-gray-700">
                {amenity}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <ApartmentsInfoClient activeTab={activeTab} />
    </section>
  );
}
