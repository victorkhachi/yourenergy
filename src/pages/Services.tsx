import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sun, Home, Hammer, HardHat, Battery, Zap, Shield, Wrench,
  ArrowRight, CheckCircle2, ChevronDown
} from 'lucide-react';

const services = [
  {
    id: 'solar',
    icon: Sun,
    color: 'gold',
    title: 'Solar Energy Services',
    tagline: 'Harness the Power of the Sun',
    desc: 'Our expert solar team designs and installs high-efficiency solar systems tailored to your property\'s specific energy needs and budget — helping you achieve real, measurable savings.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    subServices: [
      {
        icon: Sun,
        name: 'Residential Solar Installation',
        desc: 'Custom rooftop solar systems designed for maximum efficiency and curb appeal.',
      },
      {
        icon: HardHat,
        name: 'Commercial Solar',
        desc: 'Large-scale solar solutions for businesses, warehouses, and industrial facilities.',
      },
      {
        icon: Battery,
        name: 'Battery Backup Systems',
        desc: 'Store excess solar energy to power your home during outages and peak hours.',
      },
      {
        icon: Zap,
        name: 'EV Charger Installation',
        desc: 'Level 1 & Level 2 EV charger installation for homes and commercial properties.',
      },
    ],
    benefits: ['Reduce energy bills by up to 80%', 'Federal 30% tax credit', 'State & county incentives', 'SREC earnings', '25-year panel warranty', 'Increase property value'],
    process: ['Free consultation & site assessment', 'Custom system design', 'Permit & utility approval', 'Professional installation', 'Inspection & activation', 'Ongoing monitoring & support'],
    faqs: [
      { q: 'How much can I save?', a: 'Most homeowners save 60-80% on their energy bills, with full ROI in 6-10 years.' },
      { q: 'How long does installation take?', a: 'Most residential installations are completed in 1-2 days. Permits may add 2-4 weeks.' },
      { q: 'Do you handle permits?', a: 'Yes — we handle all permit applications, utility interconnections, and inspections.' },
    ],
  },
  {
    id: 'roofing',
    icon: Home,
    color: 'blue',
    title: 'Roofing Services',
    tagline: 'Quality Roofing That Lasts',
    desc: 'From full roof replacements to emergency storm damage repairs, our certified roofing contractors deliver durable, weather-resistant solutions that protect your biggest asset.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
    subServices: [
      {
        icon: Home,
        name: 'Roof Replacement',
        desc: 'Complete tear-off and replacement with premium shingles, tiles, or metal roofing.',
      },
      {
        icon: Wrench,
        name: 'Roof Repairs',
        desc: 'Fast, reliable repairs for leaks, damaged shingles, flashing, and more.',
      },
      {
        icon: Shield,
        name: 'Storm Damage Restoration',
        desc: 'Emergency response and full restoration after hail, wind, or water damage.',
      },
      {
        icon: HardHat,
        name: 'Insurance Claims Assistance',
        desc: 'We work directly with your insurance company to maximize your claim payout.',
      },
    ],
    benefits: ['Licensed & insured roofing contractors', 'Premium material brands', 'Storm damage specialists', 'Insurance claim experts', 'Solar-ready installations', 'Workmanship guarantee'],
    process: ['Free roof inspection', 'Detailed damage assessment', 'Insurance coordination', 'Material selection', 'Professional installation', 'Final inspection & cleanup'],
    faqs: [
      { q: 'Do you work with insurance?', a: 'Absolutely. We have experience with all major insurance carriers and will advocate for you.' },
      { q: 'What roofing materials do you offer?', a: 'We work with asphalt shingles, metal, tile, flat/TPO, and more.' },
      { q: 'How long does a roof replacement take?', a: 'Most standard residential roofs are completed in 1-3 days.' },
    ],
  },
  {
    id: 'remodeling',
    icon: Hammer,
    color: 'emerald',
    title: 'Home Remodeling',
    tagline: 'Transform Your Living Spaces',
    desc: 'From dream kitchens to stunning bathrooms and finished basements, our remodeling team brings vision, craftsmanship, and creative problem-solving to every interior renovation project.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    subServices: [
      {
        icon: Hammer,
        name: 'Kitchen Remodeling',
        desc: 'Full kitchen renovations including cabinets, countertops, flooring, and appliances.',
      },
      {
        icon: Wrench,
        name: 'Bathroom Renovation',
        desc: 'Luxurious bathroom upgrades from tile work to complete gut-and-rebuild projects.',
      },
      {
        icon: Home,
        name: 'Basement Finishing',
        desc: 'Transform unused basement space into functional, beautiful living areas.',
      },
      {
        icon: Shield,
        name: 'Flooring & Painting',
        desc: 'Professional flooring installation and interior/exterior painting services.',
      },
    ],
    benefits: ['Increase home value', 'Custom design consultation', 'Premium material sourcing', 'Licensed electricians & plumbers', 'On-budget project delivery', 'Post-project warranty'],
    process: ['Design consultation', 'Material selection & budgeting', 'Permits & scheduling', 'Demolition & rough work', 'Finishing & installation', 'Final walkthrough & touch-ups'],
    faqs: [
      { q: 'How long does a kitchen remodel take?', a: 'A full kitchen remodel typically takes 4-8 weeks depending on scope and materials.' },
      { q: 'Can you help with design?', a: 'Yes — we offer full design consultations and can help with material selection and layout planning.' },
      { q: 'Do you handle permits?', a: 'We manage all required permits and inspections for your remodeling project.' },
    ],
  },
  {
    id: 'contracting',
    icon: HardHat,
    color: 'purple',
    title: 'General Contracting',
    tagline: 'Expert Project Management & Construction',
    desc: 'Whether you\'re building from the ground up or improving an existing property, our general contracting team delivers end-to-end project management with precision, professionalism, and proven results.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    subServices: [
      {
        icon: HardHat,
        name: 'Commercial Construction',
        desc: 'Office spaces, retail, warehouses, and multi-unit commercial builds.',
      },
      {
        icon: Home,
        name: 'Residential Construction',
        desc: 'New home construction and major additions managed end-to-end.',
      },
      {
        icon: Wrench,
        name: 'Project Management',
        desc: 'Full-service project management from design through final inspection.',
      },
      {
        icon: Shield,
        name: 'Property Improvements',
        desc: 'Comprehensive property upgrades to boost value and functionality.',
      },
    ],
    benefits: ['Licensed general contractor', 'Vetted subcontractor network', 'Detailed project timelines', 'Budget management & reporting', 'Regular client updates', 'Post-completion support'],
    process: ['Project scoping & planning', 'Budget & timeline agreement', 'Subcontractor coordination', 'Active construction phase', 'Quality control inspections', 'Project handover & sign-off'],
    faqs: [
      { q: 'What size projects do you handle?', a: 'We handle projects of all sizes — from small property improvements to large commercial builds.' },
      { q: 'How do you manage subcontractors?', a: 'We maintain a network of vetted, licensed specialists across all trades.' },
      { q: 'How often will I receive updates?', a: 'We provide regular progress reports and maintain open communication throughout the project.' },
    ],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string; badge: string }> = {
  gold: { bg: 'from-gold-500/15 to-gold-600/5', border: 'border-gold-500/20', text: 'text-gold-400', icon: 'bg-gold-500/10 border-gold-500/20', badge: 'bg-gold-500/10 text-gold-400 border-gold-500/20' },
  blue: { bg: 'from-blue-500/15 to-blue-600/5', border: 'border-blue-500/20', text: 'text-blue-400', icon: 'bg-blue-500/10 border-blue-500/20', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  emerald: { bg: 'from-emerald-500/15 to-emerald-600/5', border: 'border-emerald-500/20', text: 'text-emerald-400', icon: 'bg-emerald-500/10 border-emerald-500/20', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  purple: { bg: 'from-purple-500/15 to-purple-600/5', border: 'border-purple-500/20', text: 'text-purple-400', icon: 'bg-purple-500/10 border-purple-500/20', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-white font-medium hover:text-gold-400 transition-colors"
      >
        {q}
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-4 text-slate-400 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState('solar');
  const service = services.find((s) => s.id === active)!;
  const c = colorMap[service.color];

  return (
    <div className="bg-navy-900 pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-500/4 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="gold-badge mb-4 justify-center">
              <span className="w-6 h-px bg-gold-500" /> What We Offer
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-5">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From solar energy to roofing, remodeling to general contracting — we bring expertise,
              professionalism, and quality craftsmanship to every project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <div className="sticky top-[72px] z-40 bg-navy-900/95 backdrop-blur-md border-b border-white/5 shadow-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
            {services.map(({ id, icon: Icon, title, color }) => {
              const cm = colorMap[color];
              return (
                <button
                  key={id}
                  id={id}
                  onClick={() => setActive(id)}
                  className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all border ${
                    active === id
                      ? `${cm.badge} border-current`
                      : 'text-slate-400 border-transparent hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {title.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Service Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Service Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <span className={`inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full border ${c.badge} mb-5`}>
                  <service.icon className="h-4 w-4" />
                  {service.tagline}
                </span>
                <h2 className="text-4xl font-bold text-white mb-5">{service.title}</h2>
                <p className="text-slate-300 leading-relaxed mb-8 text-lg">{service.desc}</p>
                <Link to="/contact" className="btn-gold gap-2">
                  Get a Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img src={service.image} alt={service.title} className="w-full h-72 object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-tr ${c.bg} opacity-40`} />
              </div>
            </div>

            {/* Sub-services */}
            <h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {service.subServices.map(({ icon: Icon, name, desc }) => (
                <div key={name} className={`p-6 rounded-2xl bg-gradient-to-br ${c.bg} border ${c.border} hover:scale-[1.02] transition-all`}>
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${c.icon}`}>
                    <Icon className={`h-5 w-5 ${c.text}`} />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm">{name}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Benefits + Process */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              <div className="card-dark p-8">
                <h3 className="text-xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="grid grid-cols-1 gap-3">
                  {service.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className={`h-5 w-5 shrink-0 ${c.text}`} />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-dark p-8">
                <h3 className="text-xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, i) => (
                    <div key={step} className="flex items-start gap-4 text-sm">
                      <div className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${c.icon} ${c.text}`}>
                        {i + 1}
                      </div>
                      <span className="text-slate-300 pt-0.5">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="card-dark p-8 mb-12">
              <h3 className="text-xl font-bold text-white mb-2">Frequently Asked Questions</h3>
              <p className="text-slate-400 text-sm mb-6">Quick answers to common questions about our {service.title.toLowerCase()}.</p>
              {service.faqs.map(({ q, a }) => (
                <FAQItem key={q} q={q} a={a} />
              ))}
            </div>

            {/* CTA */}
            <div className={`rounded-2xl bg-gradient-to-br ${c.bg} border ${c.border} p-8 md:p-12 text-center`}>
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h3>
              <p className="text-slate-300 mb-7 max-w-lg mx-auto">
                Contact us today for a free, no-obligation estimate and let our experts design the perfect {service.title.split(' ')[0].toLowerCase()} solution for your property.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-gold gap-2">
                  Schedule Free Consultation <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="tel:+15714942117" className="btn-outline gap-2">
                  Call +1 (571) 494-2117
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
