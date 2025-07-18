// components/HeroSection.js
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection({ availableSpots, scrollToSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-[length:100px_100px] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black z-0"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-black/40 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-6"
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-cyan-300 text-sm">VAGAS LIMITADAS • ÚLTIMAS {availableSpots} DISPONÍVEIS</span>
        </motion.div>
        
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
        >
          <span className="block">TRANSFORME VISITANTES EM</span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            CLIENTES FIEIS
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Sites premium com design exclusivo e estratégia de conversão comprovada que elevam sua marca e impulsionam resultados. 
          Apenas <span className="font-bold text-cyan-300">{availableSpots} vagas</span> disponíveis para este mês.
        </motion.p>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/portfolio" // Adicionei o href aqui
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-bold text-black shadow-lg hover:shadow-cyan-500/30 transition-all overflow-hidden"
          >
            <span className="relative z-10">Portfolio</span>
            <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('beneficios')}
            className="relative inline-flex items-center rounded-xl border border-cyan-500/50 px-6 py-3 font-medium text-cyan-300 hover:bg-cyan-500/10 transition overflow-hidden"
          >
            <span className="relative z-10">Ver benefícios</span>
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity"></div>
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 p-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl max-w-2xl mx-auto"
        >
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { value: '+97%', label: 'Conversão média' },
              { value: '98%', label: 'Satisfação' },
              { value: '24h', label: 'Tempo de resposta' },
              { value: '+127', label: 'Empresas globais' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-cyan-300">{item.value}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}