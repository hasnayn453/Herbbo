"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminDashboard from "./AdminDashboard";

export default function AdminPage() {
  const [session, setSession] = useState<{ id: string; email: string; role: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/auth/me")
      .then(async (res) => {
        if (!res.ok) {
          router.push("/login");
          return;
        }
        return res.json();
      })
      .then((data: { user: { id: string; email: string; role: string } }) => {
        if (data.user.role !== "admin") {
          router.push("/login");
          return;
        }
        setSession(data.user);
        setLoading(false);
      })
      .catch(() => {
        router.push("/login");
        setLoading(false);
      });
  }, [router]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-accent font-sans">
        <main className="flex-1 max-w-4xl mx-auto px-4 py-12 flex items-center justify-center">
          <p className="text-[#0f172a]/60">Loading admin dashboard...</p>
        </main>
      </div>
    );
  }

  return <AdminDashboard />;
}
