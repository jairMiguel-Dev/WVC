// components/OffersSection.js
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export default function OffersSection({ offers, availableSpots, scrollToSection }) {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div className="inline-flex items-center gap-2 bg-black/40 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm">OPORTUNIDADE ÚNICA</span>
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escolha seu <span className="text-cyan-400">pacote premium</span>
          </motion.h2>
          <motion.p className="text-gray-400 max-w-2xl mx-auto">
            Soluções exclusivas para resultados excepcionais. Vagas limitadas.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {offer.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                  MAIS POPULAR
                </div>
              )}
              
              <div className={`h-full flex flex-col ${offer.popular ? 'border border-cyan-500/30' : 'border border-white/10'} rounded-2xl overflow-hidden`}>
                <div className={`p-6 border-b ${offer.popular ? 'border-cyan-500/20' : 'border-white/10'}`}>
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-400 mb-6">{offer.description}</p>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold">{offer.price}</span>
                    <span className="text-gray-400 line-through">{offer.originalPrice}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={scrollToSection}
                    className={`w-full text-center py-3 rounded-lg font-medium transition ${
                      offer.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-black hover:from-cyan-400 hover:to-purple-500'
                        : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800'
                    }`}
                  >
                    {offer.popular ? 'Reservar Vaga' : 'Selecionar'}
                  </motion.button>
                </div>
                
                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {offer.popular && (
                    <div className="mt-6 pt-4 border-t border-cyan-500/20 text-center">
                      <div className="inline-flex items-center gap-2 bg-cyan-900/30 px-3 py-1 rounded-full text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span>Apenas {availableSpots} vagas disponíveis</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="bg-amber-500/10 p-2 rounded-lg">
                  <span className="text-amber-400">✦</span>
                </div>
                <span>Garantia de Satisfação</span>
              </h3>
              <p className="text-gray-300">
                Todos os nossos projetos vêm com garantia de 30 dias. Se não estiver completamente satisfeito, reembolsaremos seu investimento.
              </p>
            </div>
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToSection}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-bold text-black"
              >
                FALAR COM ESPECIALISTA <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}