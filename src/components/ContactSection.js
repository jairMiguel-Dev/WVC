// components/ContactSection.js
import { motion } from 'framer-motion'
import { Zap, ShieldCheck, Clock, ArrowRight } from 'lucide-react'

export default function ContactSection({ 
  form, 
  handleChange, 
  handleSubmit, 
  status, 
  sending, 
  availableSpots 
}) {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-cyan-400">Última chance</span> para transformação digital
            </h2>
            <p className="text-gray-400 mb-8">
              Preencha o formulário ao lado e nossa equipe entrará em contato em menos de 24 horas. Esta é sua oportunidade de garantir uma das últimas vagas disponíveis.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Zap size={24} className="text-cyan-400" />,
                  title: "Resposta em 24h",
                  description: "Nossa equipe prioriza novos clientes"
                },
                {
                  icon: <ShieldCheck size={24} className="text-purple-400" />,
                  title: "Consultoria Gratuita",
                  description: "Análise completa do seu projeto"
                },
                {
                  icon: <Clock size={24} className="text-amber-400" />,
                  title: "Vagas Limitadas",
                  description: `Apenas ${availableSpots} disponíveis`
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-xl"
                >
                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 rounded-2xl">
              <h3 className="font-bold mb-2">Próximos passos:</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Preencha o formulário ao lado</li>
                <li>Nossa equipe entrará em contato em 24h</li>
                <li>Agendaremos uma consultoria estratégica gratuita</li>
                <li>Desenvolvemos sua solução digital premium</li>
              </ol>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                    <Zap size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Garanta sua vaga</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail *</label>
                    <input
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem *</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Conte mais sobre seu projeto..."
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-lg transition hover:from-cyan-400 hover:to-purple-500"
                  >
                    {sending ? (
                      <>
                        <span className="animate-pulse">Processando...</span>
                      </>
                    ) : (
                      <>
                        RESERVAR MINHA VAGA AGORA
                        <ArrowRight />
                      </>
                    )}
                  </button>
                  
                  {status && (
                    <p className={`mt-4 text-center ${status.includes('Erro') ? 'text-red-400' : 'text-green-400'}`}>
                      {status}
                    </p>
                  )}
                  
                  <p className="text-center text-gray-500 text-sm mt-6">
                    Ao enviar, você concorda com nossa Política de Privacidade. Seus dados estão seguros conosco.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}