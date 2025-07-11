import React from 'react';
import { ChefHat, Heart, Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-gradient-to-r from-orange-400 to-pink-400 p-2 rounded-full">
              <ChefHat className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              cooki
            </h1>
          </div>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Transform your ingredients into culinary masterpieces with AI-powered recipe generation.
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}