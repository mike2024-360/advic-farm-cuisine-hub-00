
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Truck, Shield, Phone } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Live Snails",
      description: "Premium quality live snails, farm-fresh and ready for cooking. Bred under optimal conditions for vitality and fast growth.",
      image: "/lovable-uploads/cf0463ec-5aa6-4f55-a07b-23b6077d5227.png",
      price: "₦2,500",
      unit: "per kg",
      features: ["Farm Fresh", "Live Delivery", "Premium Size", "Disease-Resistant"]
    },
    {
      id: 2,
      name: "Garri on the GO!",
      description: "Ready-to-consume Garri in convenient packaging. Made from cassava, groundnut, milk and sugar.",
      image: "/lovable-uploads/25ee4fd3-aab8-454e-b13a-7221e1ad6302.png",
      price: "₦800",
      unit: "per pack",
      features: ["Ready to Eat", "Natural Ingredients", "120g Pack", "Fresh & Crunchy"]
    },
    {
      id: 3,
      name: "Packaged Snail Meat",
      description: "Pre-cleaned and packaged snail meat for convenience. Hygienically processed and fresh frozen.",
      image: "/lovable-uploads/5f54e3ec-20fa-4a0a-99d6-a1035c7c587f.png",
      price: "₦3,200",
      unit: "per kg",
      features: ["Ready to Cook", "Hygienically Packaged", "Fresh Frozen", "High Survival Rate"]
    },
    {
      id: 4,
      name: "Kulikuli (US Available)",
      description: "Delicious and crunchy Kulikuli now available internationally. Premium Nigerian snack made with traditional recipes.",
      image: "/lovable-uploads/20aa220c-025c-4a24-aac6-7a084d0ecb23.png",
      price: "Contact",
      unit: "for pricing",
      features: ["International Shipping", "Traditional Recipe", "Crunchy Texture", "Premium Quality"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From farm-fresh snails to authentic Nigerian foods - discover our range of premium quality products bred under the best conditions
          </p>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-green-600 text-white rounded-lg p-6 mb-12 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Custom Orders Welcome! 🔥
          </h3>
          <p className="mb-4">Whatever you want of your snails, just inform us and we'll make it happen for you!</p>
          <div className="flex items-center justify-center space-x-2">
            <Phone size={20} />
            <span className="font-bold">08067353063</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Premium
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-gray-500 ml-1">{product.unit}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <Star className="text-yellow-400 fill-current" size={16} />
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <ShoppingCart size={16} className="mr-2" />
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Truck className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Safe Nationwide Delivery</h3>
            <p className="text-gray-600">Insulated containers ensure fresh delivery anywhere in Nigeria. An extra mile doesn't mean a thing!</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Shield className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Breeding Practices</h3>
            <p className="text-gray-600">Right parent stock selection with optimal humidity, temperature, and proper feeding supplements</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Star className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality Guarantee</h3>
            <p className="text-gray-600">Quality is our watchword. Disease-resistant hatchlings with high survival rates and fast growth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
