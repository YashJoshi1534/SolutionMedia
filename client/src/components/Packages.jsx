import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Crown, ArrowRight } from 'lucide-react';

const packages = [
  {
    id: 'core',
    badge: 'GENARC CORE',
    subtitle: 'You create. We produce.',
    description: 'You already have the footage. We turn it into polished, platform-ready content your brand can publish with confidence.',
    popular: false,
    icon: <Zap className="w-5 h-5 text-[#C084FC]" />,
    gradient: 'from-[#7B2FBE]/10 to-[#4A1D8E]/5',
    borderColor: 'border-white/10',
    features: [
      '10–12 short-form videos per month',
      'Scripting for your content',
      'Captions written in your brand voice',
      'Custom editing style built on your brand guidelines',
      'Social media management',
      'Platform optimization',
      'Monthly posting calendar',
      'Dedicated editor',
      'Monthly performance report',
      'Monthly feedback meeting'
    ]
  },
  {
    id: 'os',
    badge: 'GENARC OS',
    subtitle: 'Your entire content operation. Run by us.',
    description: 'You show up. We run the whole engine — strategy, shoots, scripting, creative direction, and distribution — built to scale your brand month over month.',
    popular: true,
    icon: <Shield className="w-5 h-5 text-[#9945FF]" />,
    gradient: 'from-[#9945FF] to-[#6B21D4]',
    borderColor: 'border-[#9945FF]/40',
    glowColor: 'rgba(153, 69, 255, 0.3)',
    features: [
      '2 professional shoots per month',
      '12–15 short-form videos per month',
      '12–15 scripts written for you',
      'Content ideation & planning',
      'Growth strategy',
      'Content calendar',
      'Creative direction & brand visual identity',
      'Custom thumbnails for every video',
      'Copywriting',
      'Full social media management',
      'Story sequence management',
      'Multi-platform management',
      'Platform optimization',
      'Monthly growth report',
      '2 strategy calls per month'
    ]
  },
  {
    id: 'elite',
    badge: 'ELITE PACKAGE',
    subtitle: 'Full-scale production, built around your brand.',
    description: 'Your scope, our infrastructure. Everything in OS, plus the firepower to scale — add anything you need, in any volume, all the way up to enterprise.',
    popular: false,
    icon: <Crown className="w-5 h-5 text-[#BE2F7B]" />,
    gradient: 'from-[#BE2F7B]/10 to-[#9E1B5C]/5',
    borderColor: 'border-white/10',
    features: [
      'Everything in GenArc OS',
      'Website / landing page building',
      'Additional shoots & videos',
      'YouTube long-form edits',
      'Multi-platform content reuse',
      'AI avatar content',
      'Carousels',
      'Bulk & enterprise-level production on request'
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Packages = ({ openPopup }) => {
  return (
    <section id="packages" className="py-24 bg-[#08080D] relative overflow-hidden text-white border-t border-white/5">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#9945FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#C084FC]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Pricing & Packages</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">Service Packages</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Choose the perfect content execution engine to power up your brand authority.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              custom={idx}
              variants={fadeUp}
              className="relative group flex flex-col h-full"
            >
              {/* Popular Card Glow Border */}
              {pkg.popular && (
                <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-b from-[#9945FF] via-[#C084FC]/50 to-transparent opacity-60 blur-sm pointer-events-none" />
              )}

              <div
                className={`relative flex flex-col justify-between h-full rounded-[2rem] border ${pkg.borderColor} bg-[#12121A]/60 backdrop-blur-md p-8 overflow-hidden transition-all duration-500 hover:border-white/20 hover:translate-y-[-6px]`}
                style={pkg.popular ? { boxShadow: `0 0 50px -10px ${pkg.glowColor}` } : {}}
              >
                {/* Internal Glow Effect */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: pkg.popular ? `radial-gradient(circle, ${pkg.glowColor}, transparent)` : 'radial-gradient(circle, rgba(255,255,255,0.05), transparent)' }}
                />

                <div>
                  {/* Badge & Subtitle */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-[#9945FF] to-[#6B21D4] text-white'
                          : 'bg-white/5 text-[#C084FC]'
                      }`}
                    >
                      {pkg.popular && <Star className="w-3 h-3 fill-current text-white" />}
                      {pkg.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      {pkg.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2 leading-snug">{pkg.subtitle}</h3>
                  <p className="text-white/40 text-sm mb-6 leading-relaxed min-h-[40px]">{pkg.description}</p>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                  {/* Features List */}
                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#9945FF]/10 border border-[#9945FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#C084FC]" />
                        </div>
                        <span className="text-white/70 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call To Action Button */}
                <button
                  onClick={openPopup}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 group/btn ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#9945FF] to-[#7B2FBE] text-white hover:shadow-lg hover:shadow-[#9945FF]/30 hover:scale-[1.02]'
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]'
                  }`}
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Packages;
