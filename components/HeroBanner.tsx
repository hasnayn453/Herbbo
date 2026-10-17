"use client";

import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner image */}
      <div className="relative h-[500px] md:h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1559757175-5720dda97ac2?q=80&w=2070&auto=format&fit=crop"
          alt="Health supplements and wellness products"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Promotional overlay */}
        <div className="absolute inset-0 bg-black/[0.45] flex items-center justify-center px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl">
            <span className="inline-block mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-solid border-primary/20 uppercase tracking-wider">
              New Collection
            </span>
            <h1 className="mb-6 text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Achieve Your Best Look Easily
            </h1>
            <p className="mb-8 text-lg md:text-xl text-white/90 max-w-lg mx-auto">
              Premium natural health supplements designed to support your
              wellness journey every day.
            </p>
            <Link
              href="/collection"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary font-bold text-lg rounded-full shadow-lg hover:bg-secondary transition-all active:scale-95"
            >
              SHOP NOW <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
