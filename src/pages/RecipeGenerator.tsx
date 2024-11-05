import React, { useState } from 'react';
import { ChefHat, Utensils, RefreshCw, Loader2 } from 'lucide-react';
import { Recipe } from '../types';
import { fetchRandomMeal } from '../api';
import RecipeDisplay from '../components/RecipeDisplay';
import SeoContent from '../components/SeoContent';

function RecipeGenerator() {
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
          <h1 className="text-4xl font-bold text-gray-800">Random Recipe Generator</h1>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover new recipes instantly with our random recipe generator. Perfect for home cooks 
          looking to expand their culinary repertoire.
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
          Generate Random Recipe
        </button>
      </div>

      {recipe && <RecipeDisplay recipe={recipe} />}

      <SeoContent 
        title="Random Recipe Generator"
        description="Expand your cooking skills with our Random Recipe Generator. Find new recipes with detailed instructions."
        useCases={[
          "Learn new cooking techniques and recipes",
          "Challenge yourself with different cuisines",
          "Find recipe inspiration for special occasions",
          "Discover recipes based on your available ingredients",
          "Build your recipe collection with unique dishes"
        ]}
      />
    </div>
  );
}

export default RecipeGenerator;