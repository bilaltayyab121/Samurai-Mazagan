import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import GalleryCard from '../common/GalleryCard';
import SectionWrapper from '../common/SectionWrapper';
import Button from '../common/Button';
import { galleryImages, galleryCategories } from '../../data/gallery';
import { staggerContainer } from '../../utils/motion';

const GalleryPreview = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all'
    ? galleryImages.slice(0, 8)
    : galleryImages.filter(img => img.category === activeCategory).slice(0, 8);

  return (
    <SectionWrapper id="gallery" className="bg-gradient-premium">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Gallery"
          title="Moments & Memories"
          subtitle="A glimpse into the atmosphere, cuisine, and unforgettable moments at Samurai Mazagan."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {galleryCategories.slice(0, 5).map((cat, index) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {filteredImages.map((image, index) => (
            <GalleryCard
              key={`${activeCategory}-${image.id}`}
              image={image}
              index={index}
              masonry={true}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            to="/gallery"
          >
            View Full Gallery
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GalleryPreview;
