import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Loader from '../components/common/Loader';
import BackToTop from '../components/common/BackToTop';
import FloatingWhatsApp from '../components/common/FloatingWhatsApp';
import FloatingReservation from '../components/common/FloatingReservation';
import Lightbox from '../components/common/Lightbox';
import ScrollProgress from '../components/common/ScrollProgress';
import CursorEffects from '../components/common/CursorEffects';
import FloatingSushiAnimation from '../components/common/FloatingSushiAnimation';
import { useApp } from '../context/AppContext';

const Layout = () => {
  const { isLoading } = useApp();
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-background text-white overflow-x-hidden">
      <ScrollProgress />
      <CursorEffects />
      <FloatingSushiAnimation />

      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <Navbar />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      <BackToTop />
      <FloatingWhatsApp />
      <FloatingReservation />
      <Lightbox />
    </div>
  );
};

export default Layout;
