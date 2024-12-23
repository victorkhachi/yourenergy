import React from 'react';
import { Project } from '../../types';
import { Zap, MapPin } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-64">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1" />
            {project.capacity} kW
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {project.location}
          </div>
        </div>

        {project.testimonial && (
          <div className="mt-6 pt-6 border-t">
            <blockquote className="text-gray-600 italic">
              "{project.testimonial.comment}"
            </blockquote>
            <div className="mt-2 text-sm">
              <span className="font-semibold">{project.testimonial.name}</span>
              {project.testimonial.role && (
                <span className="text-gray-500"> - {project.testimonial.role}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}