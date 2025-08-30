'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlassEffect, GlassFilter } from '@/components/ui/liquid-glass';

export default function LiquidGlassNavbar() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Connect', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => ({
        name: item.name,
        element: document.querySelector(item.href)
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          
          if (scrollPosition >= elementTop) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setActiveSection(item.name);
    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <GlassFilter />
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'scale-95' : 'scale-100'
        }`}
      >
        <div className="relative">
          <GlassEffect 
            className="rounded-full px-3 py-3 backdrop-blur-md"
            style={{
              background: isScrolled 
                ? 'rgba(255, 255, 255, 0.15)' 
                : 'rgba(255, 255, 255, 0.25)',
            }}
          >
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.name
                      ? 'font-semibold'
                      : 'text-black/70 hover:text-black'
                  }`}
                  style={{
                    color: activeSection === item.name ? '#1a1a1a' : undefined,
                    textShadow: activeSection === item.name ? '0 1px 2px rgba(0, 0, 0, 0.1)' : undefined,
                  }}
                >
                  {activeSection === item.name && (
                    <>
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, rgba(173, 255, 47, 0.8), rgba(173, 255, 47, 0.6))',
                          boxShadow: `
                            0 4px 20px rgba(173, 255, 47, 0.4),
                            0 2px 8px rgba(173, 255, 47, 0.3),
                            inset 0 1px 0 rgba(255, 255, 255, 0.4),
                            inset 0 -1px 0 rgba(173, 255, 47, 0.2)
                          `,
                          backdropFilter: 'blur(8px)',
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30
                        }}
                      />
                      {/* Pulsing glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, rgba(173, 255, 47, 0.4), rgba(173, 255, 47, 0.2))',
                          backdropFilter: 'blur(8px)',
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      {/* Additional inner glow */}
                      <motion.div
                        className="absolute inset-1 rounded-full opacity-60"
                        style={{
                          background: 'linear-gradient(135deg, rgba(173, 255, 47, 0.3), rgba(255, 255, 255, 0.2))',
                          backdropFilter: 'blur(4px)',
                        }}
                        animate={{
                          opacity: [0.6, 0.8, 0.6],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </>
                  )}
                  <span className="relative z-10">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </GlassEffect>
          
          {/* Enhanced glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-30 blur-xl transition-all duration-500"
            style={{
              background: activeSection !== 'Home' 
                ? 'linear-gradient(45deg, rgba(173, 255, 47, 0.4), rgba(173, 255, 47, 0.2), rgba(255, 255, 255, 0.2))'
                : 'linear-gradient(45deg, rgba(173, 255, 47, 0.2), rgba(255, 255, 255, 0.3))',
            }}
          />
          
          {/* Additional green glow when active section changes */}
          {activeSection !== 'Home' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 rounded-full opacity-20 blur-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(173, 255, 47, 0.6) 0%, transparent 70%)',
              }}
            />
          )}
        </div>
      </motion.nav>
    </>
  );
}
