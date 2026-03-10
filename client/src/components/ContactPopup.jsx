import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import TimezoneSelect from 'react-timezone-select';
import { setHours, setMinutes } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import {
  Send, Mail, User, MessageSquare, CheckCircle, AlertCircle,
  Loader2, X, Calendar, Clock, Sparkles, ArrowRight, MailCheck, Globe
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
    date: null,
    time: null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
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

  const handleDateChange = (date) => setFormData(prev => ({ ...prev, date }));
  const handleTimeChange = (time) => setFormData(prev => ({ ...prev, time }));
  const handleTimezoneChange = (timezone) => setFormData(prev => ({ ...prev, timezone: timezone.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Prepare data for submission
    const submissionData = {
      ...formData,
      preferredDate: formData.date ? formData.date.toISOString().split('T')[0] : '',
      preferredTime: formData.time ? formData.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
      timezone: formData.timezone
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://solution-media.vercel.app';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      // Smooth transition to success
      setTimeout(() => {
        setStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          subject: '', 
          message: '', 
          date: null, 
          time: null, 
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone 
        });
      }, 300);
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClasses = useMemo(() => 
    'w-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#9945FF]/40 focus:border-[#9945FF]/40 transition-all duration-300 text-sm will-change-transform',
  []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#0D0D12] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden will-change-transform"
          >
            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9945FF]/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#BE2F7B]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* ─── Success View ───── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-10 text-center"
                >
                  <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                    className="mx-auto mb-8 relative w-24 h-24"
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-[#C084FC] animate-pulse" />
                  </motion.div>

                  <h3 className="text-3xl font-extrabold text-white mb-3">Confirmation Sent!</h3>
                  <p className="text-white/40 text-base mb-10 max-w-sm mx-auto">
                    We've received your request and a confirmation email is heading to your inbox right now.
                  </p>

                  <div className="grid gap-4 mb-10 max-w-md mx-auto">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-left">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <MailCheck className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-emerald-300">Check Your Inbox</p>
                        <p className="text-xs text-emerald-400/50 leading-relaxed">System confirmed your strategy call request.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#9945FF]/5 border border-[#9945FF]/10 text-left">
                      <div className="w-12 h-12 rounded-xl bg-[#9945FF]/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-[#C084FC]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Priority Response</p>
                        <p className="text-xs text-white/40 leading-relaxed">Our strategists will reply within 12-24 hours.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-base font-bold group rounded-2xl"
                  >
                    Got It
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ) : (
                /* ─── Form View ───── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative p-8 pb-0">
                    <button
                      onClick={handleClose}
                      className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] font-bold text-[10px] uppercase tracking-widest mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9945FF] shadow-[0_0_10px_#9945FF]" />
                      Direct Access
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-2 text-white">
                      Let's Build Something{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">
                        Elite
                      </span>
                    </h2>
                    <p className="text-white/40 text-sm max-w-sm">
                      Secure your strategy session with our senior content engineers.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-8 pt-6 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                          <User size={12} className="text-[#9945FF]" />
                          Full Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                          <Mail size={12} className="text-[#9945FF]" />
                          Work Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                        <MessageSquare size={12} className="text-[#9945FF]" />
                        Project Scope
                      </label>
                      <div className="relative">
                        <select
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className={`${inputClasses} appearance-none cursor-pointer pr-10`}
                        >
                          <option value="" disabled>Select a topic</option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 rotate-90 pointer-events-none" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                          <Calendar size={12} className="text-[#9945FF]" />
                          Date
                        </label>
                        <div className="relative">
                          <DatePicker
                            selected={formData.date}
                            onChange={handleDateChange}
                            minDate={new Date()}
                            placeholderText="Select Date"
                            className={inputClasses}
                            dateFormat="MMMM d, yyyy"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                          <Clock size={12} className="text-[#9945FF]" />
                          Time
                        </label>
                        <DatePicker
                          selected={formData.time}
                          onChange={handleTimeChange}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          placeholderText="Select Time"
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                        <Globe size={12} className="text-[#9945FF]" />
                        Timezone
                      </label>
                      <TimezoneSelect
                        value={formData.timezone}
                        onChange={handleTimezoneChange}
                        classNamePrefix="tz-select"
                        placeholder="Select Timezone"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                        <MessageSquare size={12} className="text-[#9945FF]" />
                        Your Vision
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        placeholder="Briefly describe your goals..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold disabled:opacity-60 disabled:cursor-not-allowed group rounded-2xl shadow-xl shadow-[#9945FF]/10"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Book My Free Strategy Call
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <AnimatePresence mode="wait">
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-3 text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3.5 rounded-2xl"
                        >
                          <AlertCircle size={18} className="shrink-0" />
                          <span className="font-bold text-xs">{errorMsg}</span>
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
