import { motion } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FloatingReservation = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/reservation')}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, type: 'spring' }}
      whileHover={{ scale: 1.1, y: -4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-primary"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.2, 0, 0.2]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 0.5
        }}
      />
      <span className="hidden md:flex items-center px-4 py-2 rounded-full glass-strong text-white text-sm font-medium whitespace-nowrap">
        Reserve Now
      </span>
      <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-2xl hover:bg-accent transition-colors duration-300 group">
        <CalendarCheck className="w-7 h-7 text-white group-hover:text-background transition-colors duration-300" />
      </div>
    </motion.button>
  );
};

export default FloatingReservation;
