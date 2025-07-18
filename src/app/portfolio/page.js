'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiCode, FiLayers, FiGlobe, FiSmartphone, FiDatabase, FiX, FiExternalLink, FiMessageSquare, FiArrowRight } from 'react-icons/fi'
import Navbar from '@/components/Navbar'

const projects = [
  {
    id: 1,
    title: "Plataforma E-commerce Premium",
    description: "Solução completa que converte visitantes em clientes fiéis.",
    category: "web",
    stats: "+220% conversão",
    tags: ["React", "Node.js", "MongoDB"],
    features: [
      "Checkout otimizado 1-clique",
      "Sistema de recomendação AI",
      "Dashboard de performance"
    ]
  },
  {
    id: 2,
    title: "Aplicativo de Saúde Integrado",
    description: "Monitoramento contínuo com wearables e telemedicina.",
    category: "mobile",
    stats: "4.9 estrelas",
    tags: ["React Native", "Firebase", "GraphQL"],
    features: [
      "Integração Apple/Android Watch",
      "Prontuário eletrônico",
      "Chat com médicos 24/7"
    ]
  },
  {
    id: 3,
    title: "Dashboard Analytics Pro",
    description: "Business intelligence com dados em tempo real.",
    category: "web",
    stats: "+80% eficiência",
    tags: ["Next.js", "Tailwind", "D3.js"],
    features: [
      "15+ tipos de visualizações",
      "Exportação em múltiplos formatos",
      "Relatórios automáticos"
    ]
  }
]

export default function PortfolioPage({ dark, toggleTheme, activeSection, scrollToSection }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const openModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar 
        dark={dark} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      
      {/* Header */}
      <header className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-black/40 border border-purple-500/30 px-4 py-1.5 rounded-full mb-4"
            >
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-purple-300 text-sm">NOSSO PORTFÓLIO</span>
            </motion.div>
            
            <motion.h2
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Projetos que <span className="text-purple-400">transformam negócios</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Soluções digitais premium que posicionam marcas como líderes em seus mercados.
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } }
              }}
              className="mt-12 flex flex-wrap justify-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory('all')}
                className={`relative inline-flex items-center rounded-xl px-6 py-3 font-medium ${activeCategory === 'all' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black' : 'border border-white/10 text-gray-300 hover:bg-white/5'} transition overflow-hidden`}
              >
                <span className="relative z-10">Todos</span>
                {activeCategory === 'all' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity"></div>
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory('web')}
                className={`relative inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium ${activeCategory === 'web' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black' : 'border border-white/10 text-gray-300 hover:bg-white/5'} transition overflow-hidden`}
              >
                <FiGlobe className="relative z-10" size={18} />
                <span className="relative z-10">Web</span>
                {activeCategory === 'web' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity"></div>
                )}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory('mobile')}
                className={`relative inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium ${activeCategory === 'mobile' ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black' : 'border border-white/10 text-gray-300 hover:bg-white/5'} transition overflow-hidden`}
              >
                <FiSmartphone className="relative z-10" size={18} />
                <span className="relative z-10">Mobile</span>
                {activeCategory === 'mobile' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity"></div>
                )}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <FiDatabase size={48} className="mx-auto text-gray-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-400">Nenhum projeto encontrado</h3>
            </div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all group"
                >
                  <div className="h-48 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {project.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-1 bg-black/40 text-xs rounded-lg border border-white/10 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-sm text-purple-300">{project.stats}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <button 
                        onClick={() => openModal(project)}
                        className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        <span>Ver case completo</span>
                        <FiArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
                      </button>
                      <Link 
                        href="/contato"
                        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg bg-black/40 hover:bg-white/5 transition-all border border-white/10"
                      >
                        <FiMessageSquare size={14} />
                        <span>Falar com expert</span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 flex items-center justify-center p-6 z-50"
            >
              <div className="w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex flex-col">
                {/* Modal Header */}
                <div className="relative h-64 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <button 
                    onClick={closeModal}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 border border-white/10 hover:border-cyan-400 transition-all"
                  >
                    <FiX className="text-gray-300 hover:text-white" size={20} />
                  </button>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-purple-300 text-sm">{selectedProject.stats}</span>
                    </div>
                  </div>
                </div>
                
                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-semibold mb-4 text-cyan-400">DESAFIO & SOLUÇÃO</h3>
                      <p className="text-gray-400 mb-6">Desenvolvemos uma solução personalizada que transformou o negócio do cliente, aumentando significativamente suas métricas de performance e conversão.</p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-purple-400">PRINCIPAIS DESTAQUES</h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-cyan-400">
                              <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </span>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="md:col-span-1">
                      <div className="bg-black/40 border border-white/10 rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4 text-purple-400">TECNOLOGIAS</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="px-3 py-1 bg-black/40 text-sm rounded-lg border border-white/10 text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-6 space-y-3">
                          <Link
                            href="#"
                            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-black px-4 py-3 rounded-lg font-bold transition-all"
                          >
                            <FiExternalLink size={18} />
                            <span>Visitar Projeto</span>
                          </Link>
                          
                          <Link
                            href="/contato"
                            className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:bg-white/5 text-gray-300 hover:text-white px-4 py-3 rounded-lg font-medium transition-colors"
                          >
                            <FiMessageSquare size={18} />
                            <span>Falar com Especialista</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-cyan-400">Pronto para transformar</span> seu negócio digital?
                </h3>
                <p className="text-gray-300 mb-6">
                  Nossa equipe de especialistas está pronta para criar a solução perfeita para suas necessidades, com o mesmo padrão de excelência visto em nossos cases.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Link
                  href="/contato"
                  className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-black shadow-lg hover:shadow-cyan-500/30 transition-all overflow-hidden"
                >
                  <span className="relative z-10">Falar com nossos experts</span>
                  <FiMessageSquare className="relative z-10 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}