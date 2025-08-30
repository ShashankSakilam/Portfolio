"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Card Components
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AnimatedCard({ className, ...props }: CardProps) {
  return (
    <div
      role="region"
      aria-labelledby="card-title"
      aria-describedby="card-description"
      className={cn(
        "group/animated-card relative overflow-hidden rounded-xl md:rounded-2xl border border-gray-200 bg-white shadow-lg md:shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-105 touch-manipulation",
        className
      )}
      {...props}
    />
  )
}

export function CardBody({ className, ...props }: CardProps) {
  return (
    <div
      role="group"
      className={cn(
  "relative z-30 flex flex-col border-t border-gray-200 p-4 md:p-6",
        className
      )}
      {...props}
    />
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ className, ...props }: CardTitleProps) {
  return (
    <h3
      className={cn(
        "text-lg sm:text-xl leading-tight font-bold text-black",
        className
      )}
      {...props}
    />
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
  return (
    <p
      className={cn(
        "text-sm md:text-base leading-relaxed text-gray-600",
        className
      )}
      {...props}
    />
  )
}

export function CardVisual({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("h-[180px] md:h-[200px] w-full overflow-hidden", className)}
      {...props}
    />
  )
}

// Visual Component Props
interface VisualProps {
  mainColor?: string
  secondaryColor?: string
  gridColor?: string
}

interface LayerProps {
  color: string
  secondaryColor?: string
  hovered?: boolean
}

// Shared Components
const EllipseGradient: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="absolute inset-0 z-[5] flex h-full w-full items-center justify-center">
      <svg
        width="380"
        height="200"
        viewBox="0 0 380 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="380" height="200" fill="url(#paint0_radial)" />
        <defs>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(190 100) rotate(90) scale(100 190)"
          >
            <stop stopColor={color} stopOpacity="0.3" />
            <stop offset="0.4" stopColor={color} stopOpacity="0.2" />
            <stop offset="1" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

const GridLayer: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div
      style={{ "--grid-color": color } as React.CSSProperties}
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:24px_24px] bg-center opacity-60"
    />
  )
}

