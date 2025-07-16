// app/page.js
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Sun,
  Moon,
  Github,
  Linkedin,
  LayoutGrid,
  Code,
  Palette,
  ShieldCheck,
  RefreshCw,
  ChevronUp,
  Zap, // ✅ Certifique-se que está aqui
  Clock,
  Check,
  X,
  BarChart2,
  Users,
  Smartphone,
  Globe,
  DollarSign,
  Award,
  XCircle,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  ExternalLink
} from 'lucide-react'

export default function Home() {
  // Preloader premium
  const [loadingSplash, setLoadingSplash] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoadingSplash(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  // Theme toggle
  const [dark, setDark] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('theme') === 'dark'
    setDark(saved)
    document.documentElement.classList.toggle('dark', saved)
  }, [])
  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  // Back-to-top
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.pageYOffset > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Portfolio data
  const projects = [
    {
      id: 1,
      title: 'Projeto Ilumina',
      category: 'Web',
      img: '/projects/ilumina/capa.jpeg',
      url: 'https://seusite.com.br/ilumina ',
      clients: '+120% engajamento',
      description: 'Landing page desenvolvida para campanha de lançamento de produto com foco em alta conversão e experiência do usuário premium.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      features: ['Design responsivo', 'Animações personalizadas', 'Integração com CRM', 'Testes A/B'],
      results: ['+120% engajamento em 30 dias', 'Tempo médio de sessão: 4min 32s', 'Redução de 45% na taxa de rejeição'],
      images: ['/projects/ilumina/capa.jpeg', '/projects/ilumina/img1.jpeg', '/projects/ilumina/img2.jpeg']
    },
    {
      id: 2,
      title: 'E-commerce Minimalista',
      category: 'E-commerce',
      img: '/images/p2.jpg',
      url: 'https://seusite.com.br/ecommerce ',
      clients: 'R$1.2M em vendas',
      description: 'Plataforma de e-commerce focada em experiência premium e conversão máxima com design minimalista e funcionalidades avançadas.',
      technologies: ['Next.js', 'Shopify', 'Node.js'],
      features: ['Checkout otimizado', 'Sistema de recomendações', 'Integração com pagamentos', 'Dashboard de analytics'],
      results: ['R$1.2M em vendas no primeiro trimestre', 'Aumento de 65% no ticket médio', 'Taxa de conversão: 4.8%'],
      images: ['/images/p2-1.jpg', '/images/p2-2.jpg', '/images/p2-3.jpg']
    }
  ]

  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  // Portfolio modal
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  // WhatsApp integration
  const whatsappUrl = (project) => {
    const phone = '5511999999999'
    const message = encodeURIComponent(`Olá, gostaria de saber mais sobre o projeto ${project.title} da Workverse!`)
    return `https://wa.me/ ${phone}?text=${message}`
  }

  // Contact form
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'Mensagem enviada!' : 'Erro no envio.')
    } catch {
      setStatus('Erro no envio.')
    }
    setSending(false)
  }

  // Scarcity counter
  const [availableSpots] = useState(3)

  // Benefits list
  const benefits = [
    { icon: <BarChart2 size={24} />, text: 'Aumento médio de 150% em conversões' },
    { icon: <Users size={24} />, text: 'Experiência do usuário premium' },
    { icon: <Smartphone size={24} />, text: 'Design responsivo para todos os dispositivos' },
    { icon: <Globe size={24} />, text: 'Presença digital 24/7' },
    { icon: <DollarSign size={24} />, text: 'Retorno sobre investimento garantido' },
    { icon: <Award size={24} />, text: 'Posicionamento de marca premium' }
  ]

  return (
    <>
      <Head>
        <title>Workverse • Transformação Digital Premium</title>
        <meta name="description" content="Soluções digitais exclusivas para marcas que buscam excelência" />
      </Head>

      {/* Preloader */}
      <AnimatePresence>
        {loadingSplash && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black to-purple-900 z-[100]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mb-6"
              />
              <motion.span className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300 tracking-tighter">
                WORKVERSE
              </motion.span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-6"
              />
              <motion.p className="mt-8 text-cyan-200 font-light tracking-widest text-sm uppercase">
                TRANSFORMAÇÃO DIGITAL PREMIUM
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="fixed w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center">
              <span className="text-white">WV</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-300 tracking-tighter">
              WORKVERSE
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {['sobre', 'beneficios', 'portfolio', 'ofertas', 'contato'].map(sec => (
              <Link
                key={sec}
                href={`#${sec}`}
                className="capitalize text-gray-300 hover:text-white transition-colors font-medium text-sm hidden md:inline"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </Link>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-white/10 transition">
              {dark ? <Sun size={20} className="text-amber-300" /> : <Moon size={20} className="text-indigo-300" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="font-sans bg-gradient-to-b from-black to-gray-950 text-gray-100 overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-[length:100px_100px] opacity-20"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-black/40 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-300 text-sm">VAGAS LIMITADAS</span>
            </motion.div>
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
            >
              <span className="block">A SUA <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">MARCA</span></span>
              <span className="block mt-2">MERECE UMA PRESENÇA DIGITAL</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Sites premium com design exclusivo que convertem visitantes em clientes. Apenas{' '}
              <span className="font-bold text-cyan-300">{availableSpots} vagas</span> disponíveis para este mês.
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
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-bold text-black shadow-lg hover:shadow-cyan-500/30 transition-all hover:gap-3"
              >
                RESERVAR MINHA VAGA AGORA
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#beneficios"
                className="inline-flex items-center rounded-xl border border-cyan-500/50 px-6 py-3 font-medium text-cyan-300 hover:bg-cyan-500/10 transition"
              >
                Ver benefícios
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-10 text-gray-400 text-sm"
            >
              +127 empresas transformadas • 98% satisfação
            </motion.p>
          </div>
        </section>

        {/* Seção About */}
        <SectionWrapper id="sobre">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-3xl opacity-20 blur-xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      Por que sua empresa <span className="text-cyan-400">precisa urgentemente</span> de um site premium?
                    </h2>
                    <p className="text-gray-400 mb-6">
                      Em um mundo digital saturado, um site comum não basta. Sua presença online é a primeira impressão que clientes têm do seu negócio - e você não terá uma segunda chance.
                    </p>
                    <p className="text-gray-400">
                      Nossas soluções não apenas impressionam visualmente, mas são estrategicamente projetadas para converter visitantes em clientes fiéis. Cada projeto é uma obra-prima digital que reflete o valor da sua marca.
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="bg-black/40 border border-white/10 p-4 rounded-xl">
                        <h3 className="text-cyan-400 font-bold text-xl">+150%</h3>
                        <p className="text-sm text-gray-400">Conversão média</p>
                      </div>
                      <div className="bg-black/40 border border-white/10 p-4 rounded-xl">
                        <h3 className="text-cyan-400 font-bold text-xl">24h</h3>
                        <p className="text-sm text-gray-400">Tempo de resposta</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-cyan-500/10 p-2 rounded-lg">
                    <Zap size={20} className="text-cyan-400" />
                  </div>
                  <span>Impacto Imediato</span>
                </h3>
                <p className="text-gray-400">
                  Seu site começa a trabalhar para você desde o primeiro dia, capturando leads e gerando vendas enquanto você se concentra no seu negócio.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-purple-500/10 p-2 rounded-lg">
                    <ShieldCheck size={20} className="text-purple-400" />
                  </div>
                  <span>Vantagem Competitiva</span>
                </h3>
                <p className="text-gray-400">
                  Enquanto seus concorrentes ainda usam sites genéricos, você terá uma ferramenta digital que destaca sua marca como líder no mercado.
                </p>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <div className="bg-cyan-500/10 p-2 rounded-lg">
                    <DollarSign size={20} className="text-cyan-400" />
                  </div>
                  <span>Retorno Garantido</span>
                </h3>
                <p className="text-gray-400">
                  Nosso modelo de sucesso compartilhado garante que só ganhamos quando você ganha. Seu crescimento é nossa prioridade.
                </p>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Seção Benefits */}
        <SectionWrapper id="beneficios" bg="bg-gradient-to-br from-gray-900 to-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div className="inline-flex items-center gap-2 bg-black/40 border border-cyan-500/30 px-4 py-1.5 rounded-full mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-300 text-sm">VANTAGENS EXCLUSIVAS</span>
              </motion.div>
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
                O que você <span className="text-cyan-400">ganha</span> ao escolher a Workverse
              </motion.h2>
              <motion.p className="text-gray-400 max-w-2xl mx-auto">
                Nossas soluções premium são projetadas para entregar resultados tangíveis desde o primeiro dia
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                    {benefit.text}
                  </h3>
                  <p className="text-gray-400">
                    Projetos otimizados para performance máxima e experiência do usuário premium.
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-500/20 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-cyan-400">Oferta Exclusiva:</span> Garanta seu lugar agora
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Devido à alta demanda, estamos aceitando apenas {availableSpots} novos projetos este mês. Não perca esta oportunidade única de transformar sua presença digital.
              </p>
              <Link href="#contato" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 font-bold text-black hover:gap-3 transition-all">
                RESERVAR VAGA <ArrowRight />
              </Link>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Seção Portfolio */}
        <SectionWrapper id="portfolio">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div className="inline-flex items-center gap-2 bg-black/40 border border-purple-500/30 px-4 py-1.5 rounded-full mb-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-purple-300 text-sm">PORTFÓLIO EXCLUSIVO</span>
              </motion.div>
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transformações <span className="text-purple-400">que falam por si</span>
              </motion.h2>
              <motion.p className="text-gray-400 max-w-2xl mx-auto">
                Projetos premium que elevaram marcas e geraram resultados extraordinários
              </motion.p>
            </div>
            {/* Filtro */}
            <motion.div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(c => (
                <motion.button
                  key={c}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(c)}
                  className={`px-5 py-2 rounded-full font-medium transition ${
                    filter === c
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {c}
                </motion.button>
              ))}
            </motion.div>
            {/* Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map(p => (
                <motion.div
                  key={p.id}
                  variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                  className="group cursor-pointer"
                  onClick={() => openProjectModal(p)}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-black transition-all hover:border-cyan-500/30 hover:scale-[1.02]">
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                      <div className="w-full h-full bg-gray-800"></div>
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">
                          {p.clients}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                          <ExternalLink size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">
                            {p.title}
                          </h3>
                          <span className="text-cyan-400 text-sm">{p.category}</span>
                        </div>
                        <div className="bg-cyan-500/10 p-2 rounded-lg group-hover:bg-cyan-500/20 transition">
                          <ArrowRight size={18} className="text-cyan-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Modal Projeto */}
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
                {/* Fechar */}
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition z-10"
                >
                  <XCircle size={24} className="text-white" />
                </button>
                {/* Conteúdo do modal */}
                <div className="p-6">
                  {/* Carrossel de imagens */}
                  <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                    {/* Navegação */}
                    <button
                      onClick={(e) => { e.stopPropagation(); prevImage() }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full z-20"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); nextImage() }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 rounded-full z-20"
                    >
                      <ChevronRight size={24} />
                    </button>
                    <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded-full text-sm z-20">
                      {currentImageIndex + 1} / {selectedProject.images.length}
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
                              <Check size={18} className="text-cyan-400 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gradient-to-br from-gray-800 to-black border border-white/10 rounded-2xl p-6 mb-6">
                        <h3 className="text-lg font-bold mb-4 text-purple-400">Resultados Alcançados</h3>
                        <ul className="space-y-3">
                          {selectedProject.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <BarChart2 size={18} className="text-purple-400 mt-0.5" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={whatsappUrl(selectedProject)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-4 font-bold text-black hover:from-cyan-400 hover:to-purple-500 transition"
                      >
                        <MessageCircle size={20} />
                        Falar com um especialista
                      </a>
                      {/* Botão Acessar Site */}
                      {selectedProject.url && (
                        <a
                          href={selectedProject.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full mt-4 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 px-6 py-4 font-bold text-white hover:bg-gray-800 transition"
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

        {/* Seção Ofertas */}
        <SectionWrapper id="ofertas" bg="bg-gradient-to-br from-gray-900 to-black">
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
              {/* Pacote Essencial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="p-6 border-b border-white/10">
                  <h3 className="text-2xl font-bold mb-2">Essencial</h3>
                  <p className="text-gray-400 mb-6">Ideal para startups e pequenos negócios</p>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold">R$ 4.997</span>
                    <span className="text-gray-400 line-through">R$ 7.500</span>
                  </div>
                  <Link
                    href="#contato"
                    className="block w-full text-center bg-gradient-to-r from-gray-800 to-gray-900 py-3 rounded-lg font-medium transition hover:from-gray-700 hover:to-gray-800"
                  >
                    Selecionar
                  </Link>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {[
                      'Landing Page Premium',
                      'Design Responsivo',
                      'Formulário de Contato',
                      'Otimização SEO Básica',
                      'Suporte 30 dias'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={18} className="text-cyan-400 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              {/* Pacote Premium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black text-xs font-bold px-3 py-1 rounded-full">
                  MAIS POPULAR
                </div>
                <div className="bg-gradient-to-b from-black to-gray-900 border border-cyan-500/30 rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-cyan-500/20">
                    <h3 className="text-2xl font-bold mb-2">Premium</h3>
                    <p className="text-gray-400 mb-6">Solução completa para negócios em crescimento</p>
                    <div className="flex items-end gap-2 mb-6">
                      <span className="text-4xl font-bold">R$ 8.997</span>
                      <span className="text-gray-400 line-through">R$ 12.500</span>
                    </div>
                    <Link
                      href="#contato"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 py-3 rounded-lg font-bold text-black hover:from-cyan-400 hover:to-purple-500 transition"
                    >
                      Reservar Vaga
                    </Link>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {[
                        'Site Completo (5 páginas)',
                        'Design Premium Responsivo',
                        'Sistema de Contato Avançado',
                        'Otimização SEO Completa',
                        'Integração com Redes Sociais',
                        'Google Analytics',
                        'Suporte 90 dias',
                        '1 Revisão de Design Gratuita'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check size={18} className="text-cyan-400 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center text-gray-400"
            >
              <span className="text-amber-400 font-bold">Atenção:</span> Devido à alta demanda, só podemos aceitar {availableSpots} projetos Premium este mês.
            </motion.p>
          </div>
        </SectionWrapper>

        {/* Seção Contato */}
        <SectionWrapper id="contato">
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
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-xl">
                    <div className="bg-cyan-500/10 p-3 rounded-lg">
                      <Zap size={24} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Resposta em 24h</h3>
                      <p className="text-sm text-gray-400">Nossa equipe prioriza novos clientes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-xl">
                    <div className="bg-purple-500/10 p-3 rounded-lg">
                      <ShieldCheck size={24} className="text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Consultoria Gratuita</h3>
                      <p className="text-sm text-gray-400">Análise completa do seu projeto</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-xl">
                    <div className="bg-amber-500/10 p-3 rounded-lg">
                      <Clock size={24} className="text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-bold">Vagas Limitadas</h3>
                      <p className="text-sm text-gray-400">Apenas {availableSpots} disponíveis</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                      <Zap size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Garanta sua vaga</h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo</label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Seu nome"
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensagem</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Conte mais sobre seu projeto..."
                        required
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-lg transition"
                    >
                      {sending ? (
                        <>
                          <RefreshCw className="animate-spin" />
                          Enviando...
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
                      Ao enviar, você concorda com nossa Política de Privacidade
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </main>

      {/* Voltar ao topo */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg z-50"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}

      {/* Rodapé */}
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
            <p className="text-gray-500">
              Transformação digital premium para negócios ambiciosos.
            </p>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition">
                <Github size={20} />
              </Link>
              <Link href="#" className="p-2 bg-gray-900 hover:bg-gray-800 rounded-lg transition">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {['sobre', 'beneficios', 'portfolio', 'ofertas', 'contato'].map(sec => (
                <li key={sec}>
                  <Link href={`#${sec}`} className="text-gray-500 hover:text-cyan-400 transition">
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                'UX/UI Design Premium',
                'Desenvolvimento Front-end',
                'Identidade Visual',
                'E-commerce Exclusivo',
                'Otimização de Conversão'
              ].map((service, idx) => (
                <li key={idx} className="text-gray-500">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-500">
              <li>contato@workverse.design</li>
              <li>+55 (11) 99999-9999</li>
              <li>São Paulo, Brasil</li>
              <li className="pt-4"><span className="text-cyan-400 font-medium">Horário Comercial:</span> 9h-18h</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Workverse. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            Design e desenvolvimento premium para resultados extraordinários
          </p>
        </div>
      </footer>
    </>
  )
}

function SectionWrapper({ children, id, bg = '' }) {
  return (
    <section id={id} className={`${bg} py-20 px-6 md:px-8`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  )
}