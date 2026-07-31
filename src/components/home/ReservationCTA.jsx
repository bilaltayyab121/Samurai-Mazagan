import { motion } from 'framer-motion';
import { Calendar, Star, Users, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { staggerContainer, fadeInUp } from '../../utils/motion';
import { restaurantData } from '../../data/restaurant';

const ReservationCTA = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-24 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container-custom relative">
        <div className="max-w-4xl">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong mb-6"
          >
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-white/80 text-sm font-medium">
              {restaurantData.rating} / 5 • {restaurantData.reviews}+ Happy
              Guests
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold mb-6 leading-[1.1]"
          >
            <span className="text-white">Ready for an</span>
            <br />
            <span className="text-gradient">Unforgettable Experience?</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
          >
            Reserve your table now and let us take you on a culinary journey
            through Japan. Whether it's a romantic dinner, family celebration,
            or business meeting, we promise an experience to remember.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-4 md:gap-6 mb-12 max-w-xl"
          >
            {[
              { icon: Calendar, value: "Easy", label: "24/7 Booking" },
              {
                icon: Users,
                value: restaurantData.seatingCapacity + "+",
                label: "Seats Available",
              },
              { icon: UtensilsCrossed, value: "85+", label: "Menu Items" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 md:p-6 rounded-2xl glass-strong text-center"
              >
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-playfair font-bold text-white mb-1">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm text-gray">{item.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/reservation")}
              className="group relative px-10 py-5 rounded-full bg-primary text-white text-lg font-semibold shadow-2xl shadow-primary/30 hover:shadow-accent/30 overflow-hidden flex items-center justify-center gap-3"
            >
              <span className="absolute inset-0 bg-accent translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <Calendar className="w-6 h-6 relative z-10 group-hover:text-background transition-colors duration-300" />
              <span className="relative z-10 group-hover:text-background transition-colors duration-300">
                Reserve Your Table
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:text-background transition-all duration-300" />
            </motion.button>

            <motion.a
              variants={fadeInUp}
              href={`tel:${restaurantData.contact.phone}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 rounded-full glass-strong text-white text-lg font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-3"
            >
              <Star className="w-5 h-5 text-accent fill-accent" />
              Call: {restaurantData.contact.phone}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ReservationCTA;
