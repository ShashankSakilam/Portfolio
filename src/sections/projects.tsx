'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ProjectsSection() {
  const [hoveredFolder, setHoveredFolder] = useState<string | null>(null);

  const projects = [
    {
      id: 'genai-development',
      title: 'Gen AI and Development',
      subtitle: '2 Projects',
      icon: 'code',
      images: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop'
      ],
      cards: [
        { title: 'AI Chat Assistant', tech: 'React, OpenAI', link: '#' },
        { title: 'Code Generator', tech: 'Python, GPT-4', link: '#' }
      ]
    },
    {
      id: 'design',
      title: 'Design',
      subtitle: '100+ Assets Delivered',
      icon: 'pen',
      images: [
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
      ],
      cards: [
        { title: 'E-commerce Platform', tech: 'Figma, Prototyping', link: '#' },
        { title: 'Mobile App Design', tech: 'UI/UX, Design System', link: '#' },
        { title: 'Brand Identity', tech: 'Logo, Visual Design', link: '#' }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gray-400 text-sm font-medium mb-2">[02] — Featured Projects</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Things I've built
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Folder Container */}
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredFolder(project.id)}
                onMouseLeave={() => setHoveredFolder(null)}
                style={{ perspective: '1000px' }}
              >
                {/* 3D Folder - Matching Framer Design */}
                <div className="relative">
                  {/* Folder Tab */}
                  <div className="absolute -top-4 md:-top-6 left-4 md:left-8 bg-gray-300 rounded-t-lg md:rounded-t-xl px-3 md:px-6 py-2 md:py-3 shadow-lg z-10">
                    <div className="w-12 md:w-16 h-2 md:h-3 bg-gray-400 rounded-full"></div>
                  </div>

                  {/* Main Folder Body */}
                  <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl md:rounded-3xl shadow-2xl p-4 md:p-8 pt-8 md:pt-12 transition-all duration-700 transform-gpu group-hover:[transform:rotateX(-20deg)_rotateY(8deg)_translateZ(20px)] hover:shadow-3xl border border-gray-300"
                       style={{ transformStyle: 'preserve-3d', minHeight: '240px' }}>
                    
                    {/* Folder Edge Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"></div>
                    
                    {/* Icon in top center */}
                    <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      {project.icon === 'code' ? (
                        <div className="text-blue-600 font-bold text-lg md:text-xl">
                          &lt;&gt;
                        </div>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                          <path d="M3 21V3L21 21L12 18L9 21H3Z" fill="#2563EB" stroke="#1D4ED8" strokeWidth="1.5"/>
                          <path d="M3 3L12 18L21 21" stroke="#1D4ED8" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>

                    {/* Static preview images inside folder */}
                    <div className="relative mt-12 md:mt-16 h-16 md:h-24 overflow-hidden">
                      <div className="absolute inset-x-2 md:inset-x-4 bottom-0 flex items-end gap-1 md:gap-2 opacity-60">
                        {project.images.slice(0, 3).map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-8 h-12 md:w-12 md:h-16 rounded-md overflow-hidden border-2 border-white shadow-sm"
                            style={{
                              transform: `rotate(${imgIndex * 3 - 3}deg)`,
                              zIndex: 3 - imgIndex
                            }}
                          >
                            <img
                              src={img}
                              alt={`Preview ${imgIndex + 1}`}
                              className="w-full h-full object-cover opacity-70"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Popping out images on hover */}
                    <div className="absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                      {project.images.map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="absolute w-24 h-18 md:w-32 md:h-24 rounded-lg overflow-hidden border-4 border-white shadow-2xl transition-all duration-700"
                          style={{
                            transform: `rotate(${imgIndex * 10 - 10}deg) translate(${imgIndex * 20 - 20}px, ${imgIndex * 10}px)`,
                            zIndex: 10 + (3 - imgIndex),
                            transitionDelay: `${imgIndex * 100}ms`,
                            animationDelay: `${imgIndex * 100}ms`
                          }}
                        >
                          <img
                            src={img}
                            alt={`${project.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Folder Bottom Shadow */}
                    <div className="absolute bottom-0 left-4 right-4 h-2 bg-gray-400 rounded-b-3xl opacity-30 blur-sm"></div>
                  </div>

                  {/* Hoverable Project Cards */}
                  {hoveredFolder === project.id && (
                    <div className="absolute top-full left-0 right-0 mt-4 z-20">
                      <div className="grid gap-3">
                        {project.cards.map((card, cardIndex) => (
                          <motion.a
                            key={cardIndex}
                            href={card.link}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3, delay: cardIndex * 0.1 }}
                            className="bg-white border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-semibold text-gray-900 group-hover/card:text-[#ADFF2F] transition-colors">
                                  {card.title}
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">{card.tech}</p>
                              </div>
                              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover/card:bg-[#ADFF2F] transition-colors">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-600 group-hover/card:text-white transition-colors">
                                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="mt-6 md:mt-8 text-center px-2">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg">
                    {project.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 bg-[#ADFF2F] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#9AE234] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}