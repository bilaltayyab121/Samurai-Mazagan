import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useCustom';

const FloatingSushiAnimation = () => {
  const isMobile = useIsMobile();
  if (isMobile) return null;

  const sushiEmojis = ['🍣', '🍱', '🍙', '🍤', '🥢'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 hidden xl:block">
      {sushiEmojis.map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-10"
          initial={{
            x: `${10 + i * 20}%`,
            y: '100vh',
            rotate: 0
          }}
          animate={{
            y: '-10vh',
            rotate: 360,
            x: [`${10 + i * 20}%`, `${5 + i * 22}%`, `${15 + i * 18}%`]
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 4
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingSushiAnimation;
