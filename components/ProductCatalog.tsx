import ProductCard from "./ProductCard";
import { PRODUCTS } from "@/data";

export default function ProductCatalog() {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Laboratory-Certified Nutritional &amp; Wellness Supplements:
          </h2>
          <p className="mt-3 text-sm text-accent/80 font-medium uppercase tracking-wider">
            Quality you can trust
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
