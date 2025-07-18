'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar({ dark, toggleTheme, activeSection, scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  const sections = [
    { id: '/', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'beneficios', label: 'Benefícios' },
    { id: 'ofertas', label: 'Ofertas' },
    { id: 'contato', label: 'Contato' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (sectionId) => {
    if (pathname !== '/') {
      // Se não estiver na página inicial, navega para a página e depois rola
      window.location.href = `/${sectionId === '/' ? '' : `#${sectionId}`}`
    } else {
      // Se estiver na página inicial, apenas rola
      scrollToSection(sectionId)
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md' : 'bg-white/80 dark:bg-gray-900/80'} backdrop-blur-md border-b border-gray-200 dark:border-gray-800`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center"
              whileHover={{ rotate: 15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-white font-bold">WV</span>
            </motion.div>
            <span className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${dark ? 'from-white to-cyan-300' : 'from-gray-900 to-cyan-600'} tracking-tighter`}>
              WORKVERSE
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => handleNavigation(section.id)}
                  className={`capitalize relative px-2 py-1 text-sm font-medium transition-colors ${
                    activeSection === section.id 
                      ? 'text-cyan-600 dark:text-white' 
                      : 'text-gray-600 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                      layoutId="navbar-indicator"
                    />
                  )}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label={dark ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
            >
              {dark ? (
                <Sun size={20} className="text-amber-300" />
              ) : (
                <Moon size={20} className="text-indigo-500" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Menu"
            >
              {isOpen ? (
                <X size={24} className="text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu size={24} className="text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-lg md:hidden border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-3 space-y-4">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => handleNavigation(section.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'bg-cyan-50 text-cyan-600 dark:bg-gray-800 dark:text-white'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}