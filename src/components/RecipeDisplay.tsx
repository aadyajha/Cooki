import React from 'react';
import { Clock, Users, ChefHat, Sparkles } from 'lucide-react';

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime?: string;
  servings?: string;
  difficulty?: string;
}

interface RecipeDisplayProps {
  recipe: Recipe;
}

export default function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 text-white">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-white/20 p-3 rounded-full mr-3">
            <ChefHat className="h-8 w-8" />
          </div>
          <Sparkles className="h-6 w-6 animate-pulse" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-2">{recipe.title}</h2>
        <p className="text-center text-orange-100">{recipe.description}</p>
      </div>

      <div className="p-8">
        {/* Recipe Info */}
        {(recipe.prepTime || recipe.servings || recipe.difficulty) && (
          <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-gray-600">
            {recipe.prepTime && (
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span>{recipe.prepTime}</span>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-500" />
                <span>{recipe.servings}</span>
              </div>
            )}
            {recipe.difficulty && (
              <div className="flex items-center space-x-2">
                <ChefHat className="h-5 w-5 text-orange-500" />
                <span>{recipe.difficulty}</span>
              </div>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-full mr-3">
                <ChefHat className="h-5 w-5 text-white" />
              </div>
              Ingredients
            </h3>
            <div className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{ingredient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Instructions</h3>
            <div className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <div key={index} className="flex space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
            Save Recipe
          </button>
          <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
            Share Recipe
          </button>
        </div>
      </div>
    </div>
  );
}