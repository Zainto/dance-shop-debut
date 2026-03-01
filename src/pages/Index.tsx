import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import BestSellersSection from "@/components/BestSellersSection";
import WhyUsSection from "@/components/WhyUsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <BestSellersSection />
      <WhyUsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
