import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { faqItems } from '../../data/faq';
import { staggerContainer, fadeInUp } from '../../utils/motion';

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative section-padding">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container-custom relative">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Have a question? Check out our most commonly asked questions below or contact us directly."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl glass overflow-hidden"
            >
              <button
                onClick={() => toggle(item.id)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    openId === item.id ? 'bg-primary text-white' : 'bg-white/5 text-primary'
                  }`}>
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-white text-base md:text-lg">
                    {item.question}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    openId === item.id ? 'bg-accent text-background' : 'bg-white/5 text-white'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <p className="text-gray leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;
