
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(46, 125, 50, 0.7), rgba(46, 125, 50, 0.7)), url('/lovable-uploads/eac6eb4d-a42d-4fec-9019-84c305badf39.png')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/c085db68-3a73-4fa4-acff-746ef529829e.png" 
              alt="Advic Farms Logo" 
              className="h-20 w-20"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Healthy Nigerian Food
            <span className="block text-yellow-300">& Fresh Snails</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Farm-to-table freshness meets traditional Nigerian cuisine. Experience the finest quality snails and authentic food products from our sustainable farm.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Leaf className="mr-2 text-green-300" size={20} />
              <span>100% Organic</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Heart className="mr-2 text-red-300" size={20} />
              <span>Farm Fresh</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="mr-2 text-yellow-300" size={20} />
              <span>Premium Quality</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
              Shop Fresh Snails
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 text-lg">
              Explore Recipes
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
