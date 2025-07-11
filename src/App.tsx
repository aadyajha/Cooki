import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import Footer from './components/Footer';
import { generateRecipe } from './services/recipeService';

interface Recipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime?: string;
  servings?: string;
  difficulty?: string;
}

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateRecipe = async () => {
    if (ingredients.length === 0) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const generatedRecipe = await generateRecipe(ingredients);
      setRecipe(generatedRecipe);
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
      console.error('Recipe generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewRecipe = () => {
    setRecipe(null);
    setIngredients([]);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {!recipe && <Hero />}
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6 max-w-2xl mx-auto">
            {error}
          </div>
        )}
        
        {!recipe ? (
          <IngredientInput
            ingredients={ingredients}
            onIngredientsChange={setIngredients}
            onGenerateRecipe={handleGenerateRecipe}
            isLoading={isLoading}
          />
        ) : (
          <div className="space-y-8">
            <RecipeDisplay recipe={recipe} />
            <div className="text-center">
              <button
                onClick={handleNewRecipe}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Create Another Recipe
              </button>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;