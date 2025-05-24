
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Truck, Shield } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Live Snails",
      description: "Premium quality live snails, farm-fresh and ready for cooking",
      image: "/lovable-uploads/5f54e3ec-20fa-4a0a-99d6-a1035c7c587f.png",
      price: "₦2,500",
      unit: "per kg",
      features: ["Farm Fresh", "Live Delivery", "Premium Size"]
    },
    {
      id: 2,
      name: "Nigerian Spice Blends",
      description: "Authentic spice mixes for traditional Nigerian dishes",
      image: "/lovable-uploads/b597bdb1-8114-4828-b827-486695826493.png",
      price: "₦800",
      unit: "per pack",
      features: ["100% Natural", "Traditional Recipe", "Premium Quality"]
    },
    {
      id: 3,
      name: "Packaged Snail Meat",
      description: "Pre-cleaned and packaged snail meat for convenience",
      image: "/lovable-uploads/5f54e3ec-20fa-4a0a-99d6-a1035c7c587f.png",
      price: "₦3,200",
      unit: "per kg",
      features: ["Ready to Cook", "Hygienically Packaged", "Fresh Frozen"]
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
            From farm-fresh snails to authentic Nigerian spices, discover our range of premium quality products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                    Fresh
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
                  Add to Cart
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
            <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same-day delivery within Lagos and next-day nationwide</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Shield className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">100% satisfaction guaranteed or your money back</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Star className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Only the finest products make it to your table</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
