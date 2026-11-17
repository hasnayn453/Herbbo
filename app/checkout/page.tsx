"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { WHATSAPP_URL } from "@/lib/config";

export default function CheckoutPage() {
  const { state, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const itemCount = state.items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = state.items.reduce((sum, i) => sum + i.price * i.qty, 0);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 2,
    }).format(price).replace("PKR", "Rs.");

  if (state.items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen bg-accent font-sans">
        <main className="flex-1 max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold text-[#0f172a] mb-6">Checkout</h1>
          <div className="bg-white rounded-xl border border-solid border-accent p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Your cart is empty</h2>
            <p className="text-[#0f172a]/70 mb-6">
              Add some products to your cart before checking out.
            </p>
            <Link
              href="/collection"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
            >
              Browse Products <span aria-hidden="true">→</span>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const address = formData.get("address") as string;

    const itemsList = state.items
      .map(
        (item) =>
          `${item.name} ×${item.qty} (Rs. ${new Intl.NumberFormat("en-PK", {
            style: "currency",
            currency: "PKR",
            minimumFractionDigits: 2,
          }).format(item.price).replace("PKR", "Rs.")} each)`
      )
      .join("\n");

    const whatsappMessage = `*New Order - Herbbo*\n\n*Customer:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n*Items:*\n${itemsList}\n\n*Subtotal:* Rs. ${subtotal.toLocaleString()}\n\n*Payment:* Cash on Delivery`;

    const whatsappUrl = `${WHATSAPP_URL}&text=${encodeURIComponent(whatsappMessage)}`;

    try {
      setMessage("Opening WhatsApp to complete your order...");
      window.open(whatsappUrl, "_blank");
      clear();
      setMessage("Order placed! WhatsApp opened to confirm your order.");
    } catch (err) {
      setMessage("Failed to open WhatsApp. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-accent font-sans">
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-[#0f172a] mb-6">Checkout</h1>

        <div className="bg-white rounded-xl border border-solid border-accent p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4"
              >
                <div className="relative h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden border border-solid border-accent">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0f172a] line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-accent/70">
                    {formatPrice(item.price)} × {item.qty}
                  </p>
                </div>
                <span className="font-bold text-[#0f172a]">
                  {formatPrice(item.price * item.qty)}
                </span>
              </div>
            ))}
            <div className="border-t border-solid border-accent pt-4 flex justify-between text-lg font-bold text-[#0f172a]">
              <span>Total</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl border border-solid border-accent p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Customer Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-md border border-solid border-accent bg-white px-3 py-2 text-sm text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded-md border border-solid border-accent bg-white px-3 py-2 text-sm text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-1">
                Delivery Address
              </label>
              <textarea
                name="address"
                required
                rows={3}
                className="w-full rounded-md border border-solid border-accent bg-white px-3 py-2 text-sm text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-white hover:bg-secondary"
            >
              {submitting ? "Opening WhatsApp..." : "Place Order (Cash on Delivery)"}
            </button>
          </form>
        </div>

        {message && (
          <div className="mt-4 p-4 rounded-md bg-blue-50 text-blue-700 border border-solid border-blue-100 text-sm">
            {message}
          </div>
        )}
      </main>
    </div>
  );
}
