import { useApp } from '../../context/AppContext';

const ScrollProgress = () => {
  const { scrollProgress } = useApp();

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ScrollProgress;
