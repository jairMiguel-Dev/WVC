// app/page.js
'use client'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'

// Componentes
import SplashScreen from '@/components/SplashScreen'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import BenefitsSection from '@/components/BenefitsSection'
import PortfolioSection from '@/components/PortfolioSection'
import OffersSection from '@/components/OffersSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ProjectModal from '@/components/ProjectModal'

// Dados
import { projects, benefits, offers } from '@/data/content'

export default function Home() {
  // Estados
  const [loadingSplash, setLoadingSplash] = useState(true)
  const [dark, setDark] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [availableSpots] = useState(3)
  
  // Referências para as seções
  const sectionsRef = useRef({
    sobre: useRef(null),
    beneficios: useRef(null),
    portfolio: useRef(null),
    ofertas: useRef(null),
    contato: useRef(null)
  })
  
  const [activeSection, setActiveSection] = useState('hero')

  // Efeitos
  useEffect(() => {
    // Preloader
    const timer = setTimeout(() => setLoadingSplash(false), 2200)
    
    // Tema
    const saved = localStorage.getItem('theme') === 'dark'
    setDark(saved)
    document.documentElement.classList.toggle('dark', saved)
    
    // Scroll to top
    const onScroll = () => {
      setShowTop(window.pageYOffset > 400)
      
      // Atualizar seção ativa
      const scrollPosition = window.scrollY + 100
      Object.entries(sectionsRef.current).forEach(([id, ref]) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop
          const sectionHeight = ref.current.offsetHeight
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(id)
          }
        }
      })
    }
    
    window.addEventListener('scroll', onScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Funções
  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'auto'
  }

  const nextImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex(prevIndex =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    )
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      // Simulação de envio
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('Mensagem enviada com sucesso!')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('Erro no envio. Tente novamente.')
    }
    setSending(false)
  }

  const scrollToSection = (sectionId) => {
    const section = sectionsRef.current[sectionId]?.current
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Head>
        <title>Workverse • Transformação Digital Premium para Marcas de Excelência</title>
        <meta name="description" content="Soluções digitais exclusivas que convertem visitantes em clientes fiéis. Sites premium com design único e estratégia de conversão comprovada." />
        <meta name="keywords" content="design premium, desenvolvimento web, sites de conversão, identidade digital, ux/ui, front-end" />
        <meta property="og:title" content="Workverse • Transformação Digital Premium" />
        <meta property="og:description" content="Soluções digitais exclusivas para marcas que buscam excelência" />
        <meta property="og:image" content="https://workverse.design/og-image.jpg" />
        <meta property="og:url" content="https://workverse.design" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://workverse.design" />
      </Head>

      <AnimatePresence>
        {loadingSplash && <SplashScreen />}
      </AnimatePresence>

      <Navbar 
        dark={dark} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="font-sans bg-gradient-to-b from-black to-gray-950 text-gray-100 overflow-x-hidden">
        <HeroSection 
          availableSpots={availableSpots} 
          scrollToSection={() => scrollToSection('contato')}
        />
        
        <section id="sobre" ref={sectionsRef.current.sobre}>
          <AboutSection />
        </section>
        
        <section id="beneficios" ref={sectionsRef.current.beneficios}>
          <BenefitsSection 
            benefits={benefits} 
            availableSpots={availableSpots}
            scrollToSection={() => scrollToSection('contato')}
          />
        </section>
        
        <section id="portfolio" ref={sectionsRef.current.portfolio}>
          <PortfolioSection 
            projects={projects} 
            filter={filter}
            setFilter={setFilter}
            openProjectModal={openProjectModal}
          />
        </section>
        
        <section id="ofertas" ref={sectionsRef.current.ofertas}>
          <OffersSection 
            offers={offers} 
            availableSpots={availableSpots}
            scrollToSection={() => scrollToSection('contato')}
          />
        </section>
        
        <section id="contato" ref={sectionsRef.current.contato}>
          <ContactSection 
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            status={status}
            sending={sending}
            availableSpots={availableSpots}
          />
        </section>
      </main>

      <Footer />

      <BackToTop showTop={showTop} />

      <ProjectModal 
        selectedProject={selectedProject}
        currentImageIndex={currentImageIndex}
        closeProjectModal={closeProjectModal}
        nextImage={nextImage}
        prevImage={prevImage}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </>
  )
}