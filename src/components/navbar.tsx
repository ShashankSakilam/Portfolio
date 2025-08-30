'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-black flex items-center">
            <span className="w-8 h-8 bg-electric-green rounded mr-2"></span>
            Webstack
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-black hover:text-gray-600 transition-colors font-medium"
            >
              About & Contact
            </a>
          </div>

          {/* Contact Info & Button */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-500 text-sm">Email: hello@andrew.design</span>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-black hover:bg-gray-50 transition-colors font-medium">
              Contact me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
              />
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <a
              href="#projects"
              className="block text-black hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block text-black hover:text-gray-600 transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About & Contact
            </a>
            <button className="w-full px-4 py-2 border border-gray-300 rounded-full text-black hover:bg-gray-50 transition-colors font-medium">
              Contact me
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}