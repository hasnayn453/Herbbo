"use client";

import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  status: "in-stock" | "sold-out" | "sale";
  category: string;
};

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight">
            Laboratory-Certified Nutritional &amp; Wellness Supplements:
          </h2>
          <p className="mt-3 text-sm text-secondary font-medium uppercase tracking-wider">
            Quality you can trust
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-[#0f172a]/70">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
