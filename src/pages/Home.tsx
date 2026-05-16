import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award, Users } from 'lucide-react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Stats from '../components/home/Stats';
import RecentProjects from '../components/home/RecentProjects';
import Testimonials from '../components/home/Testimonials';
import Announcement from '../components/Announcement';

const whyUs = [
  { icon: Shield, title: 'Licensed & Insured', desc: 'Fully licensed contractor with comprehensive insurance coverage in every state we operate.' },
  { icon: Award, title: 'Certified Experts', desc: 'Our team holds professional certifications across solar, roofing, and general contracting trades.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your time — projects delivered on schedule with transparent communication throughout.' },
  { icon: Users, title: 'Community Focused', desc: 'Rooted in the communities we serve, building long-term relationships through trust and quality.' },
];

export default function Home() {
  return (
    <div className="bg-navy-900">
      <Hero />
      <Features />
      <Stats />
      <RecentProjects />

      {/* Why Choose Us */}
      <section className="py-24 bg-navy-900 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="gold-badge mb-4">
                <span className="w-6 h-px bg-gold-500" /> Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                A Company You Can Trust With Your Biggest Investment
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Y.E.G General Contractors is more than a contractor — we're your long-term partner in energy, 
                comfort, and home value. With 100+ completed projects across 8+ states, we bring experience, 
                integrity, and craftsmanship to every job.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-gold gap-2">
                  Learn About Us <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/contact" className="btn-outline gap-2">
                  Get a Free Quote
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-dark p-6 hover:border-gold-500/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Announcement />
      <Testimonials />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-800 to-navy-900 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your free consultation today and let our experts design the perfect solution for your home or business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold text-base px-8 py-4 gap-2">
                Schedule Free Consultation <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+15714942117" className="btn-outline text-base px-8 py-4">
                Call +1 (571) 494-2117
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}