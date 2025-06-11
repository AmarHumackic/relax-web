"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// U public/images/gallery/ kreirajte foldere 'upper' i 'ground' i tu stavite slike.
const images = [
  // Upper Level
  {
    id: 1,
    src: "/images/gallery/upper/1.jpg",
    apartment: "Upper Level",
    room: "Living Room",
    width: 800,
    height: 600,
  },
  {
    id: 2,
    src: "/images/gallery/upper/2.jpg",
    apartment: "Upper Level",
    room: "Kitchen",
    width: 600,
    height: 800,
  },
  {
    id: 3,
    src: "/images/gallery/upper/3.jpg",
    apartment: "Upper Level",
    room: "Bedroom",
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: "/images/gallery/upper/4.jpg",
    apartment: "Upper Level",
    room: "Bathroom",
    width: 600,
    height: 800,
  },
  {
    id: 5,
    src: "/images/gallery/upper/5.jpg",
    apartment: "Upper Level",
    room: "Details",
    width: 1200,
    height: 800,
  },

  // Ground Level
  {
    id: 6,
    src: "/images/gallery/ground/1.jpg",
    apartment: "Ground Level",
    room: "Living Room",
    width: 800,
    height: 600,
  },
  {
    id: 7,
    src: "/images/gallery/ground/2.jpg",
    apartment: "Ground Level",
    room: "Kitchen",
    width: 800,
    height: 600,
  },
  {
    id: 8,
    src: "/images/gallery/ground/3.jpg",
    apartment: "Ground Level",
    room: "Bedroom",
    width: 1200,
    height: 800,
  },
  {
    id: 9,
    src: "/images/gallery/ground/4.jpg",
    apartment: "Ground Level",
    room: "Bathroom",
    width: 800,
    height: 1200,
  },
  {
    id: 10,
    src: "/images/gallery/ground/5.jpg",
    apartment: "Ground Level",
    room: "Details",
    width: 800,
    height: 600,
  },
];

const categories = ["All", "Upper Level", "Ground Level"];

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
              alt={`${image.apartment} - ${image.room}`}
              width={image.width}
              height={image.height}
              className="w-full rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-lg font-bold text-white">{image.room}</p>
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
