import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from '../../types';
import { ProjectType } from '../../pages/Portfolio';
import Building from "../../assets/neatWOrk.jpeg"
import SL from "../../assets/slAbo.jpeg"
import Roof from "../../assets/rooofTop.jpeg"
import Roof2 from "../../assets/roof.jpeg"
import Grid from "../../assets/grid.jpg"


const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Home Solar Installation',
    type: 'residential',
    location: 'Odenton, Maryland',
    capacity: 10.5,
    energySavings: 15000,
    description: 'Complete solar panel installation for a modern family home.',
    imageUrl: Building,
    testimonial: {
      name: 'E. Ekanem',
      role: 'Homeowner',
      comment: 'Excellent service. The installers were here on time, polite and professional. We now have our State grants, County incentives and SRECs.We are looking forward to filing our taxes to get our 30% grants from the federal government in the next tax window.',
    },
  },
  {
    id: '2',
    title: 'Energy efficient flood light.',
    type: 'commercial',
    location: 'Abo, Delta state',
    capacity: 100,
    energySavings: 75000,
    description: 'Large-scale commercial installation for a Sub-Urban area in Nigeria.',
    imageUrl:SL,
  },
  {
    id: '3',
    title: 'Eco-Friendly Villa',
    type: 'residential',
    location: 'Fairfax, Virginia. USA ',
    capacity: 15.8,
    energySavings: 20000,
    description: 'Luxury home with integrated solar and battery storage.',
    imageUrl: Roof,
  },
  {
    id: '4',
    title: 'Solar Panel Installation',
    type: 'residential',
    location: 'Chicago, Illinois',
    capacity: 15.5,
    energySavings: 20000,
    description: ' solar installation for a new house in  Chicago, USA.',
    imageUrl: Roof2,
  }, 
  {
    id: '5',
    title: 'Solar Grid Installation',
    type: 'commercial',
    location: 'San Francisco, CA.',
    capacity: 200.5,
    energySavings: 300000,
    description: 'Massive solar installation for an Industrial Estate.',
    imageUrl: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  }, 
  {
    id: '6',
    title: 'Solar Grid Installation',
    type: 'commercial',
    location: 'Ogun State, Nigeria',
    capacity: 200.5,
    energySavings: 300000,
    description: 'Massive solar installation for a Farm estate.',
    imageUrl: Grid,
  },
];

interface ProjectGridProps {
  selectedType: ProjectType;
}

export default function ProjectGrid({ selectedType }: ProjectGridProps) {
  const filteredProjects = projects.filter(
    (project) => selectedType === 'all' || project.type === selectedType
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}