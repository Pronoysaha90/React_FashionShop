export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  soldCount: string;
  discount?: number;
  isFlashSale?: boolean;
  isFavorite?: boolean;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Store {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  verified: boolean;
  products: Product[];
}

export const categories: Category[] = [
  { id: 't-shirt', name: 'T-Shirt', icon: '👕' },
  { id: 'jacket', name: 'Jacket', icon: '🧥' },
  { id: 'shirt', name: 'Shirt', icon: '👔' },
  { id: 'jeans', name: 'Jeans', icon: '👖' },
  { id: 'bag', name: 'Bag', icon: '👜' },
  { id: 'shoes', name: 'Shoes', icon: '👟' },
  { id: 'watches', name: 'Watches', icon: '⌚' },
  // { id: 'cap', name: 'Cap', icon: '🧢' },
];

export const flashSaleProducts: Product[] = [
  {
    id: 'fs-1',
    name: 'EliteShield Performance Men\'s Jackets',
    price: 255000,
    originalPrice: 625000,
    image: '/placeholder.svg',
    category: 'jacket',
    rating: 4.9,
    soldCount: '10K+',
    discount: 59,
    isFlashSale: true,
  },
  {
    id: 'fs-2',
    name: 'Gentlemen\'s Summer Gray Hat - Premium Blend',
    price: 99000,
    originalPrice: 160000,
    image: '/placeholder.svg',
    category: 'cap',
    rating: 4.8,
    soldCount: '8K+',
    discount: 38,
    isFlashSale: true,
  },
  {
    id: 'fs-3',
    name: 'OptiZoom Camera Shoulder Bag',
    price: 250000,
    originalPrice: 425000,
    image: '/placeholder.svg',
    category: 'bag',
    rating: 4.9,
    soldCount: '5K+',
    discount: 41,
    isFlashSale: true,
  },
  {
    id: 'fs-4',
    name: 'Cloudy Chic - Grey Peep Toe Heeled Sandals',
    price: 270000,
    originalPrice: 560000,
    image: '/placeholder.svg',
    category: 'shoes',
    rating: 4.7,
    soldCount: '12K+',
    discount: 52,
    isFlashSale: true,
  },
  {
    id: 'fs-5',
    name: 'The Premium White Collection Shirt',
    price: 180000,
    originalPrice: 320000,
    image: '/placeholder.svg',
    category: 'shirt',
    rating: 4.8,
    soldCount: '7K+',
    discount: 44,
    isFlashSale: true,
  },
];

export const todayProducts: Product[] = [
  {
    id: 'td-1',
    name: 'UrbanEdge Men\'s Jeans Collection',
    price: 253000,
    originalPrice: 370000,
    image: '/placeholder.svg',
    category: 'jeans',
    rating: 4.9,
    soldCount: '10K+',
  },
  {
    id: 'td-2',
    name: 'Essentials Men\'s Long-Sleeve Oxford Shirt',
    price: 179000,
    image: '/placeholder.svg',
    category: 'shirt',
    rating: 4.9,
    soldCount: '10K+',
  },
  {
    id: 'td-3',
    name: 'StyleHaven Men\'s Fashionable Brogues',
    price: 199000,
    originalPrice: 325000,
    image: '/placeholder.svg',
    category: 'shoes',
    rating: 4.9,
    soldCount: '8K+',
  },
  {
    id: 'td-4',
    name: 'Essential Long-Sleeve Crewneck Shirt for Men',
    price: 120000,
    image: '/placeholder.svg',
    category: 'shirt',
    rating: 4.9,
    soldCount: '6K+',
  },
  {
    id: 'td-5',
    name: 'ClassicGent Men\'s Formal Shoes',
    price: 199000,
    image: '/placeholder.svg',
    category: 'shoes',
    rating: 4.9,
    soldCount: '4K+',
  },
  {
    id: 'td-6',
    name: 'UrbanFlex Men\'s Short Pants Collection',
    price: 162000,
    image: '/placeholder.svg',
    category: 'jeans',
    rating: 4.9,
    soldCount: '2K+',
  },
  {
    id: 'td-7',
    name: 'ChicCarry - Elegant Women\'s Tote Collection',
    price: 650000,
    image: '/placeholder.svg',
    category: 'bag',
    rating: 4.9,
    soldCount: '500+',
  },
  {
    id: 'td-8',
    name: 'Sophisticated Women\'s Parka Line',
    price: 324000,
    originalPrice: 650000,
    image: '/placeholder.svg',
    category: 'jacket',
    rating: 4.8,
    soldCount: '100+',
  },
];

export const stores: Store[] = [
  {
    id: 'store-1',
    name: 'Nike Sae Mall',
    tagline: '"Just do it boi!"',
    logo: '/placeholder.svg',
    verified: true,
    products: [
      { id: 'ns-1', name: 'Nike Running Shoes', price: 650000, image: '/placeholder.svg', category: 'shoes', rating: 4.9, soldCount: '20K+' },
      { id: 'ns-2', name: 'Nike Sport Bag', price: 270000, image: '/placeholder.svg', category: 'bag', rating: 4.8, soldCount: '15K+' },
      { id: 'ns-3', name: 'Nike Cap', price: 99000, image: '/placeholder.svg', category: 'cap', rating: 4.7, soldCount: '10K+' },
    ],
  },
  {
    id: 'store-2',
    name: 'Barudak Disaster Mall',
    tagline: '"Unleash Your Fashion!"',
    logo: '/placeholder.svg',
    verified: true,
    products: [
      { id: 'bd-1', name: 'Designer Jacket', price: 324000, image: '/placeholder.svg', category: 'jacket', rating: 4.9, soldCount: '8K+' },
      { id: 'bd-2', name: 'Premium Jeans', price: 199000, image: '/placeholder.svg', category: 'jeans', rating: 4.8, soldCount: '12K+' },
      { id: 'bd-3', name: 'Casual Shirt', price: 120000, image: '/placeholder.svg', category: 'shirt', rating: 4.7, soldCount: '6K+' },
    ],
  },
  {
    id: 'store-3',
    name: 'Galaxy Galleria Mall',
    tagline: '"Be Extraordinary"',
    logo: '/placeholder.svg',
    verified: true,
    products: [
      { id: 'gg-1', name: 'Luxury Watch', price: 179000, image: '/placeholder.svg', category: 'watches', rating: 4.9, soldCount: '5K+' },
      { id: 'gg-2', name: 'Premium Handbag', price: 199000, image: '/placeholder.svg', category: 'bag', rating: 4.8, soldCount: '7K+' },
      { id: 'gg-3', name: 'Designer Heels', price: 253000, image: '/placeholder.svg', category: 'shoes', rating: 4.9, soldCount: '4K+' },
    ],
  },
  {
    id: 'store-4',
    name: 'Aurora Well Mall',
    tagline: '"Chic, Bold, Confident"',
    logo: '/placeholder.svg',
    verified: true,
    products: [
      { id: 'aw-1', name: 'Elegant Dress', price: 250000, image: '/placeholder.svg', category: 'shirt', rating: 4.9, soldCount: '3K+' },
      { id: 'aw-2', name: 'Leather Bag', price: 162000, image: '/placeholder.svg', category: 'bag', rating: 4.8, soldCount: '5K+' },
      { id: 'aw-3', name: 'Fashion Sneakers', price: 255000, image: '/placeholder.svg', category: 'shoes', rating: 4.7, soldCount: '8K+' },
    ],
  },
];

export const allProducts: Product[] = [...flashSaleProducts, ...todayProducts];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price).replace('IDR', 'Rp');
};
