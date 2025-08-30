import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface IconGridItem {
  id: string;
  icon: React.ReactNode;
  name: string;
  color?: string;
}

export interface IconGridProps {
  items: IconGridItem[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const IconGrid = React.forwardRef<HTMLDivElement, IconGridProps>(
  ({ items, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3",
          className
        )}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="group relative flex flex-col items-center justify-center"
            aria-label={item.name}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 p-2 transition-all duration-300 ease-in-out hover:bg-white/10 hover:shadow-lg hover:-translate-y-1 border border-white/5 hover:border-white/20">
              {item.icon}
            </div>
          </motion.div>
        ))}
      </motion.div>
    );
  }
);

IconGrid.displayName = "IconGrid";

export { IconGrid };
