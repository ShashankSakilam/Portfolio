'use client';

import { motion } from 'framer-motion';
import DesignCodeCookComponent from '@/components/ui/design-code-cook';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16"
        >
          <p className="text-gray-400 text-sm font-medium mb-2">[01] — About Me</p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Your Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              A designer who codes, and a coder who designs.
            </h2>

            {/* Narrative Text */}
            <div className="space-y-4 md:space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                I'm a Computer Science undergrad at MGIT in Hyderabad, but my real classroom is the intersection of code, design, and a good challenge. While I'm diving deep into <span className="text-white font-medium">Generative AI</span> and <span className="text-white font-medium">web development</span>, I'm equally passionate about the human side of technology—crafting intuitive <span className="text-white font-medium">UI/UX</span> and compelling visual stories.
              </p>
              
              <p>
                Beyond academics, I lead my college's <span className="text-[#ADFF2F] font-medium">Design Club</span> and I'm currently mastering the art of storytelling through video. This blend of technical skill and creative drive is my superpower.
              </p>
              
              <p>
                Whether it's shipping a new feature, designing a poster, or climbing the leaderboard in a late-night game 😉, I bring a competitive spirit and a desire to create things that people love to use. At the end of the day, my goal is to build great products and spread a bit of happiness along the way.
              </p>
            </div>
            
            {/* Trace My Journey Button */}
            <div className="pt-4 md:pt-6">
              <motion.a
                href="/journey"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 md:gap-3 bg-[#ADFF2F] hover:bg-[#9AE234] text-black font-semibold px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#ADFF2F]/25"
              >
                <span>Trace My Journey</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>

            {/* Languages */}
            <div className="pt-4 md:pt-6 border-t border-gray-800">
              <p className="text-gray-400 text-xs md:text-sm">
                <span className="text-gray-500">Fluent in:</span> English, Hindi, and Telugu
              </p>
            </div>
          </motion.div>

          {/* Right Column - Creative Mantra */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end mt-8 md:mt-0"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ADFF2F]/10 to-cyan-400/10 rounded-2xl md:rounded-3xl blur-2xl md:blur-3xl transform -rotate-6 scale-110"></div>

              {/* Main component container */}
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16">
                <DesignCodeCookComponent />

                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 md:top-4 md:left-4 w-4 h-4 md:w-8 md:h-8 border-l-2 border-t-2 border-gray-700 rounded-tl-lg"></div>
                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-4 h-4 md:w-8 md:h-8 border-r-2 border-t-2 border-gray-700 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 w-4 h-4 md:w-8 md:h-8 border-l-2 border-b-2 border-gray-700 rounded-bl-lg"></div>
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-4 h-4 md:w-8 md:h-8 border-r-2 border-b-2 border-gray-700 rounded-br-lg"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}