"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

// Mobile-only liquid glass hamburger + dropdown
function MobileNavigationComponent() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const menuItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Connect", id: "contact" },
  ]

  useEffect(() => {
    function onClickOutside(e: MouseEvent | TouchEvent) {
      if (!containerRef.current) return
      if (!(e.target instanceof Node)) return
      if (!containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", onClickOutside)
    document.addEventListener("touchstart", onClickOutside)
    document.addEventListener("keydown", onKey)

    return () => {
      document.removeEventListener("mousedown", onClickOutside)
      document.removeEventListener("touchstart", onClickOutside)
      document.removeEventListener("keydown", onKey)
    }
  }, [])

  const handleNavClick = (id: string) => {
    setOpen(false)
    const el = document.querySelector(`#${id}`)
    if (el) {
      ;(el as HTMLElement).scrollIntoView({ behavior: "smooth" })
    }
  }

  // motion variants
  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.98, transformOrigin: "top left" },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 28,
        mass: 0.9,
      },
    },
  } as any

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.06,
      },
    },
  } as any

  const itemVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 400, damping: 30 } },
  } as any

  return (
    <div ref={containerRef} className="fixed top-4 right-6 z-[100] md:hidden">
      {/* Hamburger button (top-right) */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-lime-400 text-white focus:outline-none focus:ring-0 cursor-pointer z-[101]"
        style={{ boxShadow: '0 6px 6px rgba(0,0,0,0.2), 0 0 20px rgba(0,0,0,0.1)' }}
      >
        <span className="text-white" aria-hidden>
          {open ? <X size={20} color="white" /> : <Menu size={20} color="white" />}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute mt-3 w-64 right-0 origin-top-right rounded-2xl bg-white/10 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/8 overflow-hidden"
            style={{ boxShadow: '0 0 30px rgba(132,255,120,0.12), inset 0 0 6px rgba(132,255,120,0.04)' }}
          >
            {/* optional gooey filter svg (applied to menu items if needed) */}
            <svg className="sr-only" width="0" height="0" aria-hidden>
              <filter id="gooey">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />
                <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
              </filter>
            </svg>

            <motion.ul variants={listVariants} className="p-3" style={{ filter: 'none' }}>
              {menuItems.map((item) => (
                <motion.li key={item.id} variants={itemVariants} className="mb-2 last:mb-0">
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left px-4 py-3 rounded-full bg-white/3 backdrop-blur-sm border border-white/6 text-white hover:text-lime-400 hover:scale-105 transform transition-all duration-200"
                    aria-label={`Go to ${item.name}`}
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const MobileNavigationContent = dynamic(() => Promise.resolve(MobileNavigationComponent), {
  ssr: false,
  loading: () => null,
})

export default function MobileNavigation() {
  return <MobileNavigationContent />
}
