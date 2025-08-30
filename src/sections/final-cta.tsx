'use client';

import { motion } from 'framer-motion';

export default function FinalCTASection() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Stats at top */}
        <div className="flex flex-wrap justify-between items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-electric-green text-sm mb-2">✦</div>
            <div className="text-white text-lg font-semibold">8+ / years of experience</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-electric-green text-sm mb-2">✦</div>
            <div className="text-white text-lg font-semibold">&gt;95% / client retention rate</div>
          </motion.div>
          
          {/* Back to top button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 text-white hover:text-electric-green transition-colors"
          >
            <span className="font-medium">Back to top</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Let's create<br />
              something<br />
              extraordinary<br />
              together<span className="text-electric-green">.</span>
            </h2>
            
            <p className="text-gray-400 text-lg">
              Let's make an impact
            </p>
          </motion.div>

          {/* Right side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile section */}
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="Andrew Scott"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="font-bold text-white text-xl">Andrew Scott</h3>
                <p className="text-gray-400">Web-designer, developer</p>
                <div className="flex space-x-2 mt-2">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.160 1.219-5.160s-.312-.623-.312-1.543c0-1.444.834-2.520 1.875-2.520.883 0 1.311.663 1.311 1.457 0 .887-.565 2.212-.854 3.438-.243 1.027.514 1.864 1.527 1.864 1.833 0 3.077-2.366 3.077-5.218 0-2.154-1.459-3.752-4.113-3.752-2.939 0-4.817 2.154-4.817 4.618 0 .841.242 1.433.632 1.893.205.244.233.458.173.707-.196.824-.623 2.012-.707 2.296-.105.356-.345.432-.795.26-1.494-.623-2.407-2.987-2.407-5.031 0-3.80 2.564-8.312 7.675-8.312 4.095 0 6.934 2.987 6.934 6.248 0 4.444-2.608 7.789-6.456 7.789-1.311 0-2.833-.687-3.295-1.527-.312-1.199-.623-2.326-.623-2.326-.312.624-.999 2.4-.999 2.4-.416 1.631-1.527 3.673-2.28 4.92 1.527.457 3.158.707 4.817.707 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm6.5 8.778a7.72 7.72 0 0 1-.086 1.135H12v-1.25h5.728c-.086.39-.214.765-.393 1.115h.165z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-1">Contact me</p>
                <h4 className="text-white text-2xl font-bold">hello@andrew.design</h4>
              </div>
              
              <p className="text-gray-400">
                Hit me up if you're looking for a{' '}
                <span className="text-white font-semibold">fast, reliable web-designer</span>{' '}
                who can bring your vision to life
              </p>
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-electric-green text-black px-8 py-4 rounded-full font-bold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
            >
              <span>Book a call</span>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span>&rarr;</span>
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
