import React from 'react';
import { ProjectType } from '../../pages/Portfolio';

interface ProjectFiltersProps {
  selectedType: ProjectType;
  onTypeChange: (type: ProjectType) => void;
}

export default function ProjectFilters({ selectedType, onTypeChange }: ProjectFiltersProps) {
  const filters: { value: ProjectType; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onTypeChange(filter.value)}
          className={`px-6 py-2 rounded-full transition-colors ${
            selectedType === filter.value
              ? 'bg-yellow-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}