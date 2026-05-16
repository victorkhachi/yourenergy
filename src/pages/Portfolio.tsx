import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import Building from '../assets/neatWOrk.jpeg';
import SL from '../assets/slAbo.jpeg';
import Roof from '../assets/rooofTop.jpeg';
import Roof2 from '../assets/roof.jpeg';
import Grid from '../assets/grid.jpg';
import OtherRoof from '../assets/otherRoof.jpeg';
import RoofSnow from '../assets/roofANdSnow.jpeg';
import Banner from '../assets/banner.jpeg';

type Category = 'all' | 'solar' | 'roofing' | 'remodeling' | 'commercial';

interface EnhancedProject extends Project {
  category: Category;
  date?: string;
  testimonial?: { name: string; role: string; comment: string };
}

const projects: EnhancedProject[] = [
  {
    id: '1',
    title: 'Residential Solar Installation',
    type: 'residential',
    category: 'solar',
    location: 'Odenton, Maryland',
    date: '2024',
    capacity: 10.5,
    energySavings: 15000,
    description: 'Complete rooftop solar panel system installation for a modern family home with battery backup.',
    imageUrl: Building,
    testimonial: {
      name: 'E. Ekanem',
      role: 'Homeowner',
      comment: 'Excellent service. The installers were here on time, polite and professional. We now have our State grants, County incentives and SRECs.',
    },
  },
  {
    id: '2',
    title: 'Solar Street Lights',
    type: 'commercial',
    category: 'commercial',
    location: 'Abo, Delta State, Nigeria',
    date: '2023',
    capacity: 100,
    energySavings: 75000,
    description: 'Large-scale solar street light installation for a suburban area in Nigeria, bringing power to hundreds of homes.',
    imageUrl: SL,
  },
  {
    id: '3',
    title: 'Luxury Home Solar + Roofing',
    type: 'residential',
    category: 'solar',
    location: 'Fairfax, Virginia',
    date: '2024',
    capacity: 15.8,
    energySavings: 20000,
    description: 'Integrated solar installation with premium roofing upgrade for a luxury Virginia home.',
    imageUrl: Roof,
  },
  {
    id: '4',
    title: 'Rooftop Solar Array',
    type: 'residential',
    category: 'solar',
    location: 'Chicago, Illinois',
    date: '2024',
    capacity: 15.5,
    energySavings: 20000,
    description: 'High-efficiency solar installation on a newly built house in Chicago.',
    imageUrl: Roof2,
  },
  {
    id: '5',
    title: 'Industrial Solar Grid',
    type: 'commercial',
    category: 'commercial',
    location: 'San Francisco, CA',
    date: '2023',
    capacity: 200.5,
    energySavings: 300000,
    description: 'Massive solar installation for an industrial estate — powering operations with clean energy.',
    imageUrl: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '6',
    title: 'Farm Estate Solar Grid',
    type: 'commercial',
    category: 'commercial',
    location: 'Ogun State, Nigeria',
    date: '2023',
    capacity: 200.5,
    energySavings: 300000,
    description: 'Massive solar installation for a farm estate in Nigeria, enabling agricultural operations.',
    imageUrl: Grid,
  },
  {
    id: '7',
    title: 'Roof Replacement Project',
    type: 'residential',
    category: 'roofing',
    location: 'Maryland',
    date: '2024',
    description: 'Complete residential roof replacement with premium asphalt shingles and solar-ready preparation.',
    imageUrl: OtherRoof,
  },
  {
    id: '8',
    title: 'Winter Roof Restoration',
    type: 'residential',
    category: 'roofing',
    location: 'Maryland',
    date: '2024',
    description: 'Emergency roof restoration and weatherproofing after severe winter storm damage.',
    imageUrl: RoofSnow,
  },
  {
    id: '9',
    title: 'Commercial Roofing',
    type: 'commercial',
    category: 'roofing',
    location: 'Washington DC Area',
    date: '2024',
    description: 'Full commercial roofing project with energy-efficient materials and solar prep infrastructure.',
    imageUrl: Banner,
  },
];

