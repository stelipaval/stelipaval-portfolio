// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50' // Always show background
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="#" 
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                ML Engineer
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="#about" 
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
            >
              Experience
            </Link>
            <Link 
              href="#projects" 
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105"
            >
              Projects
            </Link>
            <Link 
              href="#education" 
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105"
            >
              Education
            </Link>
            <Link 
              href="#technologies" 
              className="px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 hover:scale-105"
            >
              Technologies
            </Link>
            <Link 
              href="#contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-xl text-sm font-medium hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-gray-600 hover:bg-gray-100 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated menu icon */}
              <div className="w-6 h-6 relative">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                } w-6 h-0.5 bg-current`}></div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                } w-6 h-0.5 bg-current`}></div>
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                } w-6 h-0.5 bg-current`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-2 border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
              <Link 
                href="#about" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#experience" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </Link>
              <Link 
                href="#projects" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#education" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </Link>
              <Link 
                href="#technologies" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                Technologies
              </Link>
              <Link 
                href="#contact" 
                className="block mx-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-xl text-base font-medium text-center hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}