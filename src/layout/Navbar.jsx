import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Calendar,
  ShoppingCart,
  Minus,
  Plus,
  Trash2,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { restaurantData, actions } from "../data/restaurant";
import { useApp } from "../context/AppContext";
import { formatCurrency } from "../utils/helpers";

const navLinks = [
  { name: 'Home', path: '/', scroll: 'home' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reservation', path: '/reservation' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    decreaseCartItem,
    removeCartItem,
    clearCart,
    getWhatsAppOrderLink,
  } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setIsCartOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || isCartOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isCartOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  const openCart = () => {
    setMobileMenuOpen(false);
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleNavClick = (link) => {
    closeMobileMenu();
    if (isHomePage && link.scroll) {
      const element = document.getElementById(link.scroll);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    navigate(link.path);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-strong py-3 shadow-2xl border-b border-white/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={closeMobileMenu}
          >
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:rotate-180 transition-transform duration-700" />
              <div className="absolute inset-[2px] rounded-[10px] bg-background flex items-center justify-center">
                <span className="font-playfair text-2xl font-bold text-gradient">
                  侍
                </span>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-playfair text-xl md:text-2xl font-bold text-white group-hover:text-gradient transition-all duration-300">
                Samurai
              </span>
              <span className="text-xs text-gray tracking-widest uppercase">
                Mazagan
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  <motion.span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full ${
                      isActive
                        ? "bg-primary w-8"
                        : "bg-accent w-0 group-hover:w-8"
                    }`}
                    layoutId="navUnderline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openCart}
              className="relative w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href={actions.phone}
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-300"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4 text-primary" />
            </a>
            <button
              onClick={() => navigate("/reservation")}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-accent hover:text-background transition-all duration-300 shadow-lg hover:shadow-primary/30"
            >
              <Calendar className="w-4 h-4" />
              Reserve
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-2 ml-auto">
            <button
              onClick={openCart}
              className="relative z-[80] w-12 h-12 rounded-full glass flex items-center justify-center text-white"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative z-[80] w-12 h-12 rounded-full glass flex items-center justify-center text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <>
        <motion.div
          animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 bg-background/80 backdrop-blur-md z-[60] lg:hidden ${
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onClick={closeMobileMenu}
        />

        <motion.div
          animate={{ x: mobileMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className={`fixed top-0 right-0 h-full w-[85%] max-w-sm glass-strong border-l border-white/10 z-[70] lg:hidden flex flex-col ${
            mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-playfair text-lg font-bold text-background">
                  侍
                </span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-white">
                  Samurai Mazagan
                </h3>
                <p className="text-xs text-gray">Japanese Restaurant</p>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeMobileMenu();
              }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <nav className="space-y-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.06 }}
                    onClick={() => handleNavClick(link)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? "bg-primary/20 text-white border border-primary/30"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="font-medium">{link.name}</span>
                    <span
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "translate-x-0 text-primary"
                          : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </motion.button>
                );
              })}
            </nav>
          </div>

          <div className="p-6 border-t border-white/10 space-y-3">
            <a
              href={actions.phone}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl glass text-white font-medium"
            >
              <Phone className="w-5 h-5 text-primary" />
              {restaurantData.contact.phone}
            </a>
            <button
              onClick={() => {
                closeMobileMenu();
                navigate("/reservation");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-accent hover:text-background transition-colors duration-300"
            >
              <Calendar className="w-5 h-5" />
              Reserve Your Table
            </button>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: isCartOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 bg-background/80 backdrop-blur-md z-[80] ${
            isCartOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onClick={closeCart}
        />

        <motion.aside
          animate={{ x: isCartOpen ? 0 : "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          className={`fixed top-0 right-0 h-full w-[92%] max-w-md glass-strong border-l border-white/10 z-[90] flex flex-col ${
            isCartOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white">
                Your Cart
              </h3>
              <p className="text-sm text-gray">{cartCount} item(s)</p>
            </div>
            <button
              onClick={closeCart}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-3">
            {cartItems.length === 0 ? (
              <div className="h-full min-h-[220px] flex flex-col items-center justify-center text-center">
                <ShoppingCart className="w-12 h-12 text-gray mb-3" />
                <p className="text-white font-medium mb-1">
                  Your cart is empty
                </p>
                <p className="text-sm text-gray">
                  Add dishes from the menu to place an order.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center gap-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray">
                      {formatCurrency(item.price)} each
                    </p>
                    <p className="text-sm text-primary font-semibold">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeCartItem(item.id)}
                      className="text-gray hover:text-red-400 transition-colors"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseCartItem(item.id)}
                        className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                        aria-label={`Decrease ${item.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-white text-sm font-semibold min-w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-7 h-7 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-white"
                        aria-label={`Increase ${item.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="p-5 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray">Total</span>
              <span className="text-white text-xl font-bold">
                {formatCurrency(cartTotal)}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                disabled={!cartItems.length}
                className="flex-1 py-3 rounded-xl glass text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear
              </button>
              <a
                href={getWhatsAppOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-3 rounded-xl text-center font-semibold transition-colors ${
                  cartItems.length
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-white/10 text-gray pointer-events-none"
                }`}
                aria-disabled={!cartItems.length}
              >
                Order Now
              </a>
            </div>
          </div>
        </motion.aside>
      </>
    </>
  );
};

export default Navbar;
