import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemsWeSolve = () => {
  const problems = [
    {
      title: "Endless Recording Sessions",
      desc: "Hours spent setting up, filming, and re-shooting videos."
    },
    {
      title: "Camera & Setup Fatigue",
      desc: "Lights, angles, background, makeup — it never ends."
    },
    {
      title: "Inconsistent Posting",
      desc: "Miss one week and your visibility drops. The algorithm doesn't wait."
    },
    {
      title: "Content Burnout",
      desc: "Weekly filming marathons. Constant retakes. Equipment headaches. Your energy gets drained."
    },
    {
      title: "Less Time for Business",
      desc: "More time on content = less time on sales, clients, and growth. Your expertise deserves better."
    }
  ];

  return (
    <section id="problems" className="py-24 bg-dark-green text-primary-bg relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent-orange uppercase mb-3">Problems We Solve</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Stay Visible & Grow Online, 
              <span className="text-secondary-bg block mt-2">Without Daily Shooting Hustle.</span>
            </h3>
            <p className="text-lg text-primary-bg/80 mb-8 max-w-lg">
              Most business owners know content is important. But creating it every day is exhausting. That's where we help.
            </p>
            <p className="text-xl font-medium text-accent-orange italic border-l-4 border-accent-orange pl-4">
              "You didn't start your business to become a full-time content creator. But today, visibility = growth. We make that easy for you."
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary-bg rounded-3xl p-8 lg:p-10 shadow-2xl"
          >
            <h4 className="text-dark-green font-bold text-xl mb-6">If Your Brand Is Struggling With...</h4>
            <div className="space-y-6">
              {problems.map((problem, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                  key={i} 
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <X className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" strokeWidth={3} />
                  </div>
                  <div>
                    <h5 className="font-bold text-dark-green text-lg">{problem.title}</h5>
                    <p className="text-dark-green/70 text-sm mt-1">{problem.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-secondary-bg/50 flex gap-4">
               <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-6 h-6 text-accent-orange" />
               </div>
               <div>
                  <h5 className="font-bold text-dark-green text-lg">The Solution</h5>
                  <p className="text-dark-green/70 text-sm mt-1">Ready to Build Your AI Content System? Book a free 15-minute strategy call today.</p>
               </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
