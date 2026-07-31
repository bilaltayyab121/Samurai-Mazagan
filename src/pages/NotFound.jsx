import { motion } from 'framer-motion';
import { Home as HomeIcon, MapPin, AlertTriangle } from 'lucide-react';
import Button from '../components/common/Button';
import SEO from '../utils/SEO';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The page you are looking for doesn't exist. Return to Samurai Mazagan's homepage."
      />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-premium" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-primary/20 flex items-center justify-center">
                <AlertTriangle className="w-12 h-12 text-primary" />
              </div>

              <motion.h1
                className="text-[120px] md:text-[200px] font-playfair font-bold leading-none mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-gradient">404</span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4"
              >
                Page <span className="text-gradient">Not Found</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray text-lg md:text-xl mb-10 leading-relaxed"
              >
                Oops! The page you're looking for seems to have wandered off into the culinary void.
                Let's get you back to enjoying the finest Japanese cuisine in El Jadida.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            >
              <Button
                size="lg"
                variant="primary"
                icon={<HomeIcon className="w-5 h-5" />}
                onClick={() => navigate('/')}
              >
                Back to Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                icon={<MapPin className="w-5 h-5" />}
                onClick={() => navigate('/menu')}
              >
                Explore Menu
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'Reservation', path: '/reservation' },
                { name: 'Contact', path: '/contact' }
              ].map((item, i) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(item.path)}
                  className="p-4 md:p-5 rounded-2xl glass hover:bg-white/10 transition-colors duration-300 text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-white font-semibold text-sm md:text-base">{item.name}</div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
