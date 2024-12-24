import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '100+', label: 'Installations' },
  { value: '15M+', label: 'kWh Generated' },
  { value: '30M+', label: 'Cost Savings' },
  { value: '20K+', label: 'CO₂ Reduced' },
];

export default function Stats() {
  return (
    <section className="bg-yellow-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-yellow-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}