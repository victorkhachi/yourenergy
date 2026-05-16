import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sun, Home, Hammer, HardHat, Phone } from 'lucide-react';

const packages = [
  {
    icon: Sun,
    name: 'Solar Starter',
    category: 'Solar',
    desc: 'Perfect for smaller homes looking to begin their solar journey.',
    features: [
      'System up to 6 kW',
      'Basic monitoring app',
      'Standard installation',
      'Permit & interconnection',
      '25-year panel warranty',
      'Federal tax credit assistance',
    ],
    cta: 'Get Solar Quote',
  },
  {
    icon: Sun,
    name: 'Solar Premium',
    category: 'Solar',
    desc: 'Our most popular solar package — ideal for average to large homes.',
    isPopular: true,
    features: [
      'System up to 15 kW',
      'Battery backup included',
      'Premium panels (Tier 1)',
      'Advanced monitoring',
      'Permit & interconnection',
      'All tax credits & incentives',
      'EV charger prep',
      'Extended service plan',
    ],
    cta: 'Get Solar Quote',
  },
  {
    icon: Home,
    name: 'Roofing Package',
    category: 'Roofing',
    desc: 'Complete roofing solutions — from repairs to full replacements.',
    features: [
      'Free roof inspection',
      'Insurance claim assistance',
      'Premium shingle options',
      'Storm damage coverage',
      'Solar-ready preparation',
      'Workmanship warranty',
    ],
    cta: 'Get Roofing Quote',
  },
  {
    icon: Hammer,
    name: 'Remodeling Package',
    category: 'Remodeling',
    desc: 'Transform your kitchen, bathroom, basement, or any living space.',
    features: [
      'Free design consultation',
      'Custom material selection',
      'Licensed trades included',
      'Permit management',
      'Progress updates',
      'Post-project warranty',
    ],
    cta: 'Get Remodeling Quote',
  },
];

const faqs = [
  {
    q: 'How much does solar installation cost?',
    a: 'The cost depends on system size, roof type, and location. Most residential systems range from $15,000–$45,000 before incentives. With the 30% federal tax credit and state incentives, your out-of-pocket cost is significantly reduced. We offer financing options too.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes! We partner with leading solar and home improvement lenders to offer $0 down financing options, allowing you to go solar with no upfront cost and payments that are often less than your current energy bill.',
  },
  {
    q: 'Is the consultation really free?',
    a: 'Absolutely. We provide free, no-obligation estimates for all of our services — solar, roofing, remodeling, and contracting. There\'s never any pressure to commit.',
  },
  {
    q: 'What states do you serve?',
    a: 'We currently serve Maryland, Washington DC, Virginia, Texas, Arizona, New Jersey, Illinois, and continue to expand. Contact us to confirm availability in your area.',
  },
  {
    q: 'How long does the process take?',
    a: 'A typical solar installation is completed in 1-2 days. However, permits and utility approval can take 2-6 weeks. Roofing projects typically take 1-5 days. We\'ll give you a precise timeline during your free consultation.',
  },
];

export default function Pricing() {
  return (
    <div className="bg-navy-900 pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-badge mb-4 justify-center">
              <span className="w-6 h-px bg-gold-500" /> Pricing & Estimates
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-5">
              Transparent Pricing.<br />
              <span className="gradient-text">No Surprises.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Every project is unique, so we always start with a free consultation to give you an accurate estimate.
              Browse our service packages below or contact us directly.
            </p>
            <div className="inline-flex items-center gap-3 bg-gold-500/10 border border-gold-500/20 rounded-xl px-5 py-3 text-gold-400 text-sm font-medium">
              <CheckCircle2 className="h-4 w-4" />
              Free estimates · No obligation · We handle all permits & paperwork
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-7 border transition-all ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-gold-500/15 to-gold-600/5 border-gold-500/40 shadow-gold'
                    : 'card-dark'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-500 text-navy-900 text-xs font-bold px-4 py-1 rounded-full shadow-gold">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4">
                  <pkg.icon className="h-6 w-6 text-gold-400" />
                </div>

                <div className="text-xs text-gold-500 font-semibold uppercase tracking-wider mb-1">{pkg.category}</div>
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{pkg.desc}</p>

                <div className="text-2xl font-black text-white mb-6">
                  Custom Quote
                  <div className="text-sm font-normal text-slate-400 mt-1">Based on your property</div>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className={`flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all ${
                  pkg.isPopular
                    ? 'bg-gold-500 hover:bg-gold-400 text-navy-900 shadow-gold'
                    : 'bg-white/5 border border-white/10 hover:border-gold-500/30 text-white hover:text-gold-400'
                }`}>
                  {pkg.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Custom project note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl bg-navy-800 border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <HardHat className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Commercial & Custom Projects</h3>
                <p className="text-slate-400 text-sm">
                  For large-scale commercial solar, industrial installations, or custom contracting projects,
                  we provide detailed custom proposals. Contact us to discuss your specific needs.
                </p>
              </div>
            </div>
            <a href="tel:+15714942117" className="btn-outline whitespace-nowrap gap-2 text-sm">
              <Phone className="h-4 w-4" /> Call for Custom Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-navy-800 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="gold-badge mb-3 justify-center">
              <span className="w-6 h-px bg-gold-500" /> Common Questions
            </div>
            <h2 className="section-title">Pricing FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-dark p-6"
              >
                <h3 className="text-white font-semibold mb-3">{q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-5">Still have questions? We're happy to help.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold gap-2">
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
              <a href="tel:+15714942117" className="btn-outline gap-2">
                <Phone className="h-4 w-4" /> +1 (571) 494-2117
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}