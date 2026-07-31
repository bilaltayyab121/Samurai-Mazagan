import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from '../../hooks/useCustom';
import { fadeInUp } from '../../utils/motion';

const StatisticCard = ({ stat, index = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: index * 0.1 }}
      className="relative p-8 rounded-3xl glass text-center card-hover group"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300 group-hover:scale-110">
          <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
        </div>

        <div className="text-5xl md:text-6xl font-playfair font-bold mb-2">
          {inView ? (
            <span className="text-gradient">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                separator=","
                suffix={stat.suffix}
              />
            </span>
          ) : (
            <span className="text-gradient">0{stat.suffix}</span>
          )}
        </div>

        <h4 className="text-white font-semibold text-lg mb-2">{stat.label}</h4>
        {stat.description && (
          <p className="text-gray text-sm">{stat.description}</p>
        )}
      </div>
    </motion.div>
  );
};

export default StatisticCard;
