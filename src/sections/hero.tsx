'use client';

import { motion } from 'framer-motion';
import SelectionBox from '@/components/selection-box';
import TitleComponent from '@/components/ui/dynamic-text-slider';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen bg-white pt-20 pb-8 px-4 md:pt-32 md:pb-20 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-center min-h-[65vh] md:min-h-[80vh]">

          {/* Left side - Dynamic text slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start order-2 lg:order-1"
          >
            <TitleComponent />
          </motion.div>

          {/* Right side - Your image in selection box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <SelectionBox className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
              <div className="relative">
                {/* Your actual profile image - responsive sizing */}
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl h-80 sm:h-96 md:h-[28rem] lg:h-[40rem] overflow-hidden relative mx-auto">
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