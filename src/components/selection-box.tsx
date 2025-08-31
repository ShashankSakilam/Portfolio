'use client';

import { motion } from 'framer-motion';

interface SelectionBoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function SelectionBox({ children, className = "" }: SelectionBoxProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Main frame with blue border */}
      <div className="border-2 border-blue-500 relative">
        {children}

        {/* Selection handles - responsive sizing */}
        {/* Top-Left */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-blue-500 rounded-sm shadow-sm touch-manipulation"></div>

        {/* Top-Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-blue-500 rounded-sm shadow-sm touch-manipulation"></div>

        {/* Top-Right */}
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-blue-500 rounded-sm shadow-sm touch-manipulation"></div>

        {/* Middle-Left */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-blue-500 rounded-sm shadow-sm touch-manipulation"></div>

        {/* Middle-Right */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-blue-500 rounded-sm shadow-sm touch-manipulation"></div>

        {/* Bottom-Left */}
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-blue-500 rounded-sm shadow-sm touch-manipulation"></div>

        {/* Bottom-Center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-blue-500 rounded-sm shadow-sm touch-manipulation"></div>

        {/* Bottom-Right */}
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-2 h-2 md:w-3 md:h-3 bg-white border border-blue-500 rounded-sm shadow-sm touch-manipulation"></div>
      </div>
    </motion.div>
  );
}
