import { cn } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const variants = {
  primary: 'bg-primary hover:bg-primary/90 text-white border-primary',
  secondary: 'bg-secondary hover:bg-secondary/80 text-white border-secondary',
  ghost: 'bg-transparent hover:bg-white/10 text-white border-white/20',
  outline: 'bg-transparent hover:bg-primary text-white border-primary hover:border-primary transition-colors',
  accent: 'bg-accent hover:bg-accent/90 text-background border-accent'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  to,
  scrollTo,
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const navigate = useNavigate();
  const [ripples, setRipples] = useState([]);

  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = Date.now();

    setRipples(prev => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  };

  const handleClick = (e) => {
    if (disabled) return;
    createRipple(e);
    if (onClick) onClick(e);
    if (to) navigate(to);
  };

  const baseClasses = cn(
    'relative overflow-hidden inline-flex items-center justify-center gap-2 font-medium rounded-full',
    'transition-all duration-300 ease-out transform active:scale-[0.98]',
    'border-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary/50',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size
          }}
        />
      ))}
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" onClick={createRipple}>
        {content}
      </a>
    );
  }

  if (scrollTo) {
    return (
      <ScrollLink
        to={scrollTo}
        smooth={true}
        duration={800}
        offset={-80}
        className={baseClasses}
        onClick={createRipple}
      >
        {content}
      </ScrollLink>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
