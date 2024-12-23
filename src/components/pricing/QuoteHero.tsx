import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function QuoteHero() {
  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">Get Your Custom Solar Solution</h1>
          <p className="text-xl text-gray-300 mb-8">
            Every project is unique. Let us design a solar system that perfectly matches your needs and budget.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center px-8 py-4 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-lg font-semibold"
          >
            Request Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}