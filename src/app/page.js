// app/page.js
'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion'
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
} from 'lucide-react'

export default function Home() {
  // Preloader
  const [loadingSplash, setLoadingSplash] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setLoadingSplash(false), 1200)
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

  // Parallax blobs
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 400], [0, -100])
  const y2 = useTransform(scrollY, [0, 400], [0, -50])

  // Portfolio data
  const projects = [
    { id: 1, title: 'Landing Page Interativa', category: 'Web', img: '/images/p1.jpg' },
    { id: 2, title: 'E-commerce Minimalista', category: 'E-commerce', img: '/images/p2.jpg' },
    { id: 3, title: 'Dashboard Corporativo', category: 'Dashboard', img: '/images/p3.jpg' },
    { id: 4, title: 'App Mobile Financeiro', category: 'Mobile', img: '/images/p4.jpg' },
    { id: 5, title: 'Identidade de Marca', category: 'Branding', img: '/images/p5.jpg' },
  ]
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter)

  // Contact form
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus('')
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

  return (
    <>
      <Head>
        <title>Workverse • Portfolio</title>
        <meta name="description" content="Portfólio UX/UI e desenvolvimento Workverse" />
      </Head>

      {/* Preloader */}
      <AnimatePresence>
        {loadingSplash && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Workverse
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <nav className="fixed w-full z-40 bg-white dark:bg-black shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600">
            Workverse
          </Link>
          <div className="flex items-center gap-6">
            {['sobre', 'servicos', 'portfolio', 'depoimentos', 'contato'].map((sec) => (
              <Link
                key={sec}
                href={`#${sec}`}
                className="capitalize text-gray-700 dark:text-gray-300 hover:text-purple-600 transition-colors"
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </Link>
            ))}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition">
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="pt-20 font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100 overflow-x-hidden">
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: y1 }} className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
          <motion.div style={{ y: y2 }} className="absolute w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply opacity-20 filter blur-3xl animate-blob" />
          <motion.div style={{ y: y2 }} className="absolute w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply opacity-20 filter blur-3xl animate-blob animation-delay-4000" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight"
            >
              <span className="block">Design</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                Sofisticado
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg max-w-2xl mx-auto"
            >
              Experiência premium com foco em detalhes e performance excepcional.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
              className="mt-10 flex justify-center gap-6"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link href="#contato" className="group inline-flex items-center rounded-full bg-black dark:bg-white px-6 py-3 font-medium text-white dark:text-black shadow-lg hover:shadow-xl transition">
                  Começar agora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Link href="#sobre" className="inline-flex items-center rounded-full px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                  Saiba mais <span aria-hidden>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Sobre */}
        <SectionWrapper id="sobre">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-4">Sobre a Workverse</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Somos o elo entre criatividade e tecnologia. Desenvolvemos interfaces web,
              apps móveis e identidades visuais que encantam usuários e geram resultados.
            </p>
            <Link href="#servicos" className="mt-6 inline-block text-purple-600 font-semibold hover:underline">
              Conheça nossos serviços →
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Image src="/images/about-illustration.svg" alt="Sobre" width={500} height={400} className="mx-auto" />
          </motion.div>
        </SectionWrapper>

        {/* Serviços */}
        <SectionWrapper id="servicos" bg="bg-gray-50 dark:bg-gray-900">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-700">Nossos Serviços</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              UX/UI, front-end, branding e animações – excelência em cada detalhe.
            </p>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }} className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Palette size={32} />, title: 'UX/UI Design' },
              { icon: <Code size={32} />, title: 'Front-end' },
              { icon: <LayoutGrid size={32} />, title: 'Prototipagem' },
              { icon: <ShieldCheck size={32} />, title: 'Segurança' },
            ].map((svc, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.03 }} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="text-purple-600 mb-4">{svc.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Serviço premium com foco em excelência.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* Portfólio */}
        <SectionWrapper id="portfolio">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-700">Portfólio</h2>
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              {categories.map((c) => (
                <motion.button key={c} whileTap={{ scale: 0.95 }} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-full font-medium transition ${
                  filter === c
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900'
                }`}>
                  {c}
                </motion.button>
              ))}
            </div>
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }} className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <motion.div key={p.id} variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
                <Image src={p.img} alt={p.title} width={600} height={400} className="object-cover w-full h-48" />
                <div className="p-6 bg-white dark:bg-gray-800">
                  <h3 className="font-semibold text-lg mb-1">{p.title}</h3>
                  <span className="text-purple-600 text-sm">{p.category}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* Depoimentos */}
        <SectionWrapper id="depoimentos" bg="bg-gradient-to-r from-purple-900 to-purple-700 text-white">
          <div className="max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Depoimentos</h2>
          </div>
          <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.3 } } }}>
            {[
              { id: 1, name: 'Lucas Andrade', role: 'CEO Fintecs', quote: 'Design impecável e entrega rápida.' },
              { id: 2, name: 'Renata Silva', role: 'Prod. Manager', quote: 'Equipe extremamente dedicada.' },
            ].map((t) => (
              <motion.div key={t.id} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.02 }} className="bg-black/40 rounded-2xl p-8">
                <p className="italic mb-4">“{t.quote}”</p>
                <strong>{t.name}</strong>, <span className="text-sm">{t.role}</span>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>

        {/* Contato */}
        <SectionWrapper id="contato">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-700">Fale Conosco</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Pronto para elevar seu projeto? Envie sua mensagem.
            </p>
          </div>
          <motion.form onSubmit={handleSubmit} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} className="max-w-2xl mx-auto space-y-4">
            {['name', 'email'].map((f) => (
              <motion.input key={f} name={f} type={f === 'email' ? 'email' : 'text'} placeholder={f === 'email' ? 'Seu e-mail' : 'Seu nome'} required onChange={handleChange} variants={{ hidden: { opacity: 0, x: f === 'name' ? -50 : 50 }, visible: { opacity: 1, x: 0 } }} className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 focus:outline-none" />
            ))}
            <motion.textarea name="message" rows={5} placeholder="Sua mensagem" required onChange={handleChange} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }} className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-800 focus:outline-none resize-none" />
            <motion.button type="submit" variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }} whileTap={{ scale: 0.95 }} className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition">
              {sending ? <RefreshCw className="animate-spin" /> : <ArrowRight size={20} />}
              {sending ? ' Enviando...' : 'Enviar mensagem'}
            </motion.button>
            {status && <p className="mt-2 text-center">{status}</p>}
          </motion.form>
        </SectionWrapper>
      </main>

      {/* Back to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition">
          <ChevronUp size={24} />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-black dark:bg-black text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span>© {new Date().getFullYear()} Workverse. Todos os direitos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/" target="_blank" className="hover:text-white"><Github /></Link>
            <Link href="https://linkedin.com/" target="_blank" className="hover:text-white"><Linkedin /></Link>
          </div>
        </div>
      </footer>
    </>
  )
}

// Section wrapper
function SectionWrapper({ children, id, bg = '' }) {
  return (
    <section id={id} className={`${bg} py-24 px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {children}
      </div>
    </section>
  )
}