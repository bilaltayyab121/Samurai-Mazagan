import SectionHeading from '../common/SectionHeading';
import StatisticCard from '../common/StatisticCard';
import SectionWrapper from '../common/SectionWrapper';
import { statistics, whyChooseUs } from '../../data/statistics';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/motion';
import { restaurantData } from '../../data/restaurant';
import { Star, Users, Award } from "lucide-react";
import CountUp from 'react-countup';
import { useInView } from '../../hooks/useCustom';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <SectionWrapper id="why-choose-us" className="bg-gradient-premium">
      <div className="container-custom">
        <div
          ref={ref}
          className="max-w-5xl mx-auto mb-20 rounded-3xl glass-strong relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-3">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="lg:col-span-2 p-6 sm:p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/60 mb-4">
                Guest Satisfaction
              </p>
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-2xl bg-accent/20 border border-accent/30">
                  <Star className="w-6 h-6 md:w-7 md:h-7 text-accent fill-accent" />
                </span>
                <div className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold leading-none">
                  {inView ? (
                    <span className="text-gradient">
                      <CountUp
                        start={0}
                        end={restaurantData.rating}
                        decimals={1}
                        duration={2}
                      />
                    </span>
                  ) : (
                    "0.0"
                  )}
                </div>
              </div>
              <div className="flex items-center gap-1.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.round(restaurantData.rating)
                        ? "text-accent fill-accent"
                        : "text-white/20"
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm md:text-base text-gray max-w-lg">
                Rated highly by locals and visitors for authentic taste, warm
                service, and consistent quality.
              </p>
            </motion.div>

            <div className="p-4 sm:p-5 md:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/60 mb-1">
                      Guest Reviews
                    </p>
                    <div className="text-3xl md:text-4xl font-playfair font-bold mb-0.5 leading-none">
                      {inView ? (
                        <span className="text-gradient">
                          <CountUp
                            start={0}
                            end={restaurantData.reviews}
                            duration={2}
                            suffix="+"
                          />
                        </span>
                      ) : (
                        "0+"
                      )}
                    </div>
                    <span className="text-xs text-gray">
                      Real Google reviews
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/60 mb-1">
                      Established
                    </p>
                    <div className="text-3xl md:text-4xl font-playfair font-bold mb-0.5 text-gradient leading-none">
                      {restaurantData.established}
                    </div>
                    <span className="text-xs text-gray">
                      Japanese dining in El Jadida
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
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
