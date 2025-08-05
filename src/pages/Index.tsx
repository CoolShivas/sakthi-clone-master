import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import ProductCategories from '@/components/ProductCategories';
import BrandPartners from '@/components/BrandPartners';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <ProductCategories />
      <BrandPartners />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
