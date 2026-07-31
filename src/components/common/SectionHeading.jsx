import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../../utils/motion';
import { useInView } from '../../hooks/useCustom';

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  center = true,
  className = ''
}) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`mb-12 md:mb-16 ${center ? 'text-center mx-auto max-w-3xl' : ''} ${className}`}
    >
      {eyebrow && (
        <motion.div
          variants={textVariant}
          className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-primary" />
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            {eyebrow}
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-transparent via-primary to-primary" />
        </motion.div>
      )}

      <motion.h2
        variants={textVariant}
        className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 leading-tight"
      >
        <span className="text-white">{title.split(' ').slice(0, -1).join(' ')} </span>
        <span className="text-gradient">{title.split(' ').slice(-1)[0]}</span>
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={textVariant}
          className="text-gray text-lg md:text-xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
