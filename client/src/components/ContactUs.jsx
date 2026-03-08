import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Loader2, Phone, MapPin } from 'lucide-react';

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
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");
  setErrorMsg("");

  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://solution-media.vercel.app';
    const res = await fetch(`${apiUrl}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const text = await res.text(); // read raw response
    console.log("SERVER RESPONSE:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error("Server returned non-JSON response");
    }

    if (!res.ok) {
      throw new Error(data.error || "Something went wrong.");
    }

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setStatus("idle"), 5000);
  } catch (err) {
    console.error(err);
    setErrorMsg(err.message);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 5000);
  }
};
  const inputClasses =
    'w-full bg-primary-bg/60 backdrop-blur-sm border border-secondary-bg/40 rounded-xl px-4 py-3.5 text-dark-green placeholder:text-dark-green/40 focus:outline-none focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange/50 transition-all duration-300';

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-accent-orange/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-dark-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-[#ff8c42]">
              Amazing
            </span>
          </h2>
          <p className="text-lg text-dark-green/70 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our AI-powered content systems? Drop us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info Card */}
            <div className="bg-dark-green rounded-2xl p-8 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-orange/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-bg/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

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

                <a href="tel:+911234567890" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-accent-orange/20 flex justify-center items-center group-hover:bg-accent-orange/30 transition-colors">
                    <Phone className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <p className="text-primary-bg/50 text-xs font-medium uppercase tracking-wider">Phone</p>
                    <p className="text-primary-bg font-medium group-hover:text-accent-orange transition-colors">
                      +91 12345 67890
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

              {/* Decorative dots */}
              <div className="absolute bottom-6 right-6 grid grid-cols-3 gap-2 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-primary-bg"></div>
                ))}
              </div>
            </div>

            {/* Quick Response Badge */}
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-secondary-bg/10 backdrop-blur-md border border-secondary-bg/30 rounded-2xl p-8 lg:p-10 shadow-lg"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-dark-green mb-2">
                    <User className="w-4 h-4 inline mr-1.5 opacity-60" />
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-dark-green mb-2">
                    <Mail className="w-4 h-4 inline mr-1.5 opacity-60" />
                    Email Address
                  </label>
                  <input
                    id="contact-email"
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

              {/* Subject */}
              <div className="mb-5">
                <label htmlFor="contact-subject" className="block text-sm font-semibold text-dark-green mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1.5 opacity-60" />
                  What's this about?
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-dark-green mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1.5 opacity-60" />
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project, goals, or any questions you have..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {/* Submit Button */}
              <button
               type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 group"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 flex items-center gap-2 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-4 py-3 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span className="font-medium text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 flex items-center gap-2 text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 px-4 py-3 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span className="font-medium text-sm">{errorMsg}</span>
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
