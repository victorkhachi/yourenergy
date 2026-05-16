import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Home, DollarSign, Leaf } from 'lucide-react';

const stats = [
  { value: '100+', label: 'Installations Completed', icon: Home, suffix: '' },
  { value: '8', label: 'States Served', icon: TrendingUp, suffix: '+' },
  { value: '$30M', label: 'Client Savings', icon: DollarSign, suffix: '+' },
  { value: '20K', label: 'Tons CO₂ Reduced', icon: Leaf, suffix: '+' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-700 border-y border-white/5 relative overflow-hidden">
      {/* decorative */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon, suffix }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500/20 transition-all">
                <Icon className="h-6 w-6 text-gold-400" />
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">
                {value}<span className="text-gold-400">{suffix}</span>
              </div>
              <div className="text-sm text-slate-400 font-medium">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}