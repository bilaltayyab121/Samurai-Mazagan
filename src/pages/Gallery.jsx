import { useState, useMemo } from 'react';
import SEO from '../utils/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';
import Newsletter from '../components/common/Newsletter';
import GalleryCard from '../components/common/GalleryCard';
import Button from '../components/common/Button';
import { staggerContainer, fadeInUp } from '../utils/motion';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Grid2x2, Columns3 } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/gallery';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('masonry');

  const filteredImages = useMemo(() => {
    if (activeCategory === 'all') return galleryImages;
    return galleryImages.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  const columnsClass = viewMode === 'masonry'
    ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4'
    : viewMode === 'grid2'
    ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
    : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4';

  return (
    <>
      <SEO
        title="Gallery"
        description="Browse our gallery showcasing Samurai Mazagan's stunning interior, exquisite dishes, rooftop dining, and unforgettable atmosphere in El Jadida."
        keywords="restaurant gallery, Japanese food photos, rooftop dining, restaurant interior, sushi photography"
      />

      <Breadcrumb />

      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=moody%20Japanese%20restaurant%20collage%20sushi%20hotpot%20rooftop%20ambiance%20dining&image_size=landscape_16_9"
            alt="Gallery collage"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container-custom relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-primary tracking-[0.4em] uppercase text-sm font-medium">Visual Journey</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-[1.05]"
            >
              <span className="text-white">Moments in</span>
              <br />
              <span className="text-gradient">Frames</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray leading-relaxed max-w-2xl mx-auto"
            >
              A visual journey through the essence of Samurai Mazagan — our ambiance, cuisine,
              rooftop views, and the unforgettable moments shared by our guests.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="!pt-0">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 p-4 md:p-6 rounded-3xl glass"
          >
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 md:gap-3">
              {galleryCategories.map((cat, index) => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 md:px-5 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/30'
                      : 'glass-strong text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  {cat.name}
                  <span className="ml-2 opacity-60">
                    ({cat.id === 'all' ? galleryImages.length : galleryImages.filter(i => i.category === cat.id).length})
                  </span>
                </motion.button>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-2 p-1.5 rounded-xl glass-strong">
              {[
                { mode: 'masonry', icon: LayoutGrid, label: 'Masonry' },
                { mode: 'grid2', icon: Grid2x2, label: 'Grid' },
                { mode: 'grid3', icon: Columns3, label: 'Wide' }
              ].map(({ mode, icon: Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                    viewMode === mode
                      ? 'bg-primary text-white'
                      : 'text-gray hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${viewMode}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={columnsClass}
            >
              {filteredImages.map((image, index) => (
                viewMode === 'masonry' ? (
                  <GalleryCard
                    key={`${activeCategory}-${image.id}`}
                    image={image}
                    index={index}
                    masonry={true}
                  />
                ) : (
                  <div key={`${activeCategory}-${image.id}`}>
                    <GalleryCard
                      image={image}
                      index={index}
                      masonry={false}
                    />
                  </div>
                )
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredImages.length === 0 && (
            <div className="text-center py-24">
              <h3 className="text-2xl font-playfair font-bold text-white mb-3">No Images Found</h3>
              <p className="text-gray mb-8">No images in this category yet. Check back soon!</p>
              <Button
                variant="primary"
                onClick={() => setActiveCategory('all')}
              >
                View All
              </Button>
            </div>
          )}
        </div>
      </SectionWrapper>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20restaurant%20rooftop%20evening%20sunset%20dining%20panoramic%20view%20string%20lights&image_size=landscape_16_9"
            alt="CTA background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Experience It <span className="text-gradient">In Person</span>
            </h2>
            <p className="text-xl text-gray mb-10 leading-relaxed">
              Pictures only tell half the story. Come feel the ambiance, savor the flavors,
              and create your own unforgettable memories at Samurai Mazagan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" to="/reservation">
                Book Your Experience
              </Button>
              <Button variant="outline" size="lg" to="/menu">
                Explore Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Gallery;
