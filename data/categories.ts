export type Category = {
  name: string;
  href: string;
  bg: string;
  text: string;
  iconKey: "teal" | "amber" | "orange" | "emerald" | "rose" | "indigo";
};

export const CATEGORIES: Category[] = [
  {
    name: "Women Health",
    href: "/women-health",
    bg: "bg-teal-100 border-teal-200/50",
    text: "text-teal-700",
    iconKey: "teal",
  },
  {
    name: "Men Health",
    href: "/men-health",
    bg: "bg-amber-100 border-amber-200/50",
    text: "text-amber-700",
    iconKey: "amber",
  },
  {
    name: "Weight Gain",
    href: "/weight-gain",
    bg: "bg-orange-100 border-orange-200/50",
    text: "text-orange-700",
    iconKey: "orange",
  },
  {
    name: "Weight Loss",
    href: "/weight-loss",
    bg: "bg-emerald-100 border-emerald-200/50",
    text: "text-emerald-700",
    iconKey: "emerald",
  },
  {
    name: "Beauty Products",
    href: "/beauty-products",
    bg: "bg-rose-100 border-rose-200/50",
    text: "text-rose-700",
    iconKey: "rose",
  },
  {
    name: "Digestive Health",
    href: "/digestive-health",
    bg: "bg-indigo-100 border-indigo-200/50",
    text: "text-indigo-700",
    iconKey: "indigo",
  },
];
