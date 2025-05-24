
import { Users, Award, Leaf, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="text-green-600" size={32} />,
      title: "Sustainable Farming",
      description: "We practice eco-friendly farming methods that preserve our environment for future generations."
    },
    {
      icon: <Award className="text-green-600" size={32} />,
      title: "Premium Quality",
      description: "Every product meets our highest standards before reaching your table."
    },
    {
      icon: <Users className="text-green-600" size={32} />,
      title: "Community Focus",
      description: "Supporting local communities through training and sustainable employment."
    },
    {
      icon: <Target className="text-green-600" size={32} />,
      title: "Health First",
      description: "Providing nutritious, chemical-free food that promotes healthy living."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Advic Farms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering sustainable snail farming and authentic Nigerian cuisine since our founding
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="/lovable-uploads/eac6eb4d-a42d-4fec-9019-84c305badf39.png"
              alt="Advic Farms Team"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Advic Farms, we're passionate about bringing you the finest quality snails and authentic Nigerian food products. Our journey began with a simple mission: to provide healthy, sustainable, and delicious food while supporting our local community.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Through innovative farming techniques and traditional Nigerian recipes, we've created a unique farm-to-table experience that celebrates our rich culinary heritage while promoting health and wellness.
            </p>
            <div className="flex items-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Organic</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
