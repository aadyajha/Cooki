import React, { useState } from 'react';
import { Plus, X, ChefHat } from 'lucide-react';

interface IngredientInputProps {
  ingredients: string[];
  onIngredientsChange: (ingredients: string[]) => void;
  onGenerateRecipe: () => void;
  isLoading: boolean;
}

export default function IngredientInput({ 
  ingredients, 
  onIngredientsChange, 
  onGenerateRecipe, 
  isLoading 
}: IngredientInputProps) {
  const [currentIngredient, setCurrentIngredient] = useState('');

  const addIngredient = () => {
    if (currentIngredient.trim() && !ingredients.includes(currentIngredient.trim())) {
      onIngredientsChange([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient('');
    }
  };

  const removeIngredient = (index: number) => {
    onIngredientsChange(ingredients.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addIngredient();
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-4 rounded-full inline-block mb-4">
          <ChefHat className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">What's in your kitchen?</h2>
        <p className="text-gray-600">Add your ingredients and let cooki create magic!</p>
      </div>

      {/* Ingredient Input */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            value={currentIngredient}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter an ingredient..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button
            onClick={addIngredient}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Ingredients List */}
      {ingredients.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Ingredients:</h3>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full flex items-center space-x-2 group hover:bg-orange-200 transition-colors"
              >
                <span>{ingredient}</span>
                <button
                  onClick={() => removeIngredient(index)}
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Generate Button */}
      <button
        onClick={onGenerateRecipe}
        disabled={ingredients.length === 0 || isLoading}
        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>Creating your recipe...</span>
          </div>
        ) : (
          `Generate Recipe with ${ingredients.length} ingredient${ingredients.length !== 1 ? 's' : ''}`
        )}
      </button>
    </div>
  );
}