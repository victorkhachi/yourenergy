import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'E. Ekanem',
    role: 'Homeowner — Odenton, Maryland',
    comment:
      'Excellent service. The installers were here on time, polite and professional. We now have our State grants, County incentives and SRECs. We are looking forward to filing our taxes to get our 30% grants from the federal government in the next tax window.',
    rating: 5,
    project: 'Solar Installation',
  },
  {
    name: 'Sarah Johnson',
    role: 'Homeowner — Fairfax, Virginia',
    comment:
      'The installation was seamless, and our energy bills have dropped significantly. The team walked us through every step of the process. Best investment we\'ve made for our home by far.',
    rating: 5,
    project: 'Residential Solar + Roofing',
  },
  {
    name: 'Michael Chen',
    role: 'Business Owner — San Francisco, CA',
    comment:
      'Professional team, excellent service, and outstanding results. Our company has seen remarkable savings since installation. Y.E.G Solar Solutions truly delivers on their promises.',
    rating: 5,
    project: 'Commercial Solar',
  },
  {
    name: 'David Williams',
    role: 'Property Manager — Maryland',
    comment:
      'From quote to completion, the experience was flawless. They handled the permit process, worked around our schedule, and left the site cleaner than they found it. Highly recommend!',
    rating: 5,
    project: 'Roofing & Remodeling',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-15" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold-500/4 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="gold-badge mb-3">
            <span className="w-6 h-px bg-gold-500" /> Testimonials <span className="w-6 h-px bg-gold-500" />
          </div>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real experiences from real customers across the country.</p>
        </div>

        {/* Main testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-navy-800 border border-white/8 rounded-3xl p-8 md:p-12 relative"
            >
              {/* Quote icon */}
              <Quote className="h-10 w-10 text-gold-500/20 absolute top-8 right-8" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 italic">
                "{t.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center text-navy-900 font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.role}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs bg-gold-500/10 border border-gold-500/20 text-gold-400 px-3 py-1.5 rounded-full font-medium">
                    {t.project}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl border border-white/10 hover:border-gold-500/30 flex items-center justify-center text-slate-400 hover:text-gold-400 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2.5 bg-gold-500'
                      : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-xl border border-white/10 hover:border-gold-500/30 flex items-center justify-center text-slate-400 hover:text-gold-400 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Google reviews badge */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-6 py-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-gold-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">5.0</span>
            <span className="text-sm text-slate-400">on Google Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}