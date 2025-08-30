// Magic UI Animated Beam Component
// This is a placeholder - replace with actual Magic UI implementation

'use client';

import { motion } from 'framer-motion';

interface AnimatedBeamProps {
  className?: string;
  children?: React.ReactNode;
}

export default function AnimatedBeam({ className = '', children }: AnimatedBeamProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {children}
    </motion.div>
  );
}
