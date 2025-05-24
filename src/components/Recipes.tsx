
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat } from "lucide-react";

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Pepper Soup with Fresh Snails",
      description: "A traditional Nigerian delicacy with aromatic spices and tender snail meat",
      image: "/lovable-uploads/5f54e3ec-20fa-4a0a-99d6-a1035c7c587f.png",
      time: "45 mins",
      serves: "4-6",
      difficulty: "Medium",
      ingredients: ["Fresh snails", "Pepper soup spice", "Scent leaves", "Ginger", "Garlic"]
    },
    {
      id: 2,
      title: "Snail Stir-Fry",
      description: "Quick and healthy snail stir-fry with fresh vegetables and Nigerian spices",
      image: "/lovable-uploads/b597bdb1-8114-4828-b827-486695826493.png",
      time: "30 mins",
      serves: "3-4",
      difficulty: "Easy",
      ingredients: ["Snail meat", "Bell peppers", "Onions", "Tomatoes", "Local spices"]
    },
    {
      id: 3,
      title: "Coconut Snail Rice",
      description: "Fragrant coconut rice cooked with tender snails and aromatic herbs",
      image: "/lovable-uploads/5f54e3ec-20fa-4a0a-99d6-a1035c7c587f.png",
      time: "60 mins",
      serves: "6-8",
      difficulty: "Hard",
      ingredients: ["Basmati rice", "Coconut milk", "Fresh snails", "Curry leaves", "Spices"]
    }
  ];

  return (
    <section id="recipes" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Traditional Recipes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover authentic Nigerian recipes featuring our premium snails and spices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    recipe.difficulty === 'Easy' ? 'bg-green-500 text-white' :
                    recipe.difficulty === 'Medium' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {recipe.difficulty}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {recipe.time}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1" />
                    Serves {recipe.serves}
                  </div>
                  <div className="flex items-center">
                    <ChefHat size={16} className="mr-1" />
                    {recipe.difficulty}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Ingredients:</h4>
                  <div className="flex flex-wrap gap-1">
                    {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                      <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                        {ingredient}
                      </span>
                    ))}
                    {recipe.ingredients.length > 3 && (
                      <span className="text-gray-500 text-xs px-2 py-1">
                        +{recipe.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  View Full Recipe
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
            View All Recipes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
