import React from 'react';
import { Utensils } from 'lucide-react';
import { Recipe } from '../types';

interface RecipeDisplayProps {
  recipe: Recipe;
}

function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img 
            src={recipe.strMealThumb} 
            alt={recipe.strMeal}
            className="w-full h-[300px] md:h-full object-cover"
          />
        </div>
        <div className="p-6 md:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{recipe.strMeal}</h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
              {recipe.strCategory}
            </span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
              {recipe.strArea}
            </span>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-orange-500" />
              Ingredients
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {recipe.ingredients.map((ing, index) => (
                <li key={index} className="text-sm text-gray-600">
                  • {ing.measure} {ing.ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Instructions</h3>
            <p className="text-gray-600 text-sm line-clamp-6">{recipe.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDisplay;