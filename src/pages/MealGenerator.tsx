import React, { useState } from 'react';
import { ChefHat, Utensils, RefreshCw, Loader2 } from 'lucide-react';
import { Recipe } from '../types';
import { fetchRandomMeal } from '../api';
import RecipeDisplay from '../components/RecipeDisplay';
import SeoContent from '../components/SeoContent';

function MealGenerator() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(false);

  const generateRandomMeal = async () => {
    setLoading(true);
    try {
      const meal = await fetchRandomMeal();
      setRecipe(meal);
    } catch (error) {
      console.error('Failed to fetch meal:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <ChefHat className="w-10 h-10 text-orange-500" />
          <h1 className="text-4xl font-bold text-gray-800">Random Meal Generator</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Never run out of meal ideas again! Our random meal generator creates perfect dinner suggestions 
          with detailed recipes and instructions.
        </p>
        <button
          onClick={generateRandomMeal}
          disabled={loading}
          className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full
            font-semibold flex items-center gap-2 mx-auto transition-all transform hover:scale-105"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <RefreshCw className="w-5 h-5" />
          )}
          Generate Random Meal
        </button>
      </div>

      {recipe && <RecipeDisplay recipe={recipe} />}

      <SeoContent 
        title="Random Meal Generator"
        description="Struggling with meal planning? Our Random Meal Generator creates perfect dinner ideas instantly."
        useCases={[
          "Get instant dinner ideas when you're stuck",
          "Plan your weekly meal schedule effortlessly",
          "Explore international cuisine for your next dinner",
          "Find perfect meal suggestions for any occasion",
          "Discover new dinner recipes to try"
        ]}
      />
    </div>
  );
}

export default MealGenerator;