import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Home, Hammer, HardHat, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Sun,
    title: 'Solar Energy',
    color: 'from-gold-500/20 to-gold-600/5',
    border: 'border-gold-500/20',
    iconColor: 'text-gold-400',
    items: ['Solar Panel Installation', 'Battery Storage Systems', 'Commercial Solar', 'EV Charger Installation'],
    desc: 'We design and install solar systems built for maximum output and long term savings. Our team handles everything from permits to activation.',
  },
  {
    icon: Home,
    title: 'Roofing',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    items: ['Roof Replacement', 'Roof Repairs', 'Storm Damage', 'Insurance Claims Assistance'],
    desc: 'From full replacements to storm damage repairs, our licensed roofing team delivers durable results that protect your home for decades.',
  },
  {
    icon: Hammer,
    title: 'Home Remodeling',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
    items: ['Kitchen and Bathrooms', 'Basement Finishing', 'Flooring and Painting', 'Interior Renovations'],
    desc: 'Transform your living spaces with creative remodeling solutions that improve comfort, functionality, and the overall value of your home.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    color: 'from-purple-500/20 to-purple-600/5',
    border: 'border-purple-500/20',
    iconColor: 'text-purple-400',
    items: ['Commercial Projects', 'Residential Construction', 'Project Management', 'Property Improvements'],
    desc: 'We manage residential and commercial construction projects from start to finish, coordinating every trade so you do not have to.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Features() {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-badge mb-3">
            <span className="w-6 h-px bg-gold-500" /> What We Do <span className="w-6 h-px bg-gold-500" />
          </div>
          <h2 className="section-title">Full Service Solutions</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            From solar installations to complete home remodels, we bring expert craftsmanship
            and honest service to every single project we take on.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map(({ icon: Icon, title, color, border, iconColor, items, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${color} border ${border} hover:scale-[1.01] transition-all duration-300 group`}
            >
              <div className="flex items-start gap-5 mb-5">
                <div className={`w-14 h-14 rounded-xl bg-navy-900/60 border ${border} flex items-center justify-center shrink-0`}>
                  <Icon className={`h-7 w-7 ${iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${iconColor.replace('text-', 'bg-')}`} />
                    {it}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${iconColor} hover:gap-3 transition-all`}
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-gold">
            Explore All Services <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}