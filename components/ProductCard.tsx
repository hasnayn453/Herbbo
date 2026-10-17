"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  status: "in-stock" | "sold-out" | "sale";
};

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
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
      <span className="ml-1 text-xs font-medium text-accent/80">
        ({rating.toFixed(1)})
      </span>
    </div>
  );
};

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { add } = useCart();
  const isSoldOut = product.status === "sold-out";
  const isSale = product.status === "sale";
  const priceText = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 2,
  }).format(product.price).replace("PKR", "Rs.");

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSoldOut) return;
    add({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
  };

  return (
    <div
      className="group flex flex-col rounded-xl border border-solid border-accent bg-white shadow-sm transition-all hover:shadow-xl hover:border-primary/30"
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg bg-accent">
        <Link href={`/product/${product.id}`} aria-label={`View ${product.name}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        </Link>
        {isSoldOut && (
          <div className="absolute top-3 left-3 flex items-center gap-1 rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white shadow-md">
            <span className="flex h-3 w-3 rounded-full bg-white" />
            Sold out
          </div>
        )}
        {isSale && (
          <div className="absolute top-3 left-3 flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-1 text-xs font-bold text-white shadow-md">
            <span className="flex h-3 w-3 rounded-full bg-white" />
            Sale
          </div>
        )}
        <button
          type="button"
          disabled={isSoldOut}
          onClick={handleAdd}
          className="absolute top-3 right-3 p-1.5 rounded-md bg-white/90 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={`Add ${product.name} to cart`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 110 4 2 2 0 010-4z"
            />
          </svg>
        </button>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <StarRating rating={product.rating} />
        <h3 className="font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-lg font-bold text-secondary">{priceText}</p>
        <button
          type="button"
          disabled={isSoldOut}
          onClick={handleAdd}
          className={`w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
            isSoldOut
              ? "bg-accent text-accent border border-solid border-accent/50"
              : "bg-primary text-white hover:bg-secondary border border-solid border-transparent"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 110 4 2 2 0 010-4z"
            />
          </svg>
          {isSoldOut ? "Sold out" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
