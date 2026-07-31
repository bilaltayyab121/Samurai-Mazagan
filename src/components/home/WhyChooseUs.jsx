import SectionHeading from '../common/SectionHeading';
import StatisticCard from '../common/StatisticCard';
import SectionWrapper from '../common/SectionWrapper';
import { statistics, whyChooseUs } from '../../data/statistics';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/motion';
import { restaurantData } from '../../data/restaurant';
import { Star, Users } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from '../../hooks/useCustom';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <SectionWrapper id="why-choose-us" className="bg-gradient-premium">
      <div className="container-custom">
        <div ref={ref} className="max-w-5xl mx-auto mb-20 p-8 md:p-12 rounded-3xl glass-strong relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="col-span-2 md:col-span-2 flex items-center justify-center gap-6 p-4"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                <Star className="w-10 h-10 md:w-12 md:h-12 text-accent fill-accent" />
              </div>
              <div>
                <div className="text-5xl md:text-7xl font-playfair font-bold mb-1">
                  {inView ? (
                    <span className="text-gradient">
                      <CountUp start={0} end={restaurantData.rating} decimals={1} duration={2} />
                    </span>
                  ) : '0.0'}
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(restaurantData.rating)
                          ? 'text-accent fill-accent'
                          : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray text-sm">Google Rating</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center gap-4 p-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-playfair font-bold mb-1">
                  {inView ? (
                    <span className="text-gradient">
                      <CountUp start={0} end={restaurantData.reviews} duration={2} suffix="+" />
                    </span>
                  ) : '0+'}
                </div>
                <span className="text-gray text-sm">Reviews</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-4 p-4"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                <span className="text-3xl">🏆</span>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-playfair font-bold mb-1 text-gradient">
                  {restaurantData.established}
                </div>
                <span className="text-gray text-sm">Established</span>
              </div>
            </motion.div>
          </div>
        </div>

        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Samurai Difference"
          subtitle="We are committed to delivering an exceptional dining experience in every aspect."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="relative p-8 rounded-3xl glass card-hover group"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-playfair font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {statistics.map((stat, index) => (
            <StatisticCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
