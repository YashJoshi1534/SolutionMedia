import React from 'react';
import { motion } from 'framer-motion';
import { User, Video, Globe } from 'lucide-react';

const services = [
  {
    icon: User,
    title: 'AI Avatars',
    description: 'High-end digital twins for content automation and personalized brand representation.',
    gradient: 'from-[#9945FF] to-[#7B2FBE]'
  },
  {
    icon: Video,
    title: 'AI Ads',
    description: 'Narrative-driven, cinematic visual experiences designed for high conversion and viral impact.',
    gradient: 'from-[#C084FC] to-[#9945FF]'
  },
  {
    icon: Globe,
    title: 'Website & Landing Page',
    description: 'High-conversion digital destinations that turn visitors into loyal customers.',
    gradient: 'from-[#BE2F7B] to-[#8E1D5A]'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0A0A0F] relative overflow-hidden text-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#9945FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#BE2F7B]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#C084FC] uppercase mb-3">Our Offerings</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">Services</span>
            </h3>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              We leverage cutting-edge AI technology to scale your brand influence and drive measurable growth.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-[#12121A]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/[0.05] hover:border-[#9945FF]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(153,69,255,0.1)]">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg shadow-[#9945FF]/20 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-[#C084FC] transition-colors">{service.title}</h4>
                <p className="text-white/50 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
