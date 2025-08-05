import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const usefulLinks = [
    { name: "Home", href: "/" },
    { name: "School Uniforms", href: "/school-uniforms" },
    { name: "Womens Uniforms", href: "/womens-uniforms" },
    { name: "Mens Uniforms", href: "/mens-uniforms" },
    { name: "Company Uniforms", href: "/company-uniforms" },
    { name: "Hospital Uniforms", href: "/hospital-uniforms" },
    { name: "Hotel Uniforms", href: "/hotel-uniforms" },
    { name: "Other Uniforms", href: "/other-uniforms" },
    { name: "About Sakthi Uniforms", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-blue rounded-full flex items-center justify-center mr-3">
                <div className="text-white font-bold text-lg">S</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-red">SRI SAKTHI</h3>
                <p className="text-brand-blue font-semibold">UNIFORMS</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading Uniform Manufacturer and wholesaler in Erode, Tamilnadu since 1996.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">97861 97831, 97865 97835</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">contact@sakthiuniforms.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm">www.sakthiuniforms.com</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-red">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.slice(0, 5).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-brand-blue transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-transparent">More Links</h4>
            <ul className="space-y-2">
              {usefulLinks.slice(5).map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-brand-blue transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-red">Contact Info</h4>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-sm mb-1">Main Office:</p>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-xs">
                    D.No. 391, Easwaran Koil Street,<br />
                    Erode, Tamilnadu, India - 638001
                  </p>
                </div>
              </div>
              <div>
                <p className="font-semibold text-sm mb-1">Branch Office:</p>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-xs">
                    D.No. 29, Ramasamy Street,<br />
                    Erode, Tamilnadu, India - 638001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Copyright © 2025, <span className="text-brand-red">Sri Sakthi Uniforms, Erode</span>
          </p>
          <p className="text-gray-400 text-sm">
            Website design by AJKM Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;