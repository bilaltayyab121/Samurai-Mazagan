import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-premium opacity-50" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              initial={{
                x: `${Math.random() * 100}%`,
                y: '100%',
                opacity: 0
              }}
              animate={{
                y: '-100%',
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'linear'
              }}
            />
          ))}
        </div>

        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/20"
              style={{ width: 120, height: 120, marginLeft: -60, marginTop: -60, left: '50%', top: '50%' }}
            />
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="animate-spin-slow"
              style={{ animationDuration: '3s' }}
            >
              <defs>
                <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c71c2d" />
                  <stop offset="50%" stopColor="#f4d03f" />
                  <stop offset="100%" stopColor="#c71c2d" />
                </linearGradient>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#loaderGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="200 150"
              />
            </svg>

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              <div className="text-5xl">
                <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </div>
            </motion.div>
          </div>

          <motion.h1
            className="font-playfair text-3xl md:text-4xl font-bold mb-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-gradient">Samurai</span>
            <span className="text-white"> Mazagan</span>
          </motion.h1>

          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {['. ', '. ', '.'].map((dot, i) => (
              <motion.span
                key={i}
                className="text-primary text-2xl font-bold"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                {dot}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            className="text-gray text-sm mt-4 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Preparing Your Experience
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
