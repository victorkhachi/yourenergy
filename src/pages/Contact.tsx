import React, { useRef, useState } from 'react';
import { Phone, Mail, Calendar } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const scrollToBooking = () => {
    document.getElementById('calendly-widget')?.scrollIntoView({ behavior: 'smooth' });
  };
  const link = useRef(null)
  const [mail,setMail] = useState({name:"",email:"",body:""})
  return (
    <div className="pt-16">
      {/* Contact Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions about solar energy? We're here to help you make the switch to sustainable power.
            </p>
            <button
              onClick={scrollToBooking}
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (571) 4942117</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">gosolar@yourenergyguy.com</p>
                  </div>
                </div>
                {/* <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-4" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">123 Solar Street, Sunny City, SC 12345</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  onChange={(e)=>setMail({...mail,[e.target.name]:e.target.value})}
                  type="text"
                  id="name"
                  name="name"
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
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  onChange={(e) => setMail({ ...mail, [e.target.name]: e.target.value })}
                  id="message"
                  name="body"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                />
              </div>
              <button
                onClick={(e)=> {e.preventDefault(); if(mail.body&&mail.email&&mail.name) {
                  link?.current.click()
                }}}
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors"
              >
                Send Message
              </button>
              <a ref={link} href={`mailto:gosolar@yourenergyguy.com?subject=Subscription&body=name:${mail.name}  phone:${mail.email} \n\n ${mail.body}`}></a>
            </form>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section id="calendly-widget" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
                <InlineWidget styles={{ height: "400px" }} url="https://calendly.com/yourenergyguy" />

        </div>
      </section>
    </div>
  );
}