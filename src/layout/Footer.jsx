import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock,
  Instagram, Facebook, MessageCircle,
  ChevronRight, UtensilsCrossed
} from 'lucide-react';
import { restaurantData, actions } from '../data/restaurant';
import { staggerContainer, fadeInUp } from '../utils/motion';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reservation', path: '/reservation' },
  { name: 'Contact', path: '/contact' }
];

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative pt-20 pb-8 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 bg-gradient-premium opacity-70" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-accent group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-[2px] rounded-[10px] bg-background flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-gradient">
                    侍
                  </span>
                </div>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white">
                  Samurai Mazagan
                </h3>
                <p className="text-sm text-gray">Authentic Japanese Cuisine</p>
              </div>
            </Link>

            <p className="text-gray text-sm leading-relaxed mb-6">
              {restaurantData.description}
            </p>

            <div className="flex gap-3">
              {[
                {
                  icon: Instagram,
                  href: restaurantData.social.instagram,
                  color: "hover:from-pink-500 hover:to-purple-600",
                },
                {
                  icon: Facebook,
                  href: restaurantData.social.facebook,
                  color: "hover:bg-blue-600",
                },
                {
                  icon: MessageCircle,
                  href: restaurantData.social.whatsapp,
                  color: "hover:bg-green-500",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:scale-110 bg-gradient-to-br ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="font-playfair text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray hover:text-primary transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="font-playfair text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-primary" />
              Opening Hours
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Every Day</span>
              </div>
              <div className="ml-7 p-4 rounded-xl glass">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Mon - Thu</span>
                  <span className="text-accent font-semibold">
                    12 PM - 12 AM
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80">Fri - Sat</span>
                  <span className="text-primary font-semibold">
                    12 PM - 12 AM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Sunday</span>
                  <span className="text-accent font-semibold">
                    12 PM - 12 AM
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray/70 italic ml-7">
                *Rooftop opens 5 PM daily, weather permitting
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="font-playfair text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 rounded-full bg-primary" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 font-medium">Address</p>
                  <p className="text-gray text-sm">
                    {restaurantData.address.full}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 font-medium">Phone</p>
                  <a
                    href={actions.phone}
                    className="text-gray text-sm hover:text-primary transition-colors"
                  >
                    {restaurantData.contact.phone}
                  </a>
                  <br />
                  <a
                    href={`tel:${restaurantData.contact.landline}`}
                    className="text-gray text-sm hover:text-primary transition-colors"
                  >
                    {restaurantData.contact.landline}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-white/80 font-medium">Email</p>
                  <a
                    href={actions.email}
                    className="text-gray text-sm hover:text-primary transition-colors break-all"
                  >
                    {restaurantData.contact.email}
                  </a>
                </div>
              </li>
            </ul>

            <button
              onClick={() => navigate("/reservation")}
              className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-accent hover:text-background transition-all duration-300 group"
            >
              <UtensilsCrossed className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Book a Table
            </button>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray text-sm text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-white font-semibold">Samurai Mazagan</span>.
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
