import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useApp } from '../context/AppContext';
import { restaurantData, actions } from '../data/restaurant';
import { useIsScrolled } from '../hooks/useCustom';

const navLinks = [
  { name: 'Home', path: '/', scroll: 'home' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reservation', path: '/reservation' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { mobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } = useApp();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setMobileMenuOpen(false);
    if (isHomePage && link.scroll) {
      const element = document.getElementById(link.scroll);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    navigate(link.path);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-strong py-3 shadow-2xl border-b border-white/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:rotate-180 transition-transform duration-700" />
              <div className="absolute inset-[2px] rounded-[10px] bg-background flex items-center justify-center">
                <span className="font-playfair text-2xl font-bold text-gradient">侍</span>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-playfair text-xl md:text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                Samurai
              </span>
              <span className="text-xs text-gray tracking-widest uppercase">Mazagan</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  <motion.span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full ${
                      isActive ? 'bg-primary w-8' : 'bg-accent w-0 group-hover:w-8'
                    }`}
                    layoutId="navUnderline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={actions.phone}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white hover:bg-white/10 transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span className="hidden xl:inline">{restaurantData.contact.phone}</span>
            </a>
            <button
              onClick={() => navigate('/reservation')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-accent hover:text-background transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              <Calendar className="w-4 h-4" />
              Reserve
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-12 h-12 rounded-full glass flex items-center justify-center text-white"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm glass-strong border-l border-white/10 z-50 lg:hidden flex flex-col"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="font-playfair text-lg font-bold text-background">侍</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-white">Samurai Mazagan</h3>
                    <p className="text-xs text-gray">Japanese Restaurant</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-6 overflow-y-auto">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.button
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.06 }}
                        onClick={() => handleNavClick(link)}
                        className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                          isActive
                            ? 'bg-primary/20 text-white border border-primary/30'
                            : 'text-white/80 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="font-medium">{link.name}</span>
                        <span className={`transition-transform duration-300 ${
                          isActive ? 'translate-x-0 text-primary' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }`}>
                          →
                        </span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>

              <div className="p-6 border-t border-white/10 space-y-3">
                <a
                  href={actions.phone}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl glass text-white font-medium"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  {restaurantData.contact.phone}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/reservation');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-accent hover:text-background transition-colors duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Reserve Your Table
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
