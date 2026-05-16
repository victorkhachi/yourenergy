import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Logo from '../../assets/freepik_br_d86f6789-b07e-4470-a857-a8265f4d4b49.png';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { path: '/services#solar', label: '☀️ Solar Energy' },
      { path: '/services#roofing', label: '🏠 Roofing' },
      { path: '/services#remodeling', label: '🔨 Remodeling' },
      { path: '/services#contracting', label: '🏗️ General Contracting' },
    ],
  },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-navy border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 py-1.5 bg-gold-500/10 border-b border-gold-500/10 text-xs text-slate-300">
        <a href="tel:+15714942117" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
          <Phone className="h-3 w-3" /> +1 (571) 494-2117
        </a>
        <a href="tel:+12405649993" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
          <Phone className="h-3 w-3" /> +1 (240) 564-9993
        </a>
        <a href="mailto:gosolar@yourenergyguy.com" className="hover:text-gold-400 transition-colors">
          gosolar@yourenergyguy.com
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <img src={Logo} alt="Y.E.G General Contractors" className="h-10 w-10 object-contain rounded-lg bg-white/5 p-1" />
            <div>
              <span className="block text-xl font-black text-white leading-none tracking-tight">
                Y.E.G General Contractors LLC
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-gold-400 bg-gold-500/10'
                          : 'text-slate-300 hover:text-gold-400 hover:bg-white/5'
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </NavLink>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-navy-800 border border-white/10 rounded-xl shadow-navy overflow-hidden animate-fade-in">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-gold-500/10 hover:text-gold-400 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-gold-400 bg-gold-500/10'
                        : 'text-slate-300 hover:text-gold-400 hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex btn-gold text-sm px-5 py-2.5"
            >
              Free Estimate
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-gold-400 hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/5 animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gold-500/15 text-gold-400'
                        : 'text-slate-300 hover:bg-white/5 hover:text-gold-400'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
                {item.dropdown && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-3">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-3 py-2 text-xs text-slate-400 hover:text-gold-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-white/10">
              <Link
                to="/contact"
                className="btn-gold w-full text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Free Estimate
              </Link>
            </div>
            <div className="flex flex-col gap-2 pt-3 text-xs text-slate-400">
              <a href="tel:+15714942117" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="h-3.5 w-3.5" /> +1 (571) 494-2117
              </a>
              <a href="tel:+12405649993" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
                <Phone className="h-3.5 w-3.5" /> +1 (240) 564-9993
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}