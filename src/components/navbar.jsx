"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className={`bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg ${
          isScrolled ? 'mx-4' : 'mx-8'
        }`}>
          <div className="flex items-center justify-between px-6 py-4">
                         {/* Logo */}
             <Link href="/" className="flex items-center space-x-2">
               <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                 <span className="text-white font-bold text-lg">S</span>
               </div>
               <span className="text-xl font-bold text-gray-900 dark:text-white">Saim Portfolio</span>
             </Link>

                         {/* Desktop Navigation */}
             <div className="hidden md:flex items-center space-x-8">
               <Link
                 href="/"
                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
               >
                 Home
               </Link>
               <Link
                 href="/projects"
                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300"
               >
                 Projects
               </Link>
               
             </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

                     {/* Mobile Menu */}
           {isMobileMenuOpen && (
             <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
               <div className="px-6 py-4 space-y-4">
                 <Link
                   href="/"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 py-2"
                 >
                   Home
                 </Link>
                 <Link
                   href="/projects"
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-300 py-2"
                 >
                   Projects
                 </Link>
               
               </div>
             </div>
           )}
        </div>
      </div>
    </nav>
  );
}
