import React, { useState } from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import ProjectFilters from '../components/portfolio/ProjectFilters';
import ProjectSlider from '../components/portfolio/ProjectSlider';
import { Project } from '../types';

export type ProjectType = 'all' | 'residential' | 'commercial';

export default function Portfolio() {
  const [selectedType, setSelectedType] = useState<ProjectType>('all');

  return (
    <div className="pt-16">
      <PortfolioHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <ProjectSlider />
        </div>
        <ProjectFilters selectedType={selectedType} onTypeChange={setSelectedType} />
        <ProjectGrid selectedType={selectedType} />
      </div>
    </div>
  );
}