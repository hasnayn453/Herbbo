import Link from "next/link";
import { CATEGORIES } from "@/data";

type CategoryIconProps = {
  iconKey: string;
};

const CategoryIcon = ({ iconKey }: CategoryIconProps) => {
  const icons: Record<string, React.ReactNode> = {
    rose: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-rose-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    indigo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    amber: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    emerald: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    violet: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-violet-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    teal: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-teal-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  };

  return <>{icons[iconKey]}</>;
};

export default function CategoryCard({
  category,
}: {
  category: (typeof CATEGORIES)[number];
}) {
  return (
    <Link
      href={category.href}
      className="group relative block rounded-2xl p-6 border border-solid transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-white/80 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 text-center h-full">
        <div
          className={`rounded-2xl p-4 ${category.bg} shadow-sm transition-all duration-300 group-hover:scale-110`}
        >
          <CategoryIcon iconKey={category.iconKey} />
        </div>
        <h3 className={`${category.text} font-bold text-lg leading-tight group-hover:text-primary transition-colors`}>
          {category.name}
        </h3>
        <span className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-primary">
          Shop →
        </span>
      </div>
    </Link>
  );
}
