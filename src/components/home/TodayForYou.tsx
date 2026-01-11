import { useState } from 'react';
import ProductCard from '@/components/product/ProductCard';
import { todayProducts } from '@/data/products';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'best-seller', label: 'Best Seller' },
  { id: 'keep-stylish', label: 'Keep Stylish' },
  { id: 'special-discount', label: 'Special Discount' },
  { id: 'official-store', label: 'Official Store' },
  { id: 'coveted-product', label: 'Coveted Product' },
];

const TodayForYou = () => {
  const [activeTab, setActiveTab] = useState('best-seller');

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-xl md:text-2xl font-display font-bold">Todays For You!</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeTab === tab.id
                    ? 'bg-foreground text-background'
                    : 'glass hover:bg-secondary'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {todayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodayForYou;