// Creator Pulse Visual - AI Content Assistant
const CreatorPulseVisual: React.FC<VisualProps> = ({
  mainColor = "#ADFF2F",
  secondaryColor = "#000000",
  gridColor = "#f5f5f5",
}) => {
  const [hovered, setHovered] = useState(false)

  const techItems = [
    { id: 1, translateX: 120, translateY: 60, text: "React", icon: "⚛️" },
    { id: 2, translateX: 120, translateY: -60, text: "Next.js", icon: "🔷" },
    { id: 3, translateX: 140, translateY: 0, text: "Supabase", icon: "🗄️" },
    { id: 4, translateX: -140, translateY: 0, text: "OpenAI", icon: "🤖" },
    { id: 5, translateX: -120, translateY: 60, text: "Firecrawl", icon: "🔥" },
    { id: 6, translateX: -120, translateY: -60, text: "ShadCN UI", icon: "🎨" },
  ]

  return (
    <>
      <div className="relative h-[180px] md:h-[200px] w-full overflow-hidden rounded-t-xl md:rounded-t-2xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {/* Writing Animation */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          <div className="relative">
            {/* Text being written */}
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-black mb-2">
                "An award-winning AI..."
              </div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1 bg-[#ADFF2F] rounded-full transition-all duration-500",
                      hovered ? "w-6 md:w-8" : "w-1.5 md:w-2"
                    )}
                    style={{
                      transitionDelay: `${i * 100}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Items */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover/animated-card:opacity-100">
          {techItems.map((item, index) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-1 md:gap-2 rounded-full border border-gray-200 bg-white px-2 md:px-3 py-1 md:py-1.5 backdrop-blur-md transition-all duration-700 shadow-md"
              style={{
                transform: hovered
                  ? `translate(${item.translateX * 0.8}px, ${item.translateY * 0.8}px)`
                  : "translate(0px, 0px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-xs md:text-sm">{item.icon}</span>
              <span className="text-xs font-medium text-black">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
  </div>
    </>
  )
}

// Face Recognition Visual
const FaceRecognitionVisual: React.FC<VisualProps> = ({
  mainColor = "#ADFF2F",
  secondaryColor = "#000000",
  gridColor = "#f5f5f5",
}) => {
  const [hovered, setHovered] = useState(false)

  const techItems = [
    { id: 1, translateX: 120, translateY: 60, text: "Python", icon: "🐍" },
    { id: 2, translateX: 120, translateY: -60, text: "OpenCV", icon: "📷" },
    { id: 3, translateX: 140, translateY: 0, text: "TensorFlow", icon: "🧠" },
    { id: 4, translateX: -140, translateY: 0, text: "Tkinter", icon: "🖥️" },
    { id: 5, translateX: -120, translateY: 60, text: "CNNs", icon: "🔍" },
  ]

  return (
    <>
      <div className="relative h-[180px] md:h-[200px] w-full overflow-hidden rounded-t-xl md:rounded-t-2xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {/* Face with detection boxes */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          <div className="relative">
            <div className="w-20 md:w-24 h-28 md:h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg relative">
              {/* Eyes */}
              <div className="absolute top-6 md:top-8 left-3 md:left-4 w-2.5 md:w-3 h-2.5 md:h-3 bg-black rounded-full"></div>
              <div className="absolute top-6 md:top-8 right-3 md:right-4 w-2.5 md:w-3 h-2.5 md:h-3 bg-black rounded-full"></div>

              {/* Nose */}
              <div className="absolute top-12 md:top-14 left-1/2 transform -translate-x-1/2 w-1 h-1.5 md:h-2 bg-orange-400"></div>

              {/* Mouth */}
              <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-5 md:w-6 h-1.5 md:h-2 border-b-2 border-black rounded-b-full"></div>

              {/* Detection Box */}
              <div className={cn(
                "absolute -inset-2 border-2 border-red-500 rounded-lg transition-all duration-500",
                hovered ? "border-green-500" : "border-red-500"
              )}></div>

              {/* Corner handles */}
              {hovered && (
                <>
                  <div className="absolute -top-1 -left-1 w-1.5 md:w-2 h-1.5 md:h-2 bg-white border border-red-500 rounded-full"></div>
                  <div className="absolute -top-1 -right-1 w-1.5 md:w-2 h-1.5 md:h-2 bg-white border border-red-500 rounded-full"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 md:w-2 h-1.5 md:h-2 bg-white border border-red-500 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-1.5 md:w-2 h-1.5 md:h-2 bg-white border border-red-500 rounded-full"></div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Tech Stack Items */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover/animated-card:opacity-100">
          {techItems.map((item, index) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-1 md:gap-2 rounded-full border border-zinc-200/60 bg-white/80 px-2 md:px-3 py-1 md:py-1.5 backdrop-blur-md transition-all duration-700 dark:border-zinc-800/60 dark:bg-black/80"
              style={{
                transform: hovered
                  ? `translate(${item.translateX * 0.7}px, ${item.translateY * 0.7}px)`
                  : "translate(0px, 0px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-xs md:text-sm">{item.icon}</span>
              <span className="text-xs font-medium text-black dark:text-white">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
  </div>
    </>
  )
}

// RAG Chatbot Visual
const RAGChatbotVisual: React.FC<VisualProps> = ({
  mainColor = "#ADFF2F",
  secondaryColor = "#000000",
  gridColor = "#f5f5f5",
}) => {
  const [hovered, setHovered] = useState(false)

  const techItems = [
    { id: 1, translateX: 120, translateY: 60, text: "Python", icon: "🐍" },
    { id: 2, translateX: 120, translateY: -60, text: "Gemini Pro", icon: "💎" },
    { id: 3, translateX: 140, translateY: 0, text: "LangChain", icon: "🔗" },
    { id: 4, translateX: -140, translateY: 0, text: "FAISS", icon: "📊" },
    { id: 5, translateX: -120, translateY: 60, text: "Streamlit", icon: "🌊" },
  ]

  return (
    <>
      <div className="relative h-[180px] md:h-[200px] w-full overflow-hidden rounded-t-xl md:rounded-t-2xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        {/* Chat Interface */}
        <div className="absolute inset-0 z-[6] flex items-center justify-center">
          <div className="bg-white/90 dark:bg-black/90 rounded-lg p-3 md:p-4 w-full max-w-xs md:max-w-sm mx-2 md:mx-0 shadow-lg">
            {/* Chat messages */}
            <div className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
              <div className="flex justify-start">
                <div className="bg-blue-100 dark:bg-blue-900 px-2 md:px-3 py-1.5 md:py-2 rounded-lg max-w-[180px] md:max-w-xs">
                  <p className="text-xs text-blue-800 dark:text-blue-200">How does RAG work?</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-green-100 dark:bg-green-900 px-2 md:px-3 py-1.5 md:py-2 rounded-lg max-w-[180px] md:max-w-xs">
                  <p className="text-xs text-green-800 dark:text-green-200">Processing PDFs...</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 px-2 md:px-3 py-1.5 md:py-2 rounded-lg max-w-[180px] md:max-w-xs">
                  <p className="text-xs text-gray-700 dark:text-gray-300">
                    RAG combines retrieval and generation...
                  </p>
                </div>
              </div>
            </div>

            {/* Typing indicator */}
            <div className="flex items-center space-x-1.5 md:space-x-2">
              <div className="flex space-x-0.5 md:space-x-1">
                <div className={cn(
                  "w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce",
                  hovered ? "bg-green-500" : ""
                )} style={{ animationDelay: "0ms" }}></div>
                <div className={cn(
                  "w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce",
                  hovered ? "bg-green-500" : ""
                )} style={{ animationDelay: "150ms" }}></div>
                <div className={cn(
                  "w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-400 rounded-full animate-bounce",
                  hovered ? "bg-green-500" : ""
                )} style={{ animationDelay: "300ms" }}></div>
              </div>
              <span className="text-xs text-gray-500">AI is typing...</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Items */}
        <div className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute inset-0 z-[7] flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover/animated-card:opacity-100">
          {techItems.map((item, index) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.6, 0.6, 0, 1)] absolute flex items-center justify-center gap-1 md:gap-2 rounded-full border border-zinc-200/60 bg-white/80 px-2 md:px-3 py-1 md:py-1.5 backdrop-blur-md transition-all duration-700 dark:border-zinc-800/60 dark:bg-black/80"
              style={{
                transform: hovered
                  ? `translate(${item.translateX * 0.7}px, ${item.translateY * 0.7}px)`
                  : "translate(0px, 0px)",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-xs md:text-sm">{item.icon}</span>
              <span className="text-xs font-medium text-black dark:text-white">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        <EllipseGradient color={mainColor} />
        <GridLayer color={gridColor} />
  </div>
    </>
  )
}



// Project Action Button Component
interface ProjectActionProps {
  text: string
  href?: string
  onClick?: () => void
  variant?: 'live' | 'github' | 'demo'
}

export function ProjectAction({ text, href, onClick, variant = 'live' }: ProjectActionProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'live':
        return 'bg-[#ADFF2F] hover:bg-[#9AE234] text-black'
      case 'github':
        return 'bg-gray-900 hover:bg-gray-800 text-white'
      case 'demo':
        return 'bg-blue-600 hover:bg-blue-700 text-white'
      default:
        return 'bg-[#ADFF2F] hover:bg-[#9AE234] text-black'
    }
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg ${getButtonStyle()}`}
    >
      {text}
    </button>
  )
}

