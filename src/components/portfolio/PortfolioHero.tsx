import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioHero() {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold mb-6">Our Solar Projects</h1>
          <p className="text-xl text-gray-300">
            Explore our portfolio of successful solar installations across residential and commercial properties.
          </p>
        </motion.div>
      </div>
    </section>
  );
}