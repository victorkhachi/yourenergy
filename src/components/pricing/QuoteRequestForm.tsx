import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';



export default function QuoteRequestForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  const link = useRef(null)
    const [mail,setMail] = useState({name:"",email:"",body:""})
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-lg"
      id="quote-form"
    >
      <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            onChange={(e) => setMail({ ...mail, [e.target.name]: e.target.value })}
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            onChange={(e) => setMail({ ...mail, [e.target.name]: e.target.value })}
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
        </div>
        {/* <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company (optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          />
        </div> */}
        <div>
          <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
            Project Requirements
          </label>
          <textarea

            onChange={(e) => setMail({ ...mail, [e.target.name]: e.target.value })}
            id="requirements"
            name="body"
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
            placeholder="Tell us about your project needs..."
          />
        </div>
        {/* <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
            Budget Range (optional)
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="">Select a range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div> */}
        <button
          onClick={(e) => {
            e.preventDefault(); if (mail.body && mail.email && mail.name) {
              link?.current.click()
            }
          }}
          type="submit"
          className="w-full bg-yellow-500 text-white py-3 px-4 rounded-md hover:bg-yellow-600 transition-colors font-semibold"
        >
          Get Your Quote
        </button>
        <a ref={link} href={`mailto:gosolar@yourenergyguy.com?subject=Subscription&body=name:${mail.name}  phone:${mail.email} \n\n ${mail.body}`}></a>

      </form>
    </motion.div>
  );
}