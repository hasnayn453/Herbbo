export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  status: "in-stock" | "sold-out" | "sale";
};

export const PRODUCTS: Product[] = [
  {
    id: "hungrez-weight-gain",
    name: "Hungrez Weight Gain",
    image:
      "https://images.unsplash.com/photo-1589943021336-f2e851463c3b?q=80&w=800&auto=format&fit=crop",
    price: 2450,
    rating: 4.5,
    reviews: 128,
    status: "in-stock",
  },
  {
    id: "ashwagandha-capsules",
    name: "Ashwagandha Capsules",
    image:
      "https://images.unsplash.com/photo-1615911767167-d70524141cbf?q=80&w=800&auto=format&fit=crop",
    price: 1200,
    rating: 4.7,
    reviews: 204,
    status: "sale",
  },
  {
    id: "fertilx",
    name: "Fertilex",
    image:
      "https://images.unsplash.com/photo-1559757175-5720dda97ac2?q=80&w=800&auto=format&fit=crop",
    price: 1850,
    rating: 4.3,
    reviews: 86,
    status: "sold-out",
  },
  {
    id: "maca-root",
    name: "Maca Root",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e358?q=80&w=800&auto=format&fit=crop",
    price: 1550,
    rating: 4.6,
    reviews: 157,
    status: "in-stock",
  },
  {
    id: "sperm-count-kit",
    name: "Sperm Count Kit",
    image:
      "https://images.unsplash.com/photo-1584238653379-638717e44240?q=80&w=800&auto=format&fit=crop",
    price: 3200,
    rating: 4.8,
    reviews: 92,
    status: "sale",
  },
  {
    id: "royal-jelly",
    name: "Royal Jelly",
    image:
      "https://images.unsplash.com/photo-1574734279768-a9f8d501d3a0?q=80&w=800&auto=format&fit=crop",
    price: 1900,
    rating: 4.4,
    reviews: 113,
    status: "in-stock",
  },
];
