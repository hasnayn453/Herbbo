"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { REVIEWS, OVERALL_RATING, TOTAL_REVIEWS } from "@/data";

const StarRating = ({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className={`flex items-center gap-1 ${className ?? ""}`}>
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5 fill-current text-amber-500"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      ))}
      {hasHalf && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5 fill-current text-amber-500"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 17.27L18.18 21l1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-3.5 w-3.5 text-amber-200"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      ))}
    </div>
  );
};

const Arrow = ({ dir }: { dir: "left" | "right" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d={dir === "left" ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
    />
  </svg>
);

export default function CustomerReviews() {
  const [index, setIndex] = useState(0);
  const visibleCount = 2;

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % REVIEWS.length);
  }, []);

  const visible = Array.from(
    { length: Math.min(visibleCount, REVIEWS.length) },
    (_, i) => REVIEWS[(index + i) % REVIEWS.length]
  );

  return (
    <section className="py-16 bg-accent">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <StarRating rating={OVERALL_RATING} />
            <span className="text-sm font-medium text-accent/80">
              from {TOTAL_REVIEWS} reviews
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">
            Trusted By Our Customers
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden px-2 pb-4">
            {visible.map((review) => (
              <article
                key={review.name}
                className="flex-none w-full max-w-xs flex flex-col rounded-xl border border-solid border-accent bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#0f172a]">{review.name}</p>
                    <p className="text-xs text-secondary">{review.product}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} className="mb-3" />
                <p className="text-[#0f172a]/80 leading-relaxed">
                  "{review.excerpt}"
                </p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-secondary transition-colors"
            aria-label="Previous review"
          >
            <Arrow dir="left" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-secondary transition-colors"
            aria-label="Next review"
          >
            <Arrow dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
