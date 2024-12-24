import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'How much does a typical solar installation cost?',
    answer: 'Solar is not a one size fit all solution.. Costs may vary depending on system sizes and capacity required for the property.. This is solely based on the usage culture of the client. looking at how energy is consumed within a period of time.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer multiple financing solutions including solar loans, leases, and power purchase agreements (PPAs) to make solar accessible for everyone.',
  },
  {
    question: 'How long does the installation process take?',
    answer: 'Installations are completed within a day. This will be after approvals from the county and the energy company are received, and Client availability is confirmed.',
  },
  // {
  //   question: 'What warranties do you offer?',
  //   answer: 'We provide a 25-year warranty on panels, 10-year warranty on inverters, and a 10-year workmanship warranty on our installations.',
  // },
];

export default function PricingFAQ() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}