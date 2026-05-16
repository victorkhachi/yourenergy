import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Shield, Star, Users, ArrowRight, CheckCircle2, Sun } from 'lucide-react';
import DP from '../assets/PHOTO-2025-03-31-16-38-31.jpg';
import TeamPhoto from '../assets/IMG_9190.png';

const values = [
  { icon: Shield, title: 'Integrity', desc: 'We operate with full transparency. No hidden fees, no shortcuts, no surprises. What we quote is what you pay.' },
  { icon: Star, title: 'Excellence', desc: 'Every project receives our full attention and highest quality workmanship. We do not cut corners.' },
  { icon: Users, title: 'Community', desc: 'We invest in the communities we serve, building lasting relationships that go beyond a single project.' },
  { icon: Sun, title: 'Sustainability', desc: 'Our mission is to accelerate the transition to clean, renewable energy for every home and business we touch.' },
];

const certifications = [
  'Home Improvement License',
  'Solar Energy Installer Certified',
  'Maryland Licensed Contractor',
  'Roofing Contractor License',
  'General Contractor License',
  'NABCEP Certified',
];

const specialties = [
  'Solar Energy Consulting',
  'Solar Sales and Installation',
  'Roofing Replacement and Repairs',
  'Home Remodeling Projects',
  'EV Charging Solutions',
  'Commercial Contracting',
  'Battery Storage Systems',
  'Storm Damage Restoration',
];

export default function About() {
  return (
    <div className="bg-navy-900 pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2400&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-navy-900/85" />
        </div>
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="gold-badge mb-4">
              <span className="w-6 h-px bg-gold-500" /> Our Story
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              About Y.E.G General Contractors LLC
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Pioneering a greener, stronger future one home and business at a time.
              We are your full service Solar, Roofing, Remodeling, and General Contracting partner.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold gap-2">
                Get a Free Estimate <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/portfolio" className="btn-outline gap-2">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gold-500/8 rounded-3xl blur-2xl" />
              <img
                src={DP}
                alt="Augustus, Founder and CEO of Y.E.G General Contractors LLC"
                className="relative w-full rounded-2xl border border-white/10 shadow-navy object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-navy-900/90 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="font-bold text-white">Augustus</div>
                <div className="text-gold-400 text-sm font-medium">Founder and CEO, Your Energy Guy</div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="gold-badge mb-4">
                <span className="w-6 h-px bg-gold-500" /> Meet the Founder
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                Your Energy Guy
              </h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Augustus, widely known as <span className="text-gold-400 font-semibold">Your Energy Guy</span>,
                  has dedicated his career to making renewable energy accessible and affordable for every homeowner and business owner he works with.
                </p>
                <p>
                  Y.E.G General Contractors LLC was built on the belief that going solar should be simple, honest, and rewarding.
                  Augustus leads a team of certified professionals who guide clients through every step of the process,
                  from the very first consultation to the final inspection and beyond.
                </p>
                <p>
                  Over the years, Y.E.G General Contractors LLC has helped hundreds of homeowners across eight states harness
                  the power of the sun, lower their energy bills, and increase the value of their properties.
                  The company has since expanded into roofing, remodeling, and general contracting, becoming
                  a true one stop shop for home improvement.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {specialties.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-navy-900 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="gold-badge mb-3">
              <span className="w-6 h-px bg-gold-500" /> Mission and Vision
            </div>
            <h2 className="section-title">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-dark p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/20 flex items-center justify-center mb-5">
                <Sun className="h-6 w-6 text-gold-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To provide high quality, trustworthy, and sustainable construction and energy solutions
                while building long term relationships grounded in professionalism, integrity, and excellent service.
                We are committed to helping homeowners and businesses improve their properties through
                quality workmanship, energy efficiency, and innovative building solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="card-dark p-8"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center mb-5">
                <Star className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                A world where clean, renewable energy is the standard and not the alternative. We envision
                communities powered entirely by sustainable energy sources, where every homeowner has access
                to reliable, cost effective energy solutions. As we always say, <span className="text-white italic">we are always here to help.</span>
              </p>
            </motion.div>
          </div>

          {/* Team photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10"
          >
            <img
              src={TeamPhoto}
              alt="Y.E.G General Contractors LLC team on an active job site"
              className="w-full h-64 md:h-96 object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <h3 className="text-2xl font-bold text-white mb-3">Real Work. Real Impact.</h3>
                <p className="text-slate-300">
                  Through expert guidance and the latest solar technology, Y.E.G General Contractors LLC has saved
                  clients thousands of dollars in energy costs while making a measurable impact on carbon emissions
                  across the communities we serve.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="gold-badge mb-3">
              <span className="w-6 h-px bg-gold-500" /> Our Values
            </div>
            <h2 className="section-title">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-dark p-6 text-center hover:border-gold-500/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-7 w-7 text-gold-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-navy-900 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-badge mb-4 justify-center">
            <span className="w-6 h-px bg-gold-500" /> Certified and Licensed <span className="w-6 h-px bg-gold-500" />
          </div>
          <h2 className="section-title mb-10">Our Certifications</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 bg-navy-800 border border-white/10 hover:border-gold-500/30 rounded-xl px-5 py-3 text-sm text-slate-300 hover:text-gold-400 transition-all"
              >
                <Award className="h-4 w-4 text-gold-400 shrink-0" />
                {cert}
              </div>
            ))}
          </div>

          <div className="mt-14">
            <p className="text-gold-400 text-xl font-semibold italic mb-2">
              The future is bright, powered by the sun.
            </p>
            <p className="text-slate-500 text-sm">Y.E.G General Contractors LLC</p>
          </div>
        </div>
      </section>
    </div>
  );
}