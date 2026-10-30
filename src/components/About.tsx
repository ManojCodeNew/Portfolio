import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Layout,
  Smartphone,
  Layers,
  Component,
  Briefcase,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import type { Profile } from '../types/portfolio';

const capabilities = [
  {
    icon: <Layout className="text-[#31AAA9]" size={20} />,
    title: 'Responsive Web Applications',
    description: 'Scalable web interfaces built with React.js, Next.js, and TypeScript, optimized for high performance and clean code organization.',
  },
  {
    icon: <Smartphone className="text-[#31AAA9]" size={20} />,
    title: 'Cross-Platform Mobile Apps',
    description: 'Robust Android and iOS applications crafted with React Native, nested navigation, and native-feeling mobile UX.',
  },
  {
    icon: <Layers className="text-[#31AAA9]" size={20} />,
    title: 'API-Driven Applications',
    description: 'REST API integration with TanStack Query and Redux Persist, featuring pagination, search, and debouncing.',
  },
  {
    icon: <Component className="text-[#31AAA9]" size={20} />,
    title: 'Reusable UI Components',
    description: 'Modular, maintainable design systems and component libraries converted with pixel-accuracy from Figma prototypes.',
  },
  {
    icon: <Briefcase className="text-[#31AAA9]" size={20} />,
    title: 'Business Management Workflows',
    description: 'End-to-end transactional workflows including authentication, client records, quotations, invoices, and payment tracking.',
  },
];

export default function About({ profile }: { profile: Profile }) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="py-24 bg-[#F5F7F7] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Heading & Technical Summary Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-neutral-200 text-[#31AAA9] font-mono text-xs font-bold tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#31AAA9]" />
              A Little About Me
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-6">
              Engineering Practical Applications With Clean Architecture<span className="text-[#31AAA9]">.</span>
            </h2>

            {/* Quick Principles Card */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm space-y-4 mb-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
                <Sparkles size={14} className="text-[#31AAA9]" />
                <span>Engineering Philosophy</span>
              </div>
              <p className="text-neutral-700 text-sm leading-relaxed">
                I believe modern software should solve tangible business problems through resilient architecture, strict type safety, and clean user-focused interfaces.
              </p>
              
              <div className="pt-3 border-t border-neutral-100 grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-[#F5F7F7] border border-neutral-100">
                  <span className="text-neutral-400 block font-mono text-[10px] uppercase">Based in</span>
                  <span className="font-bold text-neutral-800">{profile.location}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#FDF4D2] border border-[#ebdcb0]">
                  <span className="text-neutral-600 block font-mono text-[10px] uppercase font-bold">Specialty</span>
                  <span className="font-bold text-[#111111]">React & Mobile</span>
                </div>
              </div>
            </div>

            {/* Contact Information Panel */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
              <h3 className="font-bold text-[#111111] text-sm uppercase tracking-wider mb-4 pb-2 border-b border-neutral-100 font-mono">
                Contact & Quick Links
              </h3>
              
              <ul className="space-y-3 text-xs">
                {/* Location */}
                <li className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-2">
                    <MapPin size={15} className="text-[#31AAA9]" />
                    <span>Location</span>
                  </span>
                  <span className="font-semibold text-neutral-800">{profile.location}</span>
                </li>

                {/* Email */}
                <li className="flex items-center justify-between text-neutral-600 group">
                  <span className="flex items-center gap-2">
                    <Mail size={15} className="text-[#31AAA9]" />
                    <span>Email</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono font-medium text-neutral-800 hover:text-[#31AAA9] transition-colors"
                    >
                      {profile.email}
                    </a>
                    <button
                      onClick={() => copyToClipboard(profile.email, 'email')}
                      className="p-1 text-neutral-400 hover:text-[#31AAA9] rounded transition-colors"
                      title="Copy email"
                    >
                      {copiedField === 'email' ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                    </button>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-2">
                    <Phone size={15} className="text-[#31AAA9]" />
                    <span>Phone</span>
                  </span>
                  <a
                    href={`tel:${profile.phone}`}
                    className="font-mono font-semibold text-neutral-800 hover:text-[#31AAA9] transition-colors"
                  >
                    +91 {profile.phone}
                  </a>
                </li>

                {/* GitHub */}
                <li className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-2">
                    <GithubIcon size={15} className="text-[#31AAA9]" />
                    <span>GitHub</span>
                  </span>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono font-semibold text-neutral-800 hover:text-[#31AAA9] transition-colors inline-flex items-center gap-1"
                  >
                    <span>ManojCodeNew</span>
                    <ExternalLink size={12} />
                  </a>
                </li>

                {/* LinkedIn */}
                <li className="flex items-center justify-between text-neutral-600">
                  <span className="flex items-center gap-2">
                    <LinkedinIcon size={15} className="text-[#31AAA9]" />
                    <span>LinkedIn</span>
                  </span>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono font-semibold text-neutral-800 hover:text-[#31AAA9] transition-colors inline-flex items-center gap-1"
                  >
                    <span>in/manojc2004</span>
                    <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT: Actual Professional Introduction & Experience Domains */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Primary Bio Paragraph */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm">
              <p className="text-neutral-800 text-base sm:text-lg leading-relaxed font-medium mb-4">
                {profile.bio}
              </p>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Beyond day-to-day feature implementation, I am deeply driven by complex algorithmic problem-solving, scalable architectural patterns, and continuous learning. Whether optimizing state persistence in a React Native app or architecting an API integration layer with TanStack Query, I emphasize production readiness, code readability, and reliable execution.
              </p>
            </div>

            {/* Experience Building Cards */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#31AAA9]" />
                Practical Industry Experience Building:
              </h3>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {capabilities.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className={`bg-white rounded-xl p-5 border border-neutral-200/90 hover:border-[#31AAA9]/60 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between ${
                      idx === capabilities.length - 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3.5 mb-2">
                      <div className="p-2 rounded-lg bg-[#F5F7F7] border border-neutral-200 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-[#111111]">{item.title}</h4>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed pl-12">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}