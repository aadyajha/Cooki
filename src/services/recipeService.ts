// Mock recipe generation service
// In the original repo, this would connect to OpenAI or another AI service

interface GeneratedRecipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime?: string;
  servings?: string;
  difficulty?: string;
}

export const generateRecipe = async (ingredients: string[]): Promise<GeneratedRecipe> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Mock recipe generation based on ingredients
  const recipeTemplates = [
    {
      title: `Delicious ${ingredients[0]} Stir-Fry`,
      description: `A quick and tasty stir-fry featuring ${ingredients.slice(0, 3).join(', ')} and more!`,
      prepTime: "15 minutes",
      servings: "2-3 people",
      difficulty: "Easy"
    },
    {
      title: `Hearty ${ingredients[0]} Soup`,
      description: `A warming soup that makes the most of ${ingredients.slice(0, 2).join(' and ')}.`,
      prepTime: "30 minutes",
      servings: "4 people",
      difficulty: "Medium"
    },
    {
      title: `${ingredients[0]} Fusion Bowl`,
      description: `A creative fusion dish combining ${ingredients.slice(0, 4).join(', ')}.`,
      prepTime: "20 minutes",
      servings: "2 people",
      difficulty: "Easy"
    }
  ];

  const template = recipeTemplates[Math.floor(Math.random() * recipeTemplates.length)];
  
  return {
    ...template,
    ingredients: [
      ...ingredients.map(ing => `1 cup ${ing}`),
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "1 tsp garlic powder",
      "Fresh herbs for garnish"
    ],
    instructions: [
      "Prepare all ingredients by washing and chopping as needed.",
      `Heat olive oil in a large pan over medium heat.`,
      `Add ${ingredients[0]} and cook for 3-4 minutes until tender.`,
      `Add remaining ingredients: ${ingredients.slice(1).join(', ')}.`,
      "Season with salt, pepper, and garlic powder.",
      "Cook for 8-10 minutes, stirring occasionally.",
      "Taste and adjust seasoning as needed.",
      "Garnish with fresh herbs and serve hot.",
      "Enjoy your delicious homemade meal!"
    ]
  };
};