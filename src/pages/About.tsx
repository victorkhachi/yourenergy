import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold mb-6">About Y.E.G Solar Solutions</h1>
            <p className="text-xl text-gray-300">
              Y.E.G Solar Solutions is your neighborhood solar company, dedicated to helping homeowners in Maryland, DC, Virginia, Texas, Arizona, New Jersey, and more.
              We are also in Africa. Taking on projects in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To accelerate the world's transition to sustainable energy through accessible,
                innovative solar solutions that empower homes and businesses to achieve energy independence.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600">
                A world where clean, renewable energy is the standard, not the alternative.
                We envision communities powered entirely by sustainable energy sources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Certification</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-md text-center max-w-lg mx-auto"
          >
            <div className="text-yellow-500 mb-4 inline-block">
              <Award className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold">Home Improvement License</h3>
            <p className="text-gray-600 mt-2">Licensed and certified for residential and commercial installations</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}