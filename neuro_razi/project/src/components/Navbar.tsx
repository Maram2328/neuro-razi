import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollThreshold] = useState(100); // Minimum scroll amount before hiding navbar

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only hide navbar if we've scrolled past the threshold
          if (currentScrollY > scrollThreshold) {
            if (currentScrollY > lastScrollY) {
              // Scrolling down - hide navbar
              setIsVisible(false);
            } else {
              // Scrolling up - show navbar
              setIsVisible(true);
            }
          } else {
            // At the top of the page - always show navbar
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, scrollThreshold]);

  return (
    <nav 
      className={`bg-white shadow-lg fixed w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Neuro Razi</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-blue-600">À propos</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/diseases" className="text-gray-600 hover:text-blue-600">Maladies</Link>
            <Link to="/team" className="text-gray-600 hover:text-blue-600">Équipe</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                À propos
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Services
              </Link>
              <Link
                to="/diseases"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Maladies
              </Link>
              <Link
                to="/team"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Équipe
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;