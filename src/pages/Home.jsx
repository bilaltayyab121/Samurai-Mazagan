import SEO from '../utils/SEO';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Features from '../components/home/Features';
import PopularDishes from '../components/home/PopularDishes';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Reviews from '../components/home/Reviews';
import GalleryPreview from '../components/home/GalleryPreview';
import OpeningHours from '../components/home/OpeningHours';
import ReservationCTA from '../components/home/ReservationCTA';
import Newsletter from '../components/common/Newsletter';
import FAQAccordion from '../components/common/FAQAccordion';

const Home = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Samurai Mazagan - Authentic Japanese Hot Pot & Sushi Restaurant in El Jadida, Morocco. Experience premium Japanese cuisine, rooftop dining, and live music."
        keywords="Japanese restaurant El Jadida, Hot Pot Morocco, Sushi El Jadida, Samurai Mazagan, Asian dining, rooftop restaurant El Jadida"
      />

      <Hero />
      <About />
      <Features />
      <PopularDishes />
      <WhyChooseUs />
      <Reviews />
      <GalleryPreview />
      <OpeningHours />
      <FAQAccordion />
      <Newsletter />
      <ReservationCTA />
    </>
  );
};

export default Home;
