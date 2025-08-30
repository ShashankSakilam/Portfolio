'use client';

import { motion } from 'framer-motion';

export default function ProcessSection() {
  const processes = [
    {
      number: "01",
      phase: "Discovery",
      title: "We'll dive deep into your personal goals and long-term vision",
      duration: "3-5 days",
      items: [
        "Initial Consultation: Understand the client's vision, goals, and target audience.",
        "Research: Analyze competitors and industry trends to gather insights.",
        "Define Scope: Set the project's objectives, deliverables, and timelines."
      ]
    },
    {
      number: "02", 
      phase: "Design",
      title: "I'll create mockups that bring your brand to life",
      duration: "1-2 weeks",
      items: [
        "Wireframing: Create low-fidelity wireframes to map out the site's structure.",
        "Style Guide Creation: Develop a design language including colors, fonts, and UI elements.",
        "Prototype Development: Build clickable prototypes for client feedback.",
        "Finalize Design: Approve the final design with detailed mockups for all pages."
      ]
    },
    {
      number: "03",
      phase: "Build", 
      title: "Using no-code tools, I'll construct your site",
      duration: "1 week",
      items: [
        "Page Construction: Build out the website structure using selected tools.",
        "Content Integration: Import and format content (text, images, videos).",
        "Basic SEO Setup: Optimize on-page elements for search engines."
      ]
    },
    {
      number: "04",
      phase: "Launch",
      title: "Your site goes live, ready to make an impact", 
      duration: "2-3 days",
      items: [
        "Client Review: Present the site to the client for feedback.",
        "Revisions: Make necessary changes based on client feedback."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Top categories */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-electric-green text-sm mb-2">✦</div>
            <div className="text-white text-lg font-semibold">E-commerce</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-electric-green text-sm mb-2">✦</div>
            <div className="text-white text-lg font-semibold">Corporate website</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-electric-green text-sm mb-2">✦</div>
            <div className="text-white text-lg font-semibold">Landing page</div>
          </motion.div>
        </div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center space-x-2 mb-8"
        >
          <div className="w-2 h-2 bg-electric-green rounded-full"></div>
          <span className="text-white font-medium">[03] — Process</span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            How it works
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="space-y-12">
          {processes.map((process, index) => (
            <motion.div
              key={process.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-blue-500 pl-8 relative"
            >
              {/* Phase indicator */}
              <div className="absolute -left-4 top-0 w-8 h-8 bg-black border-2 border-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-electric-green rounded-full"></div>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="lg:w-2/3">
                  {/* Phase badge */}
                  <div className="inline-block bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium mb-4">
                    {process.phase}
                  </div>
                  
                  {/* Process number and title */}
                  <h3 className="text-electric-green text-6xl font-bold mb-2">/{process.number}</h3>
                  <h4 className="text-white text-2xl font-semibold mb-6">{process.title}</h4>
                  
                  {/* Process items */}
                  <ul className="space-y-3">
                    {process.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="text-electric-green text-sm mt-1">✦</div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Duration */}
                <div className="lg:w-1/3 text-right">
                  <div className="text-gray-400 text-sm">⏱ {process.duration}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
