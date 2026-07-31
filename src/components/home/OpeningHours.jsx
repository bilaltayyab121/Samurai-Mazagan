import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';
import { restaurantData } from '../../data/restaurant';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '../../utils/motion';
import { Clock, MapPin, Phone, TrendingUp } from 'lucide-react';

const OpeningHours = () => {
  const days = Object.entries(restaurantData.openingHours);
  const dayNames = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday'
  };

  return (
    <SectionWrapper id="hours">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeading
              eyebrow="Visit Us"
              title="Opening Hours"
              subtitle="We're open 7 days a week to serve you the finest Japanese cuisine in El Jadida."
              center={false}
            />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl glass-strong overflow-hidden"
            >
              {days.map(([key, hours], index) => (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.06 }}
                  className={`flex items-center justify-between p-5 md:p-6 transition-colors duration-300 hover:bg-white/5 ${
                    index !== days.length - 1 ? "border-b border-white/5" : ""
                  } ${hours.busiest ? "bg-accent/5" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        hours.busiest
                          ? "bg-accent/20 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}
                    >
                      {hours.busiest ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div
                        className={`font-semibold ${
                          hours.busiest ? "text-accent" : "text-white"
                        }`}
                      >
                        {dayNames[key]}
                      </div>
                      {hours.busiest && (
                        <span className="text-xs text-accent/80 flex items-center gap-1 mt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          Peak Hours
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-32 md:w-48 hidden md:block">
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: hours.busiest ? "95%" : "65%" }}
                          viewport={{ once: true }}
                          transition={{
                            delay: 0.5 + index * 0.05,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full ${
                            hours.busiest
                              ? "bg-gradient-to-r from-primary to-accent"
                              : "bg-gradient-to-r from-primary/60 to-primary/40"
                          }`}
                        />
                      </div>
                    </div>
                    <div
                      className={`text-right ${
                        hours.closed
                          ? "text-red-400"
                          : hours.busiest
                            ? "text-accent font-semibold"
                            : "text-white/80"
                      }`}
                    >
                      {hours.closed
                        ? "Closed"
                        : `${hours.open} – ${hours.close}`}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <motion.div
              variants={fadeInUp}
              className="relative rounded-3xl overflow-hidden shadow-2xl mb-8"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
                  alt="Samurai Mazagan Restaurant"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-playfair font-bold text-white mb-1">
                  Find Us Easily
                </h3>
                <p className="text-white/70 text-sm">
                  Located in the heart of El Jadida
                </p>
              </div>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  value: restaurantData.address.full,
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  value: `${restaurantData.contact.phone} • ${restaurantData.contact.landline}`,
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  icon: Clock,
                  title: "Kitchen Hours",
                  value: "Open until 11:30 PM daily",
                  color: "text-green-400",
                  bg: "bg-green-400/10",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 p-5 rounded-2xl glass hover:bg-white/5 transition-colors duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-xs text-gray uppercase tracking-wider mb-1">
                      {item.title}
                    </div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OpeningHours;
