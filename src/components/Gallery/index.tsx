"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  // All
  {
    id: 1,
    src: "/images/gallery/all/1.webp",
    apartment: "All",
    room: "Exterior View",
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    src: "/images/gallery/all/2.webp",
    apartment: "All",
    room: "Exterior View",
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    src: "/images/gallery/all/3.webp",
    apartment: "All",
    room: "Exterior View Balcony",
    width: 800,
    height: 1200,
  },
  {
    id: 4,
    src: "/images/gallery/all/4.webp",
    apartment: "All",
    room: "Exterior View",
    width: 1200,
    height: 800,
  },
  {
    id: 5,
    src: "/images/gallery/all/5.webp",
    apartment: "All",
    room: "Exterior View Name Plate",
    width: 800,
    height: 1200,
  },
  {
    id: 6,
    src: "/images/gallery/all/6.webp",
    apartment: "All",
    room: "Exterior View Garden",
    width: 1200,
    height: 800,
  },
  {
    id: 37,
    src: "/images/gallery/all/37.webp",
    apartment: "All",
    room: "Exterior View Outdoor Sink",
    width: 1200,
    height: 800,
  },

  // Ground Level
  {
    id: 7,
    src: "/images/gallery/ground/7.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Garden",
    width: 1200,
    height: 800,
  },
  {
    id: 8,
    src: "/images/gallery/ground/8.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Garden",
    width: 800,
    height: 1200,
  },
  {
    id: 9,
    src: "/images/gallery/ground/9.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Courtyard",
    width: 1200,
    height: 800,
  },
  {
    id: 10,
    src: "/images/gallery/ground/10.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Courtyard",
    width: 800,
    height: 1200,
  },
  {
    id: 11,
    src: "/images/gallery/ground/11.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Courtyard Swing",
    width: 800,
    height: 1200,
  },
  {
    id: 12,
    src: "/images/gallery/ground/12.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Living Room",
    width: 1200,
    height: 800,
  },
  {
    id: 13,
    src: "/images/gallery/ground/13.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Living Room",
    width: 1200,
    height: 800,
  },
  {
    id: 14,
    src: "/images/gallery/ground/14.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Kitchen",
    width: 800,
    height: 1200,
  },
  {
    id: 15,
    src: "/images/gallery/ground/15.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Living Room",
    width: 1200,
    height: 800,
  },
  {
    id: 16,
    src: "/images/gallery/ground/16.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Bedroom Single Beds",
    width: 1200,
    height: 800,
  },
  {
    id: 17,
    src: "/images/gallery/ground/17.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Bedroom Single Beds",
    width: 1200,
    height: 800,
  },
  {
    id: 18,
    src: "/images/gallery/ground/18.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Bedroom Double Bed",
    width: 1200,
    height: 800,
  },
  {
    id: 19,
    src: "/images/gallery/ground/19.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Bedroom Double Bed",
    width: 1200,
    height: 800,
  },
  {
    id: 20,
    src: "/images/gallery/ground/20.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Bathroom",
    width: 800,
    height: 1200,
  },
  {
    id: 21,
    src: "/images/gallery/ground/21.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Bathroom",
    width: 1200,
    height: 800,
  },
  {
    id: 22,
    src: "/images/gallery/ground/22.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Bathroom",
    width: 800,
    height: 1200,
  },
  {
    id: 23,
    src: "/images/gallery/ground/23.webp",
    apartment: "Ground Level Apartment",
    room: "Ground Level Apartment Hallway",
    width: 800,
    height: 1200,
  },

  // Upper Level
  {
    id: 24,
    src: "/images/gallery/upper/24.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Spacious Terrace",
    width: 1200,
    height: 800,
  },
  {
    id: 25,
    src: "/images/gallery/upper/25.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Spacious Terrace Seating Area",
    width: 1200,
    height: 800,
  },
  {
    id: 26,
    src: "/images/gallery/upper/26.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Spacious Terrace Swing",
    width: 800,
    height: 1200,
  },
  {
    id: 27,
    src: "/images/gallery/upper/27.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Living Room",
    width: 1200,
    height: 800,
  },
  {
    id: 28,
    src: "/images/gallery/upper/28.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Kitchen",
    width: 1200,
    height: 800,
  },
  {
    id: 29,
    src: "/images/gallery/upper/29.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Living Room",
    width: 800,
    height: 1200,
  },
  {
    id: 30,
    src: "/images/gallery/upper/30.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Bedroom Double Bed",
    width: 1200,
    height: 800,
  },
  {
    id: 31,
    src: "/images/gallery/upper/31.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Bedroom Double Bed",
    width: 1200,
    height: 800,
  },
  {
    id: 32,
    src: "/images/gallery/upper/32.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Bedroom Single Beds",
    width: 1200,
    height: 800,
  },
  {
    id: 33,
    src: "/images/gallery/upper/33.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Bedroom Single Beds",
    width: 1200,
    height: 800,
  },
  {
    id: 34,
    src: "/images/gallery/upper/34.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Bedroom Single Beds",
    width: 800,
    height: 1200,
  },
  {
    id: 35,
    src: "/images/gallery/upper/35.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Bathroom",
    width: 800,
    height: 1200,
  },
  {
    id: 36,
    src: "/images/gallery/upper/36.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Bathroom",
    width: 1200,
    height: 800,
  },
  {
    id: 38,
    src: "/images/gallery/upper/38.webp",
    apartment: "Upper Level Apartment",
    room: "Upper Level Apartment Exterior Lights",
    width: 800,
    height: 1200,
  },
];

const categories = ["All", "Upper Level Apartment", "Ground Level Apartment"];

const PhotoGallery = () => {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((image) => image.apartment === filter);

  const slides = filteredImages.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));

  return (
    <div>
      <div className="mb-8 flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              filter === category
                ? "bg-primary text-white"
                : "hover:bg-primary/80 bg-gray-200 text-gray-800 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {filteredImages.map((image, i) => (
          <div
            key={image.id}
            className="group relative mb-4 break-inside-avoid"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <Image
              src={image.src}
              alt={image.room}
              width={image.width}
              height={image.height}
              className="w-full rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="px-4 text-center text-lg font-bold text-white">
                {image.room}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </div>
  );
};

export default PhotoGallery;
