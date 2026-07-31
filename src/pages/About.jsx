import SEO from '../utils/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import ImageReveal from '../components/common/ImageReveal';
import Newsletter from '../components/common/Newsletter';
import SectionWrapper from '../components/common/SectionWrapper';
import Button from '../components/common/Button';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../utils/motion';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Heart, Star, Calendar, CheckCircle } from 'lucide-react';
import { restaurantData } from '../data/restaurant';
import { galleryImages } from '../data/gallery';
import GalleryCard from '../components/common/GalleryCard';

const timelineItems = [
  { year: '2022', title: 'Our Journey Begins', description: 'Samurai Mazagan opens its doors in El Jadida, bringing authentic Japanese cuisine to Morocco.' },
  { year: '2023', title: 'Rooftop Expansion', description: 'Added our stunning rooftop terrace with panoramic city views and live weekend music.' },
  { year: '2023', title: 'Award Recognition', description: 'Won Best Japanese Restaurant award from El Jadida Dining Association.' },
  { year: '2024', title: 'Menu Innovation', description: 'Launched our premium Omakase experience and expanded vegan/vegetarian offerings.' },
  { year: '2025', title: 'Looking Forward', description: 'Continuing to innovate, grow, and deliver unforgettable dining experiences.' }
];

const chefs = [
  {
    name: "Chef Hiroshi Tanaka",
    role: "Executive Head Chef",
    specialty: "Sushi & Sashimi Master",
    experience: "25+ years",
    bio: "Trained in Tokyo's renowned Tsukiji district, Chef Tanaka brings authentic Edomae sushi craftsmanship to El Jadida.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chef Amina Benali",
    role: "Head of Hot Pot",
    specialty: "Traditional Nabe & Broths",
    experience: "15+ years",
    bio: "Moroccan-Japanese chef specializing in creating unique fusion broths that blend the best of both culinary worlds.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver the most authentic Japanese dining experience in Morocco, using the finest ingredients while honoring tradition and embracing local culture.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be recognized as the premier Japanese restaurant destination in North Africa, known for culinary excellence, warm hospitality, and unforgettable ambiance.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Quality, authenticity, hospitality, and sustainability guide everything we do. Every guest is family, every dish is crafted with love.",
  },
];

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Discover the story of Samurai Mazagan, El Jadida's premier Japanese restaurant. Learn about our mission, vision, master chefs, and our journey since 2022."
        keywords="About Samurai Mazagan, Japanese restaurant story, master chefs, El Jadida dining, restaurant history"
      />

      <Breadcrumb />

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80"
            alt="Restaurant ambiance"
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
                About Samurai Mazagan
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-[1.05]"
            >
              <span className="text-white">Where Tradition</span>
              <br />
              <span className="text-gradient">Meets Excellence</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray leading-relaxed max-w-2xl mx-auto"
            >
              {restaurantData.longDescription}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInLeft} className="relative">
              <ImageReveal
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80"
                alt="Our chefs at work"
                aspectRatio="aspect-[4/5]"
                rounded="rounded-3xl"
                className="shadow-2xl"
              />
              <motion.div
                variants={fadeInUp}
                className="absolute -bottom-6 -right-6 p-6 rounded-2xl glass-strong shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {chefs.map((chef, i) => (
                      <img
                        key={i}
                        src={chef.image}
                        alt={chef.name}
                        className="w-12 h-12 rounded-full border-2 border-background object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {restaurantData.chefs} Master Chefs
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray">
                      <Star className="w-3 h-3 text-accent fill-accent" />
                      From Tokyo & Beyond
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div>
              <SectionHeading
                eyebrow="Our Philosophy"
                title="Crafting Culinary Art"
                subtitle="Every dish at Samurai Mazagan tells a story of heritage, passion, and relentless pursuit of perfection."
                center={false}
              />

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-6"
              >
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex gap-5 p-6 rounded-2xl glass hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-bold text-white mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray leading-relaxed">{value.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-premium">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Meet The Team"
            title="Master Chefs Behind The Magic"
            subtitle="Our culinary artists whose passion and expertise create magic on every plate."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {chefs.map((chef, index) => (
              <motion.div
                key={chef.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl overflow-hidden card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs font-semibold mb-3">
                    {chef.experience} Experience
                  </span>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-1">
                    {chef.name}
                  </h3>
                  <p className="text-accent font-medium mb-2">{chef.role}</p>
                  <p className="text-white/70 text-sm mb-3">{chef.specialty}</p>
                  <p className="text-gray text-sm leading-relaxed">
                    {chef.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Journey"
            title="Samurai Timeline"
            subtitle="The milestones that have shaped Samurai Mazagan into the destination it is today."
          />

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30" />

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    } pl-16 md:pl-0`}
                  >
                    <div className="p-6 rounded-2xl glass card-hover">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {item.year}
                      </span>
                      <h3 className="text-xl font-playfair font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-premium">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Highlights"
            title="The Samurai Experience"
            subtitle="Immerse yourself in every aspect of our carefully crafted dining experience."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {[
              { icon: Award, value: "85+", label: "Menu Items" },
              {
                icon: Star,
                value: restaurantData.rating.toString(),
                label: "Rating",
              },
              { icon: Calendar, value: "7/7", label: "Days Open" },
              {
                icon: CheckCircle,
                value: restaurantData.seatingCapacity + "+",
                label: "Capacity",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-3xl glass text-center"
              >
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-3 md:mb-4" />
                <div className="text-3xl md:text-5xl font-playfair font-bold text-gradient mb-1 md:mb-2">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm text-gray">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-6">
              Come Dine With <span className="text-gradient">Us</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" variant="primary" to="/reservation">
                Reserve Your Table
              </Button>
              <Button size="lg" variant="outline" to="/menu">
                Explore Menu
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="container-custom pb-16">
        <SectionHeading
          eyebrow="Moments"
          title="Glimpses From Our Kitchen"
          subtitle="A closer look at the artistry and atmosphere of Samurai Mazagan."
        />
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4">
          {galleryImages.slice(0, 8).map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image}
              index={index}
              masonry={true}
            />
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default About;
