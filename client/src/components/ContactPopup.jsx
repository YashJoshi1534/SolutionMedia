import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Mail, User, MessageSquare, CheckCircle, AlertCircle,
  Loader2, X, Calendar, Clock, Sparkles, ArrowRight, MailCheck
} from 'lucide-react';

const subjects = [
  'General Inquiry',
  'Project Collaboration',
  'AI Avatar Services',
  'Ad Systems & Automation',
  'Schedule a Call',
  'Other',
];

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    preferredDate: '',
    preferredTime: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, status]);

  const handleClose = () => {
    setStatus('idle');
    onClose();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://solution-media.vercel.app';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '', preferredDate: '', preferredTime: '' });
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  };

  const inputClasses =
    'w-full bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#9945FF]/50 focus:border-[#9945FF]/50 transition-all duration-300 text-sm';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#12121A] border border-white/10 rounded-3xl shadow-2xl"
          >
            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#9945FF]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#BE2F7B]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* ─── Success View ───── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-8 sm:p-10 text-center"
                >
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 z-10"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: 'spring', stiffness: 200, damping: 12 }}
                    className="mx-auto mb-6 relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute -top-2 -right-2"
                    >
                      <Sparkles className="w-6 h-6 text-[#C084FC]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.55 }}
                      className="absolute -bottom-1 -left-3"
                    >
                      <Sparkles className="w-5 h-5 text-emerald-400" />
                    </motion.div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-2xl font-extrabold text-white mb-2"
                  >
                    Message Sent Successfully!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="text-white/50 text-sm mb-8 max-w-xs mx-auto"
                  >
                    Thank you for reaching out! We've sent you a confirmation email.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="space-y-3 mb-8"
                  >
                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/15 text-left">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/15 flex items-center justify-center shrink-0">
                        <MailCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-emerald-300">Confirmation Email Sent</p>
                        <p className="text-xs text-emerald-400/60">Check your inbox for details</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#9945FF]/10 border border-[#9945FF]/15 text-left">
                      <div className="w-9 h-9 rounded-lg bg-[#9945FF]/15 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-[#C084FC]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Response within 24 Hours</p>
                        <p className="text-xs text-white/40">Our team will review and get back to you</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 }}
                    onClick={handleClose}
                    className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold group"
                  >
                    Got It
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </motion.button>
                </motion.div>
              ) : (
                /* ─── Form View ───── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="relative p-6 pb-0">
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-200 z-10"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] font-medium text-xs mb-4">
                      <span className="w-2 h-2 rounded-full bg-[#9945FF] animate-pulse" />
                      Get In Touch
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-1 text-white">
                      Let's Build Something{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">
                        Amazing
                      </span>
                    </h2>
                    <p className="text-white/40 text-sm mb-2">
                      Fill out the form and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="relative p-6 pt-4 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="popup-name" className="block text-xs font-semibold text-white/70 mb-1.5">
                          <User className="w-3.5 h-3.5 inline mr-1 opacity-60" />
                          Full Name
                        </label>
                        <input
                          id="popup-name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="popup-email" className="block text-xs font-semibold text-white/70 mb-1.5">
                          <Mail className="w-3.5 h-3.5 inline mr-1 opacity-60" />
                          Email Address
                        </label>
                        <input
                          id="popup-email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="popup-subject" className="block text-xs font-semibold text-white/70 mb-1.5">
                        <MessageSquare className="w-3.5 h-3.5 inline mr-1 opacity-60" />
                        What's this about?
                      </label>
                      <select
                        id="popup-subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer`}
                      >
                        <option value="" disabled className="text-gray-900 bg-white">Select a topic</option>
                        {subjects.map((s) => (
                          <option key={s} value={s} className="text-gray-900 bg-white">{s}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="popup-date" className="block text-xs font-semibold text-white/70 mb-1.5">
                          <Calendar className="w-3.5 h-3.5 inline mr-1 opacity-60" />
                          Preferred Date
                        </label>
                        <input
                          id="popup-date"
                          name="preferredDate"
                          type="date"
                          min={getTomorrow()}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label htmlFor="popup-time" className="block text-xs font-semibold text-white/70 mb-1.5">
                          <Clock className="w-3.5 h-3.5 inline mr-1 opacity-60" />
                          Preferred Time
                        </label>
                        <input
                          id="popup-time"
                          name="preferredTime"
                          type="time"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="popup-message" className="block text-xs font-semibold text-white/70 mb-1.5">
                        <MessageSquare className="w-3.5 h-3.5 inline mr-1 opacity-60" />
                        Your Message
                      </label>
                      <textarea
                        id="popup-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell us about your project, goals, or any questions you have..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                    <AnimatePresence mode="wait">
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/15 px-4 py-3 rounded-xl"
                        >
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <span className="font-medium text-sm">{errorMsg}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
