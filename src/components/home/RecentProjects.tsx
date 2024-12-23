import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import StreetLight from "../../assets/slAbo.jpeg"

const recentProjects: Project[] = [
 

  {
    id: '1',
    title: 'Solar Street Lights',
    type: 'residential',
    location: ' Abo, Delta, Nigeria',
    description: 'Complete solar street light installation for a Suburb in Nigeria.',
    imageUrl: StreetLight,
  },
  {
    id: '2',
    title: 'Commercial Office Complex',
    type: 'commercial',
    location: 'San Francisco, CA',
    capacity: 50.2,
    energySavings: 75000,
    description: 'Large-scale commercial installation for a tech company.',
    imageUrl: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
];

export default function RecentProjects() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Recent Projects</h2>
          <p className="mt-4 text-xl text-gray-600">See how we're transforming energy consumption</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{project.description}</p>
                  <div className="flex items-center text-sm">
                    {/* <span className="mr-4">{project.capacity} kW</span> */}
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}