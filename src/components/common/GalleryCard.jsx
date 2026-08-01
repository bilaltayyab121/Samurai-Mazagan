import { motion } from 'framer-motion';
import { useState } from 'react';
import { ZoomIn, Heart } from 'lucide-react';
import { fadeInUp } from '../../utils/motion';
import { useApp } from '../../context/AppContext';

const GalleryCard = ({ image, index = 0, masonry = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { openLightbox } = useApp();

  const handleClick = () => {
    openLightbox(image);
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.05 }}
      className={masonry ? "mb-4 break-inside-avoid" : ""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative group rounded-2xl overflow-hidden cursor-pointer card-hover"
        onClick={handleClick}
      >
        <div className={masonry ? "" : "aspect-square"}>
          <motion.img
            src={image.image}
            alt={image.title}
            loading="lazy"
            style={{ objectPosition: image.objectPosition || "center" }}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6"
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full glass-strong flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Heart className="w-5 h-5 text-white hover:text-primary transition-colors" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full primary flex items-center justify-center bg-primary"
            >
              <ZoomIn className="w-5 h-5 text-white" />
            </motion.button>
          </div>
          <h4 className="text-white font-playfair text-xl font-bold mb-1">
            {image.title}
          </h4>
          {image.description && (
            <p className="text-gray text-sm">{image.description}</p>
          )}
        </motion.div>

        {image.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-accent text-background text-xs font-bold">
              Featured
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default GalleryCard;
