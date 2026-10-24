"use client";

import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/config";

export default function WhatsAppButton({
  onClose,
}: {
  onClose?: () => void;
}) {
  const handleClick = async () => {
    // Log WhatsApp interaction
    try {
      await fetch("/api/whatsapp/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "whatsapp-button",
          message: "Customer initiated WhatsApp chat",
        }),
      });
    } catch {
      // Silently fail - logging shouldn't block the user
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute top-1 right-1 p-1 text-white/80 hover:text-white"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
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
        </button>
      )}
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1eb555] transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="/images/whatsapp.svg"
          alt="WhatsApp"
          className="h-7 w-7"
        />
      </Link>
    </div>
  );
}