// Main Component
interface ProjectData {
  id: string
  title: string
  description: string
  technologies: string[]
  visual: React.ReactNode
  actions: ProjectActionProps[]
}

export default function InteractiveProjectsGrid() {
  const projects: ProjectData[] = [
    {
      id: 'creator-pulse',
      title: 'Creator Pulse',
      description: 'An award-winning AI co-pilot that helps creators beat writer\'s block. It curates trends and generates platform-ready drafts with a 70%+ acceptance rate, reducing ideation time from 90+ minutes to under 15.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Supabase', 'OpenAI', 'Firecrawl', 'ShadCN UI'],
      visual: <CreatorPulseVisual />,
      actions: [
  { text: 'Live Link', variant: 'live', href: 'https://100x-capstone-creatorpulse.vercel.app/' },
      ]
    },
    {
      id: 'face-recognition',
      title: 'Face & Emotion Recognition System',
      description: 'A real-time computer vision system built with Python and TensorFlow. It achieves 94% accuracy in face recognition and 85% in emotion classification, complete with gaze tracking and a user-friendly Tkinter GUI.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Tkinter', 'CNNs'],
      visual: <FaceRecognitionVisual />,
      actions: [
  { text: 'GitHub', variant: 'github', href: 'https://github.com/ShashankSakilam/FACE-RECOGNITION.git/' },
      ]
    },
    {
      id: 'rag-chatbot',
      title: 'Multi-PDF RAG Chatbot',
      description: 'An advanced RAG (Retrieval-Augmented Generation) chatbot that allows users to have intelligent conversations with multiple PDF documents simultaneously. Built with LangChain, Gemini Pro, and a FAISS vector store for efficient, context-aware information retrieval.',
      technologies: ['Python', 'Gemini Pro', 'LangChain', 'FAISS', 'Streamlit'],
      visual: <RAGChatbotVisual />,
      actions: [
  { text: 'GitHub', variant: 'github', href: 'https://github.com/ShashankSakilam/MULTI-PDF-RAG.git/' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        {/* Section Header - Matching website style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gray-400 text-xs md:text-sm font-medium mb-2">[03] — GenAI & Development Projects</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 md:mb-4">
            Innovative Solutions
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-2">
            Showcasing my expertise in AI, machine learning, and full-stack development through cutting-edge projects.
          </p>
        </motion.div>

        {/* Projects Grid - All same size */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <AnimatedCard className="h-full">
                <CardVisual>
                  {project.visual}
                </CardVisual>
                <CardBody className="flex-1 flex flex-col">
                  <CardTitle className="text-lg sm:text-xl mb-2 md:mb-3">{project.title}</CardTitle>
                  <CardDescription className="text-sm md:text-base leading-relaxed mb-3 md:mb-4 flex-1">
                    {project.description}
                  </CardDescription>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full border border-gray-200">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 md:gap-3 mt-auto">
                    {project.actions.map((action, actionIndex) => (
                      action.href ? (
                        <motion.a
                          key={actionIndex}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={action.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 hover:shadow-lg touch-manipulation ${
                            action.variant === 'live'
                              ? 'bg-[#ADFF2F] hover:bg-[#9AE234] text-black hover:shadow-[#ADFF2F]/25'
                              : 'bg-black hover:bg-gray-800 text-white'
                          }`}
                        >
                          {action.text}
                        </motion.a>
                      ) : (
                        <motion.button
                          key={actionIndex}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={action.onClick}
                          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg font-medium text-xs md:text-sm transition-all duration-300 hover:shadow-lg touch-manipulation ${
                            action.variant === 'live'
                              ? 'bg-[#ADFF2F] hover:bg-[#9AE234] text-black hover:shadow-[#ADFF2F]/25'
                              : 'bg-black hover:bg-gray-800 text-white'
                          }`}
                        >
                          {action.text}
                        </motion.button>
                      )
                    ))}
                  </div>
                </CardBody>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        {/* Back to Home - Matching website button style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.a
            href="/#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 md:gap-3 bg-[#ADFF2F] hover:bg-[#9AE234] text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#ADFF2F]/25 touch-manipulation"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="md:w-[20px] md:h-[20px] transition-transform group-hover:-translate-x-1">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm md:text-base">Back to Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
