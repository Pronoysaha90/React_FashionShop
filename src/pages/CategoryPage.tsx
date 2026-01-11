import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { allProducts, categories } from '@/data/products';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = useState('popular');

  const category = categories.find((c) => c.id === categoryId);
  const products = categoryId === 'all' 
    ? allProducts 
    : allProducts.filter((p) => p.category === categoryId);

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground capitalize">{category?.name || 'All Products'}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold capitalize">
              {category?.name || 'All Products'} {category?.icon}
            </h1>
            <p className="text-muted-foreground">{sortedProducts.length} products found</p>
          </div>

          {/* Sort & Filter */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Sort by:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={cn(
                    'px-4 py-2 rounded-xl text-sm transition-all',
                    sortBy === option.value
                      ? 'bg-foreground text-background'
                      : 'glass hover:bg-secondary'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            to="/category/all"
            className={cn(
              'px-4 py-2 rounded-full text-sm transition-all',
              categoryId === 'all' ? 'bg-primary text-primary-foreground' : 'glass hover:bg-secondary'
            )}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className={cn(
                'px-4 py-2 rounded-full text-sm transition-all',
                categoryId === cat.id ? 'bg-primary text-primary-foreground' : 'glass hover:bg-secondary'
              )}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">No products found in this category</p>
            <Link to="/category/all" className="text-primary hover:underline">
              Browse all products
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
