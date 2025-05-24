
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/c085db68-3a73-4fa4-acff-746ef529829e.png" 
                alt="Advic Farms Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold text-white">ADVIC FARMS</h3>
                <p className="text-sm text-gray-300">Farms and Allied Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Providing premium quality snails and authentic Nigerian food products with a commitment to sustainability and health.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://web.facebook.com/AdvicFarms/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/advicfarms"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://x.com/advicfarms"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-green-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-green-400 transition-colors">Products</a></li>
              <li><a href="#recipes" className="text-gray-300 hover:text-green-400 transition-colors">Recipes</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-green-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Fresh Live Snails</span></li>
              <li><span className="text-gray-300">Packaged Snail Meat</span></li>
              <li><span className="text-gray-300">Nigerian Spice Blends</span></li>
              <li><span className="text-gray-300">Traditional Sauces</span></li>
              <li><span className="text-gray-300">Gift Baskets</span></li>
              <li><span className="text-gray-300">Bulk Orders</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <p className="font-medium">Phone:</p>
                <a href="tel:+2348067353063" className="hover:text-green-400 transition-colors">
                  +234 806 735 3063
                </a>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">Email:</p>
                <a href="mailto:info@advicfarms.com" className="hover:text-green-400 transition-colors">
                  info@advicfarms.com
                </a>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">Location:</p>
                <p>Lagos, Nigeria</p>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">WhatsApp:</p>
                <a 
                  href="https://chat.whatsapp.com/Djg616Fw1J04oYyugxfaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  Join Our Channel
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Advic Farms. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Delivery Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
