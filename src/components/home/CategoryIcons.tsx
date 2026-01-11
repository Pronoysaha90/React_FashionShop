import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { Grid3X3 } from 'lucide-react';

const CategoryIcons = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all hover:bg-secondary group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 glass-card rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
          <Link
            to="/categories"
            className="flex flex-col items-center gap-2 p-4 rounded-2xl transition-all hover:bg-secondary group"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 glass-card rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Grid3X3 className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground" />
            </div>
            <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              All Category
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryIcons;
