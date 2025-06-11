"use client";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ana, Croatia",
    text: "Beautiful apartment, clean and spacious. Great location! We will definitely come back.",
  },
  {
    name: "Marko, Serbia",
    text: "Very kind hosts, highly recommended! Parking in front and excellent WiFi.",
  },
  {
    name: "Ivana, Montenegro",
    text: "Peaceful area, yet close to the center. The terrace with garden view is top!",
  },
  {
    name: "Jasmin, BiH",
    text: "The apartment has everything you need for a longer stay. We especially liked the kitchen.",
  },
  {
    name: "Petra, Slovenia",
    text: "Very clean, modern and comfortable. AC and washing machine are a big plus!",
  },
  {
    name: "Milan, Serbia",
    text: "Good value for money. Highly recommended for families.",
  },
  {
    name: "Lejla, Austria",
    text: "Hosts welcomed us with a smile. Parking and WiFi were great.",
  },
  {
    name: "Dario, Croatia",
    text: "The apartment is spacious, the terrace is perfect for morning coffee.",
  },
  {
    name: "Sara, Germany",
    text: "Quiet location, yet close to the center. All praise!",
  },
  {
    name: "Nikola, Serbia",
    text: "Everything was as in the pictures. We will come again!",
  },
];

export default function TestimonialsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const posRef = useRef(0); // <-- persistent position

  // Infinite animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationFrame: number;
    const cardWidth = 340; // min-w-[320px] + gap
    const totalWidth = cardWidth * testimonials.length;
    function animate() {
      if (!isPaused) {
        posRef.current -= 0.5;
        if (Math.abs(posRef.current) >= totalWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // Manual scroll with snap and pause
  const handleArrow = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 340;
    let pos = posRef.current;
    if (dir === "left") {
      pos += cardWidth;
      if (pos > 0) pos = -cardWidth * testimonials.length;
    } else {
      pos -= cardWidth;
      if (Math.abs(pos) >= cardWidth * testimonials.length) pos = 0;
    }
    posRef.current = pos;
    track.style.transform = `translateX(${pos}px)`;
    // Pause auto-scroll for 1s
    setIsPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setIsPaused(false), 1000);
  };

  // Duplicate testimonials for infinite effect
  const items = [...testimonials, ...testimonials];

  return (
    <div
      ref={containerRef}
      className="group relative w-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={-1}
      style={{ WebkitOverflowScrolling: "auto" }}
    >
      {/* Left arrow */}
      <button
        onClick={() => handleArrow("left")}
        className="bg-primary hover:bg-primary/80 absolute top-1/2 left-0 z-10 hidden -translate-y-1/2 rounded-full p-2 text-white shadow-md transition md:block"
        aria-label="Scroll left"
        tabIndex={0}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div
        ref={trackRef}
        className="flex gap-6 px-1 py-2"
        style={{ willChange: "transform", userSelect: "none" }}
      >
        {items.map((t, i) => (
          <div
            key={i}
            className="flex max-w-xs min-w-[320px] flex-shrink-0 flex-col justify-between rounded-xl bg-gray-50 p-6 shadow"
            style={{ scrollSnapAlign: "start" }}
          >
            <p className="mb-4 text-gray-700">“{t.text}”</p>
            <span className="text-primary text-sm font-semibold">{t.name}</span>
          </div>
        ))}
      </div>
      {/* Right arrow */}
      <button
        onClick={() => handleArrow("right")}
        className="bg-primary hover:bg-primary/80 absolute top-1/2 right-0 z-10 hidden -translate-y-1/2 rounded-full p-2 text-white shadow-md transition md:block"
        aria-label="Scroll right"
        tabIndex={0}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Hide scrollbar completely */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
