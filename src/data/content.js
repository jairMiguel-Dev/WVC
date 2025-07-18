// data/content.js
import { 
  BarChart2, 
  Users, 
  Smartphone, 
  Globe, 
  DollarSign, 
  Award,
  LayoutGrid,
  Code,
  Palette,
  ShieldCheck,
  RefreshCw
} from 'lucide-react'
import Image from 'next/image'

export const projects = [
  {
    id: 1,
    title: 'Projeto Ilumina',
    category: 'Web Design',
    img: '/ilumina/capa.jpeg',
    url: 'https://seusite.com.br/ilumina',
    clients: '+120% engajamento',
    description: 'Landing page premium desenvolvida para campanha de lançamento de produto com foco em alta conversão e experiência do usuário memorável. Design minimalista com animações sutis que guiam o usuário através da jornada de conversão.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    features: [
      'Design responsivo com foco em mobile-first',
      'Animações personalizadas para engajamento',
      'Integração com CRM e automação de marketing',
      'Testes A/B para otimização contínua',
      'Carregamento ultrarrápido (score Lighthouse: 98)'
    ],
    results: [
      '+120% engajamento em 30 dias',
      'Tempo médio de sessão: 4min 32s',
      'Redução de 45% na taxa de rejeição',
      'Taxa de conversão: 12.7%',
      'ROI: 5.8x no primeiro mês'
    ],
    images: ['/ilumina/capa.jpeg', '/ilumina/img1.jpeg', '/ilumina/img2.jpeg']
  },
  {
    id: 2,
    title: 'E-commerce Minimalista',
    category: 'E-commerce',
    img: '/images/p2.jpg',
    url: 'https://seusite.com.br/ecommerce',
    clients: 'R$1.2M em vendas',
    description: 'Plataforma de e-commerce premium focada em experiência de usuário e conversão máxima. Design minimalista com foco no produto e funcionalidades avançadas de personalização e recomendação.',
    technologies: ['Next.js', 'Shopify', 'Node.js', 'GraphQL'],
    features: [
      'Checkout otimizado em 1 clique',
      'Sistema de recomendações baseado em IA',
      'Integração com múltiplos gateways de pagamento',
      'Dashboard de analytics em tempo real',
      'Sistema de fidelidade integrado'
    ],
    results: [
      'R$1.2M em vendas no primeiro trimestre',
      'Aumento de 65% no ticket médio',
      'Taxa de conversão: 4.8%',
      'Redução de 32% no abandono de carrinho',
      'NPS: 78 (excelência em experiência)'
    ],
    images: ['/images/p2-1.jpg', '/images/p2-2.jpg', '/images/p2-3.jpg']
  },
  {
    id: 3,
    title: 'Plataforma Educacional',
    category: 'Web App',
    img: '/images/p3.jpg',
    url: 'https://seusite.com.br/educacao',
    clients: '+85% retenção',
    description: 'Solução completa para educação online com foco em engajamento e retenção de alunos. Interface intuitiva com recursos interativos e sistema de gamificação para aumentar a participação.',
    technologies: ['Vue.js', 'Firebase', 'Node.js', 'WebSockets'],
    features: [
      'Player de vídeo personalizado com anotações',
      'Sistema de gamificação com conquistas',
      'Fóruns de discussão integrados',
      'Relatórios de progresso detalhados',
      'Aulas ao vivo com interação em tempo real'
    ],
    results: [
      'Retenção de alunos: +85% em 6 meses',
      'Taxa de conclusão de cursos: 92%',
      'Redução de 40% no custo de aquisição',
      'NPS: 91 (excelência em experiência)',
      'Crescimento de 150% na base de usuários'
    ],
    images: ['/images/p3-1.jpg', '/images/p3-2.jpg', '/images/p3-3.jpg']
  }
]

export const benefits = [
  { 
    icon: <BarChart2 size={24} />, 
    text: 'Aumento médio de 150% em conversões' 
  },
  { 
    icon: <Users size={24} />, 
    text: 'Experiência do usuário premium e memorável' 
  },
  { 
    icon: <Smartphone size={24} />, 
    text: 'Design responsivo otimizado para todos os dispositivos' 
  },
  { 
    icon: <Globe size={24} />, 
    text: 'Presença digital 24/7 com alta disponibilidade' 
  },
  { 
    icon: <DollarSign size={24} />, 
    text: 'Retorno sobre investimento garantido e mensurável' 
  },
  { 
    icon: <Award size={24} />, 
    text: 'Posicionamento de marca como líder de mercado' 
  }
]

export const offers = [
  {
    title: "Essencial",
    description: "Ideal para startups e pequenos negócios",
    price: "R$ 4.997",
    originalPrice: "R$ 7.500",
    popular: false,
    features: [
      'Landing Page Premium (1 página)',
      'Design Responsivo Mobile-First',
      'Formulário de Contato Avançado',
      'Otimização SEO Básica',
      'Integração com Google Analytics',
      'Suporte 30 dias',
      'Entrega em 10 dias úteis'
    ]
  },
  {
    title: "Premium",
    description: "Solução completa para negócios em crescimento",
    price: "R$ 8.997",
    originalPrice: "R$ 12.500",
    popular: true,
    features: [
      'Site Completo (até 5 páginas)',
      'Design Premium Responsivo',
      'Sistema de Contato Avançado',
      'Otimização SEO Completa',
      'Integração com Redes Sociais',
      'Google Analytics + Relatórios',
      'Suporte 90 dias',
      '1 Revisão de Design Gratuita',
      'Otimização de Performance',
      'Entrega em 15 dias úteis'
    ]
  }
]