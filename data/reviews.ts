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
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Ayesha Khan",
    product: "Ashwagandha Capsules",
    rating: 5,
    excerpt:
      "Best ashwagandha I've used. My stress levels are down and sleep is much better.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Usman Tariq",
    product: "Hungrez Weight Gain",
    rating: 4,
    excerpt:
      "Noticed a healthy weight gain within a month. Great quality supplement.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1272a8e396?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Fatima Noor",
    product: "Royal Jelly",
    rating: 5,
    excerpt:
      "Wonderful for skin and immunity. My whole family uses it now.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Bilal Ahmed",
    product: "Maca Root",
    rating: 4,
    excerpt:
      "Good stamina booster. Feels natural with no side effects.",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf379f75?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Hina Raza",
    product: "Fertilex",
    rating: 5,
    excerpt:
      "Truly effective and doctor-recommended. Very happy with the results.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf028692c?q=80&w=200&auto=format&fit=crop",
  },
];

export const OVERALL_RATING = 4.7;
export const TOTAL_REVIEWS = 162;
