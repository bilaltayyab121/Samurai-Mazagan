import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useIsMobile } from '../../hooks/useCustom';

const CursorEffects = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  const spotlightX = useSpring(mouseX, { damping: 50, stiffness: 100 });
  const spotlightY = useSpring(mouseY, { damping: 50, stiffness: 100 });

  const ringScale = useTransform(() => (isHovering ? 2.5 : 1));
  const ringOpacity = useTransform(() => (isHovering ? 0.8 : 1));

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleOver);
    };
  }, [mouseX, mouseY, isMobile, isVisible]);

  if (isMobile) return null;

  return (
    <>
      <div
        className="cursor-spotlight hidden lg:block"
        style={{
          '--mouse-x': `${spotlightX.get()}px`,
          '--mouse-y': `${spotlightY.get()}px`,
          opacity: isVisible ? 1 : 0
        }}
      />

      <motion.div
        className="mouse-follower hidden lg:block"
        style={{
          left: followerX,
          top: followerY,
          scale: ringScale,
          opacity: ringOpacity,
          backgroundColor: isHovering ? 'rgba(199, 28, 45, 0.2)' : 'transparent',
          borderColor: isHovering ? '#f4d03f' : '#c71c2d'
        }}
      />

      <motion.div
        className="fixed w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s'
        }}
      />
    </>
  );
};

export default CursorEffects;
