export interface Product {
  id: number;
  name: string;
  category: "Wedding" | "Classic" | "Business";
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
    name: "Midnight Black",
    category: "Wedding",
    startingPrice: 8500,
    image: "/images/black-suit.jpg",
    rating: 5,
    reviews: 42,
    fabric: "Italian Wool",
    fit: "Slim Fit",
    badge: "Best Seller",
  },

  {
    id: 2,
    name: "Royal Navy",
    category: "Wedding",
    startingPrice: 9500,
    image: "/images/navy-suit.jpg",
    rating: 5,
    reviews: 28,
    fabric: "Premium Wool",
    fit: "Modern Fit",
  },

  {
    id: 3,
    name: "Executive Grey",
    category: "Business",
    startingPrice: 8500,
    image: "/images/grey-suit.jpg",
    rating: 5,
    reviews: 35,
    fabric: "Cashmere Blend",
    fit: "Classic Fit",
    badge: "New",
  },

  {
    id: 4,
    name: "Royal Charcoal",
    category: "Classic",
    startingPrice: 9000,
    image: "/images/charcoal.jpg",
    rating: 5,
    reviews: 21,
    fabric: "Luxury Cotton",
    fit: "Regular Fit",
  },
];
