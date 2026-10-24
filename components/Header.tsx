"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
import { WHATSAPP_URL } from "@/lib/config";

const navLinks = [
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

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const AccountIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
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
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Header({
  onCartToggle,
}: {
  onCartToggle?: (open: boolean) => void;
}) {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-solid border-accent shadow-sm">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          {/* Brand logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Herbbo"
          >
            <img
              src="/images/logo.svg"
              alt="Herbbo logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Navigation links (desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#0f172a]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right action icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              type="button"
              className="text-[#0f172a] hover:text-primary transition-colors"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
            <button
              type="button"
              className="text-[#0f172a] hover:text-primary transition-colors"
              aria-label="Account"
            >
              <AccountIcon />
            </button>
            <button
              type="button"
              className="relative text-[#0f172a] hover:text-primary transition-colors"
              aria-label={`Cart (${itemCount} items)`}
              onClick={() => onCartToggle?.(true)}
            >
              <CartIcon />
              <span
                className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold"
                aria-hidden="true"
              >
                {itemCount}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden text-[#0f172a] hover:text-primary transition-colors"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div
            className="md:hidden fixed inset-0 z-50 bg-secondary/95 flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-solid border-primary/30">
              <img
                src="/images/logo.svg"
                alt="Herbbo logo"
                className="h-8 w-auto"
              />
              <button
                type="button"
                className="text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>
            <nav className="flex-1 flex flex-col gap-1 px-6 py-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white/90 hover:bg-primary/10 rounded-lg transition-colors"
                >
                  {link.name}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </nav>
            <div className="p-6 flex flex-col gap-3 border-t border-solid border-primary/30">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
                onClick={() => {
                  setMenuOpen(false);
                  onCartToggle?.(true);
                }}
              >
                <CartIcon /> Cart ({itemCount})
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#1eb555] transition-colors"
              >
                <span className="h-5 w-5" aria-hidden="true">💬</span> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
