"use client";

import Image from "next/image";
import {
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaSnowflake,
  FaTv,
  FaUtensils,
  FaShower,
  FaBed,
  FaUmbrellaBeach,
  FaMountain,
  FaChurch,
  FaHistory,
  FaTree,
  FaWater,
  FaHiking,
  FaCamera,
} from "react-icons/fa";
import { useState } from "react";

const AmenitiesPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const apartmentAmenities = {
    upper: [
      { icon: <FaWifi className="h-6 w-6" />, name: "Free WiFi" },
      { icon: <FaParking className="h-6 w-6" />, name: "Free Parking" },
      { icon: <FaSwimmingPool className="h-6 w-6" />, name: "Swimming Pool" },
      { icon: <FaSnowflake className="h-6 w-6" />, name: "Air Conditioning" },
      { icon: <FaTv className="h-6 w-6" />, name: "Smart TV" },
      {
        icon: <FaUtensils className="h-6 w-6" />,
        name: "Fully Equipped Kitchen",
      },
      { icon: <FaShower className="h-6 w-6" />, name: "Modern Bathroom" },
      { icon: <FaBed className="h-6 w-6" />, name: "Comfortable Beds" },
      {
        icon: <FaUmbrellaBeach className="h-6 w-6" />,
        name: "Private Balcony",
      },
      { icon: <FaMountain className="h-6 w-6" />, name: "Mountain View" },
    ],
    ground: [
      { icon: <FaWifi className="h-6 w-6" />, name: "Free WiFi" },
      { icon: <FaParking className="h-6 w-6" />, name: "Free Parking" },
      { icon: <FaSwimmingPool className="h-6 w-6" />, name: "Swimming Pool" },
      { icon: <FaSnowflake className="h-6 w-6" />, name: "Air Conditioning" },
      { icon: <FaTv className="h-6 w-6" />, name: "Smart TV" },
      {
        icon: <FaUtensils className="h-6 w-6" />,
        name: "Fully Equipped Kitchen",
      },
      { icon: <FaShower className="h-6 w-6" />, name: "Modern Bathroom" },
      { icon: <FaBed className="h-6 w-6" />, name: "Comfortable Beds" },
      {
        icon: <FaUmbrellaBeach className="h-6 w-6" />,
        name: "Large Terrace",
      },
      { icon: <FaMountain className="h-6 w-6" />, name: "Panoramic View" },
    ],
  };

  const cityAttractions = [
    {
      title: "Stolac Fortress",
      description:
        "Historic fortress offering panoramic views of the city and surrounding mountains. Built in the 15th century, it's one of the most significant cultural monuments in the region.",
      image: "/images/stolac-fortress.jpg",
      icon: <FaHistory className="h-6 w-6" />,
    },
    {
      title: "Old Town",
      description:
        "The heart of Stolac, featuring traditional architecture, charming streets, and local shops. A perfect place to experience the authentic atmosphere of the city.",
      image: "/images/stolac-old-town.jpg",
      icon: <FaChurch className="h-6 w-6" />,
    },
    {
      title: "Bregava River",
      description:
        "Crystal clear river flowing through the city, offering beautiful natural scenery and opportunities for relaxation and recreation.",
      image: "/images/bregava-river.jpg",
      icon: <FaWater className="h-6 w-6" />,
    },
    {
      title: "Radimlja Necropolis",
      description:
        "UNESCO World Heritage site featuring medieval tombstones (stećci) with unique carvings and inscriptions, dating back to the 15th and 16th centuries.",
      image: "/images/radimlja.jpg",
      icon: <FaHistory className="h-6 w-6" />,
    },
    {
      title: "Vidoški Mountain",
      description:
        "Majestic mountain offering hiking trails, stunning viewpoints, and rich biodiversity. Perfect for nature lovers and outdoor enthusiasts.",
      image: "/images/vidoski.jpg",
      icon: <FaHiking className="h-6 w-6" />,
    },
    {
      title: "Bregava Canyon",
      description:
        "Natural wonder with crystal clear waters, waterfalls, and unique rock formations. A perfect spot for photography and nature exploration.",
      image: "/images/bregava-canyon.jpg",
      icon: <FaCamera className="h-6 w-6" />,
    },
    {
      title: "City Park",
      description:
        "Peaceful green space in the heart of the city, perfect for relaxation and enjoying the local atmosphere.",
      image: "/images/city-park.jpg",
      icon: <FaTree className="h-6 w-6" />,
    },
    {
      title: "Local Markets",
      description:
        "Experience the vibrant local culture through traditional markets offering fresh produce, local crafts, and authentic Bosnian products.",
      image: "/images/local-markets.jpg",
      icon: <FaUtensils className="h-6 w-6" />,
    },
  ];

  const getAmenities = () => {
    if (activeTab === "all") {
      return [...apartmentAmenities.upper, ...apartmentAmenities.ground];
    }
    return apartmentAmenities[activeTab as keyof typeof apartmentAmenities];
  };

  return (
    <section className="relative z-10 overflow-hidden bg-[#FCFCFC] pt-[160px] pb-16 md:pb-20 lg:pb-28">
      <div className="container px-4">
        <h1 className="text-primary mb-8 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Apartment Amenities
        </h1>

        {/* Apartment Amenities */}
        <div className="mb-16">
          {/* Tabs */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`rounded-md px-4 py-2 text-sm font-medium ${
                  activeTab === "all"
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("upper")}
                className={`rounded-md px-4 py-2 text-sm font-medium ${
                  activeTab === "upper"
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Upper Level
              </button>
              <button
                onClick={() => setActiveTab("ground")}
                className={`rounded-md px-4 py-2 text-sm font-medium ${
                  activeTab === "ground"
                    ? "bg-primary text-white"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Ground Level
              </button>
            </div>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {getAmenities().map((amenity, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-white p-4 shadow-sm"
              >
                <div className="text-primary mb-2">{amenity.icon}</div>
                <span className="text-center text-sm font-medium text-gray-700">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* City Attractions */}
        <div>
          <h1 className="text-primary mb-8 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Stolac Attractions
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cityAttractions.map((attraction, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="text-primary">{attraction.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {attraction.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesPage;
