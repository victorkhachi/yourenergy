import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';
import {
  Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin,
  Calendar, CheckCircle2, Send, ArrowRight
} from 'lucide-react';

const serviceAreas = [
  'Maryland', 'Washington DC', 'Virginia', 'Texas',
  'Arizona', 'New Jersey', 'Illinois', 'Nigeria',
];

const businessHours = [
  { days: 'Monday – Friday', hours: '8:00 AM – 6:00 PM' },
  { days: 'Saturday', hours: '9:00 AM – 4:00 PM' },
  { days: 'Sunday', hours: 'By Appointment' },
];

const services = [
  'Solar Panel Installation',
  'Roofing Services',
  'Home Remodeling',
  'General Contracting',
  'Battery Storage Systems',
  'EV Charger Installation',
  'Commercial Projects',
  'Other',
];

export default function Contact() {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      linkRef.current?.click();
      setSubmitted(true);
    }
  };

  const scrollToCalendly = () => {
    document.getElementById('calendly-widget')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-navy-900 pt-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="gold-badge mb-4">
                <span className="w-6 h-px bg-gold-500" /> Get In Touch
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                Let's Start Your<br />
                <span className="gradient-text">Project Today</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-xl">
                Get a free, no-obligation estimate from our expert team. We respond within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-3 md:text-right"
            >
              <a href="tel:+15714942117" className="flex items-center gap-3 md:flex-row-reverse group">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Call Us</div>
                  <div className="text-white font-semibold group-hover:text-gold-400 transition-colors">+1 (571) 494-2117</div>
                </div>
              </a>
              <a href="tel:+12405649993" className="flex items-center gap-3 md:flex-row-reverse group">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Call Us</div>
                  <div className="text-white font-semibold group-hover:text-gold-400 transition-colors">+1 (240) 564-9993</div>
                </div>
              </a>
              <button
                onClick={scrollToCalendly}
                className="btn-gold gap-2 text-sm mt-2"
              >
                <Calendar className="h-4 w-4" /> Book a Consultation
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-dark p-8">
                <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                <p className="text-slate-400 text-sm mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mb-5">
                      <CheckCircle2 className="h-8 w-8 text-gold-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-400 text-sm max-w-sm">
                      Thank you for reaching out. Our team will contact you within 24 hours to discuss your project.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}
                      className="mt-6 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors"
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="input-dark"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="input-dark"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="input-dark"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-dark"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, property, and any specific requirements..."
                        className="input-dark resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-gold w-full gap-2 py-4">
                      <Send className="h-5 w-5" /> Send Message
                    </button>

                    <a
                      ref={linkRef}
                      href={`mailto:gosolar@yourenergyguy.com?subject=Project Inquiry from ${form.name} — ${form.service || 'General'}&body=Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0A%0A${form.message}`}
                      className="hidden"
                      aria-hidden="true"
                    />
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="card-dark p-6">
                <h3 className="text-white font-bold mb-5">Contact Information</h3>
                <div className="space-y-5">
                  <a href="tel:+15714942117" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <Phone className="h-4 w-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Phone (US)</div>
                      <div className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">+1 (571) 494-2117</div>
                      <div className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">+1 (240) 564-9993</div>
                      <div className="text-slate-500 text-xs mt-1">Nigeria: +234 813-353-2423</div>
                    </div>
                  </a>

                  <a href="mailto:gosolar@yourenergyguy.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <Mail className="h-4 w-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Email</div>
                      <div className="text-white text-sm font-medium group-hover:text-gold-400 transition-colors">gosolar@yourenergyguy.com</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-gold-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">Service Areas</div>
                      <div className="flex flex-wrap gap-1">
                        {serviceAreas.map((area) => (
                          <span key={area} className="text-xs bg-white/5 border border-white/10 text-slate-300 rounded px-2 py-0.5">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-dark p-6">
                <h3 className="text-white font-bold mb-5 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold-400" /> Business Hours
                </h3>
                <div className="space-y-3">
                  {businessHours.map(({ days, hours }) => (
                    <div key={days} className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">{days}</span>
                      <span className="text-white font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gold-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Emergency services available 24/7
                </div>
              </div>

              {/* Social Media */}
              <div className="card-dark p-6">
                <h3 className="text-white font-bold mb-5">Follow Us</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.facebook.com/share/1CqDnfsSHR/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="text-sm">@YourEnergyGuy on Facebook</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://www.instagram.com/yourenergyguy?igsh=c3Y1dnU2Mzh1cWd3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="text-sm">@YourEnergyGuy on Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">Y.E.G General Contractors LLC on LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section id="calendly-widget" className="py-16 bg-navy-800 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="gold-badge mb-3 justify-center">
              <span className="w-6 h-px bg-gold-500" /> Book Online
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Schedule Your Free Consultation</h2>
            <p className="text-slate-400">Pick a time that works for you and one of our experts will be in touch.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <InlineWidget
              styles={{ height: '650px' }}
              url="https://calendly.com/yourenergyguy"
            />
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="bg-navy-900 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Find Us Online</h2>
            <p className="text-slate-400 text-sm">Visit our website or connect on social media</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-800">
            <iframe
              title="Y.E.G General Contractors LLC Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99313.50280547003!2d-77.03690649999999!3d38.89511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}