import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronDown, Sun, Home, Hammer, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';
import sampleVideo from '../../assets/WhatsApp Video 2025-01-23 at 17.47.20.mp4';

const pillars = [
  { icon: Sun, label: 'Solar Energy' },
  { icon: Home, label: 'Roofing' },
  { icon: Hammer, label: 'Remodeling' },
  { icon: HardHat, label: 'Contracting' },
];

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/60 to-navy-900/95" />
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      </div>

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
              Solar, Roofing and General Contractors
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-2"
          >
            Powering Homes.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl font-black gradient-text leading-[1.05] mb-6"
          >
            Building Futures.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed"
          >
            Y.E.G General Contractors LLC is your full service partner for clean energy, quality roofing, and expert remodeling trusted by hundreds of homeowners across 40 states.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link to="/contact" className="btn-gold text-base px-8 py-4 gap-2">
              Get a Free Estimate <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/portfolio" className="btn-outline text-base px-8 py-4">
              View Our Projects
            </Link>
            <button
              onClick={() => setVideoOpen(true)}
              className="flex items-center gap-3 text-white hover:text-gold-400 transition-colors group"
            >
              <span className="w-12 h-12 rounded-full border-2 border-white/30 group-hover:border-gold-500 flex items-center justify-center transition-all">
                <Play className="h-4 w-4 fill-current ml-0.5" />
              </span>
              <span className="text-sm font-medium">Watch Our Work</span>
            </button>
          </motion.div>

          {/* Service Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            {pillars.map(({ icon: Icon, label }) => (
              <Link
                key={label}
                to="/services"
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-gold-500/40 hover:bg-gold-500/5 px-4 py-2.5 rounded-xl text-sm text-slate-300 hover:text-gold-400 transition-all"
              >
                <Icon className="h-4 w-4 text-gold-500" />
                {label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400 text-xs animate-bounce">
        <ChevronDown className="h-5 w-5" />
        <span>Scroll</span>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gold-400 transition-colors text-sm flex items-center gap-2"
            >
              Close ✕
            </button>
            <video
              src={sampleVideo}
              autoPlay
              controls
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}