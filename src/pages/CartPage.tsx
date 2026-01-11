import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { useCart } from '@/contexts/CartContext';
import { formatPrice } from '@/data/products';
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  'fs-1': jacketBlack, 'fs-2': hatGray, 'fs-3': cameraBag, 'fs-4': heelsGray, 'fs-5': shirtWhite,
  'td-1': jeansBlue, 'td-2': shirtWhite, 'td-3': shoesBrown, 'td-4': shirtWhite, 'td-5': shoesBrown,
  'td-6': jeansBlue, 'td-7': toteBag, 'td-8': parkaGray,
};

const categoryMap: Record<string, string> = {
  jacket: jacketBlack, cap: hatGray, bag: cameraBag, shoes: shoesBrown, jeans: jeansBlue, shirt: shirtWhite,
};

const CartPage = () => {
  const { items, updateQuantity, removeItem, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="glass-card rounded-2xl p-12 max-w-md mx-auto">
            <ShoppingCart className="h-20 w-20 mx-auto mb-6 text-muted-foreground" />
            <h1 className="text-2xl font-display font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/category/all">
              <Button>
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => {
              const productImage = imageMap[item.id] || categoryMap[item.category] || jacketBlack;
              return (
                <div
                  key={item.id}
                  className="glass-card rounded-2xl p-4 flex gap-4 items-center"
                >
                  <Link to={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl overflow-hidden bg-secondary">
                      <img
                        src={productImage}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-medium line-clamp-2 hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-primary font-bold mt-1">{formatPrice(item.price)}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              );
            })}

            <button
              onClick={clearCart}
              className="text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 sticky top-32">
              <h2 className="font-display font-bold text-lg mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-primary">Free</span>
                </div>
                <div className="border-t border-glass-border pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <Link to="/checkout">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
