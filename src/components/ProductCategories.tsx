import { Card, CardContent } from '@/components/ui/card';

const ProductCategories = () => {
  const categories = [
    {
      title: "SCHOOL UNIFORMS",
      image: "/category-school.jpg",
      items: [
        "CBSE School Uniforms",
        "Private School Uniforms", 
        "Government School Uniforms",
        "Uniform Shirtings",
        "Uniform Suitings",
        "Plain School Uniforms"
      ]
    },
    {
      title: "WOMENS UNIFORMS", 
      image: "/category-womens.jpg",
      items: [
        "Teachers Uniform Sarees",
        "Staff Uniform Sarees",
        "Wedding Uniform Sarees", 
        "Plain Uniform Sarees",
        "Set Sarees",
        "Uniform Chudithars"
      ]
    },
    {
      title: "MENS UNIFORMS",
      image: "/category-mens.jpg", 
      items: [
        "Uniform Shirts",
        "Uniform Pants",
        "Uniform Blazers",
        "Uniform Tshirts", 
        "Uniform Waist Coats",
        "Mens Staff Uniforms"
      ]
    },
    {
      title: "COMPANY UNIFORMS",
      image: "/category-company.jpg",
      items: [
        "Company Uniforms",
        "Hospital Uniforms", 
        "Staff Uniforms",
        "Industrial Uniforms",
        "Mechanic Uniforms",
        "Hotel Uniforms"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Product Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leading manufacturer and supplier of premium quality uniforms for all industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-red to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="text-white font-bold text-xl">
                          {category.title.charAt(0)}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Product Image</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-red mb-4 group-hover:text-brand-blue transition-colors">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 hover:text-brand-blue transition-colors cursor-pointer">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;