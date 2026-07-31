import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Lenis from 'lenis';
import { AppProvider } from './context/AppContext';
import { router } from './routes';

function App() {
  useEffect(() => {
    let lenisInstance = null;

    const initLenis = () => {
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      function raf(time) {
        lenisInstance?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    };

    const timer = setTimeout(initLenis, 2500);

    return () => {
      clearTimeout(timer);
      lenisInstance?.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <AppProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: 'rgba(40, 40, 40, 0.95)',
              color: '#ffffff',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '16px 20px',
            },
            success: {
              iconTheme: {
                primary: '#f4d03f',
                secondary: '#0d0d0d'
              }
            },
            error: {
              iconTheme: {
                primary: '#c71c2d',
                secondary: '#0d0d0d'
              }
            }
          }}
        />
        <RouterProvider router={router} />
      </AppProvider>
    </HelmetProvider>
  );
}

export default App;
