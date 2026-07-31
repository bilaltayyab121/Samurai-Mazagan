import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useCustom';
import { revealImage, scaleY } from '../../utils/motion';

const ImageReveal = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-square',
  rounded = 'rounded-2xl'
}) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${rounded} ${className}`}
    >
      <motion.div
        variants={revealImage}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={`${aspectRatio} w-full`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        variants={scaleY}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="image-reveal-overlay pointer-events-none z-10"
      />
    </motion.div>
  );
};

export default ImageReveal;