const categories: { key: Category; label: string; count: number }[] = [
  { key: 'all', label: 'All Projects', count: projects.length },
  { key: 'solar', label: 'Solar Energy', count: projects.filter((p) => p.category === 'solar').length },
  { key: 'roofing', label: 'Roofing', count: projects.filter((p) => p.category === 'roofing').length },
  { key: 'commercial', label: 'Commercial', count: projects.filter((p) => p.category === 'commercial').length },
  { key: 'remodeling', label: 'Remodeling', count: projects.filter((p) => p.category === 'remodeling').length },
];

export default function Portfolio() {
  const [category, setCategory] = useState<Category>('all');
  const [selected, setSelected] = useState<EnhancedProject | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = projects.filter((p) => category === 'all' || p.category === category);

  const openLightbox = (project: EnhancedProject) => {
    setSelected(project);
    setLightboxIndex(filtered.indexOf(project));
  };

  const prevLightbox = () => {
    const i = (lightboxIndex - 1 + filtered.length) % filtered.length;
    setLightboxIndex(i);
    setSelected(filtered[i]);
  };

  const nextLightbox = () => {
    const i = (lightboxIndex + 1) % filtered.length;
    setLightboxIndex(i);
    setSelected(filtered[i]);
  };

  return (
    <div className="bg-navy-900 pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${Grid}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-badge mb-4 justify-center">
              <span className="w-6 h-px bg-gold-500" /> Our Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
              Real Projects. Real Results.
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Browse our completed projects across solar, roofing, remodeling, and commercial contracting.
              Every photo tells a story of quality craftsmanship and satisfied clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-[72px] z-40 bg-navy-900/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-3">
            {categories.map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setCategory(key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all border ${category === key
                    ? 'bg-gold-500/15 text-gold-400 border-gold-500/30'
                    : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5'
                  }`}
              >
                {label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${category === key ? 'bg-gold-500/20 text-gold-400' : 'bg-white/10 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filtered.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(project)}
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/25 transition-all duration-300 hover:shadow-gold">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/10 to-transparent" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-end p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium bg-gold-500/20 text-gold-400 border border-gold-500/30 px-2.5 py-1 rounded-full capitalize">
                          {project.category}
                        </span>
                        {project.date && (
                          <span className="flex items-center gap-1 text-xs text-slate-400">
                            <Calendar className="h-3 w-3" /> {project.date}
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-bold text-base mb-1 leading-tight">{project.title}</h3>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <MapPin className="h-3 w-3 text-gold-500" />
                        {project.location}
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-sm text-white font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        View Details →
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p className="text-xl">No projects in this category yet.</p>
              <p className="text-sm mt-2">Check back soon as we continuously add new completed work.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-900/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-navy-800 border border-white/10 rounded-3xl max-w-4xl w-full overflow-hidden shadow-navy"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={selected.imageUrl}
                  alt={selected.title}
                  className="w-full h-72 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-navy-900/80 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                {/* Prev/Next */}
                <button
                  onClick={prevLightbox}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-navy-900/80 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextLightbox}
                  className="absolute right-14 top-1/2 -translate-y-1/2 w-9 h-9 bg-navy-900/80 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Details */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-medium bg-gold-500/15 text-gold-400 border border-gold-500/25 px-3 py-1.5 rounded-full capitalize">
                    {selected.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="h-3 w-3 text-gold-500" /> {selected.location}
                  </span>
                  {selected.date && (
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Calendar className="h-3 w-3" /> {selected.date}
                    </span>
                  )}
                  {selected.capacity && (
                    <span className="text-xs text-slate-400">{selected.capacity} kW System</span>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">{selected.title}</h2>
                <p className="text-slate-400 leading-relaxed mb-5">{selected.description}</p>

                {selected.testimonial && (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-5">
                    <p className="text-slate-300 italic text-sm mb-3">"{selected.testimonial.comment}"</p>
                    <div className="font-semibold text-white text-sm">{selected.testimonial.name}</div>
                    <div className="text-slate-500 text-xs">{selected.testimonial.role}</div>
                  </div>
                )}

                <Link
                  to="/contact"
                  className="btn-gold gap-2 text-sm"
                  onClick={() => setSelected(null)}
                >
                  Get a Similar Project Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-navy-800 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Your Project Could Be Next</h2>
          <p className="text-slate-400 mb-8">
            Join hundreds of satisfied homeowners and businesses who've trusted Y.E.G General Contractors LLC with their properties.
          </p>
          <Link to="/contact" className="btn-gold gap-2">
            Start Your Project <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}