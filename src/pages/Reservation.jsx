import { useState } from 'react';
import SEO from '../utils/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';
import Newsletter from '../components/common/Newsletter';
import Button from '../components/common/Button';
import { staggerContainer, fadeInUp } from '../utils/motion';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  Calendar, Clock, Users, User, Mail, Phone,
  MessageSquare, CheckCircle2, UtensilsCrossed, MapPin, Star
} from 'lucide-react';
import { generateTimeSlots } from '../utils/helpers';
import { submitReservation } from '../services/api';
import { restaurantData } from '../data/restaurant';

const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20];
const timeSlots = generateTimeSlots(12, 23, 30);

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const getMaxDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 3);
  return date.toISOString().split('T')[0];
};

const Reservation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      guests: 2,
      time: '7:00 PM',
      date: getTodayDate()
    }
  });

  const selectedDate = watch('date');
  const selectedGuests = watch('guests');
  const selectedTime = watch('time');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await submitReservation(data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 8000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Reservation"
        description="Reserve your table at Samurai Mazagan, El Jadida's premier Japanese restaurant. Book for hot pot, sushi, rooftop dining, and private events."
        keywords="restaurant reservation El Jadida, book table, Japanese restaurant booking, hot pot reservation, private dining"
      />

      <Breadcrumb />

      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80"
            alt="Reservation banner"
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
              <span className="text-primary tracking-[0.4em] uppercase text-sm font-medium">
                Book Your Table
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-[1.05]"
            >
              <span className="text-white">Reserve Your</span>
              <br />
              <span className="text-gradient">Experience</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray leading-relaxed max-w-2xl mx-auto"
            >
              Secure your table for an unforgettable dining experience. We
              recommend booking in advance, especially for weekend evenings and
              rooftop seating.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="!pt-0">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-1 space-y-6 order-2 lg:order-1"
            >
              {[
                {
                  icon: Calendar,
                  title: "Easy Online Booking",
                  desc: "Reserve 24/7 in under 2 minutes. Instant confirmation.",
                  color: "text-primary",
                  bg: "bg-primary/10",
                },
                {
                  icon: UtensilsCrossed,
                  title: "Special Requests?",
                  desc: "Birthdays, anniversaries, dietary needs — we accommodate it all.",
                  color: "text-accent",
                  bg: "bg-accent/10",
                },
                {
                  icon: Users,
                  title: "Group & Events",
                  desc: "Private rooms and rooftop events up to 80 guests.",
                  color: "text-green-400",
                  bg: "bg-green-400/10",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-2xl glass card-hover"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-4`}
                  >
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}

              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-2xl glass-strong overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <h4 className="font-playfair text-2xl font-bold text-white mb-1">
                    {restaurantData.rating}/5 Rated Experience
                  </h4>
                  <p className="text-gray text-sm mb-4">
                    Based on {restaurantData.reviews}+ reviews
                  </p>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <MapPin className="w-4 h-4 text-primary" />
                    {restaurantData.address.city}, Morocco
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 order-1 lg:order-2"
            >
              {isSubmitted ? (
                <div className="p-8 md:p-12 rounded-3xl glass-strong text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-14 h-14 text-green-400" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                    Reservation{" "}
                    <span className="text-gradient">Confirmed!</span>
                  </h2>
                  <p className="text-gray text-lg mb-8 max-w-xl mx-auto">
                    Thank you for choosing Samurai Mazagan! We've sent a
                    confirmation to your email. Our team will contact you
                    shortly to confirm all details.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button variant="primary" size="lg" to="/menu">
                      Explore Menu
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Make Another Reservation
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="p-6 md:p-10 rounded-3xl glass-strong space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <User className="w-4 h-4 text-primary" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                          errors.name
                            ? "border-red-500"
                            : "border-white/10 focus:border-primary"
                        } text-white placeholder-gray focus:outline-none transition-colors duration-300`}
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <Mail className="w-4 h-4 text-primary" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                          errors.email
                            ? "border-red-500"
                            : "border-white/10 focus:border-primary"
                        } text-white placeholder-gray focus:outline-none transition-colors duration-300`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <Phone className="w-4 h-4 text-primary" />
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+212 6XX XXX XXX"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                          errors.phone
                            ? "border-red-500"
                            : "border-white/10 focus:border-primary"
                        } text-white placeholder-gray focus:outline-none transition-colors duration-300`}
                        {...register("phone", {
                          required: "Phone is required",
                          minLength: {
                            value: 9,
                            message: "Enter a valid phone number",
                          },
                        })}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <Users className="w-4 h-4 text-primary" />
                        Number of Guests *
                      </label>
                      <select
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                          errors.guests
                            ? "border-red-500"
                            : "border-white/10 focus:border-primary"
                        } text-white focus:outline-none transition-colors duration-300 appearance-none cursor-pointer`}
                        {...register("guests", { required: true })}
                      >
                        {guestOptions.map((n) => (
                          <option key={n} value={n} className="bg-secondary">
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                        <option value="20+" className="bg-secondary">
                          20+ (Contact us)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        Date *
                      </label>
                      <input
                        type="date"
                        min={getTodayDate()}
                        max={getMaxDate()}
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                          errors.date
                            ? "border-red-500"
                            : "border-white/10 focus:border-primary"
                        } text-white focus:outline-none transition-colors duration-300`}
                        {...register("date", {
                          required: "Please select a date",
                        })}
                      />
                      {errors.date && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.date.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <Clock className="w-4 h-4 text-primary" />
                        Time *
                      </label>
                      <select
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                          errors.time
                            ? "border-red-500"
                            : "border-white/10 focus:border-primary"
                        } text-white focus:outline-none transition-colors duration-300 appearance-none cursor-pointer`}
                        {...register("time", { required: true })}
                      >
                        {timeSlots.map((time) => (
                          <option
                            key={time}
                            value={time}
                            className="bg-secondary"
                          >
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Dietary restrictions, special occasions, seating preferences, etc."
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-primary text-white placeholder-gray focus:outline-none transition-colors duration-300 resize-none"
                      {...register("message")}
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-2xl glass flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-gray">
                      By booking, you confirm {selectedGuests || "X"} guest
                      {selectedGuests !== 1 ? "s" : ""} on{" "}
                      <span className="text-white font-medium">
                        {selectedDate || "selected date"}
                      </span>{" "}
                      at{" "}
                      <span className="text-white font-medium">
                        {selectedTime || "selected time"}
                      </span>
                      . We'll confirm via email or call.
                    </p>
                  </motion.div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 rounded-2xl bg-primary text-white text-lg font-semibold hover:bg-accent hover:text-background transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-accent/30 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing Reservation...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        Confirm Reservation
                      </>
                    )}
                  </button>

                  <p className="text-center text-gray text-xs">
                    Need help? Call us at{" "}
                    <a
                      href={`tel:${restaurantData.contact.phone}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {restaurantData.contact.phone}
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <Newsletter />
    </>
  );
};

export default Reservation;
