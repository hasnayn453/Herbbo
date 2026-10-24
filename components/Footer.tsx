"use client";

import { WHATSAPP_URL } from "@/lib/config";

import { useEffect, useState } from "react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Collection", href: "/collection" },
  { name: "Top selling", href: "/top-selling" },
  { name: "Men Health", href: "/men-health" },
  { name: "Women Health", href: "/women-health" },
  { name: "Weight Loss", href: "/weight-loss" },
  { name: "Weight Gain", href: "/weight-gain" },
  { name: "Blogs", href: "/blogs" },
  { name: "Health Guides", href: "/health-guides" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-secondary border-t border-solid border-primary/30 mt-auto">
      <div className="px-4 mx-auto max-w-7xl py-10 md:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-primary tracking-wider">HERBBO</span>
            </div>
            <p className="text-sm text-accent/90 leading-relaxed max-w-xs">
              Your source for natural health and wellness supplements.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent/90 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact + Subscribe */}
          <div>
            <h3 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm text-accent/90">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 mt-[3px]">📍</span>
                Multan, Punjab, Pakistan
              </li>
              <li className="flex items-center gap-2">
                <span className="flex-shrink-0">📞</span>
                +92 371 1327029
              </li>
              <li className="flex items-center gap-2">
                <span className="flex-shrink-0">✉️</span>
                herbbo3241@gmail.com
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-sm font-bold text-[#0f172a] uppercase tracking-wider mb-3">
                Newsletter
              </h3>
              <p className="text-xs text-accent/60 mb-3">
                Demo only — email is not stored or sent.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="flex-1 rounded-md border border-solid border-accent bg-white px-3 py-2 text-sm text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${subscribed ? "bg-accent text-accent cursor-not-allowed" : "bg-primary text-white hover:bg-secondary"}`}
                >
                  {subscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar: copyright */}
        <div className="border-t border-solid border-primary/30 pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
          </div>
          <p className="text-xs text-accent/70">
            &copy; {year} Herbbo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
