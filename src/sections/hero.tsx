'use client';

import { motion } from 'framer-motion';
import SelectionBox from '@/components/selection-box';
import TitleComponent from '@/components/ui/dynamic-text-slider';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left side - Dynamic text slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start"
          >
            <TitleComponent />
          </motion.div>

          {/* Right side - Your image in selection box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <SelectionBox className="max-w-2xl">
              <div className="relative">
                {/* Your actual profile image - larger to cover right side */}
                <div className="w-[32rem] h-[40rem] overflow-hidden relative">
                  <img
                    src="/profile-image.png"
                    alt="Your Profile"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback with green background if image doesn't load
                      const target = e.target as HTMLImageElement;
                      target.style.background = 'linear-gradient(135deg, #ADFF2F 0%, #8BC34A 50%, #4CAF50 100%)';
                      target.alt = 'Profile image loading...';
                    }}
                  />
                </div>
              </div>
            </SelectionBox>
          </motion.div>

        </div>
      </div>
    </section>
  );
}