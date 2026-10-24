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
    image: "/images/products/product-placeholder.svg",
    price: 2450,
    rating: 4.5,
    reviews: 128,
    status: "in-stock",
  },
  {
    id: "ashwagandha-capsules",
    name: "Ashwagandha Capsules",
    image: "/images/products/product-placeholder.svg",
    price: 1200,
    rating: 4.7,
    reviews: 204,
    status: "sale",
  },
  {
    id: "fertilx",
    name: "Fertilex",
    image: "/images/products/product-placeholder.svg",
    price: 1850,
    rating: 4.3,
    reviews: 86,
    status: "sold-out",
  },
  {
    id: "maca-root",
    name: "Maca Root",
    image: "/images/products/product-placeholder.svg",
    price: 1550,
    rating: 4.6,
    reviews: 157,
    status: "in-stock",
  },
  {
    id: "sperm-count-kit",
    name: "Sperm Count Kit",
    image: "/images/products/product-placeholder.svg",
    price: 3200,
    rating: 4.8,
    reviews: 92,
    status: "sale",
  },
  {
    id: "royal-jelly",
    name: "Royal Jelly",
    image: "/images/products/product-placeholder.svg",
    price: 1900,
    rating: 4.4,
    reviews: 113,
    status: "in-stock",
  },
];
