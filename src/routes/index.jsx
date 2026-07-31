import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Menu = lazy(() => import('../pages/Menu'));
const Gallery = lazy(() => import('../pages/Gallery'));
const Reservation = lazy(() => import('../pages/Reservation'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const SuspenseFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-6 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      <p className="text-gray">Loading...</p>
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<SuspenseFallback />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'menu', element: <Menu /> },
      { path: 'gallery', element: <Gallery /> },
      { path: 'reservation', element: <Reservation /> },
      { path: 'contact', element: <Contact /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" replace /> }
    ]
  }
]);

export default router;
