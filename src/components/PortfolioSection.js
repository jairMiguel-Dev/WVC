// components/ProjectModal.js
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, MessageCircle, ExternalLink, BarChart2 } from 'lucide-react'

export default function ProjectModal({ 
  selectedProject, 
  currentImageIndex, 
  closeProjectModal, 
  nextImage, 
  prevImage,
  setCurrentImageIndex
}) {
  const whatsappUrl = (project) => {
    const phone = '5541992290530'
    const message = encodeURIComponent(`Olá, gostaria de saber mais sobre o projeto ${project.title} da Workverse!`)
    return `https://wa.me/${phone}?text=${message}`
  }

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition z-10"
              aria-label="Fechar modal"
            >
              <X size={24} className="text-white" />
            </button>
            
            <div className="p-6">
              {/* Carrossel de imagens */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <div className="text-gray-700 font-bold text-lg">{selectedProject.title}</div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                
                {/* Navegação */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage() }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full z-20"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage() }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full z-20"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={24} />
                </button>
                
                <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm z-20">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
                
                <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx) }}
                      className={`w-2 h-2 rounded-full ${
                        currentImageIndex === idx ? 'bg-white' : 'bg-white/30'
                      }`}
                      aria-label={`Ir para imagem ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Detalhes do projeto */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-3 text-cyan-400">Tecnologias Utilizadas</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-3 text-cyan-400">Principais Funcionalidades</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-br from-gray-800 to-black border border-white/10 rounded-2xl p-6 mb-6">
                    <h3 className="text-lg font-bold mb-4 text-purple-400 flex items-center gap-2">
                      <BarChart2 size={20} />
                      <span>Resultados Alcançados</span>
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 flex-shrink-0">
                            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                          </div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={whatsappUrl(selectedProject)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-4 font-bold text-black hover:from-cyan-400 hover:to-purple-500 transition mb-4"
                  >
                    <MessageCircle size={20} />
                    Falar com um especialista
                  </a>
                  
                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 px-6 py-4 font-bold text-white hover:bg-gray-800 transition"
                    >
                      <ExternalLink size={20} />
                      Acessar o site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
