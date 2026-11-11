import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          
          
          onClick={scrollToTop}
          className="fita foco fixed bottom-5 right-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-[3px] text-white transition-colors hover:bg-fita-2 sm:bottom-8 sm:right-8"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={20} strokeWidth={1.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;