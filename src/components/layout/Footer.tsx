import React from 'react';
import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Your Energy Guy</h3>
            <p className="text-gray-400">
              Y.E.G Solar Solutions have installed over 100 homes in over 8 states like Maryland, DC, Virginia, Texas, Arizona, New Jersey and more.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (571) 4942117</span>
              </div> 
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (240) 5649993</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>gosolar@yourenergyguy.com</span>
              </div>
              {/* <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Solar Street, Sunny City</span>
              </div> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-yellow-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-yellow-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-yellow-500 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1CqDnfsSHR/?mibextid=wwXIfr" className="hover:text-yellow-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/Yourenergyguy1" className="hover:text-yellow-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/yourenergyguy?igsh=c3Y1dnU2Mzh1cWd3" className="hover:text-yellow-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Energy Guy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}