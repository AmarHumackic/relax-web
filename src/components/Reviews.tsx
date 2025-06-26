"use client";
import { useTranslations } from "next-intl";
import { useRef, useEffect, useState } from "react";

export default function Reviews() {
  const tReviews = useTranslations("home.reviews");
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null);
  const posRef = useRef(0); // <-- persistent position

  const reviews = tReviews.raw("list");

  // Infinite animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationFrame: number;
    const cardWidth = 340; // min-w-[320px] + gap
    const totalWidth = cardWidth * reviews.length;
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
  }, [isPaused, reviews.length]);

  // Manual scroll with snap and pause
  const handleArrow = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 340;
    let pos = posRef.current;
    if (dir === "left") {
      pos += cardWidth;
      if (pos > 0) pos = -cardWidth * reviews.length;
    } else {
      pos -= cardWidth;
      if (Math.abs(pos) >= cardWidth * reviews.length) pos = 0;
    }
    posRef.current = pos;
    track.style.transform = `translateX(${pos}px)`;
    // Pause auto-scroll for 1s
    setIsPaused(true);
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current);
    pauseTimeout.current = setTimeout(() => setIsPaused(false), 1000);
  };

  // Duplicate reviews for infinite effect
  const items = [...reviews, ...reviews];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-0">
        <h3 className="text-primary mb-6 text-center text-2xl font-bold">
          {tReviews("title")}
        </h3>

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
              aria-hidden="true"
              focusable="false"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref={trackRef}
            className="flex gap-4 px-1 py-2 md:gap-5"
            style={{ willChange: "transform", userSelect: "none" }}
          >
            {items.map(
              (
                {
                  name,
                  country,
                  rating,
                  comment,
                }: {
                  name: string;
                  country: string;
                  rating: number;
                  comment: string;
                },
                i: number,
              ) => (
                <div
                  key={i}
                  className="flex max-w-xs min-w-[320px] flex-shrink-0 flex-col justify-between rounded-xl bg-gray-50 p-6 shadow"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <p className="mb-4 text-gray-700">{`“${comment}”`}</p>
                  <span className="text-primary text-sm font-semibold">
                    {`${name}, ${country}`}
                  </span>
                </div>
              ),
            )}
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
              aria-hidden="true"
              focusable="false"
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
      </div>
    </section>
  );
}
