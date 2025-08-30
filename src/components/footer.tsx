'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Twitter, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/shashanksakilam',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/shashanksakilam',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:bg-gray-600'
    },
    {
      name: 'Email',
      href: 'mailto:shashanksakilam@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:bg-red-600'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/shashanksakilam',
      icon: <Instagram className="w-5 h-5" />,
      color: 'hover:bg-pink-600'
    }
  ];

  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Left Column - Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">
                SHASHANK <span className="text-[#ADFF2F]">SAKILAM</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Dev/Design
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full bg-gray-900 border border-gray-800 transition-all duration-300 ${social.color} hover:border-transparent group`}
                  aria-label={social.name}
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Middle Column - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ADFF2F] transition-colors duration-300 hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Contact & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <a 
                  href="mailto:shashanksakilam@gmail.com"
                  className="text-gray-300 hover:text-[#ADFF2F] transition-colors break-all"
                >
                  shashanksakilam@gmail.com
                </a>
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-400 hover:text-[#ADFF2F] transition-colors group"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span>Back to top</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Border & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 mt-12 border-t border-gray-900"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Shashank Sakilam. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ADFF2F]/20 to-transparent"></div>
    </footer>
  );
}