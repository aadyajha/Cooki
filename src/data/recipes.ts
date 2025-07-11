import { Recipe } from '../types/recipe';

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Chocolate Chip Cookies',
    description: 'Soft, chewy cookies with melty chocolate chips. Perfect for any occasion!',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: 'Easy',
    category: 'Desserts',
    tags: ['cookies', 'chocolate', 'sweet', 'baking'],
    ingredients: [
      '2¼ cups all-purpose flour',
      '1 tsp baking soda',
      '1 tsp salt',
      '1 cup butter, softened',
      '¾ cup granulated sugar',
      '¾ cup brown sugar',
      '2 large eggs',
      '2 tsp vanilla extract',
      '2 cups chocolate chips'
    ],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix flour, baking soda, and salt in a bowl.',
      'Cream butter and sugars until fluffy.',
      'Beat in eggs and vanilla.',
      'Gradually mix in flour mixture.',
      'Stir in chocolate chips.',
      'Drop rounded tablespoons onto ungreased baking sheets.',
      'Bake 9-11 minutes until golden brown.',
      'Cool on baking sheets for 2 minutes before removing.'
    ],
    nutrition: {
      calories: 180,
      protein: 2,
      carbs: 24,
      fat: 9
    },
    rating: 4.8,
    reviews: 1247
  },
  {
    id: '2',
    title: 'Creamy Mushroom Risotto',
    description: 'Rich and creamy Italian rice dish with wild mushrooms and parmesan.',
    image: 'https://images.pexels.com/photos/1580755/pexels-photo-1580755.jpeg?auto=compress&cs=tinysrgb&w=800',
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: 'Medium',
    category: 'Main Dishes',
    tags: ['risotto', 'mushrooms', 'creamy', 'italian'],
    ingredients: [
      '1½ cups Arborio rice',
      '4 cups warm chicken broth',
      '1 lb mixed mushrooms, sliced',
      '1 onion, finely diced',
      '3 cloves garlic, minced',
      '½ cup white wine',
      '½ cup grated Parmesan cheese',
      '2 tbsp butter',
      '2 tbsp olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Heat olive oil in a large pan and sauté mushrooms until golden.',
      'Remove mushrooms and set aside.',
      'In the same pan, sauté onion until translucent.',
      'Add garlic and rice, stirring for 1 minute.',
      'Add wine and stir until absorbed.',
      'Add warm broth one ladle at a time, stirring constantly.',
      'Continue until rice is creamy and tender (about 20 minutes).',
      'Stir in mushrooms, butter, and Parmesan.',
      'Season with salt and pepper, serve immediately.'
    ],
    nutrition: {
      calories: 380,
      protein: 12,
      carbs: 58,
      fat: 14
    },
    rating: 4.6,
    reviews: 892
  },
  {
    id: '3',
    title: 'Fresh Caprese Salad',
    description: 'Simple and elegant salad with fresh mozzarella, tomatoes, and basil.',
    image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=800',
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: 'Easy',
    category: 'Salads',
    tags: ['salad', 'fresh', 'italian', 'healthy'],
    ingredients: [
      '4 large ripe tomatoes, sliced',
      '1 lb fresh mozzarella, sliced',
      '1 cup fresh basil leaves',
      '¼ cup extra virgin olive oil',
      '2 tbsp balsamic vinegar',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Arrange tomato and mozzarella slices alternately on a platter.',
      'Tuck basil leaves between slices.',
      'Drizzle with olive oil and balsamic vinegar.',
      'Season with salt and pepper.',
      'Serve immediately at room temperature.'
    ],
    nutrition: {
      calories: 280,
      protein: 18,
      carbs: 8,
      fat: 22
    },
    rating: 4.5,
    reviews: 634
  },
  {
    id: '4',
    title: 'Homemade Pizza Margherita',
    description: 'Classic Italian pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800',
    prepTime: 90,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    category: 'Main Dishes',
    tags: ['pizza', 'italian', 'homemade', 'classic'],
    ingredients: [
      '2 cups all-purpose flour',
      '1 tsp active dry yeast',
      '1 tsp salt',
      '¾ cup warm water',
      '2 tbsp olive oil',
      '½ cup pizza sauce',
      '8 oz fresh mozzarella, sliced',
      'Fresh basil leaves',
      'Extra olive oil for drizzling'
    ],
    instructions: [
      'Mix yeast with warm water and let sit for 5 minutes.',
      'Combine flour and salt, add yeast mixture and olive oil.',
      'Knead until smooth, about 8 minutes.',
      'Let rise in oiled bowl for 1 hour.',
      'Preheat oven to 500°F (260°C).',
      'Roll out dough and transfer to pizza stone.',
      'Spread sauce, add mozzarella and basil.',
      'Bake 12-15 minutes until crust is golden.',
      'Drizzle with olive oil before serving.'
    ],
    nutrition: {
      calories: 420,
      protein: 18,
      carbs: 52,
      fat: 16
    },
    rating: 4.7,
    reviews: 1089
  },
  {
    id: '5',
    title: 'Grilled Salmon with Lemon',
    description: 'Perfectly grilled salmon with a bright lemon herb seasoning.',
    image: 'https://images.pexels.com/photos/1862143/pexels-photo-1862143.jpeg?auto=compress&cs=tinysrgb&w=800',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'Seafood',
    tags: ['salmon', 'grilled', 'healthy', 'quick'],
    ingredients: [
      '4 salmon fillets (6 oz each)',
      '2 lemons, juiced and zested',
      '3 cloves garlic, minced',
      '2 tbsp olive oil',
      '1 tsp dried oregano',
      '½ tsp salt',
      '¼ tsp black pepper',
      'Fresh dill for garnish'
    ],
    instructions: [
      'Preheat grill to medium-high heat.',
      'Mix lemon juice, zest, garlic, olive oil, oregano, salt, and pepper.',
      'Marinate salmon in mixture for 10 minutes.',
      'Grill salmon 4-5 minutes per side.',
      'Check internal temperature reaches 145°F.',
      'Garnish with fresh dill and serve immediately.'
    ],
    nutrition: {
      calories: 320,
      protein: 35,
      carbs: 2,
      fat: 18
    },
    rating: 4.9,
    reviews: 756
  },
  {
    id: '6',
    title: 'Fluffy Pancakes',
    description: 'Light and airy pancakes perfect for weekend breakfast.',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    category: 'Breakfast',
    tags: ['pancakes', 'breakfast', 'fluffy', 'weekend'],
    ingredients: [
      '1½ cups all-purpose flour',
      '3½ tsp baking powder',
      '1 tsp salt',
      '1 tbsp white sugar',
      '1¼ cups milk',
      '1 egg',
      '3 tbsp melted butter',
      'Butter for cooking'
    ],
    instructions: [
      'Mix flour, baking powder, salt, and sugar in a bowl.',
      'In another bowl, whisk milk, egg, and melted butter.',
      'Pour wet ingredients into dry ingredients.',
      'Mix until just combined (lumps are okay).',
      'Heat griddle over medium heat.',
      'Pour ¼ cup batter for each pancake.',
      'Cook until bubbles form and edges look dry.',
      'Flip and cook until golden brown.',
      'Serve hot with syrup and butter.'
    ],
    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 45,
      fat: 8
    },
    rating: 4.4,
    reviews: 923
  }
];

export const categories = [
  'All Categories',
  'Breakfast',
  'Main Dishes',
  'Desserts',
  'Salads',
  'Seafood',
  'Appetizers',
  'Soups',
  'Beverages'
];