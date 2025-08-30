'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { FlowButton } from '@/components/ui/flow-button';

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('shashanksakilam@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
    // Also open email client
    window.location.href = 'mailto:shashanksakilam@gmail.com?subject=Hello! Let\'s connect&body=Hi Shashank,%0D%0A%0D%0AI came across your portfolio and would love to connect!';
  };

  const socialLinks = [
    {
      name: 'Email',
      value: 'shashanksakilam@gmail.com',
      href: 'mailto:shashanksakilam@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'text-red-400'
    },
    {
      name: 'LinkedIn',
      value: '/in/shashanksakilam',
      href: 'https://linkedin.com/in/shashanksakilam',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      name: 'GitHub',
      value: '/shashanksakilam',
      href: 'https://github.com/shashanksakilam',
      icon: <Github className="w-5 h-5" />,
      color: 'text-gray-400'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm font-medium mb-2">[04] — Get in Touch</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Side - Invitation & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Creative Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Still something on mind ?
              </h2>
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Drop a <span className="text-[#ADFF2F]">"Hi"</span>
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow ${link.color}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{link.name}</p>
                      <p className="text-sm text-gray-600">{link.value}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Open to Opportunities Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-gradient-to-br from-[#ADFF2F]/10 to-[#ADFF2F]/5 rounded-2xl border border-[#ADFF2F]/20"
            >
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm currently seeking <span className="font-semibold text-black">full-time and internship opportunities</span>. If you have a role that aligns with my skills 
                and passion for building impactful solutions, I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <FlowButton text="Let's Collaborate" />
                
                {/* Download Resume Button */}
                <motion.a
                  href="/Shashank_Sakilam_Resume.pdf.pdf"
                  download="Shashank_Sakilam_Resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-2 bg-[#ADFF2F] hover:bg-[#9AE234] text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#ADFF2F]/25 border border-[#ADFF2F] hover:border-[#9AE234]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-y-0.5">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Download Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative max-w-lg w-full">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ADFF2F]/20 to-blue-500/20 rounded-3xl blur-3xl transform rotate-3 scale-105"></div>
              
              {/* Main CTA Card */}
              <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                
                {/* Floating elements decoration */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-[#ADFF2F]/10 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#ADFF2F] rounded-full animate-pulse"></div>
                </div>
                
                <div className="text-center space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-black">
                    Say Hello
                  </h3>
                  
                  <p className="text-gray-600 text-lg">
                    Ready to start a conversation? Click below to send me an email!
                  </p>
                  
                  {/* Giant Email Button */}
                  <motion.button
                    onClick={handleEmailClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full bg-gradient-to-r from-[#ADFF2F] to-[#9AE234] hover:from-[#9AE234] hover:to-[#ADFF2F] text-black font-bold text-lg md:text-xl py-6 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative flex items-center justify-center gap-3">
                      {emailCopied ? (
                        <>
                          <Check className="w-6 h-6" />
                          <span>Email Copied!</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                          <span>shashanksakilam@gmail.com</span>
                          <Copy className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </>
                      )}
                    </div>
                  </motion.button>
                  
                  <p className="text-sm text-gray-500">
                    Click to copy email or open your mail client
                  </p>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="absolute top-4 left-4 w-2 h-2 bg-[#ADFF2F] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}