// components/BackToTop.js
import { motion, AnimatePresence } from 'framer-motion'; // Adicionei o AnimatePresence aqui
import { ChevronUp } from 'lucide-react';

export default function BackToTop({ showTop }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence> {/* Agora está importado corretamente */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg z-50"
          aria-label="Voltar ao topo"
        >
          <ChevronUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}