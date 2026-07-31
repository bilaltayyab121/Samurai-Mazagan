import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useIsScrolled } from '../../hooks/useCustom';

const BackToTop = () => {
  const isScrolled = useIsScrolled(400);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-6 z-40 w-14 h-14 rounded-full bg-primary glass-strong flex items-center justify-center shadow-2xl hover:bg-accent group transition-colors duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-white group-hover:text-background transition-colors duration-300" />
          <motion.span
            className="absolute inset-0 rounded-full bg-accent opacity-0 group-hover:opacity-20"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut'
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
