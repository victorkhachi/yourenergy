import React from 'react';
import { Shield, Award, ThumbsUp } from 'lucide-react';

const trustItems = [
  {
    icon: <Shield className="h-6 w-6" />,
    text: '100% Satisfaction Guaranteed',
  },
  {
    icon: <Award className="h-6 w-6" />,
    text: 'Home Improvement Certified Installers',
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    text: '5-Star Rated on Google',
  },
];

export default function TrustIndicators() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center">
            <div className="text-yellow-500 mr-3">{item.icon}</div>
            <span className="text-gray-700 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}