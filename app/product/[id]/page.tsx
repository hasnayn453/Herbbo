"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const { add } = useCart();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const product = PRODUCTS.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-accent font-sans">
        <main className="flex-1 max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-[#0f172a] mb-6">Product Not Found</h1>
          <div className="bg-white rounded-xl border border-solid border-accent p-6 shadow-sm">
            <p className="text-[#0f172a]/70 mb-4">
              The product you're looking for doesn't exist.
            </p>
            <Link
              href="/collection"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
            >
              Browse Collection <span aria-hidden="true">→</span>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const isSoldOut = product.status === "sold-out";
  const priceText = new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 2,
  }).format(product.price).replace("PKR", "Rs.");

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSoldOut) return;
    add({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-accent font-sans">
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12">
        <nav className="mb-8">
          <Link
            href="/collection"
            className="text-sm text-accent/70 hover:text-primary transition-colors"
          >
            ← Back to Collection
          </Link>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative h-[500px] rounded-xl overflow-hidden border border-solid border-accent bg-accent">
              <Image
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                priority
              />
              {product.status === "sold-out" && (
                <div className="absolute top-4 left-4 flex items-center gap-1 rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white shadow-md">
                  <span className="flex h-3 w-3 rounded-full bg-white" />
                  Sold out
                </div>
              )}
              {product.status === "sale" && (
                <div className="absolute top-4 left-4 flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-1 text-xs font-bold text-white shadow-md">
                  <span className="flex h-3 w-3 rounded-full bg-white" />
                  Sale
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                product.image,
                "/images/products/product-placeholder.svg",
                "/images/products/product-placeholder.svg",
                "/images/products/product-placeholder.svg",
              ].map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`h-24 w-24 rounded-lg overflow-hidden border border-solid border-accent ${selectedImage === img ? "border-primary/50 ring-2 ring-primary" : ""}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-2">
              <h1 className="text-3xl font-bold text-[#0f172a]">
                {product.name}
              </h1>
              {product.status === "sale" && (
                <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold uppercase">
                  Sale
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-[#0f172a]">
                {priceText}
              </span>
              <span className="text-lg font-bold text-accent">{product.reviews} reviews</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <span className="flex items-center gap-1 text-amber-500">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                ))}
                {[...Array(5 - Math.floor(product.rating))].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-amber-200" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" fill="none"/></svg>
                ))}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={isSoldOut}
              className={`w-full flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                isSoldOut
                  ? "bg-accent text-accent border border-solid border-accent/50"
                  : "bg-primary text-white hover:bg-secondary border border-solid border-transparent"
              }`}
            >
              {isSoldOut ? "Sold out" : "Add to Cart"}
            </button>

            <div className="bg-accent rounded-lg p-4">
              <h3 className="font-bold text-[#0f172a] mb-2">Product Details</h3>
              <p className="text-[#0f172a]/70 text-sm leading-relaxed">
                Premium {product.name.toLowerCase()} - a natural health supplement
                crafted for your wellness journey. Laboratory-certified quality you
                can trust.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
