import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DatePicker from 'react-datepicker';
import TimezoneSelect from 'react-timezone-select';
import "react-datepicker/dist/react-datepicker.css";
import { 
  Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, 
  Loader2, Phone, MapPin, Calendar, Clock, Globe, ArrowRight 
} from 'lucide-react';

const subjects = [
  'General Inquiry',
  'Project Collaboration',
  'AI Avatar Services',
  'Ad Systems & Automation',
  'Other',
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    date: null,
    time: null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDateChange = (date) => setFormData(prev => ({ ...prev, date }));
  const handleTimeChange = (time) => setFormData(prev => ({ ...prev, time }));
  const handleTimezoneChange = (timezone) => setFormData(prev => ({ ...prev, timezone: timezone.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const submissionData = {
      ...formData,
      preferredDate: formData.date ? formData.date.toISOString().split('T')[0] : '',
      preferredTime: formData.time ? formData.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '',
      timezone: formData.timezone
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://solution-media.vercel.app';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        date: null,
        time: null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setErrorMsg(err.message);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses = useMemo(() => 
    'w-full bg-primary-bg/60 backdrop-blur-md border border-secondary-bg/40 rounded-xl px-4 py-3.5 text-dark-green placeholder:text-dark-green/40 focus:outline-none focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange/50 transition-all duration-300 will-change-transform',
  []);

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-accent-orange/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-dark-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-bg/30 text-dark-green font-medium text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse"></span>
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-[#ff8c42]">
              Amazing
            </span>
          </h2>
          <p className="text-lg text-dark-green/70 max-w-2xl mx-auto">
            Secure your strategy session with our senior content engineers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-dark-green rounded-2xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-orange/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <h3 className="text-2xl font-bold text-primary-bg mb-2 relative z-10">
                Contact Information
              </h3>
              <p className="text-primary-bg/60 text-sm mb-8 relative z-10">
                Fill out the form and our team will get back to you shortly.
              </p>

              <div className="space-y-6 relative z-10">
                <a href="mailto:contact@hypemattermedia.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-accent-orange/20 flex justify-center items-center group-hover:bg-accent-orange/30 transition-colors">
                    <Mail className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <p className="text-primary-bg/50 text-xs font-medium uppercase tracking-wider">Email</p>
                    <p className="text-primary-bg font-medium group-hover:text-accent-orange transition-colors">
                      contact@hypemattermedia.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-orange/20 flex justify-center items-center">
                    <MapPin className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <p className="text-primary-bg/50 text-xs font-medium uppercase tracking-wider">Location</p>
                    <p className="text-primary-bg font-medium">India</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary-bg/20 border border-secondary-bg/30"
            >
              <div className="w-10 h-10 rounded-full bg-accent-orange/10 flex justify-center items-center text-lg shrink-0">
                ⚡
              </div>
              <div>
                <p className="font-semibold text-dark-green text-sm">Quick Response</p>
                <p className="text-dark-green/60 text-xs">Average reply time: under 24 hours</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-secondary-bg/10 backdrop-blur-md border border-secondary-bg/30 rounded-2xl p-8 lg:p-10 shadow-lg space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-dark-green/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                    <User size={12} className="text-accent-orange" />
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
                  <label className="text-[11px] font-bold text-dark-green/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                    <Mail size={12} className="text-accent-orange" />
                    Email
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
                <label className="text-[11px] font-bold text-dark-green/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                  <MessageSquare size={12} className="text-accent-orange" />
                  What's this about?
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

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-dark-green/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                    <Calendar size={12} className="text-accent-orange" />
                    Date
                  </label>
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
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-dark-green/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                    <Clock size={12} className="text-accent-orange" />
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
                <label className="text-[11px] font-bold text-dark-green/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                  <Globe size={12} className="text-accent-orange" />
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
                <label className="text-[11px] font-bold text-dark-green/50 uppercase tracking-wider flex items-center gap-2 ml-1">
                  <MessageSquare size={12} className="text-accent-orange" />
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-bold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed group shadow-xl shadow-accent-orange/20"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Book My Free Strategy Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 flex items-center gap-3 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-4 rounded-xl"
                  >
                    <CheckCircle className="w-6 h-6 shrink-0" />
                    <span className="font-bold text-sm text-white">Message sent! We'll be in touch.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 flex items-center gap-3 text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-4 rounded-xl"
                  >
                    <AlertCircle className="w-6 h-6 shrink-0" />
                    <span className="font-bold text-sm text-white">{errorMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
