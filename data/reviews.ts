export type Review = {
  name: string;
  product: string;
  rating: number;
  excerpt: string;
  avatar: string;
};

export const REVIEWS: Review[] = [
  {
    name: "Shafqat Ali",
    product: "Sperm Count Kit",
    rating: 5,
    excerpt:
      "Excellent product, really helped improve my energy and confidence. Highly recommended!",
    avatar: "/images/products/product-placeholder.svg",
  },
  {
    name: "Ayesha Khan",
    product: "Ashwagandha Capsules",
    rating: 5,
    excerpt:
      "Best ashwagandha I've used. My stress levels are down and sleep is much better.",
    avatar: "/images/products/product-placeholder.svg",
  },
  {
    name: "Usman Tariq",
    product: "Hungrez Weight Gain",
    rating: 4,
    excerpt:
      "Noticed a healthy weight gain within a month. Great quality supplement.",
    avatar: "/images/products/product-placeholder.svg",
  },
  {
    name: "Fatima Noor",
    product: "Royal Jelly",
    rating: 5,
    excerpt:
      "Wonderful for skin and immunity. My whole family uses it now.",
    avatar: "/images/products/product-placeholder.svg",
  },
  {
    name: "Bilal Ahmed",
    product: "Maca Root",
    rating: 4,
    excerpt:
      "Good stamina booster. Feels natural with no side effects.",
    avatar: "/images/products/product-placeholder.svg",
  },
  {
    name: "Hina Raza",
    product: "Fertilex",
    rating: 5,
    excerpt:
      "Truly effective and doctor-recommended. Very happy with the results.",
    avatar: "/images/products/product-placeholder.svg",
  },
];

export const OVERALL_RATING = 4.7;
export const TOTAL_REVIEWS = 162;
