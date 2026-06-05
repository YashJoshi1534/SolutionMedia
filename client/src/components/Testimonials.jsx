import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Founder, Bloom & Co",
    content: "The AI systems provided by GenArc Studio saved us 20+ hours a week on content production. It's like having a full-scale media team on autopilot.",
    avatar: "AR",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Marketing Director, Velox",
    content: "We were skeptical about AI avatars, but the quality is indistinguishable from reality. Our engagement rates jumped by 40% in the first month.",
    avatar: "SC",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "CEO, NexaTech",
    content: "Strategic, fast, and highly professional. They didn't just give us tools; they gave us a complete growth system that actually prints results.",
    avatar: "MT",
    rating: 5
  }
];



const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#050508] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9945FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        


        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-[#C084FC] uppercase mb-3">Testimonials</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">Clients Say</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-[#0D0D12]/80 backdrop-blur-xl rounded-3xl p-8 border border-white/[0.05] hover:border-[#9945FF]/30 transition-all duration-500 flex flex-col">
                <div className="flex items-center gap-1 mb-6 text-[#FBBF24]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-4 w-8 h-8 text-[#9945FF]/10" />
                  <p className="text-white/70 italic leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9945FF] to-[#C084FC] flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-xs text-white/40">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
