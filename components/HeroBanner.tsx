"use client";

import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Banner image - Product jar background */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: 'url("/images/products/hero-product.svg")' }} />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-white/[0.6]" />
        {/* Promotional overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-accent text-primary text-sm font-bold border border-solid border-accent/50 uppercase tracking-wider">
              New Collection
            </span>
            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-[#0f172a] leading-tight">
              Achieve Your Best Look Easily
            </h1>
            <p className="mb-8 text-lg md:text-xl text-[#0f172a]/90 max-w-lg mx-auto">
              Premium natural health supplements designed to support your
              wellness journey every day.
            </p>
            <Link
              href="/collection"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold text-lg rounded-full shadow-xl hover:bg-secondary transition-all active:scale-95"
            >
              SHOP NOW <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
