import React from 'react';
import { Film, Share2, Sparkles, Tv, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const expertiseItems = [
  {
    id: "01",
    icon: Film,
    title: "POST Production",
    description: "High-end editing, color grading, sound design, and VFX that transform raw footage into cinematic masterpieces.",
    tag: "Cinematic Editing"
  },
  {
    id: "02",
    icon: Share2,
    title: "Content Marketing",
    description: "Data-driven organic reach strategies, scriptwriting, and scheduling to build hyper-engaged digital communities.",
    tag: "Organic Growth"
  },
  {
    id: "03",
    icon: Sparkles,
    title: "AI Avatar System",
    description: "Custom-trained photorealistic digital twins and cloned voices that produce unlimited content on demand.",
    tag: "Automation"
  },
  {
    id: "04",
    icon: Tv,
    title: "AI-Driven Film & Series Production",
    description: "Revolutionary text-to-video pre-production, AI upscaling, and next-generation storytelling pipelines.",
    tag: "Next-Gen Media"
  },
  {
    id: "05",
    icon: Target,
    title: "AI Powered Brand Campaigns & Ads",
    description: "High-impact visual ads, copy generation, and target-audience optimization for maximum conversion.",
    tag: "High ROI"
  }
];

const ExpertiseCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-[#12121A]/30 border border-white/[0.04] hover:bg-[#12121A]/60 hover:border-[#9945FF]/30 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[0_20px_40px_rgba(153,69,255,0.05)]"
    >
      {/* Decorative inner gradient line */}
      <div className="absolute top-0 left-0 w-1.5 h-0 bg-gradient-to-b from-[#9945FF] to-[#BE2F7B] group-hover:h-full transition-all duration-500 rounded-l-full" />

      {/* Large index number */}
      <div className="text-4xl font-extrabold text-[#C084FC]/30 group-hover:text-[#9945FF] transition-colors duration-500 select-none font-mono shrink-0">
        {item.id}
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#C084FC] transition-colors duration-300">
            {item.title}
          </h4>
          <span className="text-[10px] font-bold tracking-widest text-[#C084FC]/60 bg-[#9945FF]/10 px-3 py-1 rounded-full uppercase border border-[#9945FF]/20">
            {item.tag}
          </span>
        </div>
        <p className="text-white/50 text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Icon Wrapper */}
      <div className="shrink-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/[0.05] group-hover:bg-[#9945FF]/10 group-hover:border-[#9945FF]/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
          <item.icon className="w-6 h-6 text-white/50 group-hover:text-[#C084FC] transition-colors" />
        </div>
      </div>
    </motion.div>
  );
};

const Expertise = () => {
  return (
    <section id="expertise" className="py-32 bg-[#050508] relative overflow-hidden">
      {/* Dynamic Background decor */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#9945FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#BE2F7B]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Headline & Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <span className="text-xs font-bold tracking-widest text-[#C084FC] uppercase">
                Our Areas of Mastery
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Our <span className="bg-gradient-to-r from-[#9945FF] via-[#C084FC] to-[#BE2F7B] bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mt-4">
                We blend cinematic artistry with revolutionary artificial intelligence, setting new benchmarks in modern media production, brand campaigns, and visual storytelling.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Interactive List Stack */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {expertiseItems.map((item, idx) => (
              <ExpertiseCard key={idx} item={item} index={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;
