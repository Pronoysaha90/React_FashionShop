import heroImage from '@/assets/hero-fashion.jpg';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="relative glass-card overflow-hidden rounded-3xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="p-8 md:p-12 lg:p-16 relative z-10">
              <span className="inline-block text-primary font-semibold mb-4 text-sm md:text-base">
                #Big Fashion Sale
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight">
                Limited Time Offer!{' '}
                <span className="block">
                  Up to <span className="text-gradient">50% OFF!</span>
                </span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Redefine Your Everyday Style
              </p>
              <Link to="/category/all">
                <Button size="lg" className="group">
                  Shop Now
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              {/* Pagination Dots */}
              <div className="flex gap-2 mt-8">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 md:h-full min-h-[300px] md:min-h-[500px]">
              <img
                src={heroImage}
                alt="Fashion Sale"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent md:from-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
