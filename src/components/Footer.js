// components/Footer.js
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Github, Linkedin, Zap, MessageCircle, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300 tracking-tighter">
              WORKVERSE
            </span>
          </div>
          <p className="text-gray-500 mb-6">
            Transformação digital premium para negócios ambiciosos que buscam excelência.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition">
              <Github size={20} />
            </Link>
            <Link href="#" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition">
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Navegação</h3>
          <ul className="space-y-2">
            {[
              { label: 'Sobre', id: 'sobre' },
              { label: 'Benefícios', id: 'beneficios' },
              { label: 'Portfólio', id: 'portfolio' },
              { label: 'Ofertas', id: 'ofertas' },
              { label: 'Contato', id: 'contato' }
            ].map(item => (
              <li key={item.id}>
                <Link 
                  href={`#${item.id}`} 
                  className="text-gray-500 hover:text-cyan-400 transition flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Serviços Premium</h3>
          <ul className="space-y-2">
            {[
              'Web Design Exclusivo',
              'Desenvolvimento Front-end',
              'Identidade Visual Premium',
              'E-commerce de Alto Desempenho',
              'Otimização de Conversão',
              'Consultoria Estratégica'
            ].map((service, idx) => (
              <li key={idx} className="text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Contato</h3>
          <ul className="space-y-3 text-gray-500">
            <li className="flex items-start gap-3">
              <MessageCircle size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>contato@workverse.design</span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>+55 (11) 99999-9999</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Av. Paulista, 1000 - São Paulo, SP</span>
            </li>
            <li className="flex items-start gap-3 pt-4">
              <Clock size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span><span className="text-cyan-400 font-medium">Horário:</span> Seg-Sex, 9h-18h</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-10 pt-8 border-t border-white/10 text-center text-gray-500">
        <p>© {currentYear} Workverse. Todos os direitos reservados.</p>
        <p className="mt-2 text-sm">
          Excelência em experiência digital para marcas que buscam o extraordinário
        </p>
      </div>
    </footer>
  )
}