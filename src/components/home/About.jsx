import { motion } from 'framer-motion';
import { Check, Award, Users, Music, Sun, Utensils } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ImageReveal from '../common/ImageReveal';
import Button from '../common/Button';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../utils/motion';
import { galleryImages } from "../../data/gallery";
const highlights = [
  { icon: Utensils, label: "Authentic Japanese flavors" },
  { icon: Award, label: "Fresh, premium ingredients" },
  { icon: Users, label: "Cozy, welcoming atmosphere" },
  { icon: Sun, label: "Rooftop seating with views" },
  { icon: Music, label: "Live weekend music" },
  { icon: Award, label: "Award-winning chefs" },
];

const About = () => {
  const aboutImage = galleryImages[0];

  return (
    <motion.section
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="relative section-padding overflow-hidden"
    >
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={fadeInLeft}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <ImageReveal
                src={aboutImage.image}
                alt={aboutImage.title}
                aspectRatio="aspect-[4/5]"
                rounded="rounded-3xl"
                className="shadow-2xl"
              />

              <motion.div
                variants={fadeInUp}
                className="absolute -bottom-8 -right-4 md:-right-8 w-40 md:w-56 aspect-square rounded-2xl overflow-hidden border-4 border-background shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80"
                  alt="Chef preparing sushi"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="absolute -top-6 -left-4 md:-left-8 p-6 rounded-2xl glass-strong shadow-2xl"
              >
                <div className="text-5xl md:text-6xl font-playfair font-bold text-gradient leading-none">
                  3+
                </div>
                <div className="text-gray text-sm mt-1">
                  Years of Excellence
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="absolute top-1/3 -right-2 md:right-4 w-24 h-24 opacity-70 hidden md:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-primary fill-current"
                >
                  <path
                    d="M50 0 C60 20 80 40 100 50 C80 60 60 80 50 100 C40 80 20 60 0 50 C20 40 40 20 50 0"
                    fillOpacity="0.2"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <div className="text-left">
              <SectionHeading
                eyebrow="About Us"
                title="Our Story & Passion"
                subtitle="Bringing the authentic taste of Japan to the heart of El Jadida."
                center={false}
              />
            </div>

            <motion.div variants={fadeInRight} className="space-y-6 mb-8">
              <p className="text-white/80 text-lg leading-relaxed">
                Nestled on Av. Bir Anzarane in El Jadida,{" "}
                <span className="text-primary font-semibold">
                  Samurai Mazagan
                </span>{" "}
                is a celebration of Japanese culinary artistry. Our master
                chefs, trained in the traditions of Tokyo and Osaka, bring
                decades of expertise to every dish they create.
              </p>
              <p className="text-gray leading-relaxed">
                From our signature simmering hot pots to the delicate precision
                of our premium sushi, every element at Samurai Mazagan is
                crafted to deliver an unforgettable experience. Our unique
                rooftop setting and live weekend music make every visit special.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white/80 text-sm">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" to="/about" size="lg">
                Discover More
              </Button>
              <Button variant="outline" to="/menu" size="lg">
                Explore Menu
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
