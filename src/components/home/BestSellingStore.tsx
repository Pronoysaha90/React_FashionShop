import { Link } from 'react-router-dom';
import { stores, formatPrice } from '@/data/products';
import { BadgeCheck } from 'lucide-react';
import shoppingBagsImage from '@/assets/shopping-bags.jpg';

// Import product images for stores
import jacketBlack from '@/assets/products/jacket-black.jpg';
import cameraBag from '@/assets/products/camera-bag.jpg';
import shoesBrown from '@/assets/products/shoes-brown.jpg';
import hatGray from '@/assets/products/hat-gray.jpg';

const storeProductImages = [jacketBlack, cameraBag, shoesBrown, hatGray];

const BestSellingStore = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-display font-bold text-center mb-8">
          Best Selling Store
        </h2>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured Image Card */}
          <div className="lg:col-span-2 glass-card overflow-hidden rounded-2xl relative min-h-[300px]">
            <img
              src={shoppingBagsImage}
              alt="BeliBeli Mall"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-display font-bold mb-2">BeliBeli Mall</h3>
              <p className="text-muted-foreground">
                Shop, Explore, Delight and Experience Mall Magic!
              </p>
            </div>
          </div>

          {/* Store Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-4">
            {stores.map((store, storeIndex) => (
              <Link
                key={store.id}
                to={`/store/${store.id}`}
                className="glass-card p-4 rounded-2xl hover:shadow-card-hover transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-lg font-bold">
                    {store.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <h4 className="font-semibold text-sm truncate">{store.name}</h4>
                      {store.verified && (
                        <BadgeCheck className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{store.tagline}</p>
                  </div>
                </div>

                {/* Store Products */}
                <div className="flex gap-2">
                  {store.products.slice(0, 3).map((product, index) => (
                    <div key={product.id} className="flex-1">
                      <div className="aspect-square rounded-lg overflow-hidden bg-secondary mb-1">
                        <img
                          src={storeProductImages[(storeIndex + index) % storeProductImages.length]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className="text-xs font-medium">{formatPrice(product.price)}</p>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellingStore;
