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

export default function CityAttractions() {
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

  return (
    <section>
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
    </section>
  );
}
