import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { Project } from '../../types';
import StreetLight from '../../assets/slAbo.jpeg';
import NeatWork from '../../assets/neatWOrk.jpeg';
import Roof from '../../assets/rooofTop.jpeg';
import Banner from '../../assets/img_9190.png';

const recentProjects: Project[] = [
  {
    id: '1',
    title: 'Solar Street Lights',
    type: 'commercial',
    location: 'Abo, Delta, Nigeria',
    description: 'Complete solar street light installation for a suburb in Nigeria.',
    imageUrl: StreetLight,
  },
  {
    id: '2',
    title: 'Residential Solar Installation',
    type: 'residential',
    location: 'Odenton, Maryland',
    description: 'Full rooftop solar panel system with battery backup for a Maryland family home.',
    imageUrl: NeatWork,
  },
  {
    id: '3',
    title: 'Rooftop Solar Array',
    type: 'residential',
    location: 'Fairfax, Virginia',
    description: 'Luxury home with integrated solar and premium roofing upgrade.',
    imageUrl: Roof,
  },
  // {
  //   id: '4',
  //   title: 'Commercial Roofing Project',
  //   type: 'commercial',
  //   location: 'Maryland',
  //   description: 'Full commercial roof replacement with solar-ready preparation.',
  //   imageUrl: Banner,
  // },
];

const typeColors: Record<string, string> = {
  residential: 'bg-gold-500/20 text-gold-400 border-gold-500/30',
  commercial: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

export default function RecentProjects() {
  return (
    <section className="py-24 bg-navy-800 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="gold-badge mb-3">
              <span className="w-6 h-px bg-gold-500" /> Recent Work
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Real work. Real results. Real people.</p>
          </div>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors whitespace-nowrap">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/20 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border mb-2 self-start ${typeColors[project.type]}`}>
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </span>
                <h3 className="text-white font-bold text-base mb-1 leading-tight">{project.title}</h3>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <MapPin className="h-3 w-3 text-gold-500" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}