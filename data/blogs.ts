export type BlogPost = {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ginseng-benefits-for-skin",
    image: "/images/products/product-placeholder.svg",
    title: "Ginseng Benefits for Skin – Anti-Aging, Acne, Glow & Hydration",
    excerpt:
      "Discover how ginseng revitalizes skin, fights signs of aging, reduces acne, and restores natural glow and hydration.",
    date: "Oct 15, 2026",
  },
  {
    slug: "ashwagandha-homeopathic-medicine-pakistan",
    image: "/images/products/product-placeholder.svg",
    title: "Ashwagandha Homeopathic Medicine in Pakistan – Uses & Health Benefits",
    excerpt:
      "Learn about ashwagandha's traditional uses, stress-relief properties, and availability across Pakistan.",
    date: "Oct 12, 2026",
  },
  {
    slug: "ginseng-homeopathic-medicine-uses-benefits",
    image: "/images/products/product-placeholder.svg",
    title: "Ginseng Homeopathic Medicine: Uses, Benefits & Side Effects",
    excerpt:
      "A complete guide to ginseng homeopathic medicine, its health benefits, proper usage, and precautions.",
    date: "Oct 10, 2026",
  },
];
