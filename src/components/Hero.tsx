import React from 'react';
import { ChefHat, Sparkles, Utensils } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-orange-400 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-4 rounded-full mr-4 animate-bounce">
            <ChefHat className="h-12 w-12 text-white" />
          </div>
          <Sparkles className="h-8 w-8 text-orange-400 animate-pulse" />
          <Utensils className="h-6 w-6 text-pink-400 ml-2" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Turn your ingredients into{' '}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            delicious recipes
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Got random ingredients in your fridge? No problem! Just tell cooki what you have, 
          and we'll create amazing recipes tailored to your available ingredients.
        </p>
        
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span>Personalized</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
            <span>Instant Results</span>
          </div>
        </div>
      </div>
    </section>
  );
}