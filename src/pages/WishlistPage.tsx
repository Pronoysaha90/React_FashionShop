import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { allProducts } from '@/data/products';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  // For demo, show some products as wishlist items
  const wishlistItems = allProducts.slice(0, 4);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-8">My Wishlist</h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {wishlistItems.map((product) => (
              <ProductCard key={product.id} product={{ ...product, isFavorite: true }} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Save items you love to your wishlist.
            </p>
            <Link to="/category/all" className="text-primary hover:underline">
              Browse products
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default WishlistPage;
