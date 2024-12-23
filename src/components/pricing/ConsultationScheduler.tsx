import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

export default function ConsultationScheduler() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-gray-50 p-8 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Schedule a Consultation</h2>
      <p className="text-gray-600 mb-8">
        Book a free  consultation with Your Energy Guy experts to discuss your needs and get personalized recommendations.
      </p>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <Video className="h-6 w-6 text-yellow-500 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold">Virtual Meeting</h3>
            <p className="text-gray-600">Meet via video call from anywhere</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="h-6 w-6 text-yellow-500 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold">2+ hours</h3>
            <p className="text-gray-600">Very comprehensive discussion</p>
          </div>
        </div>
        <div className="flex items-start">
          <Calendar className="h-6 w-6 text-yellow-500 mt-1 mr-4" />
          <div>
            <h3 className="font-semibold">Flexible Scheduling</h3>
            <p className="text-gray-600">Choose a time that works for you</p>
          </div>
        </div>
      </div>

      <InlineWidget styles={{ height: "400px" }} url="https://calendly.com/yourenergyguy" />
    </motion.div>
  );
}