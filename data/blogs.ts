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
    image:
      "https://images.unsplash.com/photo-1556228578-1dff6d52920d?q=80&w=800&auto=format&fit=crop",
    title: "Ginseng Benefits for Skin – Anti-Aging, Acne, Glow & Hydration",
    excerpt:
      "Discover how ginseng revitalizes skin, fights signs of aging, reduces acne, and restores natural glow and hydration.",
    date: "Oct 15, 2026",
  },
  {
    slug: "ashwagandha-homeopathic-medicine-pakistan",
    image:
      "https://images.unsplash.com/photo-1518422897808-60e17e563953?q=80&w=800&auto=format&fit=crop",
    title: "Ashwagandha Homeopathic Medicine in Pakistan – Uses & Health Benefits",
    excerpt:
      "Learn about ashwagandha's traditional uses, stress-relief properties, and availability across Pakistan.",
    date: "Oct 12, 2026",
  },
  {
    slug: "ginseng-homeopathic-medicine-uses-benefits",
    image:
      "https://images.unsplash.com/photo-1597430661711-3dcb93e49e2f?q=80&w=800&auto=format&fit=crop",
    title: "Ginseng Homeopathic Medicine: Uses, Benefits & Side Effects",
    excerpt:
      "A complete guide to ginseng homeopathic medicine, its health benefits, proper usage, and precautions.",
    date: "Oct 10, 2026",
  },
];
