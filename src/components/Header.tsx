import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "School Uniforms", href: "/school-uniforms" },
    { name: "Womens Uniforms", href: "/womens-uniforms" },
    { name: "Mens Uniforms", href: "/mens-uniforms" },
    { name: "Company Uniforms", href: "/company-uniforms" },
    { name: "Hospital Uniforms", href: "/company-uniforms" },
    { name: "Hotel Uniforms", href: "/company-uniforms" },
    { name: "Other Uniforms", href: "/company-uniforms" },
  ];

  return (
    <header className="bg-white shadow-md">
      {/* Top Header */}
      <div className="bg-gray-50 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="text-gray-600">
            Leading Uniform Manufacturer and wholesaler in Erode, Tamilnadu
          </div>
          <div className="flex items-center gap-4 text-brand-red">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Looking for Uniforms?
              <a
                href="tel:+919786197831"
                className="font-semibold hover:underline"
              >
                97861 97831
              </a>
              ,
              <a
                href="tel:+919786597835"
                className="font-semibold hover:underline"
              >
                97865 97835
              </a>
            </div>
            {/* <button className="font-medium bg-slate-300 p-2 rounded hover:bg-orange-300">
              Login
            </button> */}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-red to-brand-blue rounded-full flex items-center justify-center mr-4">
              <div className="text-white font-bold text-lg">S</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-brand-red">SRI SAKTHI</span>
              </h1>
              <p className="text-brand-blue text-lg font-semibold">UNIFORMS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "ghost"}
                asChild
                className={
                  index === 0
                    ? "bg-brand-red hover:bg-brand-red/90"
                    : "hover:bg-brand-blue hover:text-white"
                }
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-2 pt-4">
              {menuItems.map((item, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "ghost"}
                  asChild
                  className={`justify-start ${
                    index === 0
                      ? "bg-brand-red hover:bg-brand-red/90"
                      : "hover:bg-brand-blue hover:text-white"
                  }`}
                >
                  <a href={item.href}>{item.name}</a>
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
