import React from 'react';
import { X, Clock, Users, Star, Heart, ChefHat, Flame } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export default function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                {recipe.difficulty}
              </div>
              <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Title and Rating */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{recipe.title}</h1>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>Prep: {recipe.prepTime}min | Cook: {recipe.cookTime}min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="font-medium">{recipe.rating}</span>
                <span className="text-gray-400">({recipe.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Nutrition Info */}
          {recipe.nutrition && (
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Flame className="h-5 w-5 text-orange-500 mr-2" />
                Nutrition (per serving)
              </h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-orange-500">{recipe.nutrition.calories}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-500">{recipe.nutrition.protein}g</div>
                  <div className="text-sm text-gray-600">Protein</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-500">{recipe.nutrition.carbs}g</div>
                  <div className="text-sm text-gray-600">Carbs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-500">{recipe.nutrition.fat}g</div>
                  <div className="text-sm text-gray-600">Fat</div>
                </div>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ChefHat className="h-5 w-5 text-orange-500 mr-2" />
                Ingredients
              </h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h3>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {recipe.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}