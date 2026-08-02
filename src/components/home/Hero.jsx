import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Calendar, UtensilsCrossed, MapPin, Star } from 'lucide-react';
import { useParallax, useMousePosition } from '../../hooks/useCustom';
import { restaurantData } from '../../data/restaurant';
import Button from '../common/Button';

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const parallaxOffset = useParallax(0.3);
  const { x, y } = useMousePosition();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const text = 'Samurai Mazagan';

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <motion.div
          style={{
            y: parallaxOffset,
            scale: 1.1,
          }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80"
            alt="Samurai Mazagan Restaurant"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/80" />
        <div
          className="absolute inset-0 opacity-30 hidden xl:block"
          style={{
            background: `radial-gradient(
              600px circle at ${x}px ${y}px,
              rgba(199, 28, 45, 0.15),
              transparent 40%
            )`,
          }}
        />
      </div>

      <motion.div
        className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 opacity-20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-primary fill-current"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 6"
          />
          <path d="M50 10 L52 50 L50 90 L48 50 Z" />
          <path d="M10 50 L50 48 L90 50 L50 52 Z" />
        </svg>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10 container-custom pt-24 pb-16 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-strong mb-8"
        >
          <span className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
            ))}
          </span>
          <span className="text-white/80 text-sm font-medium">
            {restaurantData.rating} Rating • {restaurantData.reviews}+ Reviews
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <p className="text-primary tracking-[0.4em] uppercase text-sm md:text-base font-medium mb-4">
            Welcome to
          </p>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[42px] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-playfair font-bold mb-6"
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.6 + i * 0.04,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${
                i < 7 ? "text-white" : "text-gradient"
              }`}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-playfair text-white/90 mb-4"
        >
          Authentic Japanese Cuisine
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray mb-12 max-w-2xl mx-auto flex items-center justify-center gap-3 flex-wrap"
        >
          <span>Hot Pot</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>Sushi</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>Asian Dining</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 mb-16 text-gray"
        >
          <MapPin className="w-5 h-5 text-primary" />
          <span>{restaurantData.address.full}</span>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button
            size="lg"
            variant="primary"
            icon={<Calendar className="w-5 h-5" />}
            to="/reservation"
            className="shadow-2xl shadow-primary/30"
          >
            Reserve Your Table
          </Button>
          <Button
            size="lg"
            variant="ghost"
            icon={<UtensilsCrossed className="w-5 h-5" />}
            to="/menu"
          >
            View Our Menu
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: restaurantData.reviews + "+", label: "Happy Guests" },
            { value: "85+", label: "Signature Dishes" },
            { value: restaurantData.chefs, label: "Master Chefs" },
          ].map((stat, i) => (
            <div key={i} className="p-4 md:p-6 rounded-2xl glass-strong">
              <motion.div
                className="text-2xl md:text-4xl font-playfair font-bold text-gradient mb-1"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-xs md:text-sm text-gray">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray cursor-pointer z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
