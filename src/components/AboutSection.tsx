import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, Calendar, MapPin } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Since 1996",
      description: "Over 25 years of experience in uniform manufacturing"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Finest fabrics like crepe, georgette and synthetic"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled craftsmen and designers"
    },
    {
      icon: MapPin,
      title: "Pan India Service",
      description: "Serving customers across India"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo with red border */}
          <div className="flex justify-center">
            <div className="bg-brand-red p-1 max-w-sm">
              <div className="bg-white p-0.5">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Sri Sakthi Uniforms Team" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl font-bold text-brand-red mb-4">Sri Sakthi Uniforms</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">
              Leading Uniform Manufacturer<br />and Supplier
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              Established in the year 1996, Sri Sakthi Uniforms has been recognized as one of the leading manufacturer and supplier of School uniforms, Womens Uniform Sarees, Womens uniform chudidhars and mens uniform. Over the years Sri Sakthi Uniforms has mastered the art of uniform making and delivering the right uniform tailored to the clients specifications. We constantly strive to bring you new and innovative uniform designs with the finest premium quality fabrics like crepe, georgette and synthetic. We are a renowned manufacturers and suppliers of Uniform Sarees and uniform Chudidhars.
            </p>
            <Button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-2">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;