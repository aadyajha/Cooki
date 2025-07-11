import React from 'react';
import { Clock, Users, Star, Heart, ChefHat } from 'lucide-react';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export default function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => onClick(recipe)}
    >
      <div className="relative">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
          </button>
          <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </div>
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-800">{recipe.category}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          {recipe.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{recipe.prepTime + recipe.cookTime} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-medium">{recipe.rating}</span>
            <span className="text-gray-400">({recipe.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-4 w-4 text-orange-500" />
            <span className="text-sm text-gray-600">
              {recipe.ingredients.length} ingredients
            </span>
          </div>
          
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300">
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}