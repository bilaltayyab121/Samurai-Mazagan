import { useState, useRef } from 'react';
import SEO from '../utils/SEO';
import Breadcrumb from '../components/common/Breadcrumb';
import SectionHeading from '../components/common/SectionHeading';
import SectionWrapper from '../components/common/SectionWrapper';
import Newsletter from '../components/common/Newsletter';
import Button from '../components/common/Button';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../utils/motion';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import {
  MapPin, Phone, Mail, Clock,
  Instagram, Facebook, MessageCircle,
  Send, User, AtSign, Headphones, FileText,
  CheckCircle2
} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { submitContactForm } from '../services/api';
import { restaurantData, actions } from '../data/restaurant';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const mapRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await submitContactForm(data);
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      primary: restaurantData.address.full,
      secondary: 'Av. Bir Anzarane, El Jadida',
      color: 'text-primary',
      bg: 'bg-primary/10',
      action: `https://www.google.com/maps/search/?api=1&query=${restaurantData.address.coordinates.lat},${restaurantData.address.coordinates.lng}`
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: restaurantData.contact.phone,
      secondary: `Landline: ${restaurantData.contact.landline}`,
      color: 'text-accent',
      bg: 'bg-accent/10',
      action: actions.phone
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: restaurantData.contact.whatsapp,
      secondary: 'Quick chat support',
      color: 'text-green-400',
      bg: 'bg-green-400/10',
      action: actions.whatsapp
    },
    {
      icon: Mail,
      title: 'Email Us',
      primary: restaurantData.contact.email,
      secondary: 'Response within 24 hours',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
      action: actions.email
    },
    {
      icon: Clock,
      title: 'Working Hours',
      primary: 'Every Day: 12 PM - 12 AM',
      secondary: 'Rooftop: 5 PM onwards',
      color: 'text-purple-400',
      bg: 'bg-purple-400/10'
    },
    {
      icon: Headphones,
      title: 'Support',
      primary: '7 days a week',
      secondary: 'We are here to help you',
      color: 'text-pink-400',
      bg: 'bg-pink-400/10'
    }
  ];

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Samurai Mazagan. Find our address, phone number, email, and map location in El Jadida, Morocco. Send us a message through our contact form."
        keywords="contact Samurai Mazagan, restaurant El Jadida address, Japanese restaurant phone, restaurant contact form Morocco"
      />

      <Breadcrumb />

      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Japanese%20restaurant%20exterior%20night%20neon%20sign%20entrance%20warm%20welcoming%20lighting&image_size=landscape_16_9"
            alt="Contact banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container-custom relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-primary tracking-[0.4em] uppercase text-sm font-medium">Get In Touch</span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-[1.05]"
            >
              <span className="text-white">Contact</span>{' '}
              <span className="text-gradient">Us</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray leading-relaxed max-w-2xl mx-auto"
            >
              We'd love to hear from you! Whether it's a question, feedback, or special request,
              our team is always ready to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper className="!pt-0">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                variants={fadeInUp}
                transition={{ delay: i * 0.06 }}
                href={info.action || '#'}
                target={info.action ? '_blank' : undefined}
                rel={info.action ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -6 }}
                className={`p-6 rounded-2xl glass card-hover group ${
                  info.action ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl ${info.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className={`w-7 h-7 ${info.color}`} />
                </div>
                <h3 className="text-xl font-playfair font-bold text-white mb-1">{info.title}</h3>
                <p className="text-white/80 text-sm font-medium mb-1 break-all">{info.primary}</p>
                <p className="text-gray text-xs">{info.secondary}</p>
              </motion.a>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={fadeInLeft} className="relative order-2 lg:order-1">
              <div className="h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl glass-strong border border-white/10 relative z-10">
                <MapContainer
                  ref={mapRef}
                  center={[restaurantData.address.coordinates.lat, restaurantData.address.coordinates.lng]}
                  zoom={16}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%', borderRadius: 'inherit' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[restaurantData.address.coordinates.lat, restaurantData.address.coordinates.lng]}
                    icon={customIcon}
                  >
                    <Popup>
                      <div className="text-center p-2">
                        <strong className="text-primary block">{restaurantData.name}</strong>
                        <span className="text-xs text-gray-600 block">{restaurantData.address.full}</span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              <div className="absolute -bottom-4 -right-4 p-5 rounded-2xl glass-strong shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray">Located in</div>
                    <div className="font-bold text-white">{restaurantData.address.city}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-3">
                <p className="text-gray text-sm">Follow us:</p>
                {[
                  { icon: Instagram, href: restaurantData.social.instagram, color: 'hover:from-pink-500 hover:to-purple-600' },
                  { icon: Facebook, href: restaurantData.social.facebook, color: 'hover:bg-blue-600' },
                  { icon: MessageCircle, href: actions.whatsapp, color: 'hover:bg-green-500' }
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-xl glass flex items-center justify-center text-white transition-all duration-300 hover:scale-110 bg-gradient-to-br ${s.color}`}
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInRight} className="order-1 lg:order-2">
              <div className="p-6 md:p-10 rounded-3xl glass-strong h-full">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                    Send Message
                  </span>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                    Let's Start a <span className="text-gradient">Conversation</span>
                  </h2>
                  <p className="text-gray">
                    Have questions or feedback? We respond to every message personally.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CheckCircle2 className="w-12 h-12 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-gray mb-6">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button variant="primary" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                          <User className="w-4 h-4 text-primary" />
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                            errors.name ? 'border-red-500' : 'border-white/10 focus:border-primary'
                          } text-white placeholder-gray focus:outline-none transition-colors duration-300`}
                          {...register('name', { required: 'Name is required', minLength: 2 })}
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message || 'Required'}</p>}
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                          <AtSign className="w-4 h-4 text-primary" />
                          Your Email *
                        </label>
                        <input
                          type="email"
                          placeholder="john@example.com"
                          className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                            errors.email ? 'border-red-500' : 'border-white/10 focus:border-primary'
                          } text-white placeholder-gray focus:outline-none transition-colors duration-300`}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email'
                            }
                          })}
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message || 'Required'}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <Phone className="w-4 h-4 text-primary" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+212 6XX XXX XXX"
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border-2 border-white/10 focus:border-primary text-white placeholder-gray focus:outline-none transition-colors duration-300"
                        {...register('phone')}
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <FileText className="w-4 h-4 text-primary" />
                        Subject *
                      </label>
                      <input
                        type="text"
                        placeholder="How can we help you?"
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                          errors.subject ? 'border-red-500' : 'border-white/10 focus:border-primary'
                        } text-white placeholder-gray focus:outline-none transition-colors duration-300`}
                        {...register('subject', { required: 'Subject is required' })}
                      />
                      {errors.subject && <p className="text-red-400 text-sm mt-1">Required</p>}
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                        <Send className="w-4 h-4 text-primary" />
                        Your Message *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your inquiry..."
                        className={`w-full px-5 py-4 rounded-2xl bg-white/5 border-2 ${
                          errors.message ? 'border-red-500' : 'border-white/10 focus:border-primary'
                        } text-white placeholder-gray focus:outline-none transition-colors duration-300 resize-none`}
                        {...register('message', { required: 'Message is required', minLength: 10 })}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.message.type === 'minLength' ? 'Min 10 characters' : 'Required'}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 rounded-2xl bg-primary text-white text-lg font-semibold hover:bg-accent hover:text-background transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-accent/30 disabled:opacity-70 group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      <Newsletter />
    </>
  );
};

export default Contact;
