"use client";

import { useEffect, useState } from "react";

const NOTIFICATIONS = [
  { name: "Shafqat", city: "Faisalabad", product: "Sperm Count Kit", minutes: 1 },
  { name: "Ayesha", city: "Lahore", product: "Hair Growth Serum", minutes: 3 },
  { name: "Ali", city: "Karachi", product: "Weight Loss Capsules", minutes: 5 },
  { name: "Fatima", city: "Islamabad", product: "Multivitamin Tablets", minutes: 8 },
  { name: "Usman", city: "Multan", product: "Men Health Booster", minutes: 12 },
  { name: "Zainab", city: "Peshawar", product: "Women Health Tonic", minutes: 15 },
  { name: "Bilal", city: "Quetta", product: "Weight Gain Powder", minutes: 20 },
  { name: "Hina", city: "Rawalpindi", product: "Immunity Support Kit", minutes: 25 },
];

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
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

export default function LivePurchaseToast({
  onClose,
}: {
  onClose?: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;

    const timer = setInterval(() => {
      setVisible(false);
    }, 4500);

    const transitionTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % NOTIFICATIONS.length);
      setVisible(true);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(transitionTimer);
    };
  }, [index, closed]);

  const notification = NOTIFICATIONS[index];

  if (closed) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex w-80 flex-col items-start gap-2 rounded-lg border border-solid border-accent bg-white shadow-lg transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="px-4 py-3 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-secondary">
            <span className="text-accent/70 font-normal">New order</span>{" "}
            placed
          </p>
          <button
            type="button"
            onClick={() => {
              setClosed(true);
              onClose?.();
            }}
            className="p-1 text-accent hover:text-secondary transition-colors"
            aria-label="Close notification"
          >
            <CloseIcon />
          </button>
        </div>
        <p className="text-base font-semibold text-foreground">
          {notification.name} from {notification.city} purchased{" "}
          <span className="text-primary">{notification.product}</span>
        </p>
        <p className="text-xs text-accent">
          {notification.minutes} minute{notification.minutes !== 1 ? "s" : ""} ago
        </p>
      </div>
    </div>
  );
}
