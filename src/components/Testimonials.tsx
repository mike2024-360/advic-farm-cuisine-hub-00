
import { Star, Quote, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "DUMZ FOODIES",
      location: "Abuja",
      testimonial: "Amazing service! Our frozen snails got to Abuja safely in an insulated container. The quality is outstanding and the extra mile they go for customer satisfaction is remarkable.",
      rating: 5,
      image: "/lovable-uploads/946137f8-627e-4216-a444-83464e294f34.png"
    },
    {
      name: "AUSTINEVABOR",
      location: "Abuja",
      testimonial: "Healthy baby snails are exactly what we got! The breeding practices at Advic Farms are top-notch. Quality is truly their watchword.",
      rating: 5,
      image: "/lovable-uploads/1ec25fa2-5131-4253-828d-be6b005ece56.png"
    },
    {
      name: "AKWARA PATIENCE",
      location: "Abuja", 
      testimonial: "Premium snail breeds that multiply as promised! Fast growth, high survival rate - exactly what we needed for our business.",
      rating: 5,
      image: "/lovable-uploads/cf0463ec-5aa6-4f55-a07b-23b6077d5227.png"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "Quality Breeding Practices",
      description: "Right parent stock selection with optimal humidity and temperature control"
    },
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "Safe Delivery Nationwide",
      description: "Insulated containers ensure your snails arrive fresh anywhere in Nigeria"
    },
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "Premium Snail Breeds",
      description: "Disease-resistant hatchlings with high survival rates and fast growth"
    },
    {
      icon: <CheckCircle className="text-green-600" size={24} />,
      title: "Custom Orders Welcome",
      description: "Whatever you want of your snails, just inform us and we'll make it happen"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by farmers and food businesses across Nigeria. Here's what makes our customers come back.
          </p>
        </div>

        {/* Customer Success Stories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Quote className="text-green-600 mr-2" size={24} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">@{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Thanks Section */}
        <div className="bg-green-600 text-white rounded-lg p-8 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Special Thanks to Our Abuja Snail Farmers! 🔥
          </h3>
          <p className="text-lg mb-4">
            Thanks so much for coming through: @DUMZ FOODIES, @AUSTINEVABOR, @AKWARA PATIENCE
          </p>
          <p className="text-green-100">
            Your trust in Advic Farms motivates us to maintain the highest quality standards
          </p>
        </div>

        {/* Why Choose Us Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-yellow-100 rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Place Your Order?
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              Whatever you want of your snails, just inform us and we'll make it happen!
            </p>
            <div className="flex items-center justify-center space-x-2 text-xl font-bold text-green-600">
              <span>📞</span>
              <span>08067353063</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">We're just a call away!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
