import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      images: ["/hero-school-uniforms.jpg", "/hero-womens-uniforms.jpg", "/hero-mens-uniforms.jpg", "/hero-company-uniforms.jpg"],
      title: "SCHOOL UNIFORMS",
      subtitle: "CBSE School Uniforms, Private School Uniforms and Government School Uniforms",
      category: "school"
    },
    {
      images: ["/hero-womens-uniforms.jpg", "/hero-school-uniforms.jpg", "/hero-mens-uniforms.jpg", "/hero-company-uniforms.jpg"], 
      title: "WOMENS UNIFORMS",
      subtitle: "Teachers Uniform Sarees, Staff Uniform Sarees and Wedding Uniform Sarees",
      category: "womens"
    },
    {
      images: ["/hero-mens-uniforms.jpg", "/hero-school-uniforms.jpg", "/hero-womens-uniforms.jpg", "/hero-company-uniforms.jpg"],
      title: "MENS UNIFORMS", 
      subtitle: "Uniform Shirts, Uniform Pants and Uniform Blazers",
      category: "mens"
    },
    {
      images: ["/hero-company-uniforms.jpg", "/hero-school-uniforms.jpg", "/hero-womens-uniforms.jpg", "/hero-mens-uniforms.jpg"],
      title: "COMPANY UNIFORMS",
      subtitle: "Mens Uniforms, Womens Uniforms and Staff Uniforms",
      category: "company"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-white">
      {/* Image Container */}
      <div className="relative h-full">
        {/* Background Images - Side by Side Layout */}
        <div className="flex h-full transition-transform duration-1000 ease-in-out">
          {slides[currentSlide].images.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-1/4 h-full relative overflow-hidden"
            >
              <img 
                src={image} 
                alt={`Uniform ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>

        {/* Red Banner Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-brand-red/95 backdrop-blur-sm px-8 py-6 md:px-16 md:py-8 transform -skew-x-12 shadow-2xl">
            <div className="transform skew-x-12 text-center text-white">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-brand-red to-brand-blue rounded-full flex items-center justify-center">
                    <div className="text-white font-bold text-sm">S</div>
                  </div>
                </div>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-2 tracking-wider">
                {slides[currentSlide].title}
              </h2>
              <p className="text-sm md:text-lg opacity-95 max-w-md mx-auto">
                {slides[currentSlide].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-brand-red/80 hover:bg-brand-red text-white border-0 rounded-full w-12 h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-brand-red/80 hover:bg-brand-red text-white border-0 rounded-full w-12 h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-brand-red scale-125' : 'bg-white/70 hover:bg-white'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;