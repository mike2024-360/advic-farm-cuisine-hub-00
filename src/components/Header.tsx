
import { useState } from "react";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Recipes", href: "#recipes" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c085db68-3a73-4fa4-acff-746ef529829e.png" 
              alt="Advic Farms Logo" 
              className="h-10 w-10"
            />
            <div>
              <h1 className="text-xl font-bold text-green-700">ADVIC FARMS</h1>
              <p className="text-xs text-green-600">Farms and Allied Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+2348067353063" className="flex items-center text-green-600 hover:text-green-700">
              <Phone size={16} className="mr-1" />
              <span className="text-sm">+234 806 735 3063</span>
            </a>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <ShoppingCart size={16} className="mr-2" />
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t">
                <a href="tel:+2348067353063" className="flex items-center text-green-600 mb-3">
                  <Phone size={16} className="mr-2" />
                  +234 806 735 3063
                </a>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <ShoppingCart size={16} className="mr-2" />
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
