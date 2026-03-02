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
    <section id="problems" className="py-24 bg-dark-green text-primary-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-accent-orange uppercase mb-4">Problems We Solve</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-primary-bg">
            If Your Brand Is Struggling With...
          </h3>
          <p className="text-lg text-primary-bg/80">
            You didn't start your business to become a full-time content creator. Visibility equals growth, but creating daily content shouldn't drain your energy.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="w-full md:w-[calc(50%-12px)] bg-secondary-bg/10 rounded-2xl p-8 flex flex-col hover:bg-secondary-bg/20 transition-colors border border-secondary-bg/20 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 border border-red-500/20">
                <X className="w-6 h-6 text-red-500" strokeWidth={3} />
              </div>
              <h4 className="text-xl font-bold mb-3 tracking-tight text-primary-bg">{problem.title}</h4>
              <p className="text-primary-bg/70 leading-relaxed text-sm">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-accent-orange/10 border border-accent-orange/30 text-primary-bg px-8 py-4 rounded-full font-medium text-sm text-center">
            <CheckCircle2 className="w-5 h-5 text-accent-orange flex-shrink-0" />
            <span><span className="font-bold text-accent-orange mr-2">The Solution:</span> Ready to Build Your AI Content System? Book a free 15-minute strategy call today.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProblemsWeSolve;
