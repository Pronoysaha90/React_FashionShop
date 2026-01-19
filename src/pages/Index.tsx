import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategoryIcons from '@/components/home/CategoryIcons';
import FlashSale from '@/components/home/FlashSale';
import TodayForYou from '@/components/home/TodayForYou';
import BestSellingStore from '@/components/home/BestSellingStore';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CategoryIcons />
      <FlashSale />
      {/* <TodayForYou /> */}
      <BestSellingStore />
    </Layout>
  );
};

export default Index;
