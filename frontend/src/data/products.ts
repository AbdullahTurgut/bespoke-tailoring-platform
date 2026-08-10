export interface Product {
  id: number;
  name: string;
  category: "Wedding" | "Engagement";
  startingPrice: number;
  image: string;
  rating: number;
  reviews: number;
  fabric: string;
  fit: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Gece Siyahı",
    category: "Wedding",
    startingPrice: 8500,
    image: "/images/black-suit.jpg",
    rating: 5,
    reviews: 42,
    fabric: "İtalyan Yünü",
    fit: "Slim Fit",
    badge: "Çok Satan",
  },

  {
    id: 2,
    name: "Kraliyet Laciverti",
    category: "Wedding",
    startingPrice: 9500,
    image: "/images/navy-suit.jpg",
    rating: 5,
    reviews: 28,
    fabric: "Premium Yün",
    fit: "Modern Fit",
  },

  {
    id: 3,
    name: "Zarif Gri",
    category: "Engagement",
    startingPrice: 8500,
    image: "/images/grey-suit.jpg",
    rating: 5,
    reviews: 35,
    fabric: "Kaşmir Karışımı",
    fit: "Klasik Fit",
    badge: "Yeni",
  },

  {
    id: 4,
    name: "Kraliyet Antrasiti",
    category: "Engagement",
    startingPrice: 9000,
    image: "/images/charcoal.jpg",
    rating: 5,
    reviews: 21,
    fabric: "Lüks Pamuk",
    fit: "Regular Fit",
  },
];
