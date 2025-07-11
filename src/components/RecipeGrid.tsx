import React from 'react';
import { Recipe } from '../types/recipe';
import RecipeCard from './RecipeCard';

interface RecipeGridProps {
  recipes: Recipe[];
  onRecipeClick: (recipe: Recipe) => void;
}

export default function RecipeGrid({ recipes, onRecipeClick }: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">🍳</div>
        <h3 className="text-xl font-medium text-gray-900 mb-2">No recipes found</h3>
        <p className="text-gray-600">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={onRecipeClick}
        />
      ))}
    </div>
  );
}