import React from 'react';
import { motion } from 'framer-motion';
import {
  Check, Star, Sparkles, ArrowRight, Camera, Brain, FileText, Globe,
  Palette, Video, Wand2, BarChart3, Calendar, Lightbulb, PenTool,
  Megaphone, TrendingUp, Search, Rocket, Crown, Zap, ChevronLeft, Menu, X
} from 'lucide-react';

const packages = [
  {
    id: 'package-1',
    badge: 'STARTER',
    name: 'Done For You',
    subtitle: 'Package 1',
    description: 'Perfect for brands ready to launch with AI-powered content creation — we handle everything.',
    popular: false,
    gradient: 'from-[#7B2FBE] to-[#4A1D8E]',
    glowColor: 'rgba(123, 47, 190, 0.3)',
    borderColor: 'border-[#7B2FBE]/30',
    features: [
      { icon: Camera, text: '1 Time Professional Shoot' },
      { icon: Wand2, text: 'Complete Tool Setup' },
      { icon: Brain, text: 'AI Avatar + Audio Cloning' },
      { icon: FileText, text: 'Scripting & Copywriting' },
      { icon: Globe, text: 'Landing Page Design' },
    ],
  },
  {
    id: 'package-2',
    badge: 'POPULAR',
    name: 'Done With You',
    subtitle: 'Package 2',
    description: 'Full-scale brand growth engine — AI content, socials management, strategy, and lead generation.',
    popular: true,
    gradient: 'from-[#9945FF] to-[#6B21D4]',
    glowColor: 'rgba(153, 69, 255, 0.35)',
    borderColor: 'border-[#9945FF]/40',
    features: [
      { icon: Camera, text: '1 Time Shoot (AI Based / Original)' },
      { icon: FileText, text: 'Scripting & Copywriting' },
      { icon: Globe, text: 'Landing Page Design' },
      { icon: Video, text: '12–15 High Quality Edits' },
      { icon: Palette, text: 'Creatives Design' },
      { icon: Megaphone, text: 'Social Media Management' },
      { icon: TrendingUp, text: 'Growth Strategy & Report' },
      { icon: Calendar, text: 'Content Calendar & Ideation' },
      { icon: Lightbulb, text: 'Lead Gen Caption Writing' },
    ],
  },
  {
    id: 'package-3',
    badge: 'CREATIVE',
    name: 'Creative Campaign',
    subtitle: 'Package 3',
    description: 'Cinematic AI-powered campaigns for your products — from concept to final production, crafted for viral impact.',
    popular: false,
    gradient: 'from-[#BE2F7B] to-[#8E1D5A]',
    glowColor: 'rgba(190, 47, 123, 0.3)',
    borderColor: 'border-[#BE2F7B]/30',
    features: [
      { icon: Lightbulb, text: 'Concept Building' },
      { icon: FileText, text: 'Storytelling & Scripting' },
      { icon: PenTool, text: 'Storyboarding' },
      { icon: Wand2, text: 'AI Image Generation' },
      { icon: Video, text: 'AI Video Generation' },
      { icon: Sparkles, text: 'Post Production & Polish' },
    ],
  },
];

