import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Building, CreditCard } from 'lucide-react';

const ContactSection = () => {
  const serviceAreas = [
    "Erode", "Coimbatore", "Salem", "Tirupur", "Namakkal", "Dharmapuri",
    "Thanjavur", "Madurai", "Chennai", "Bangalore", "Palakkad", "Trivandrum",
    "Ernakulam", "Kollam", "Surat", "Bhilwara", "Bhiwandi", "Mumbai"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for all your uniform requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Office */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-brand-red">
                <Building className="w-5 h-5 mr-2" />
                Main Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 text-brand-blue" />
                <div>
                  <p className="font-semibold">Sri Sakthi Uniforms</p>
                  <p className="text-gray-600">D.No. 391, Easwaran Koil Street,<br />Erode, Tamilnadu, India - 638001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-brand-blue" />
                <div className="space-x-2">
                  <a href="tel:+919786197831" className="text-brand-red hover:underline">+91 97861 97831</a>
                  <span className="text-gray-400">|</span>
                  <a href="tel:+919786597835" className="text-brand-red hover:underline">+91 97865 97835</a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-brand-blue" />
                <a href="mailto:contact@sakthiuniforms.com" className="text-brand-red hover:underline">
                  contact@sakthiuniforms.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Branch Office */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-brand-red">
                <Building className="w-5 h-5 mr-2" />
                Branch Office
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mt-1 mr-2 text-brand-blue" />
                <div>
                  <p className="font-semibold">Sri Sakthi Uniforms</p>
                  <p className="text-gray-600">D.No. 29, Ramasamy Street,<br />Erode, Tamilnadu, India - 638001</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* GST & Bank Details */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center text-brand-red">
                <CreditCard className="w-5 h-5 mr-2" />
                Business Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-gray-800">GST No:</p>
                <p className="text-gray-600">33AUBPS5016P2ZC</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Bank Details:</p>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>Account Name: Sri Sakthi Uniforms</p>
                  <p>Account No: 5020 003 8888427</p>
                  <p>IFSC code: HDFC0001589</p>
                  <p>Branch: Gandhiji Road, Erode</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Areas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-brand-red">Our Service Areas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 justify-center">
              {serviceAreas.map((area, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-brand-red/10 to-brand-blue/10 text-gray-700 rounded-full text-sm hover:from-brand-red/20 hover:to-brand-blue/20 transition-colors cursor-pointer"
                >
                  {area}
                </span>
              ))}
              <span className="px-3 py-1 bg-gradient-to-r from-brand-red to-brand-blue text-white rounded-full text-sm font-semibold">
                + All India
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;