'use client';

import { motion } from 'framer-motion';
import { BentoGrid } from '@/components/ui/bento-grid';
import { IconGrid } from '@/components/ui/icon-set';
import { 
  Brain, 
  Code2, 
  Database, 
  Palette,
  Cpu,
  Globe,
  Server,
  Brush
} from 'lucide-react';

export default function SkillsSection() {
  // AI & Machine Learning Skills
  const aiSkills = [
    {
      id: 'llamaindex',
      icon: <img src="https://cdn.simpleicons.org/python/3776AB" alt="LlamaIndex" className="w-full h-full" />,
      name: 'LlamaIndex'
    },
    {
      id: 'langchain',
      icon: <img src="https://cdn.simpleicons.org/chainlink/375BD2" alt="LangChain" className="w-full h-full" />,
      name: 'LangChain'
    },
    {
      id: 'huggingface',
      icon: <img src="https://cdn.simpleicons.org/huggingface/FFD21E" alt="Hugging Face" className="w-full h-full" />,
      name: 'Hugging Face'
    },
    {
      id: 'crewai',
      icon: <Brain className="w-full h-full text-purple-400" />,
      name: 'CrewAI'
    },
    {
      id: 'sklearn',
      icon: <img src="https://cdn.simpleicons.org/scikitlearn/F7931E" alt="Scikit-learn" className="w-full h-full" />,
      name: 'Scikit-learn'
    },
    {
      id: 'pandas',
      icon: <img src="https://cdn.simpleicons.org/pandas/150458" alt="Pandas" className="w-full h-full" />,
      name: 'Pandas'
    },
    {
      id: 'numpy',
      icon: <img src="https://cdn.simpleicons.org/numpy/013243" alt="NumPy" className="w-full h-full" />,
      name: 'NumPy'
    },
    {
      id: 'streamlit',
      icon: <img src="https://cdn.simpleicons.org/streamlit/FF4B4B" alt="Streamlit" className="w-full h-full" />,
      name: 'Streamlit'
    }
  ];

  // Full-Stack Development Skills
  const devSkills = [
    {
      id: 'react',
      icon: <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-full h-full" />,
      name: 'React.js'
    },
    {
      id: 'nextjs',
      icon: <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" className="w-full h-full" />,
      name: 'Next.js'
    },
    {
      id: 'nodejs',
      icon: <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="w-full h-full" />,
      name: 'Node.js'
    },
    {
      id: 'mongodb',
      icon: <img src="https://cdn.simpleicons.org/mongodb/47A248" alt="MongoDB" className="w-full h-full" />,
      name: 'MongoDB'
    },
    {
      id: 'javascript',
      icon: <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="w-full h-full" />,
      name: 'JavaScript'
    },
    {
      id: 'html5',
      icon: <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-full h-full" />,
      name: 'HTML'
    },
    {
      id: 'css3',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-full h-full" />,
      name: 'CSS'
    }
  ];

  // Core Languages & DevOps Skills
  const coreSkills = [
    {
      id: 'python',
      icon: <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-full h-full" />,
      name: 'Python'
    },
    {
      id: 'java',
      icon: <img src="https://cdn.simpleicons.org/openjdk/ED8B00" alt="Java" className="w-full h-full" />,
      name: 'Java'
    },
    {
      id: 'sql',
      icon: <img src="https://cdn.simpleicons.org/mysql/4479A1" alt="SQL" className="w-full h-full" />,
      name: 'SQL'
    },
    {
      id: 'c',
      icon: <img src="https://cdn.simpleicons.org/c/A8B9CC" alt="C" className="w-full h-full" />,
      name: 'C'
    },
    {
      id: 'github',
      icon: <img src="https://cdn.simpleicons.org/github/181717" alt="GitHub" className="w-full h-full" />,
      name: 'GitHub'
    },
    {
      id: 'docker',
      icon: <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-full h-full" />,
      name: 'Docker'
    },
    {
      id: 'jenkins',
      icon: <img src="https://cdn.simpleicons.org/jenkins/D24939" alt="Jenkins" className="w-full h-full" />,
      name: 'Jenkins'
    },
    {
      id: 'tableau',
      icon: <img src="https://logos-world.net/wp-content/uploads/2021/10/Tableau-Logo.png" alt="Tableau" className="w-full h-full object-contain" />,
      name: 'Tableau'
    }
  ];

  // Design & Productivity Skills
  const designSkills = [
    {
      id: 'figma',
      icon: <img src="https://cdn.simpleicons.org/figma/F24E1E" alt="Figma" className="w-full h-full" />,
      name: 'Figma'
    },
    {
      id: 'photoshop',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" alt="Photoshop" className="w-full h-full" />,
      name: 'Photoshop'
    },
    {
      id: 'premiere',
      icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" alt="Premiere Pro" className="w-full h-full" />,
      name: 'Premiere Pro'
    },
    {
      id: 'notion',
      icon: <img src="https://cdn.simpleicons.org/notion/000000" alt="Notion" className="w-full h-full" />,
      name: 'Notion'
    },
    {
      id: 'canva',
      icon: <img src="https://cdn.simpleicons.org/canva/00C4CC" alt="Canva" className="w-full h-full" />,
      name: 'Canva'
    }
  ];

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      description: "Advanced AI frameworks, machine learning libraries, and data science tools for building intelligent applications.",
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      status: "Specialized",
      tags: ["AI", "ML", "Data Science"],
      children: <IconGrid items={aiSkills} />
    },
    {
      title: "Full-Stack Development",
      description: "Modern web technologies for building scalable applications from frontend to backend.",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      status: "Expert",
      tags: ["Frontend", "Backend", "Web"],
      children: <IconGrid items={devSkills} />
    },
    {
      title: "Core Languages & DevOps",
      description: "Programming fundamentals, version control, containerization, and deployment automation.",
      icon: <Server className="w-5 h-5 text-green-400" />,
      status: "Proficient",
      tags: ["Languages", "DevOps", "Infrastructure"],
      children: <IconGrid items={coreSkills} />
    },
    {
      title: "Design & Productivity",
      description: "Creative tools for UI/UX design, video editing, and workflow optimization.",
      icon: <Palette className="w-5 h-5 text-pink-400" />,
      status: "Creative",
      tags: ["Design", "Creative", "Productivity"],
      children: <IconGrid items={designSkills} />
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gray-400 text-xs md:text-sm font-medium mb-2">[03] — Skills & Expertise</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 md:mb-4">
            My Creative Toolbox
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto px-2">
            A comprehensive collection of technologies, frameworks, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid items={skillCategories} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 text-base md:text-lg mb-4 md:mb-6 px-2">
            Want to see these skills in action?
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 md:gap-3 bg-white text-black font-semibold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl touch-manipulation"
          >
            <span className="text-sm md:text-base">View My Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="md:w-[20px] md:h-[20px]">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}