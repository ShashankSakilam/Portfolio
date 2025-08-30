"use client"

import { MenuItem, MenuContainer } from "@/components/ui/fluid-menu"
import { Menu as MenuIcon, X, Home, Code, Cpu, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Main component logic
function MobileNavigationComponent() {
  const [activeSection, setActiveSection] = useState('Home')
  const [hasUserScrolled, setHasUserScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Track if user has scrolled
      if (window.scrollY > 10) {
        setHasUserScrolled(true)
      }

      // If at the very top and hasn't scrolled, keep Home active
      if (window.scrollY === 0 && !hasUserScrolled) {
        setActiveSection('Home')
        return
      }

      // Only update active section after user has scrolled
      if (!hasUserScrolled) {
        return
      }

      const sections = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Connect', href: '#contact' },
      ]

      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.querySelector(section.href)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY

          if (scrollPosition >= elementTop) {
            setActiveSection(section.name)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasUserScrolled])

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.querySelector(`#${sectionId.toLowerCase()}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 md:hidden">
      <div className="relative">
        {/* Subtle glow effect - smaller on mobile so it doesn't push content */}
        <div className="absolute inset-0 bg-[#ADFF2F]/20 blur-md rounded-full scale-100 opacity-60" />

        <MenuContainer>
          <MenuItem
            icon={
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-100 scale-100 rotate-0 data-[expanded=true]:opacity-0 data-[expanded=true]:scale-0 data-[expanded=true]:rotate-180">
                  <MenuIcon size={24} strokeWidth={1.5} className="text-gray-600" />
                </div>
                <div className="absolute inset-0 transition-all duration-300 ease-in-out origin-center opacity-0 scale-0 -rotate-180 data-[expanded=true]:opacity-100 data-[expanded=true]:scale-100 data-[expanded=true]:rotate-0">
                  <X size={24} strokeWidth={1.5} className="text-gray-600" />
                </div>
              </div>
            }
          />
          <MenuItem
            icon={<Home size={20} strokeWidth={1.5} className="text-gray-600" />}
            onClick={() => handleNavClick('hero')}
            isActive={activeSection === 'Home'}
          />
          <MenuItem
            icon={<Code size={20} strokeWidth={1.5} className="text-gray-600" />}
            onClick={() => handleNavClick('projects')}
            isActive={activeSection === 'Projects'}
          />
          <MenuItem
            icon={<Cpu size={20} strokeWidth={1.5} className="text-gray-600" />}
            onClick={() => handleNavClick('skills')}
            isActive={activeSection === 'Skills'}
          />
          <MenuItem
            icon={<Mail size={20} strokeWidth={1.5} className="text-gray-600" />}
            onClick={() => handleNavClick('contact')}
            isActive={activeSection === 'Connect'}
          />
        </MenuContainer>
      </div>
    </div>
  )
}

// Dynamically import the component with SSR disabled to prevent hydration mismatch
const MobileNavigationContent = dynamic(() => Promise.resolve(MobileNavigationComponent), {
  ssr: false,
  loading: () => null
})

export default function MobileNavigation() {
  return <MobileNavigationContent />
}
