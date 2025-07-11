import React from 'react';
import { ChefHat, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-full">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              cooki
            </h1>
            <Sparkles className="h-5 w-5 text-orange-400 animate-pulse" />
          </div>
        </div>
      </div>
    </header>
  );
}