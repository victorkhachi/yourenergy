import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from "../../assets/freepik_br_d86f6789-b07e-4470-a857-a8265f4d4b49.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img width={50} src={Logo} alt="" />
              <span className="ml-2 text-xl font-bold text-gray-900">Y.E.G</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-yellow-500'
                      : 'text-gray-700 hover:text-yellow-500'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-yellow-50 text-yellow-500'
                      : 'text-gray-700 hover:bg-yellow-50 hover:text-yellow-500'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}