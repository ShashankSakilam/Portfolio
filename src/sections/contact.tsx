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
    { name: 'Email', href: 'mailto:shashanksakilam@gmail.com', icon: <Mail className="w-5 h-5" />, color: 'hover:text-red-500', value: 'shashanksakilam@gmail.com' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shashank-sakilam-864a54259/', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-500', value: 'Connect on LinkedIn' },
    { name: 'GitHub', href: 'https://github.com/ShashankSakilam/', icon: <Github className="w-5 h-5" />, color: 'hover:text-gray-500', value: 'View my code' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gray-400 text-xs md:text-sm font-medium mb-2">[04] — Get in Touch</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">

          {/* Left Side - Invitation & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {/* Creative Headline */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                Still something on mind ?
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                Drop a <span className="text-[#ADFF2F]">"Hi"</span>
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-3 md:space-y-4">
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
                  className="group flex items-center justify-between p-3 md:p-4 bg-gray-50 hover:bg-gray-100 rounded-lg md:rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg touch-manipulation"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`p-1.5 md:p-2 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow ${link.color}`}>
                      {link.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">{link.name}</p>
                      <p className="text-xs md:text-sm text-gray-600">{link.value}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Open to Opportunities Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="p-4 md:p-6 bg-gradient-to-br from-[#ADFF2F]/10 to-[#ADFF2F]/5 rounded-xl md:rounded-2xl border border-[#ADFF2F]/20"
            >
              <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                I'm currently seeking <span className="font-semibold text-black">full-time and internship opportunities</span>. If you have a role that aligns with my skills
                and passion for building impactful solutions, I'd love to hear from you!
              </p>
              <div className="flex flex-col gap-3 md:gap-4">
                <a href="mailto:shashanksakilam@gmail.com" className="w-full">
                  <FlowButton text="Let's Collaborate" />
                </a>

                {/* Download Resume Button */}
                <motion.a
                  href="/Shashank_Sakilam_Resume.pdf.pdf"
                  download="Shashank_Sakilam_Resume.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-2 bg-[#ADFF2F] hover:bg-[#9AE234] text-black font-semibold text-sm px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#ADFF2F]/25 border border-[#ADFF2F] hover:border-[#9AE234] touch-manipulation"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="md:w-[16px] md:h-[16px] transition-transform group-hover:translate-y-0.5">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-sm">Download Resume</span>
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
            className="flex items-center justify-center lg:justify-end mt-8 md:mt-0"
          >
            <div className="relative max-w-lg w-full">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ADFF2F]/20 to-blue-500/20 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl transform rotate-3 scale-105"></div>

              {/* Main CTA Card */}
              <div className="relative bg-white border-2 border-gray-200 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

                {/* Floating elements decoration */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-12 h-12 md:w-16 md:h-16 bg-[#ADFF2F]/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-[#ADFF2F] rounded-full animate-pulse"></div>
                </div>
                
                <div className="text-center space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                    Say Hello
                  </h3>

                  <p className="text-gray-600 text-base md:text-lg px-2">
                    Ready to start a conversation? Click below to send me an email!
                  </p>

                  {/* Giant Email Button */}
                  <motion.button
                    onClick={handleEmailClick}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full bg-gradient-to-r from-[#ADFF2F] to-[#9AE234] hover:from-[#9AE234] hover:to-[#ADFF2F] text-black font-bold text-base md:text-lg lg:text-xl py-5 md:py-6 px-6 md:px-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden touch-manipulation min-h-[60px] md:min-h-[auto]"
                  >
                    {/* Button background animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
                      {emailCopied ? (
                        <>
                          <Check className="w-5 h-5 md:w-6 md:h-6" />
                          <span className="text-sm md:text-base">Email Copied!</span>
                        </>
                      ) : (
                        <>
                          <Mail className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                          <span className="text-sm md:text-base break-all sm:break-normal text-center sm:text-left">shashanksakilam@gmail.com</span>
                          <Copy className="w-4 h-4 md:w-5 md:h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
                        </>
                      )}
                    </div>
                  </motion.button>

                  <p className="text-xs md:text-sm text-gray-500 px-2">
                    Click to copy email or open your mail client
                  </p>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full"></div>
                <div className="absolute top-3 md:top-4 left-3 md:left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ADFF2F] rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}