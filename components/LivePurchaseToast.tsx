"use client";

import { useEffect, useState } from "react";

export default function LivePurchaseToast({
  onClose,
}: {
  onClose?: () => void;
}) {
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex w-80 flex-col items-start gap-2 rounded-lg border border-solid border-yellow-200 bg-yellow-50 shadow-lg"
    >
      <div className="px-4 py-3 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-yellow-800">
            Demo mode — example notifications only
          </p>
          <button
            type="button"
            onClick={() => {
              setClosed(true);
              onClose?.();
            }}
            className="p-1 text-yellow-600 hover:text-yellow-900 transition-colors"
            aria-label="Close notification"
          >
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
          </button>
        </div>
        <p className="text-xs text-yellow-700">
          These are example notifications. No real orders are being tracked.
        </p>
      </div>
    </div>
  );
}
