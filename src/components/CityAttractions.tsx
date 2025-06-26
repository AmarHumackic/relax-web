import { useTranslations } from "next-intl";
import Image from "next/image";

export default function CityAttractions() {
  const tCityAttractions = useTranslations("cityAttractions");

  const cityAttractions = [
    {
      title: tCityAttractions("attractions.oldTown.title"),
      description: tCityAttractions("attractions.oldTown.description"),
      image: "/images/cityAttractions/oldTown.webp",
    },
    {
      title: tCityAttractions("attractions.radimljaNecropolis.title"),
      description: tCityAttractions(
        "attractions.radimljaNecropolis.description",
      ),
      image: "/images/cityAttractions/radimljaNecropolis.webp",
    },
    {
      title: tCityAttractions("attractions.daorson.title"),
      description: tCityAttractions("attractions.daorson.description"),
      image: "/images/cityAttractions/daorson.webp",
    },
    {
      title: tCityAttractions("attractions.badanjCave.title"),
      description: tCityAttractions("attractions.badanjCave.description"),
      image: "/images/cityAttractions/badanjCave.webp",
    },
    {
      title: tCityAttractions("attractions.bregava.title"),
      description: tCityAttractions("attractions.bregava.description"),
      image: "/images/cityAttractions/bregava.webp",
    },
    {
      title: tCityAttractions("attractions.provalijeWaterfall.title"),
      description: tCityAttractions(
        "attractions.provalijeWaterfall.description",
      ),
      image: "/images/cityAttractions/provalijeWaterfall.webp",
    },
    {
      title: tCityAttractions("attractions.pjeneWaterfall.title"),
      description: tCityAttractions("attractions.pjeneWaterfall.description"),
      image: "/images/cityAttractions/pjeneWaterfall.webp",
    },
    {
      title: tCityAttractions("attractions.riverMills.title"),
      description: tCityAttractions("attractions.riverMills.description"),
      image: "/images/cityAttractions/riverMills.webp",
    },
    {
      title: tCityAttractions("attractions.cuprijaBridge.title"),
      description: tCityAttractions("attractions.cuprijaBridge.description"),
      image: "/images/cityAttractions/cuprijaBridge.webp",
    },
    {
      title: tCityAttractions("attractions.saraBridge.title"),
      description: tCityAttractions("attractions.saraBridge.description"),
      image: "/images/cityAttractions/saraBridge.webp",
    },
    {
      title: tCityAttractions("attractions.mosque.title"),
      description: tCityAttractions("attractions.mosque.description"),
      image: "/images/cityAttractions/mosque.webp",
    },
    {
      title: tCityAttractions("attractions.catholicChurch.title"),
      description: tCityAttractions("attractions.catholicChurch.description"),
      image: "/images/cityAttractions/catholicChurch.webp",
    },
    {
      title: tCityAttractions("attractions.orthodoxChurch.title"),
      description: tCityAttractions("attractions.orthodoxChurch.description"),
      image: "/images/cityAttractions/orthodoxChurch.webp",
    },
    {
      title: tCityAttractions("attractions.tekke.title"),
      description: tCityAttractions("attractions.tekke.description"),
      image: "/images/cityAttractions/tekke.webp",
    },
    {
      title: tCityAttractions("attractions.makHouse.title"),
      description: tCityAttractions("attractions.makHouse.description"),
      image: "/images/cityAttractions/makHouse.webp",
    },
    {
      title: tCityAttractions("attractions.waterFountains.title"),
      description: tCityAttractions("attractions.waterFountains.description"),
      image: "/images/cityAttractions/waterFountains.webp",
    },
  ];

  return (
    <section>
      <h1 className="text-primary mb-8 text-center text-3xl font-extrabold sm:text-4xl md:text-5xl">
        {tCityAttractions("title")}
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
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
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {attraction.title}
              </h3>
              <p className="text-gray-600">{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
