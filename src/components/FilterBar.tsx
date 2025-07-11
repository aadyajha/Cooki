import React from 'react';
import { Filter, Clock } from 'lucide-react';
import { categories } from '../data/recipes';

interface FilterBarProps {
  selectedCategory: string;
  selectedDifficulty: string;
  maxTime: number;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
  onTimeChange: (time: number) => void;
}

export default function FilterBar({
  selectedCategory,
  selectedDifficulty,
  maxTime,
  onCategoryChange,
  onDifficultyChange,
  onTimeChange
}: FilterBarProps) {
  return (
    <div className="bg-white shadow-sm border-t border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Difficulty:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => onDifficultyChange(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="All">All Levels</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          {/* Time Filter */}
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Max Time:</span>
            <select
              value={maxTime}
              onChange={(e) => onTimeChange(Number(e.target.value))}
              className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value={999}>Any Time</option>
              <option value={15}>15 min</option>
              <option value={30}>30 min</option>
              <option value={60}>1 hour</option>
              <option value={120}>2 hours</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}