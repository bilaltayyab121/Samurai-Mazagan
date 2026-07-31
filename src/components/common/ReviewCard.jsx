import { motion } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';
import { fadeInUp } from '../../utils/motion';
import { formatDate } from '../../utils/helpers';

const ReviewCard = ({ review, index = 0 }) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      className="relative h-full p-8 rounded-3xl glass card-hover"
    >
      <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < review.rating ? 'text-accent fill-accent' : 'text-white/20'}`}
          />
        ))}
      </div>

      <p className="text-white/80 text-base leading-relaxed mb-6 italic relative z-10">
        &ldquo;{review.review}&rdquo;
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <div className="relative">
          {review.image ? (
            <img
              src={review.image}
              alt={review.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
              loading="lazy"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/50">
              <User className="w-7 h-7 text-primary" />
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-white">{review.name}</h4>
          <div className="flex items-center gap-2">
            <span className="text-primary text-sm">{review.role}</span>
            <span className="text-gray text-xs">•</span>
            <span className="text-gray text-xs">{formatDate(review.date)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
