import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import FoodGenerator from './pages/FoodGenerator';
import MealGenerator from './pages/MealGenerator';
import RecipeGenerator from './pages/RecipeGenerator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-2">
                <ChefHat className="w-8 h-8 text-orange-500" />
                <span className="font-bold text-xl text-gray-800">FoodieGen</span>
              </div>
              <div className="flex gap-6">
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Random Food Generator
                </Link>
                <Link 
                  to="/random-meal-generator" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Random Meal Generator
                </Link>
                <Link 
                  to="/random-recipe-generator" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Random Recipe Generator
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<FoodGenerator />} />
          <Route path="/random-meal-generator" element={<MealGenerator />} />
          <Route path="/random-recipe-generator" element={<RecipeGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;