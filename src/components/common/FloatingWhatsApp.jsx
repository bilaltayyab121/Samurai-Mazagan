import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { actions } from '../../data/restaurant';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={actions.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.2, 0, 0.2]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeOut'
        }}
      />
      <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-2xl">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>
      <span className="hidden md:flex items-center px-4 py-2 rounded-full glass-strong text-white text-sm font-medium whitespace-nowrap">
        WhatsApp Us
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
