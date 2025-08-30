"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-black font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-white max-w-4xl font-bold">
          My Journey Timeline
        </h2>
        <p className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
          Here is how I have grown as a curious student and an individual.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-12 md:pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-8 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-32 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 md:h-10 md:w-10 absolute left-4 md:left-3 rounded-full bg-black border-2 border-[#ADFF2F] flex items-center justify-center">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#ADFF2F] border border-[#ADFF2F] p-1 md:p-2" />
              </div>
              <h3 className="hidden md:block text-lg md:text-xl md:pl-20 md:text-4xl lg:text-5xl font-bold text-[#ADFF2F]">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 md:pl-4 pr-4 md:pr-4 w-full ml-2 md:ml-0">
              <h3 className="md:hidden block text-lg sm:text-xl mb-3 md:mb-4 text-left font-bold text-[#ADFF2F]">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="timeline-line absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#ADFF2F] via-[#ADFF2F] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

        {/* Mobile-specific flow line positioning */}
        <style jsx>{`
          @media (max-width: 767px) {
            .timeline-line {
              left: 32px !important; /* Align with mobile circle center (left-4 + w-8/2 = 16px + 16px = 32px) */
            }
          }
        `}</style>
      </div>
    </div>
  );
};
