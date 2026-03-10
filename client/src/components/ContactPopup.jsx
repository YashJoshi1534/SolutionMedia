import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import TimezoneSelect from 'react-timezone-select';
import Select from 'react-select';
import { setHours, setMinutes } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import {
  Send, Mail, User, MessageSquare, CheckCircle, AlertCircle,
  Loader2, X, Calendar, Clock, Sparkles, ArrowRight, MailCheck, Globe
} from 'lucide-react';

const subjectOptions = [
  { value: 'General Inquiry', label: 'General Inquiry' },
  { value: 'Project Collaboration', label: 'Project Collaboration' },
  { value: 'AI Avatar Services', label: 'AI Avatar Services' },
  { value: 'Ad Systems & Automation', label: 'Ad Systems & Automation' },
  { value: 'Schedule a Call', label: 'Schedule a Call' },
  { value: 'Other', label: 'Other' },
];

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: null,
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
  const handleSubjectChange = (subject) => setFormData(prev => ({ ...prev, subject }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    // Prepare data for submission
    const submissionData = {
      ...formData,
      subject: formData.subject ? formData.subject.value : '',
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
          subject: null, 
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
    'w-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#9945FF]/40 focus:border-[#9945FF]/40 transition-all duration-300 text-sm will-change-transform',
  []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-[#0D0D12] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden will-change-transform"
          >
            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#9945FF]/15 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#BE2F7B]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* ─── Success View ───── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative p-8 text-center"
                >
                  <button
                    onClick={handleClose}
                    className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 z-10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                    className="mx-auto mb-6 relative w-20 h-20"
                  >
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-extrabold text-white mb-2">Confirmation Sent!</h3>
                  <p className="text-white/40 text-sm mb-8 max-w-[280px] mx-auto">
                    We've received your request and a confirmation email is on its way.
                  </p>

                  <div className="grid gap-3 mb-8 max-w-sm mx-auto text-left text-[11px]">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                        <MailCheck className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="font-bold text-emerald-300">Check Your Inbox</p>
                        <p className="text-emerald-400/50">Strategy call request confirmed.</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[#9945FF]/5 border border-[#9945FF]/10">
                      <div className="w-10 h-10 rounded-lg bg-[#9945FF]/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-[#C084FC]" />
                      </div>
                      <div>
                        <p className="font-bold text-white">Priority Response</p>
                        <p className="text-white/40">Our team will reply within 12-24h.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold group rounded-xl"
                  >
                    Got It
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  <div className="relative p-6 pb-2">
                    <button
                      onClick={handleClose}
                      className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all duration-300 z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9945FF]/10 border border-[#9945FF]/20 text-[#C084FC] font-bold text-[9px] uppercase tracking-widest mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9945FF] shadow-[0_0_8px_#9945FF]" />
                      Direct Access
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-extrabold tracking-tight mb-1 text-white">
                      Let's Build Something{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#C084FC]">
                        Elite
                      </span>
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5 ml-1">
                          <User size={10} className="text-[#9945FF]" />
                          Name
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
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5 ml-1">
                          <Mail size={10} className="text-[#9945FF]" />
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5 ml-1">
                        <MessageSquare size={10} className="text-[#9945FF]" />
                        Project Scope
                      </label>
                      <Select
                        options={subjectOptions}
                        value={formData.subject}
                        onChange={handleSubjectChange}
                        classNamePrefix="premium-select"
                        placeholder="Select Topic"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5 ml-1">
                          <Calendar size={10} className="text-[#9945FF]" />
                          Date
                        </label>
                        <DatePicker
                          selected={formData.date}
                          onChange={handleDateChange}
                          minDate={new Date()}
                          placeholderText="Date"
                          className={inputClasses}
                          dateFormat="MMM d, yyyy"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5 ml-1">
                          <Clock size={10} className="text-[#9945FF]" />
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
                          placeholderText="Time"
                          className={inputClasses}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5 ml-1">
                        <Globe size={10} className="text-[#9945FF]" />
                        Timezone
                      </label>
                      <TimezoneSelect
                        value={formData.timezone}
                        onChange={handleTimezoneChange}
                        classNamePrefix="tz-select"
                        placeholder="Select Timezone"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-white/50 uppercase tracking-wider flex items-center gap-1.5 ml-1">
                        <MessageSquare size={10} className="text-[#9945FF]" />
                        Vision
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={2}
                        placeholder="Briefly describe your goals..."
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputClasses} resize-none mb-1`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed group rounded-xl shadow-xl shadow-[#9945FF]/10"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Book Strategy Call
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <AnimatePresence mode="wait">
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 px-3 py-2.5 rounded-xl"
                        >
                          <AlertCircle size={14} className="shrink-0" />
                          <span className="font-bold text-[10px] uppercase">{errorMsg}</span>
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