const complimentaryServices = [
  { icon: Globe, text: 'Website Development' },
  { icon: Search, text: 'SEO Optimization' },
  { icon: BarChart3, text: 'Performance Marketing' },
  { icon: Rocket, text: 'Ad Boosting & Campaigns' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Pricing = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white overflow-x-hidden">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#7B2FBE]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#9945FF]/6 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-[#BE2F7B]/5 rounded-full blur-[80px]" />
      </div>

      {/* ─── Header ─── */}
      <header className="fixed w-full z-50 bg-[#0A0A0F]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 bg-gradient-to-br from-[#9945FF] to-[#7B2FBE] rounded-xl flex items-center justify-center text-white font-bold text-lg leading-none shadow-lg shadow-[#9945FF]/20">
                H
              </div>
              <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#C084FC] transition-colors">
                Hypematter Media
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-white/50 hover:text-[#C084FC] font-medium transition-colors text-sm">Home</a>
              <a href="/#problems" className="text-white/50 hover:text-[#C084FC] font-medium transition-colors text-sm">Problems We Solve</a>
              <a href="/#how-it-works" className="text-white/50 hover:text-[#C084FC] font-medium transition-colors text-sm">Process</a>
              <span className="text-[#C084FC] font-semibold text-sm border-b border-[#9945FF]/50 pb-0.5">Packages</span>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="/"
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#9945FF] to-[#7B2FBE] text-white hover:shadow-lg hover:shadow-[#9945FF]/30 hover:scale-105 transition-all"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-6 pt-2 border-t border-white/5 space-y-3">
              <a href="/" className="block py-2 text-white/60 hover:text-[#C084FC] font-medium transition-colors">Home</a>
              <a href="/#problems" className="block py-2 text-white/60 hover:text-[#C084FC] font-medium transition-colors">Problems We Solve</a>
              <a href="/#how-it-works" className="block py-2 text-white/60 hover:text-[#C084FC] font-medium transition-colors">Process</a>
              <span className="block py-2 text-[#C084FC] font-semibold">Packages</span>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] font-medium text-sm mb-6">
              <Crown className="w-4 h-4" />
              Our Packages
            </div>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
          >
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] via-[#C084FC] to-[#BE2F7B]">
              Growth Plan
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed"
          >
            From AI-powered content creation to full-scale brand management — pick the package that fits your ambitions.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative z-10 px-4 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeUp}
              custom={idx}
              className={`relative group ${pkg.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              {/* Popular Glow */}
              {pkg.popular && (
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#9945FF] via-[#9945FF]/50 to-transparent opacity-60 blur-sm pointer-events-none" />
              )}

              <div
                className={`relative h-full rounded-3xl border ${pkg.borderColor} bg-[#12121A]/80 backdrop-blur-xl p-8 overflow-hidden transition-all duration-500 hover:border-white/20 hover:translate-y-[-4px]`}
                style={{
                  boxShadow: `0 0 60px -20px ${pkg.glowColor}`,
                }}
              >
                {/* Card Glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: `radial-gradient(circle, ${pkg.glowColor}, transparent)` }}
                />

                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider bg-gradient-to-r ${pkg.gradient} text-white`}
                  >
                    {pkg.popular && <Star className="w-3 h-3 fill-current" />}
                    {pkg.badge}
                  </span>
                  <span className="text-white/30 text-xs font-medium">{pkg.subtitle}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-extrabold text-white mb-2">{pkg.name}</h3>
                <p className="text-white/40 text-sm mb-8 leading-relaxed">{pkg.description}</p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${pkg.gradient} bg-opacity-20 flex items-center justify-center shrink-0`}>
                        <feature.icon className="w-3.5 h-3.5 text-white/90" />
                      </div>
                      <span className="text-white/70 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 group/btn ${
                    pkg.popular
                      ? `bg-gradient-to-r ${pkg.gradient} text-white hover:shadow-lg hover:shadow-[#9945FF]/30 hover:scale-[1.02]`
                      : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Complimentary Section */}
      <section className="relative z-10 px-4 pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl border border-[#9945FF]/20 bg-[#12121A]/60 backdrop-blur-xl p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#9945FF]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium text-sm mb-4">
                <Zap className="w-4 h-4" />
                Complimentary Services
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Included With Every Package
              </h2>
              <p className="text-white/40 text-sm max-w-lg mx-auto">
                These essential growth services come free with any package you choose.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {complimentaryServices.map((service, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                  className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <service.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-white/70 text-sm font-medium text-center">{service.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#9945FF] rounded flex items-center justify-center text-white font-bold text-xs leading-none">
              H
            </div>
            <span className="font-bold text-white/70">Hypematter Media</span>
          </div>
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
