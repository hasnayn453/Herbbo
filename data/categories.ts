export type Category = {
  name: string;
  href: string;
  bg: string;
  text: string;
  iconKey: "rose" | "indigo" | "amber" | "emerald" | "violet" | "teal";
};

export const CATEGORIES: Category[] = [
  {
    name: "Women Health",
    href: "/women-health",
    bg: "bg-rose-50 border-rose-200/50",
    text: "text-rose-700",
    iconKey: "rose",
  },
  {
    name: "Men Health",
    href: "/men-health",
    bg: "bg-indigo-50 border-indigo-200/50",
    text: "text-indigo-700",
    iconKey: "indigo",
  },
  {
    name: "Weight Gain",
    href: "/weight-gain",
    bg: "bg-amber-50 border-amber-200/50",
    text: "text-amber-700",
    iconKey: "amber",
  },
  {
    name: "Weight Loss",
    href: "/weight-loss",
    bg: "bg-emerald-50 border-emerald-200/50",
    text: "text-emerald-700",
    iconKey: "emerald",
  },
  {
    name: "Beauty Products",
    href: "/beauty-products",
    bg: "bg-violet-50 border-violet-200/50",
    text: "text-violet-700",
    iconKey: "violet",
  },
  {
    name: "Digestive Health",
    href: "/digestive-health",
    bg: "bg-teal-50 border-teal-200/50",
    text: "text-teal-700",
    iconKey: "teal",
  },
];
