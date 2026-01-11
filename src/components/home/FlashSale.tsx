import { useState, useEffect } from 'react';
import { Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { flashSaleProducts } from '@/data/products';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 8,
    minutes: 17,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary fill-primary" />
              <h2 className="text-xl md:text-2xl font-display font-bold">Flash Sale</h2>
            </div>
            
            {/* Countdown Timer */}
            <div className="flex items-center gap-1">
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded-lg font-mono font-bold text-sm">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-primary font-bold">:</span>
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded-lg font-mono font-bold text-sm">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-primary font-bold">:</span>
              <div className="bg-primary text-primary-foreground px-2 py-1 rounded-lg font-mono font-bold text-sm">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 glass-card rounded-xl flex items-center justify-center hover:bg-secondary transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="flash-sale" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
