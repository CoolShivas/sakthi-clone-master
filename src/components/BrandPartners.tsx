import { Card, CardContent } from "@/components/ui/card";

const BrandPartners = () => {
  const brands = [
    {
      name: "Raymond",
      description: "Raymond supplier in Erode",
      image: "../../public/images/Raymond Limited Logo 2.jpg",
    },
    {
      name: "Siyarams",
      description: "Siyarams supplier in Erode",
      image: "../../public/images/siyarams.png",
    },
    {
      name: "Sparsh Fab",
      description: "Sparsh Fab supplier in Erode",
      image: "../../public/images/SparshFab.jpg",
    },
    {
      name: "Darshan Valji",
      description: "Darshan Valji supplier in Erode",
      image: "../../public/images/DarshanValji.png",
    },
    {
      name: "Subhtex",
      description: "Subhtex supplier in Erode",
      image: "../../public/images/Subhtex.jpg",
    },
    {
      name: "Swaraj",
      description: "Swaraj supplier in Erode",
      image: "../../public/images/Swaraj.png",
    },
    {
      name: "Nakoda",
      description: "Nakoda supplier in Erode",
      image: "../../public/images/Nakoda.png",
    },
    {
      name: "Qmax",
      description: "Qmax supplier in Erode",
      image: "../../public/images/Qmax.webp",
    },
    {
      name: "Mafatlal",
      description: "Mafatlal supplier in Erode",
      image: "../../public/images/Mafatlal.jpg",
    },
    {
      name: "Kanchan",
      description: "Kanchan supplier in Erode",
      image: "../../public/images/Kanchan.png",
    },
    {
      name: "House of Uniforms",
      description: "House of uniforms supplier in Erode",
      image: "../../public/images/HouseUniforms.webp",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Brand Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Authorized dealers and suppliers of premium uniform brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-4">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-3 group-hover:from-brand-red/5 group-hover:to-brand-blue/5 transition-all">
                  <div className="text-center">
                    {/* <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-blue rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold text-lg">
                        {brand.name.charAt(0)}
                      </span>
                    </div> */}
                    <img src={brand.image} alt="image not found" />
                    {/* <p className="text-xs text-gray-500">Brand Logo</p> */}
                  </div>
                </div>
                <h3 className="font-semibold text-sm text-center text-gray-800 group-hover:text-brand-red transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-gray-500 text-center mt-1">
                  Dealer in Erode
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center p-8 bg-gradient-to-r from-brand-red to-brand-blue rounded-lg text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Authorized Dealer</h3>
              <p className="text-lg opacity-90">
                Premium Quality Fabrics & Uniforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
