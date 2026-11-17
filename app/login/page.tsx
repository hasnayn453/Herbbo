"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      const data = await res.json();

      if (data.user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-accent font-sans">
      <main className="flex-1 max-w-md mx-auto px-4 py-12">
        <div className="bg-white rounded-xl border border-solid border-accent p-8 shadow-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#0f172a]">Welcome Back</h1>
            <p className="text-sm text-accent/70">Sign in to your Herbbo account</p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-md bg-red-50 text-red-700 text-sm border border-solid border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-solid border-accent bg-white px-3 py-2 text-sm text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0f172a] mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-solid border-accent bg-white px-3 py-2 text-sm text-[#0f172a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-primary text-white hover:bg-secondary"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-xs text-accent/60 text-center">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-primary font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
