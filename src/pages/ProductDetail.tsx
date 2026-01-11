import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { allProducts, formatPrice, Product } from '@/data/products';
import { Heart, Star, ShoppingCart, Minus, Plus, ChevronRight, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import ProductCard from '@/components/product/ProductCard';

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

const categoryImageMap: Record<string, string> = {
  jacket: jacketBlack,
  cap: hatGray,
  bag: cameraBag,
  shoes: shoesBrown,
  jeans: jeansBlue,
  shirt: shirtWhite,
  watches: hatGray,
};

const getProductImage = (product: Product): string => {
  if (imageMap[product.id]) return imageMap[product.id];
  return categoryImageMap[product.category] || jacketBlack;
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const { addItem } = useCart();

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </Layout>
    );
  }

  const productImage = getProductImage(product);
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast.success(`${quantity}x ${product.name} added to cart!`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to={`/category/${product.category}`} className="hover:text-foreground transition-colors capitalize">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="glass-card rounded-2xl overflow-hidden aspect-square">
              <img
                src={productImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl overflow-hidden aspect-square cursor-pointer transition-all ${
                    i === 0 ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={productImage}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{product.soldCount} Sold</span>
              </div>
            </div>

            {/* Price */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-lg text-sm font-medium">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">
                Experience premium quality with this {product.name}. Made with high-quality materials
                for durability and comfort. Perfect for everyday wear and special occasions.
                Available in multiple sizes to ensure the perfect fit.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button onClick={handleAddToCart} size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                onClick={() => {
                  setIsFavorite(!isFavorite);
                  toast.success(isFavorite ? 'Removed from wishlist' : 'Added to wishlist');
                }}
                variant="outline"
                size="lg"
                className={isFavorite ? 'text-primary border-primary' : ''}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-primary' : ''}`} />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl text-center">
                <Truck className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">Free Shipping</span>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <Shield className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">Secure Payment</span>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <RotateCcw className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-xs text-muted-foreground">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
