import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import SectionWrapper from '../common/SectionWrapper';
import { reviews } from '../../data/reviews';
import { restaurantData } from '../../data/restaurant';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Reviews = () => {
  return (
    <SectionWrapper id="reviews">
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Customer Reviews"
          subtitle="Don't just take our word for it. Hear what our valued guests have to say about their experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Quote className="absolute -top-6 -left-4 md:left-0 w-20 h-20 text-primary/10 md:w-32 md:h-32" />

          <Swiper
            modules={[Navigation, Pagination, Autoplay, Parallax]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            loop
            className="!pb-16"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto !flex">
                <div className="h-full w-full p-8 rounded-3xl glass card-hover flex flex-col">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "text-accent fill-accent" : "text-white/20"}`}
                      />
                    ))}
                  </div>

                  <p className="text-white/80 text-base leading-relaxed mb-6 flex-grow italic">
                    &ldquo;{review.review}&rdquo;
                  </p>

                  {review.sourceUrl && (
                    <a
                      href={review.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-4 inline-flex text-xs text-primary hover:text-accent transition-colors"
                    >
                      View on Google Maps
                    </a>
                  )}

                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-white">
                        {review.name}
                      </h4>
                      <span className="text-primary text-sm">
                        {review.role}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Reviews;
