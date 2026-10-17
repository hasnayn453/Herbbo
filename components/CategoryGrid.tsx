import CategoryCard from "./CategoryCard";
import { CATEGORIES } from "@/data";

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-accent">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Supplement Categories
          </h2>
          <p className="mt-3 text-sm text-accent/80 font-medium uppercase tracking-wider">
            Shop by wellness goal
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.name} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
