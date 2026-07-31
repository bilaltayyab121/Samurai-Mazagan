import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/motion';

const SectionWrapper = ({ children, id, className = '' }) => {
  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`relative section-padding ${className}`}
    >
      {children}
    </motion.section>
  );
};

export { SectionWrapper, fadeInUp };
export default SectionWrapper;
