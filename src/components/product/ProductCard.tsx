import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Product, formatPrice } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';

// Import product images
import jacketBlack from '@/assets/products/jacket-black.jpg';
import hatGray from '@/assets/products/hat-gray.jpg';
import cameraBag from '@/assets/products/camera-bag.jpg';
import heelsGray from '@/assets/products/heels-gray.jpg';
import jeansBlue from '@/assets/products/jeans-blue.jpg';
import shirtWhite from '@/assets/products/shirt-white.jpg';
import shoesBrown from '@/assets/products/shoes-brown.jpg';
import toteBag from '@/assets/products/tote-bag.jpg';
import parkaGray from '@/assets/products/parka-gray.jpg';

// Image mapping based on product category or ID
const getProductImage = (product: Product): string => {
  const imageMap: Record<string, string> = {
    'fs-1': jacketBlack,
    'fs-2': hatGray,
    'fs-3': cameraBag,
    'fs-4': heelsGray,
    'fs-5': shirtWhite,
    'td-1': jeansBlue,
    'td-2': shirtWhite,
    'td-3': shoesBrown,
    'td-4': shirtWhite,
    'td-5': shoesBrown,
    'td-6': jeansBlue,
    'td-7': toteBag,
    'td-8': parkaGray,
  };
  
  if (imageMap[product.id]) return imageMap[product.id];
  
  // Fallback based on category
  const categoryMap: Record<string, string> = {
    jacket: jacketBlack,
    cap: hatGray,
    bag: cameraBag,
    shoes: shoesBrown,
    jeans: jeansBlue,
    shirt: shirtWhite,
    watches: hatGray,
  };
  
  return categoryMap[product.category] || jacketBlack;
};

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'flash-sale';
}

const ProductCard = ({ product, variant = 'default' }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const productImage = getProductImage(product);

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={productImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Favorite Button */}
          <button
            onClick={handleFavorite}
            className="absolute top-3 right-3 w-8 h-8 glass rounded-full flex items-center justify-center transition-all hover:scale-110"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isFavorite ? 'fill-primary text-primary' : 'text-foreground'
              }`}
            />
          </button>

          {/* Discount Badge */}
          {product.discount && variant === 'flash-sale' && (
            <div className="absolute bottom-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs font-semibold">
              {product.discount}% OFF
            </div>
          )}

          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-sm line-clamp-2 mb-2 min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Rating & Sold */}
          <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-primary text-primary" />
              <span>{product.rating}</span>
            </div>
            <span>•</span>
            <span>{product.soldCount} Sold</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
