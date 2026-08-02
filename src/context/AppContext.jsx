import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { restaurantData } from "../data/restaurant";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("samurai-cart");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setCartItems(parsed);
      }
    } catch {
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("samurai-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const openLightbox = useCallback((image) => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    document.body.style.overflow = '';
  }, []);

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const existing = prev.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        );
      }

      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image,
          quantity: 1,
        },
      ];
    });
  }, []);

  const decreaseCartItem = useCallback((itemId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeCartItem = useCallback((itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const getItemQuantity = useCallback(
    (itemId) => cartItems.find((item) => item.id === itemId)?.quantity || 0,
    [cartItems],
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const getWhatsAppOrderLink = useCallback(() => {
    const phone = restaurantData.contact.whatsapp.replace(/[^\d]/g, "");

    if (!cartItems.length) {
      const emptyMessage = encodeURIComponent(
        `Hello ${restaurantData.name}, I want to place an order.`,
      );
      return `https://wa.me/${phone}?text=${emptyMessage}`;
    }

    const lines = cartItems.map((item, index) => {
      const lineTotal = item.price * item.quantity;
      return `${index + 1}. ${item.name} x${item.quantity} - ${lineTotal} MAD`;
    });

    const message = [
      `Hello ${restaurantData.name},`,
      "I would like to order:",
      "",
      ...lines,
      "",
      `Total: ${cartTotal} MAD`,
    ].join("\n");

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }, [cartItems, cartTotal]);

  const value = {
    isLoading,
    setIsLoading,
    activeSection,
    setActiveSection,
    scrollProgress,
    mousePosition,
    lightboxImage,
    openLightbox,
    closeLightbox,
    isScrolled,
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    decreaseCartItem,
    removeCartItem,
    clearCart,
    getItemQuantity,
    getWhatsAppOrderLink,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
