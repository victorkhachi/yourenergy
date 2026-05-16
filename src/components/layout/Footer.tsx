import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Sun } from 'lucide-react';
import Logo from '../../assets/freepik_br_d86f6789-b07e-4470-a857-a8265f4d4b49.png';
import Badge from '../../assets/img_9189.png';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact Us' },
];

const services = [
  'Solar Panel Installation',
  'Roof Replacement & Repairs',
  'Home Remodeling',
  'General Contracting',
  'Battery Storage Systems',
  'EV Charger Installation',
];

const serviceAreas = [
  'Maryland', 'Washington DC', 'Virginia', 'Texas',
  'Arizona', 'New Jersey', 'Illinois', 'Nigeria',
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-gradient-to-r from-gold-600 to-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-navy-900">Ready to Power Your Property?</h3>
            <p className="text-navy-800 mt-1">Get a free, no-obligation estimate from our expert team today.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-navy-900 text-gold-400 font-bold px-8 py-4 rounded-xl hover:bg-navy-800 transition-all shadow-navy whitespace-nowrap">
            Schedule Free Consultation <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={Logo} alt="Y.E.G General Contractors" className="h-12 w-12 object-contain rounded-lg bg-white/5 p-1" />
              <div>
                <span className="block text-lg font-bold text-white">Y.E.G General Contractors LLC</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for Solar Energy, Roofing, Remodeling, and General Contracting.
              Serving 8+ states and growing — LICENCED, BONDED & INSURED. <br /> Licensed in DC, Maryland,  Virginia.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1CqDnfsSHR/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/yourenergyguy?igsh=c3Y1dnU2Mzh1cWd3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            
            <div className="mt-8">
              <img src={Badge} alt="Accreditation Badge" className="h-20 w-auto object-contain rounded-xl shadow-lg border border-white/5" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gold-500" /> Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gold-500" /> Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gold-500" /> Contact Us
            </h4>
            <div className="space-y-4">
              <a href="tel:+15714942117" className="flex items-start gap-3 text-slate-400 hover:text-gold-400 transition-colors text-sm">
                <Phone className="h-4 w-4 mt-0.5 text-gold-500 shrink-0" />
                <div>
                  <div>+1 (240) 564-9993</div>
                  <div>+1 (571) 494-2117</div>

                  <div className="text-xs text-slate-500">Nigeria: +234 813-353-2423</div>
                </div>
              </a>
              <a href="mailto:gosolar@yourenergyguy.com" className="flex items-center gap-3 text-slate-400 hover:text-gold-400 transition-colors text-sm">
                <Mail className="h-4 w-4 text-gold-500 shrink-0" />
                gosolar@yourenergyguy.com
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 text-gold-500 shrink-0" />
                <div>
                  <div className="font-medium text-slate-300 mb-1">Service Areas:</div>
                  <div className="flex flex-wrap gap-1">
                    {serviceAreas.map((area) => (
                      <span key={area} className="text-xs bg-white/5 border border-white/10 rounded px-1.5 py-0.5">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Sun className="h-3.5 w-3.5 text-gold-500" />
            <span>© {new Date().getFullYear()} Y.E.G General Contractors LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Y.E.G General Contractors Nigeria Limited</span>
            <span className="text-slate-700">•</span>
            <span>RC 7408926</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/contact" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="/contact" className="hover:text-gold-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}