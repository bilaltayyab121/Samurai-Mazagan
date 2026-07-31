import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motion';

const FeatureCard = ({ feature, index = 0 }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden card-hover"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={feature.image}
          alt={feature.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-14 h-14 rounded-2xl bg-primary/90 glass-strong flex items-center justify-center mb-4 group-hover:bg-accent transition-colors duration-300"
        >
          <Icon className="w-7 h-7 text-white group-hover:text-background transition-colors duration-300" />
        </motion.div>

        <h3 className="text-2xl font-playfair font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
