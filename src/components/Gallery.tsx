
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: "/lovable-uploads/cf0463ec-5aa6-4f55-a07b-23b6077d5227.png",
      alt: "Fresh snails collection - Videos don't lie, they never do",
      category: "Products"
    },
    {
      src: "/lovable-uploads/1ec25fa2-5131-4253-828d-be6b005ece56.png",
      alt: "Harvest! Fresh snail eggs from our farm",
      category: "Farm Life"
    },
    {
      src: "/lovable-uploads/25ee4fd3-aab8-454e-b13a-7221e1ad6302.png",
      alt: "Garri on the GO! - Ready for consumption",
      category: "Products"
    },
    {
      src: "/lovable-uploads/946137f8-627e-4216-a444-83464e294f34.png",
      alt: "Happy Abuja snail farmers team",
      category: "Community"
    },
    {
      src: "/lovable-uploads/20aa220c-025c-4a24-aac6-7a084d0ecb23.png",
      alt: "Advic Foods Kulikuli now available in the US",
      category: "International"
    },
    {
      src: "/lovable-uploads/ef7accce-d82d-411f-8717-fab37f05cec8.png",
      alt: "Training session with snail farming experts",
      category: "Training"
    },
    {
      src: "/lovable-uploads/06df8812-3876-4b59-90b4-e5817a91d45b.png",
      alt: "Large audience at snail farming training seminar",
      category: "Training"
    },
    {
      src: "/lovable-uploads/b6b76b5d-6d77-4a92-8c83-792a0d30a234.png",
      alt: "Online Snail Farming Training for Beginners program",
      category: "Training"
    },
    {
      src: "/lovable-uploads/5f54e3ec-20fa-4a0a-99d6-a1035c7c587f.png",
      alt: "Premium quality fresh snails",
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
            Take a visual journey through our farm, products, training programs, and the passion behind everything we do
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
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
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
