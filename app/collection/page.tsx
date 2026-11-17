import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import Image from "next/image";

export default function CollectionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-accent font-sans">
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-[#0f172a] mb-8">Our Collection</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block rounded-xl overflow-hidden border border-solid border-accent bg-white shadow-sm transition-all hover:shadow-xl hover:border-primary/50"
            >
              <div className="relative h-48 overflow-hidden bg-accent">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
                  priority={product.id === PRODUCTS[0].id}
                />
                {product.status === "sold-out" && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 rounded-md bg-red-600 px-2 py-1 text-xs font-bold text-white shadow-md">
                    <span className="flex h-3 w-3 rounded-full bg-white" />
                    Sold out
                  </div>
                )}
                {product.status === "sale" && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-1 text-xs font-bold text-white shadow-md">
                    <span className="flex h-3 w-3 rounded-full bg-white" />
                    Sale
                  </div>
                )}
                <button
                  type="button"
                  className="absolute top-3 right-3 p-1.5 rounded-md bg-white/90 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={`Add ${product.name} to cart`}
                  disabled={product.status === "sold-out"}
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

              <div className="p-5 flex flex-col gap-2">
                <h3 className="font-bold text-[#0f172a] leading-tight group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-secondary">
                  {new Intl.NumberFormat("en-PK", {
                    style: "currency",
                    currency: "PKR",
                    minimumFractionDigits: 2,
                  }).format(product.price).replace("PKR", "Rs.")}
                </p>
                <button
                  type="button"
                  disabled={product.status === "sold-out"}
                  className={`w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                    product.status === "sold-out"
                      ? "bg-accent text-accent border border-solid border-accent/50"
                      : "bg-primary text-white hover:bg-secondary border border-solid border-transparent"
                  }`}
                >
                  {product.status === "sold-out" ? "Sold out" : "Add to Cart"}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
