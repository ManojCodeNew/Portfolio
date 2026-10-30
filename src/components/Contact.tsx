import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  Loader2,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import type { Profile } from '../types/portfolio';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact({ profile }: { profile: Profile }) {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Realistic asynchronous dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleOpenMailClient = () => {
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || 'Opportunity / Discussion'
    )}&body=${encodeURIComponent(
      `Hello Manoj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSubmitted(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-neutral-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7F7] border border-neutral-200 text-[#31AAA9] font-mono text-xs font-bold tracking-wider uppercase mb-3">
            <MessageSquare size={13} />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Have an Opportunity or Interesting Project?<span className="text-[#31AAA9]">.</span>
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            I'm always interested in connecting with people, exploring new opportunities, and building meaningful software products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Direct Contact Channels (col-span-5) */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3.5">
              
              {/* Email Card */}
              <div className="bg-[#F5F7F7]/70 rounded-2xl p-5 border border-neutral-200 hover:border-[#31AAA9]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                    <Mail size={15} className="text-[#31AAA9]" />
                    Email Address
                  </span>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-neutral-500 hover:text-[#31AAA9] transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono font-bold text-sm text-[#111111] hover:text-[#31AAA9] transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="bg-[#F5F7F7]/70 rounded-2xl p-5 border border-neutral-200 hover:border-[#31AAA9]/40 transition-colors">
                <span className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  <Phone size={15} className="text-[#31AAA9]" />
                  Direct Phone
                </span>
                <a
                  href={`tel:${profile.phone}`}
                  className="font-mono font-bold text-sm text-[#111111] hover:text-[#31AAA9] transition-colors"
                >
                  +91 {profile.phone}
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-[#F5F7F7]/70 rounded-2xl p-5 border border-neutral-200 hover:border-[#31AAA9]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                    <LinkedinIcon size={15} className="text-[#31AAA9]" />
                    LinkedIn Network
                  </span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </div>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono font-bold text-sm text-[#111111] hover:text-[#31AAA9] transition-colors"
                >
                  linkedin.com/in/manojc2004
                </a>
              </div>

              {/* GitHub Card */}
              <div className="bg-[#F5F7F7]/70 rounded-2xl p-5 border border-neutral-200 hover:border-[#31AAA9]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                    <GithubIcon size={15} className="text-[#31AAA9]" />
                    GitHub Repositories
                  </span>
                  <ExternalLink size={13} className="text-neutral-400" />
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono font-bold text-sm text-[#111111] hover:text-[#31AAA9] transition-colors"
                >
                  github.com/ManojCodeNew
                </a>
              </div>

            </div>

            {/* Availability Notice Card */}
            <div className="p-5 rounded-2xl bg-[#FDF4D2] border border-[#ebdcb0] text-xs font-sans">
              <span className="font-bold text-[#111111] block mb-1">
                Looking for a dedicated Software Developer?
              </span>
              <p className="text-neutral-700 leading-relaxed">
                Available for full-time Software Developer, Frontend Developer, and React / React Native engineering roles. Quick response time guaranteed.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Validated Contact Form (col-span-7) */}
          <motion.div
            className="lg:col-span-7 bg-[#F5F7F7]/60 rounded-3xl p-7 sm:p-10 border border-neutral-200 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-extrabold text-[#111111] tracking-tight mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-500 mb-6 font-mono">
              Fill in your details below and I will respond to your inquiry promptly.
            </p>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-2xl p-8 border border-emerald-200 text-center space-y-4 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#111111]">
                      Thank You, {formData.name}!
                    </h4>
                    <p className="text-sm text-neutral-600 mt-1 max-w-md mx-auto leading-relaxed">
                      Your message has been captured successfully. You can also open your mail client directly to send a pre-formatted email.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleOpenMailClient}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#31AAA9] hover:bg-[#269695] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <Mail size={14} />
                      <span>Launch In Mail Client</span>
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-xl border border-neutral-300 hover:border-neutral-400 text-neutral-700 text-xs font-semibold bg-white transition-all"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1.5">
                        Your Name <span className="text-[#31AAA9]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={e => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g. Jane Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none transition-colors ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500'
                            : 'border-neutral-200 focus:border-[#31AAA9]'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1.5">
                        Email Address <span className="text-[#31AAA9]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={e => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="you@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-400 focus:border-rose-500'
                            : 'border-neutral-200 focus:border-[#31AAA9]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-mono">
                          <AlertCircle size={12} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1.5">
                      Subject <span className="text-[#31AAA9]">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={e => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (errors.subject) setErrors({ ...errors, subject: undefined });
                      }}
                      placeholder="e.g. Full-Time Opportunity / Project Discussion"
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none transition-colors ${
                        errors.subject
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-neutral-200 focus:border-[#31AAA9]'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-mono">
                        <AlertCircle size={12} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold text-neutral-700 uppercase mb-1.5">
                      Message <span className="text-[#31AAA9]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={e => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about your team, role, or project requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-neutral-200 focus:border-[#31AAA9]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-mono">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#31AAA9] hover:bg-[#269695] disabled:opacity-70 text-white font-bold text-sm shadow-sm hover:shadow transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}