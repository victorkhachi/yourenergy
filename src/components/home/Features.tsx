import React from 'react';
import { Sun, Battery, Leaf, DollarSign, Zap } from 'lucide-react';

const features = [
  {
    icon: <Sun className="h-8 w-8" />,
    title: 'Solar Installation',
    description: 'Professional installation of high-efficiency solar panels for your home or business.',
  },
  {
    icon: <Battery className="h-8 w-8" />,
    title: 'Battery Storage',
    description: 'Advanced battery solutions to store excess energy for use when you need it most.',
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'EV Charger Installation',
    description: 'Professional installation of residential and commercial EV charging stations. Licensed electricians, all brands supported, from Level 1 to Level 2 chargers with 24/7 support.',
  },
  {
    icon: <DollarSign className="h-8 w-8" />,
    title: 'Cost Savings',
    description: 'Significant reduction in energy bills with long-term financial benefits.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">Comprehensive energy solutions for every need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-yellow-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}