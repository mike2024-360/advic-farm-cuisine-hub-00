
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "/lovable-uploads/5f54e3ec-20fa-4a0a-99d6-a1035c7c587f.png",
      alt: "Fresh snails at Advic Farms",
      category: "Products"
    },
    {
      src: "/lovable-uploads/b597bdb1-8114-4828-b827-486695826493.png",
      alt: "Nigerian spices and products",
      category: "Products"
    },
    {
      src: "/lovable-uploads/eac6eb4d-a42d-4fec-9019-84c305badf39.png",
      alt: "Farm team at work",
      category: "Farm Life"
    },
    {
      src: "/lovable-uploads/94eb5729-99aa-4ef3-930e-c7bec63af710.png",
      alt: "Friday vibes promotion",
      category: "Promotions"
    },
    {
      src: "/lovable-uploads/5f54e3ec-20fa-4a0a-99d6-a1035c7c587f.png",
      alt: "Quality control process",
      category: "Farm Life"
    },
    {
      src: "/lovable-uploads/b597bdb1-8114-4828-b827-486695826493.png",
      alt: "Packaged products",
      category: "Products"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Farm Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual journey through our farm, products, and the passion behind everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-green-600 px-3 py-1 rounded-full text-sm mb-2">
                    {image.category}
                  </div>
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
