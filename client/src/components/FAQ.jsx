import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: "Who is this for?",
    answer: "Our systems are tailored to your brand. If you’re an entrepreneur, D2C brand, media business, funded startup or a podcast, we adapt and produce content best suited to your process and flexibility."
  },
  {
    id: 2,
    question: "What kind of creative work can you create with AI?",
    answer: "We create product visuals, full AI-powered Meta ad creatives, social media assets, campaign content, and AI-driven workflows. As well as many other types of brand visuals tailored to your brand."
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer: "Project timelines depend on the scope, but most projects move from strategy to first results within one week."
  },
  {
    id: 4,
    question: "Will I also be involved in the design process?",
    answer: "Absolutely! We believe in collaborative creation. You'll be involved at every stage of the design process, from initial concept development to final delivery. Your feedback and vision are integral to our creative process."
  }
];

const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/5 last:border-none">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left gap-6 group"
      >
        <span className="text-base md:text-lg font-bold text-white group-hover:text-[#C084FC] transition-colors duration-300">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0 w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] group-hover:bg-[#9945FF]/10 group-hover:border-[#9945FF]/20 flex items-center justify-center transition-all duration-300"
        >
          <ChevronDown className="w-4 h-4 text-white/50 group-hover:text-[#C084FC] transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 text-sm md:text-base leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-32 bg-[#08080D] relative overflow-hidden border-t border-white/[0.03]">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#9945FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#BE2F7B]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xs font-bold tracking-widest text-[#C084FC] uppercase mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#9945FF] animate-pulse" />
              Common Questions
            </h2>
            <h3 className="text-4xl lg:text-5xl font-black text-white">
              Frequently Asked <span className="bg-gradient-to-r from-[#9945FF] via-[#C084FC] to-[#BE2F7B] bg-clip-text text-transparent">FAQs</span>
            </h3>
          </motion.div>
        </div>

        {/* Collapsible Accordion Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#12121A]/20 border border-white/[0.03] px-8 py-4 rounded-3xl shadow-xl backdrop-blur-sm"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => handleToggle(item.id)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
