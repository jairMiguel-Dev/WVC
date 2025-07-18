// components/AboutSection.js
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, DollarSign, BarChart2, Users } from 'lucide-react'

export default function AboutSection() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div className="inline-flex items-center gap-2 bg-black/40 border border-purple-500/30 px-4 py-1.5 rounded-full mb-4">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-300 text-sm">A EXCELÊNCIA DIGITAL</span>
          </motion.div>
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que marcas premium escolhem a <span className="text-purple-400">Workverse</span>
          </motion.h2>
          <motion.p className="text-gray-400 max-w-2xl mx-auto">
            Em um mercado saturado por soluções genéricas, oferecemos experiências digitais exclusivas que posicionam sua marca como líder.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Sua presença digital é sua <span className="text-cyan-400">vitrine permanente</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  Em um mundo onde 75% dos consumidores julgam a credibilidade de uma empresa com base no design do seu site, uma presença digital premium não é opcional - é essencial.
                </p>
                <p className="text-gray-400">
                  Nossas soluções combinam estética refinada com funcionalidade estratégica para criar experiências que convertem visitantes em clientes fiéis e defensores da sua marca.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-black/40 border border-white/10 p-4 rounded-xl">
                    <h3 className="text-cyan-400 font-bold text-xl">+150%</h3>
                    <p className="text-sm text-gray-400">Conversão média</p>
                  </div>
                  <div className="bg-black/40 border border-white/10 p-4 rounded-xl">
                    <h3 className="text-purple-400 font-bold text-xl">4.8x</h3>
                    <p className="text-sm text-gray-400">Retorno sobre investimento</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            {[
              {
                icon: <Zap size={20} className="text-cyan-400" />,
                bg: "bg-cyan-500/10",
                title: "Impacto Imediato",
                content: "Seu site começa a trabalhar para você desde o primeiro dia, capturando leads e gerando vendas enquanto você se concentra no seu negócio."
              },
              {
                icon: <ShieldCheck size={20} className="text-purple-400" />,
                bg: "bg-purple-500/10",
                title: "Vantagem Competitiva",
                content: "Enquanto seus concorrentes usam sites genéricos, você terá uma ferramenta digital que destaca sua marca como líder no mercado."
              },
              {
                icon: <DollarSign size={20} className="text-cyan-400" />,
                bg: "bg-cyan-500/10",
                title: "Retorno Garantido",
                content: "Nosso modelo de sucesso compartilhado garante que só ganhamos quando você ganha. Seu crescimento é nossa prioridade."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className={`${item.bg} p-2 rounded-lg`}>
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </h3>
                <p className="text-gray-400">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-500/20 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-cyan-400">Depoimento de cliente:</span> Transformação real, resultados tangíveis
              </h3>
              <blockquote className="text-gray-300 italic mb-6">
                "A Workverse não apenas criou um site, mas sim uma experiência que reflete perfeitamente o valor da nossa marca. Em 3 meses, nosso engajamento online aumentou 180% e as vendas cresceram 65%. Um investimento que se pagou 5x no primeiro trimestre."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div>
                  <div className="font-bold">Carlos Mendes</div>
                  <div className="text-sm text-cyan-300">Diretor de Marketing, Luxe Cosméticos</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-600 p-1 rounded-full">
                <div className="bg-black p-6 rounded-full">
                  <BarChart2 size={48} className="text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}