import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeInUp } from '../../utils/motion';
import { subscribeNewsletter } from '../../services/api';
import SectionHeading from './SectionHeading';

const Newsletter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await subscribeNewsletter(data.email);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative container-custom"
      >
        <div className="max-w-4xl mx-auto rounded-3xl glass-strong p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full text-primary/10 fill-current">
              <path d="M50 0L100 50L50 100L0 50z" />
            </svg>
          </div>

          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
              <Mail className="w-10 h-10 text-primary" />
            </div>
          </motion.div>

          <SectionHeading
            eyebrow="Stay Connected"
            title="Join Our Newsletter"
            subtitle="Be the first to know about exclusive offers, new menu items, and special events at Samurai Mazagan."
          />

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto"
          >
            <div className="relative flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={`w-full pl-14 pr-5 py-4 rounded-full bg-white/5 border-2 ${
                    errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary'
                  } text-white placeholder-gray focus:outline-none transition-colors duration-300`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-primary hover:bg-accent text-white hover:text-background'
                } disabled:opacity-70 disabled:cursor-not-allowed min-w-[180px]`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
            {errors.email && (
              <p className="text-red-400 text-sm mt-2 text-left sm:text-center">{errors.email.message}</p>
            )}
          </motion.form>

          <motion.p
            variants={fadeInUp}
            className="text-gray text-sm mt-6"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
