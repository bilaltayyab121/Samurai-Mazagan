import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { X, Download, Heart, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Lightbox = () => {
  const { lightboxImage, closeLightbox } = useApp();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [closeLightbox]);

  return (
    <AnimatePresence>
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={closeLightbox}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white hover:bg-primary transition-colors duration-300 z-10"
          >
            <X className="w-6 h-6" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong items-center justify-center text-white hover:bg-primary transition-colors duration-300 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-strong items-center justify-center text-white hover:bg-primary transition-colors duration-300 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <motion.div
            key={lightboxImage.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-6xl max-h-[85vh] flex flex-col lg:flex-row gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-full max-h-[60vh] lg:max-h-[80vh] object-contain bg-black/50"
              />
            </div>

            <div className="lg:w-80 flex flex-col justify-between p-6 rounded-2xl glass-strong">
              <div>
                {lightboxImage.category && (
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                    {lightboxImage.category}
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-3">
                  {lightboxImage.title}
                </h3>
                {lightboxImage.description && (
                  <p className="text-gray leading-relaxed">{lightboxImage.description}</p>
                )}
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  className="flex-1 py-3 rounded-xl glass text-white hover:bg-white/10 flex items-center justify-center gap-2 transition-colors duration-300"
                  onClick={() => {}}
                >
                  <Heart className="w-5 h-5" />
                  Save
                </button>
                <button
                  className="flex-1 py-3 rounded-xl glass text-white hover:bg-white/10 flex items-center justify-center gap-2 transition-colors duration-300"
                  onClick={() => {}}
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
                <a
                  href={lightboxImage.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="py-3 px-4 rounded-xl primary bg-primary text-white hover:bg-accent hover:text-background flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
