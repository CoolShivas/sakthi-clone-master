import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MensUniforms = () => {
  const mensCategories = [
    {
      title: "Uniform Shirts",
      description: "High-quality formal shirts designed for professional and institutional wear.",
      features: ["Premium cotton", "Professional fit", "Multiple colors", "Durable fabric"]
    },
    {
      title: "Uniform Pants", 
      description: "Comfortable and professional trousers for office and institutional use.",
      features: ["Formal cut", "Wrinkle resistant", "Multiple sizes", "Professional look"]
    },
    {
      title: "Uniform Blazers",
      description: "Elegant blazers for formal occasions and professional environments.",
      features: ["Formal occasions", "Premium fabrics", "Tailored fit", "Professional style"]
    },
    {
      title: "Uniform T-shirts",
      description: "Comfortable casual wear t-shirts for informal work environments.",
      features: ["Cotton blend", "Comfortable fit", "Casual wear", "Easy care"]
    },
    {
      title: "Uniform Waist Coats", 
      description: "Stylish waistcoats to complete the formal uniform ensemble.",
      features: ["Formal accessory", "Professional look", "Perfect fit", "Quality fabric"]
    },
    {
      title: "Men's Staff Uniforms",
      description: "Complete uniform sets designed specifically for male staff members.",
      features: ["Complete sets", "Staff uniforms", "Professional appearance", "Bulk orders"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-brand-red to-brand-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Men's Uniforms</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Shirts, Pants, Blazers and Professional Wear
          </p>
          <div className="max-w-4xl mx-auto">
            <img 
              src="/hero-mens-uniforms.jpg" 
              alt="Men's Uniforms" 
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Men's Uniform Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional and comfortable uniforms designed for modern working men
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mensCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="text-white font-bold text-xl">
                          {category.title.charAt(0)}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Product Image</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-brand-red group-hover:text-brand-blue transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <ul className="space-y-1">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-brand-blue rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Need Custom Men's Uniforms?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for bulk orders, custom designs, and special pricing for organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919786197831"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red/90 transition-colors"
              >
                Call: 97861 97831
              </a>
              <a 
                href="tel:+919786597835"
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-blue/90 transition-colors"
              >
                Call: 97865 97835
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MensUniforms;