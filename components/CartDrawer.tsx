"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "./CartContext";

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
  </svg>
);

export default function CartDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  const { state, remove, increment, decrement, clear } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 2,
    }).format(price).replace("PKR", "Rs.");

  return (
    <div
      className="fixed inset-0 z-50 flex"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full md:w-[420px] bg-white shadow-2xl transform transition-transform duration-300 translate-x-0"
        style={{ boxShadow: "20px 0 60px rgba(0,0,0,0.2)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-solid border-accent">
          <h2 className="font-bold text-lg text-[#0f172a]">Your Cart</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-accent hover:text-primary transition-colors"
            aria-label="Close cart"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Empty state */}
        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-accent/30 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 110 4 2 2 0 010-4z"
              />
            </svg>
            <p className="text-lg font-semibold text-[#0f172a]">Your cart is empty</p>
            <p className="mt-1 text-sm text-accent/70">
              Add some products to get started.
            </p>
            <Link
              href="/collection"
              className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
            >
              Browse Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : (
          <> {/* Items list */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-start"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden border border-solid border-accent">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-[#0f172a] line-clamp-1">
                        {item.name}
                      </h3>
                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        className="text-accent hover:text-primary transition-colors p-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                    <p className="text-sm text-accent">{formatPrice(item.price)}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <button
                        type="button"
                        onClick={() => decrement(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-[#0f172a] text-sm font-bold hover:bg-secondary transition-colors"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <MinusIcon />
                      </button>
                      <span className="font-medium text-[#0f172a] min-w-[20px] text-center">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => increment(item.id)}
                        className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white text-sm font-bold hover:bg-secondary transition-colors"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout summary */}
            <div className="border-t border-solid border-accent px-6 py-4">
              <div className="flex justify-between mb-2">
                <span className="text-[#0f172a]/80">Subtotal ({itemCount} item{itemCount !== 1 ? "s" : ""})</span>
                <span className="font-bold text-[#0f172a]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-accent/70 mt-1">
                <span>Free shipping on orders over Rs. 2,000</span>
              </div>
              <Link
                href="/checkout"
                className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-white font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Proceed to Checkout <span aria-hidden="true">→</span>
              </Link>
              <button
                type="button"
                onClick={clear}
                className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-solid border-accent bg-white text-sm font-medium text-accent hover:bg-accent/50 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
