import { useState, useMemo } from 'react';
import SEO from '../utils/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';
import Newsletter from '../components/common/Newsletter';
import FoodCard from '../components/common/FoodCard';
import Button from '../components/common/Button';
import { staggerContainer, fadeInUp } from '../utils/motion';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Filter,
  Flame,
  Fish,
  Salad,
  Drumstick,
  Cake,
  Wine,
  UtensilsCrossed,
  X,
  ShoppingCart,
} from "lucide-react";
import { menuItems, menuCategories } from "../data/menu";
import { useApp } from "../context/AppContext";
import { formatCurrency } from "../utils/helpers";

const iconMap = {
  UtensilsCrossed,
  Flame,
  Fish,
  Salad,
  Drumstick,
  Cake,
  Wine,
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const { cartCount, cartTotal, getWhatsAppOrderLink } = useApp();

  const filteredItems = useMemo(() => {
    let items = menuItems;

    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query),
      );
    }

    return items;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Our Menu"
        description="Explore Samurai Mazagan's exquisite menu featuring authentic Japanese hot pot, premium sushi, appetizers, main courses, desserts, and premium drinks."
        keywords="Japanese menu El Jadida, hot pot menu, sushi menu, Japanese cuisine prices, restaurant menu Morocco"
      />

      <Breadcrumb />

      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80"
            alt="Menu spread"
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
                Our Culinary Art
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-[1.05]"
            >
              <span className="text-white">Exquisite</span>{" "}
              <span className="text-gradient">Menu</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray leading-relaxed max-w-2xl mx-auto"
            >
              A curated selection of Japan's finest flavors, crafted with
              passion by our master chefs using the freshest ingredients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="!pt-0">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="sticky top-24 z-30 mb-10 p-4 md:p-6 rounded-3xl glass-strong backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search dishes, ingredients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-primary text-white placeholder-gray focus:outline-none transition-colors duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-gray hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center justify-center gap-2 py-4 px-6 rounded-2xl glass text-white font-medium"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>

              <div className="flex items-center gap-3 md:w-auto w-full">
                <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 min-w-[130px]">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs text-gray">Cart</span>
                    <span className="text-sm font-semibold text-white">
                      {cartCount} • {formatCurrency(cartTotal)}
                    </span>
                  </div>
                </div>

                <a
                  href={getWhatsAppOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 md:flex-none inline-flex items-center justify-center rounded-2xl px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                    cartCount > 0
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-white/10 text-gray pointer-events-none"
                  }`}
                  aria-disabled={cartCount === 0}
                >
                  Order Now
                </a>
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              className={`mt-4 md:mt-5 ${showFilters ? "block" : "hidden md:block"}`}
            >
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                {menuCategories.map((cat, index) => {
                  const IconComp = iconMap[cat.icon];
                  return (
                    <motion.button
                      key={cat.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                        activeCategory === cat.id
                          ? "bg-primary text-white shadow-lg shadow-primary/30"
                          : "glass text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                      style={{ transitionDelay: `${index * 20}ms` }}
                    >
                      {IconComp && (
                        <IconComp className="w-4 h-4 md:w-5 md:h-5" />
                      )}
                      <span className="whitespace-nowrap">{cat.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredItems.map((item, index) => (
                  <FoodCard key={item.id} item={item} index={index} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full glass-strong flex items-center justify-center">
                  <Search className="w-12 h-12 text-gray" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-3">
                  No Dishes Found
                </h3>
                <p className="text-gray mb-8 max-w-md mx-auto">
                  We couldn't find any dishes matching your criteria. Try
                  adjusting your search or selecting a different category.
                </p>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 md:p-12 rounded-3xl glass-strong text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
                Can't Find What You're{" "}
                <span className="text-gradient">Craving?</span>
              </h3>
              <p className="text-gray max-w-2xl mx-auto mb-8">
                Our chefs love custom requests! Contact us for personalized menu
                recommendations, dietary accommodations, or special off-menu
                creations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="primary" size="lg" to="/reservation">
                  Make a Reservation
                </Button>
                <Button variant="outline" size="lg" to="/contact">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <Newsletter />
    </>
  );
};

export default Menu;
