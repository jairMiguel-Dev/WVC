// components/BenefitsSection.js
import { motion } from 'framer-motion'
import { ArrowRight, BarChart2, Users, Smartphone, Globe, DollarSign, Award } from 'lucide-react'

export default function BenefitsSection({ scrollToSection }) {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-black/40 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm">DIFERENCIAIS PREMIUM</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Excelência Digital <span className="text-cyan-400">sob medida</span> para sua marca
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Soluções exclusivas onde cada detalhe é meticulosamente elaborado para elevar sua presença digital
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 transition-all group hover:border-cyan-500/30"
          >
            <div className="text-cyan-400 mb-4">
              <BarChart2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Performance Excepcional</h3>
            <p className="text-gray-400">
              Soluções otimizadas que superam benchmarks de mercado, com aumento médio de 150% nas taxas de conversão e engajamento.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 transition-all group hover:border-cyan-500/30"
          >
            <div className="text-cyan-400 mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Experiência Memorável</h3>
            <p className="text-gray-400">
              Jornadas do usuário cuidadosamente elaboradas que transformam visitantes em embaixadores da sua marca.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 transition-all group hover:border-cyan-500/30"
          >
            <div className="text-cyan-400 mb-4">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Excelência Multidispositivo</h3>
            <p className="text-gray-400">
              Experiências perfeitas em qualquer dispositivo, com desempenho consistente e design responsivo de classe mundial.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 transition-all group hover:border-cyan-500/30"
          >
            <div className="text-cyan-400 mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Presença Global Contínua</h3>
            <p className="text-gray-400">
              Infraestrutura robusta com 99.99% de disponibilidade garantindo sua operação ininterrupta em qualquer fuso horário.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 transition-all group hover:border-cyan-500/30"
          >
            <div className="text-cyan-400 mb-4">
              <DollarSign size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Retorno Mensurável</h3>
            <p className="text-gray-400">
              Estratégias com ROI comprovado, acompanhadas por relatórios transparentes de desempenho e crescimento.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 transition-all group hover:border-cyan-500/30"
          >
            <div className="text-cyan-400 mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Posicionamento de Liderança</h3>
            <p className="text-gray-400">
              Identidade visual e experiência de marca que estabelecem sua autoridade e diferenciação no mercado.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-500/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Transforme sua presença digital em <span className="text-cyan-400">vantagem competitiva</span>
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Nossa abordagem exclusiva combina design visionário, tecnologia de ponta e estratégia de negócios para criar ativos digitais que geram resultados tangíveis.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToSection}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-bold text-black group"
          >
            <span>Iniciar meu projeto exclusivo</span>
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}