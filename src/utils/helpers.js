import clsx from 'clsx';

export { clsx as cn };

export const formatCurrency = (amount, currency = 'MAD') => {
  return new Intl.NumberFormat('en-MA', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export const formatPhone = (phone) => {
  return phone.replace(/(\d{2})(?=\d)/g, '$1 ');
};

export const formatDate = (date, options = {}) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  });
};

export const getDayName = (index) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return days[index];
};

export const formatTimeSlot = (hour, minute = 0) => {
  const h = hour % 12 || 12;
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const m = minute.toString().padStart(2, '0');
  return `${h}:${m} ${ampm}`;
};

export const generateTimeSlots = (startHour = 12, endHour = 24, interval = 30) => {
  const slots = [];
  for (let h = startHour; h < endHour; h++) {
    for (let m = 0; m < 60; m += interval) {
      slots.push(formatTimeSlot(h, m));
    }
  }
  return slots;
};

export const getInitials = (name) => {
  return name
    .split(' ')
    .map(n => n[0])
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .join('')
    .toUpperCase();
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export const lerp = (a, b, n) => (1 - n) * a + n * b;
