"use client";

import { useState } from "react";
import AmenityIcon from "./AmenityIcon";
import { useTranslations } from "next-intl";

export default function Amenities() {
  const tAmenities = useTranslations("amenities");
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { key: "all", name: tAmenities("tabs.all") },
    { key: "groundLevel", name: tAmenities("tabs.groundLevel") },
    { key: "upperLevel", name: tAmenities("tabs.upperLevel") },
  ];

  const apartmentAmenities = [
    {
      icon: <AmenityIcon icon="parking" />,
      amenity: tAmenities("amenitiesIcons.parking"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="courtyard" />,
      amenity: tAmenities("amenitiesIcons.courtyard"),
      apartment: "groundLevel",
    },
    {
      icon: <AmenityIcon icon="terrace" />,
      amenity: tAmenities("amenitiesIcons.terrace"),
      apartment: "upperLevel",
    },
    {
      icon: <AmenityIcon icon="garden" />,
      amenity: tAmenities("amenitiesIcons.garden"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="washingMachine" />,
      amenity: tAmenities("amenitiesIcons.washingMachine"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="mosquitoNets" />,
      amenity: tAmenities("amenitiesIcons.mosquitoNets"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="wifi" />,
      amenity: tAmenities("amenitiesIcons.wifi"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="airConditioning" />,
      amenity: tAmenities("amenitiesIcons.airConditioning"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="tv" />,
      amenity: tAmenities("amenitiesIcons.tv"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="kitchen" />,
      amenity: tAmenities("amenitiesIcons.kitchen"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="balcony" />,
      amenity: tAmenities("amenitiesIcons.balcony"),
      apartment: "upperLevel",
    },
    {
      icon: <AmenityIcon icon="privateBathroom" />,
      amenity: tAmenities("amenitiesIcons.privateBathroom"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="view" />,
      amenity: tAmenities("amenitiesIcons.view"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="safeBox" />,
      amenity: tAmenities("amenitiesIcons.safeBox"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="smokeAlarm" />,
      amenity: tAmenities("amenitiesIcons.smokeAlarm"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="selfCheckIn" />,
      amenity: tAmenities("amenitiesIcons.selfCheckIn"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="lockBox" />,
      amenity: tAmenities("amenitiesIcons.lockBox"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="outdoorHangingSwing" />,
      amenity: tAmenities("amenitiesIcons.outdoorHangingSwing"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="outdoorDiningArea" />,
      amenity: tAmenities("amenitiesIcons.outdoorDiningArea"),
      apartment: "all",
    },
    {
      icon: <AmenityIcon icon="shuttleService" />,
      amenity: tAmenities("amenitiesIcons.shuttleService"),
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
        Apartment Amenities
      </h1>

      {/* Apartment Amenities */}
      <div className="mb-16">
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
    </section>
  );
}
