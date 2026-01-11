import { useSearchParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/product/ProductCard';
import { allProducts } from '@/data/products';
import { Search } from 'lucide-react';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Search className="h-6 w-6 text-primary" />
            <h1 className="text-2xl md:text-3xl font-display font-bold">
              Search Results
            </h1>
          </div>
          <p className="text-muted-foreground">
            {filteredProducts.length} results for "{query}"
          </p>
        </div>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl">
            <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">No products found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any products matching "{query}"
            </p>
            <Link to="/category/all" className="text-primary hover:underline">
              Browse all products
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchResults;
