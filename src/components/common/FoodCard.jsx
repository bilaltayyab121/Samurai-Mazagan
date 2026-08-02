import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { cn, formatCurrency } from '../../utils/helpers';
import { fadeInUp } from '../../utils/motion';
import { Flame, Leaf, Plus, Minus, ShoppingBag } from "lucide-react";
import { useApp } from "../../context/AppContext";

const FoodCard = ({ item, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart, decreaseCartItem, getItemQuantity } = useApp();
  const quantity = getItemQuantity(item.id);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden glass card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

        <div className="absolute top-4 left-4 flex gap-2">
          {item.popular && (
            <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
              Popular
            </span>
          )}
          {item.spicy && (
            <span className="px-3 py-1 rounded-full bg-orange-500/90 text-white text-xs font-semibold flex items-center gap-1">
              <Flame className="w-3 h-3" /> Spicy
            </span>
          )}
          {item.vegan && (
            <span className="px-3 py-1 rounded-full bg-green-600/90 text-white text-xs font-semibold flex items-center gap-1">
              <Leaf className="w-3 h-3" /> Vegan
            </span>
          )}
        </div>

        <div className="absolute bottom-4 right-4">
          <div className="px-4 py-2 rounded-full bg-accent text-background font-bold text-lg glass-strong">
            {formatCurrency(item.price)}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-playfair font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">
              {item.name}
            </h3>
            {item.prepTime && (
              <span className="text-gray text-xs">{item.prepTime}</span>
            )}
          </div>
        </div>
        <p className="text-gray text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>

        <div className="mt-5">
          {quantity > 0 ? (
            <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <button
                type="button"
                onClick={() => decreaseCartItem(item.id)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                aria-label={`Decrease ${item.name}`}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-white font-semibold">
                {quantity} in cart
              </span>
              <button
                type="button"
                onClick={() => addToCart(item)}
                className="w-9 h-9 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center text-white"
                aria-label={`Increase ${item.name}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => addToCart(item)}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium py-2.5 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 border-2 border-primary/0 rounded-2xl pointer-events-none"
        animate={{
          borderColor: isHovered
            ? "rgba(199, 28, 45, 0.5)"
            : "rgba(199, 28, 45, 0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FoodCard;
