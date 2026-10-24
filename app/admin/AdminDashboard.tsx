"use client";

import { useEffect, useState } from "react";

type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  total: number;
  status: string;
  createdAt: string;
};

export default function AdminDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/orders")
      .then(async (res) => {
        if (res.status === 401 || res.status === 403) {
          window.location.href = "/login";
          return;
        }
        return res.json();
      })
      .then((data: Order[]) => {
        setOrders(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load orders");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-accent font-sans">
        <main className="flex-1 max-w-4xl mx-auto px-4 py-12 flex items-center justify-center">
          <p className="text-[#0f172a]/60">Loading admin dashboard...</p>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-accent font-sans">
        <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl border border-solid border-accent p-6 shadow-sm">
            <h1 className="text-2xl font-bold text-[#0f172a] mb-4">Admin Dashboard</h1>
            <p className="text-red-600">{error}</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-accent font-sans">
      <main className="flex-1 max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#0f172a]">Admin Dashboard</h1>
        </div>

        <div className="bg-white rounded-xl border border-solid border-accent shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-accent/50 border-b border-solid border-accent">
                <th className="px-4 py-3 text-sm font-semibold text-[#0f172a]/70">ID</th>
                <th className="px-4 py-3 text-sm font-semibold text-[#0f172a]/70">Customer</th>
                <th className="px-4 py-3 text-sm font-semibold text-[#0f172a]/70">Email</th>
                <th className="px-4 py-3 text-sm font-semibold text-[#0f172a]/70">Total</th>
                <th className="px-4 py-3 text-sm font-semibold text-[#0f172a]/70">Status</th>
                <th className="px-4 py-3 text-sm font-semibold text-[#0f172a]/70">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-[#0f172a]/50">
                    No orders yet.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="border-b border-solid border-accent/50 last:border-0">
                    <td className="px-4 py-3 text-sm text-[#0f172a]">{order.id}</td>
                    <td className="px-4 py-3 text-sm text-[#0f172a]">{order.customerName}</td>
                    <td className="px-4 py-3 text-sm text-accent/70">{order.customerEmail}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-[#0f172a]">
                      Rs. {order.total.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700"
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-accent/60">{order.createdAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
