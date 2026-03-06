import React from 'react';
import { PhoneCall, Cog, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <PhoneCall className="w-8 h-8 text-primary-bg" />,
      title: 'Strategy Call',
      description: 'We understand your business, audience, and goals. Then we create a custom content plan for Personal Branding & Product Promotion. We set clear direction before we build anything.',
    },
    {
      id: 2,
      icon: <Cog className="w-8 h-8 text-primary-bg" />,
      title: 'Build Your AI Avatar System',
      description: 'This is where we set everything up for you. Deep-dive onboarding, tool & system setup. Your AI Identity (Avatar, Voice Clone). AI Ad Creatives for products. One-time setup. Your digital AI system is ready to work 24/7.',
    },
    {
      id: 3,
      icon: <Rocket className="w-8 h-8 text-primary-bg" />,
      title: 'Launching — It’s On Us',
      description: 'Once your system is ready, we handle everything monthly. 12–15 ready-to-post videos, world-class edits, script & content ideation, posting support, and growth reports. You stay focused on your business.',
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-secondary-bg/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-accent-orange uppercase mb-3">How Our AI Brand System Works</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-dark-green mb-6 leading-tight">
            3 Simple Steps. <br className="hidden sm:block"/>
            <span className="text-dark-green/60">No Daily Shooting.</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-secondary-bg"></div>

          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index} 
              className="relative bg-primary-bg rounded-3xl p-8 shadow-sm border border-secondary-bg/50 hover:shadow-xl transition-shadow group"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-dark-green flex justify-center items-center shadow-lg group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="mt-12 text-center">
                <span className="text-xs font-bold text-accent-orange uppercase tracking-wider mb-2 block">Step {step.id}</span>
                <h4 className="text-2xl font-bold text-dark-green mb-4">{step.title}</h4>
                <p className="text-dark-green/70 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
