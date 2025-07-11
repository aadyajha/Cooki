export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  rating: number;
  reviews: number;
}

export interface RecipeFilters {
  category: string;
  difficulty: string;
  maxTime: number;
  searchTerm: string;
}