'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [hoveredFolder, setHoveredFolder] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const baseProjects = [
    {
      id: 'genai-development',
      title: 'Gen AI & Development',
      subtitle: '3 Featured Projects',
      icon: 'code',
      images: [], // Empty array for plain folders
      cards: [
        { title: 'Creator Pulse', tech: 'AI Content Assistant', link: '/projects' },
        { title: 'Face Recognition System', tech: 'Computer Vision', link: '/projects' },
        { title: 'Multi-PDF RAG Chatbot', tech: 'AI & NLP', link: '/projects' }
      ]
    },
    {
      id: 'design',
      title: 'Design & Creative',
      subtitle: '100+ Assets Delivered',
      icon: 'pen',
      images: [], // Empty array for plain folders
      cards: [
        {
          title: 'View All My Designs',
          tech: 'Navigate to Figma',
          link: 'https://www.figma.com/design/K89AVJ2frA5ejwdhG4g9oS/Shashank-Sakilam-s-team-library?node-id=0-1&t=2cOEt3To7aPpNr9d-1',
          isFigmaLink: true
        },
        {
          title: 'The one you are in 😉!',
          tech: '',
          link: '#',
          isSarcastic: true
        }
      ]
    }
  ];

  // Filter cards for mobile - only show Creator Pulse for Gen AI folder
  const projects = baseProjects.map(project => {
    if (project.id === 'genai-development' && isMobile) {
      return {
        ...project,
        subtitle: '1 Featured Project', // Update subtitle for mobile
        cards: [project.cards[0]] // Only keep the first card (Creator Pulse)
      };
    }
    return project;
  });

  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gray-400 text-xs md:text-sm font-medium mb-2">[02] — Featured Projects</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
            Things I've built
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-3 md:mt-4 px-2">
            Explore my journey through AI, development, and design. Click on any project card to dive deeper into the details and technologies used.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
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
                onClick={() => {
                  // For mobile: toggle popup on click if not already hovered
                  if (window.innerWidth < 768) {
                    setHoveredFolder(hoveredFolder === project.id ? null : project.id);
                  }
                }}
                style={{ perspective: '1000px' }}
              >
                {/* 3D Folder - Matching Framer Design */}
                <div className="relative">
                  {/* Folder Tab */}
                  <div className="absolute -top-3 md:-top-4 lg:-top-6 left-3 md:left-4 lg:left-8 bg-gray-300 rounded-t-lg md:rounded-t-xl px-2 md:px-3 lg:px-6 py-1.5 md:py-2 lg:py-3 shadow-lg z-10">
                    <div className="w-8 md:w-12 lg:w-16 h-1.5 md:h-2 lg:h-3 bg-gray-400 rounded-full"></div>
                  </div>

                  {/* Main Folder Body */}
                  <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl md:shadow-2xl p-3 md:p-4 lg:p-8 pt-6 md:pt-8 lg:pt-12 transition-all duration-700 transform-gpu group-hover:[transform:rotateX(-20deg)_rotateY(8deg)_translateZ(20px)] hover:shadow-3xl border border-gray-300"
                       style={{ transformStyle: 'preserve-3d', minHeight: '200px' }}>
                    
                    {/* Folder Edge Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl md:rounded-2xl lg:rounded-3xl"></div>

                    {/* Icon in top center */}
                    <div className="absolute top-3 md:top-4 lg:top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 bg-white rounded-lg md:rounded-xl shadow-md flex items-center justify-center">
                      {project.icon === 'code' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 md:w-[20px] md:h-[20px]">
                          <path d="m18 16 4-4-4-4"/>
                          <path d="m6 8-4 4 4 4"/>
                          <path d="m14.5 4-5 16"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 md:w-[20px] md:h-[20px]">
                          <path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/>
                          <path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/>
                          <path d="m2.3 2.3 7.286 7.286"/>
                          <circle cx="11" cy="11" r="2"/>
                        </svg>
                      )}
                    </div>

                    {/* Static preview images inside folder - only show if images exist */}
                    {project.images.length > 0 && (
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
                    )}

                    {/* Popping out images on hover - only show if images exist */}
                    {project.images.length > 0 && (
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
                    )}

                    {/* Folder Bottom Shadow */}
                    <div className="absolute bottom-0 left-4 right-4 h-2 bg-gray-400 rounded-b-3xl opacity-30 blur-sm"></div>
                  </div>

                  {/* Hoverable Project Cards */}
                  {hoveredFolder === project.id && (
                    <div className="absolute top-full left-0 right-0 mt-3 md:mt-4 z-20 max-w-xs sm:max-w-sm mx-auto md:max-w-none px-2 md:px-0">
                      <div className="grid gap-3 md:gap-3">
                        {project.cards.map((card, cardIndex) => (
                          <motion.a
                            key={cardIndex}
                            href={card.isSarcastic ? undefined : card.link}
                            onClick={card.isSarcastic ? (e) => e.preventDefault() : undefined}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3, delay: cardIndex * 0.1 }}
                            className={`bg-white border border-gray-200 rounded-lg md:rounded-xl p-3 md:p-3 lg:p-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card touch-manipulation ${
                              card.isSarcastic ? 'cursor-default' : ''
                            }`}
                            target={card.isFigmaLink ? '_blank' : undefined}
                            rel={card.isFigmaLink ? 'noopener noreferrer' : undefined}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1 min-w-0">
                                <h4 className={`transition-colors text-xs sm:text-sm md:text-base font-semibold ${
                                  card.isSarcastic
                                    ? 'text-gray-900 group-hover/card:text-gray-700'
                                    : 'text-gray-900 group-hover/card:text-[#ADFF2F]'
                                }`}>
                                  {card.title}
                                </h4>
                                <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1 truncate">{card.tech}</p>
                              </div>

                              {/* Special Figma icon for design link */}
                              {card.isFigmaLink && (
                                <div className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8 bg-white rounded-full flex items-center justify-center group-hover/card:bg-gray-50 transition-colors ml-1.5 md:ml-2 lg:ml-3 flex-shrink-0 shadow-sm">
                                  <svg width="12" height="12" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[16px] md:h-[16px]">
                                    <path d="M19 28.5C19 25.4624 21.4624 23 24.5 23H33.5C36.5376 23 39 25.4624 39 28.5C39 31.5376 36.5376 34 33.5 34H24.5C21.4624 34 19 31.5376 19 28.5Z" fill="#0AC775"/>
                                    <path d="M0 47.5C0 44.4624 2.46243 42 5.5 42H14.5C17.5376 42 20 44.4624 20 47.5C20 50.5376 17.5376 53 14.5 53H5.5C2.46243 53 0 50.5376 0 47.5Z" fill="#F24E1E"/>
                                    <path d="M19 9.5C19 6.46243 21.4624 4 24.5 4H33.5C36.5376 4 39 6.46243 39 9.5C39 12.5376 36.5376 15 33.5 15H24.5C21.4624 15 19 12.5376 19 9.5Z" fill="#FF7262"/>
                                    <path d="M0 28.5C0 25.4624 2.46243 23 5.5 23H14.5C17.5376 23 20 25.4624 20 28.5C20 31.5376 17.5376 34 14.5 34H5.5C2.46243 34 0 31.5376 0 28.5Z" fill="#A259FF"/>
                                    <path d="M0 9.5C0 6.46243 2.46243 4 5.5 4H14.5C17.5376 4 20 6.46243 20 9.5C20 12.5376 17.5376 15 14.5 15H5.5C2.46243 15 0 12.5376 0 9.5Z" fill="#1ABCFE"/>
                                  </svg>
                                </div>
                              )}

                              {/* Default arrow icon for other cards */}
                              {!card.isFigmaLink && !card.isSarcastic && (
                                <div className="w-6 h-6 md:w-7 lg:w-8 md:h-7 lg:h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover/card:bg-[#ADFF2F] transition-colors ml-1.5 md:ml-2 lg:ml-3 flex-shrink-0">
                                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-gray-600 group-hover/card:text-white transition-colors md:w-[14px] md:h-[14px]">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              )}

                              {/* No icon for sarcastic message */}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="mt-4 md:mt-6 lg:mt-8 text-center px-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black mb-1 md:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base lg:text-lg">
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
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 md:gap-3 bg-[#ADFF2F] text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#9AE234] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl touch-manipulation"
          >
            <span className="text-sm md:text-base">View All Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="md:w-[20px] md:h-[20px]">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}