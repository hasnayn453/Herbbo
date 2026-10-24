import Link from "next/link";

export default function MenHealthPage() {
  return (
    <div className="flex flex-col min-h-screen bg-accent font-sans">
      <main className="flex-1 max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-[#0f172a] mb-6">Men Health</h1>
        <div className="bg-white rounded-xl border border-solid border-accent p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Coming Soon</h2>
          <p className="text-[#0f172a]/70 mb-4">
            The Men Health page is not yet implemented. This is a frontend-only
            demo with no backend.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-secondary transition-colors"
          >
            Back to Home <span aria-hidden="true">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
