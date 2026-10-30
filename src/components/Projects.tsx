import { motion } from 'framer-motion';
import {
  ExternalLink,
  Globe,
  Smartphone,
  ShieldCheck,
  CreditCard,
  CalendarCheck,
  Search,
  FileText,
  DollarSign,
  Users,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import type { Project } from '../types/portfolio';

export default function Projects({ projects }: { projects: Project[] }) {
  const astroProject = projects.find(p => p.id === 'astroaura24');
  const bizMobileProject = projects.find(p => p.id === 'biz-mobile');

  return (
    <section id="projects" className="py-24 bg-[#F5F7F7] border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-neutral-200 text-[#31AAA9] font-mono text-xs font-bold tracking-wider uppercase mb-3">
            <Globe size={13} />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Things I've Built & Contributed To<span className="text-[#31AAA9]">.</span>
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Featured production web applications and cross-platform mobile systems built with modern engineering practices.
          </p>
        </motion.div>

        <div className="space-y-16">
          
          {/* PROJECT 1: AstroAura24 (Web & E-Commerce / Full Stack) */}
          {astroProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                
                {/* Left: Project Details (col-span-7) */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F5F7F7] border border-neutral-200 text-neutral-800 font-mono text-xs font-bold">
                        <Globe size={13} className="text-[#31AAA9]" />
                        Full Stack & E-Commerce
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#FDF4D2] border border-[#ebdcb0] text-[#111111] font-mono text-xs font-bold">
                        Live Production Platform
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-2">
                      {astroProject.title}
                    </h3>
                    <p className="text-neutral-500 font-medium text-sm sm:text-base mb-6">
                      {astroProject.subtitle}
                    </p>

                    <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                      {astroProject.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                        Key Features & Production Modules:
                      </h4>
                      <ul className="space-y-2.5">
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#31AAA9] shrink-0 mt-0.5" />
                          <span><strong>E-Commerce Workflows & Payments:</strong> Complete merchandise catalog, cart management, and seamless Razorpay payment gateway integration.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#31AAA9] shrink-0 mt-0.5" />
                          <span><strong>Live Consultation Booking:</strong> Concurrency-safe appointment scheduling system engineered to prevent overlapping slot reservations.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#31AAA9] shrink-0 mt-0.5" />
                          <span><strong>Admin Dashboard & Orders:</strong> Administrative reporting suite for inventory tracking, limited-stock handling, and live order processing.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#31AAA9] shrink-0 mt-0.5" />
                          <span><strong>Continuous Optimization:</strong> Ongoing integration of client-requested features, UI responsive refinements, and API efficiency.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                        Technology Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {astroProject.tech.map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#F5F7F7] border border-neutral-200 text-neutral-800 font-mono text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links / Action */}
                  {astroProject.liveUrl && (
                    <div className="pt-6 border-t border-neutral-100 flex items-center gap-4">
                      <a
                        href={astroProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#31AAA9] hover:bg-[#269695] text-white text-sm font-bold shadow-sm hover:shadow transition-all"
                      >
                        <span>Visit Live Website</span>
                        <ExternalLink size={15} />
                      </a>
                      <span className="text-xs font-mono text-neutral-400">
                        astroaura24.com
                      </span>
                    </div>
                  )}
                </div>

                {/* Right: Technical Browser Chrome Mockup (col-span-5) */}
                <div className="lg:col-span-5 bg-neutral-900 p-6 sm:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-neutral-800">
                  <div className="rounded-xl bg-[#111111] border border-neutral-700 shadow-xl overflow-hidden font-sans">
                    {/* Browser Chrome Header */}
                    <div className="px-4 py-2.5 bg-neutral-800/90 border-b border-neutral-700 flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      </div>
                      <div className="flex-1 max-w-[240px] mx-auto bg-neutral-900 px-3 py-1 rounded-md text-[11px] font-mono text-neutral-300 flex items-center justify-center gap-1.5 border border-neutral-700/60 truncate">
                        <Lock size={10} className="text-[#31AAA9]" />
                        <span>https://astroaura24.com</span>
                      </div>
                    </div>

                    {/* Mockup Body: High-fidelity Platform Preview */}
                    <div className="p-5 text-neutral-200 space-y-4">
                      {/* Brand Banner */}
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-[#31AAA9] flex items-center justify-center text-white font-bold text-xs">
                            A
                          </div>
                          <span className="font-bold text-sm tracking-tight text-white">AstroAura24</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Production Active
                        </span>
                      </div>

                      {/* Consultation Booking Widget Preview */}
                      <div className="bg-neutral-800/60 rounded-lg p-3.5 border border-neutral-700/70">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                            <CalendarCheck size={14} className="text-[#31AAA9]" />
                            Live Consultation Booking
                          </span>
                          <span className="text-[10px] font-mono text-[#31AAA9] bg-[#31AAA9]/10 px-2 py-0.5 rounded">
                            Concurrency-Safe
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 my-2">
                          <div className="p-1.5 rounded bg-neutral-900 border border-neutral-700 text-center text-[10px] text-neutral-300 font-mono">
                            10:00 AM
                          </div>
                          <div className="p-1.5 rounded bg-[#31AAA9] text-white text-center text-[10px] font-mono font-bold">
                            11:30 AM
                          </div>
                          <div className="p-1.5 rounded bg-neutral-900 border border-neutral-700 text-center text-[10px] text-neutral-300 font-mono">
                            02:00 PM
                          </div>
                        </div>
                        <div className="text-[10px] text-neutral-400 flex items-center justify-between pt-1">
                          <span>Slot Lock: Active</span>
                          <span className="text-emerald-400 font-mono">No double-booking</span>
                        </div>
                      </div>

                      {/* Razorpay Payment Flow Preview */}
                      <div className="bg-neutral-800/60 rounded-lg p-3.5 border border-neutral-700/70">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="font-semibold text-neutral-200 flex items-center gap-1.5">
                            <CreditCard size={14} className="text-[#1CC5DC]" />
                            Razorpay Payment Gateway
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                            <ShieldCheck size={11} />
                            Verified
                          </span>
                        </div>
                        <div className="p-2 bg-neutral-900 rounded text-[11px] font-mono text-neutral-300 flex items-center justify-between border border-neutral-800">
                          <span>Order #AA-9402</span>
                          <span className="text-white font-bold">₹1,499.00</span>
                        </div>
                      </div>

                      {/* Admin Dashboard Metric snippet */}
                      <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-mono">
                        <div className="p-2 rounded bg-neutral-900/80 border border-neutral-800">
                          <span className="text-neutral-500 block">Orders Logged</span>
                          <span className="text-neutral-200 font-bold text-xs">Real-time DB</span>
                        </div>
                        <div className="p-2 rounded bg-neutral-900/80 border border-neutral-800">
                          <span className="text-neutral-500 block">Inventory</span>
                          <span className="text-[#31AAA9] font-bold text-xs">Auto-Sync</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* PROJECT 2: Business Management Mobile Application */}
          {bizMobileProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                
                {/* Left: Technical Mobile Device Frame (col-span-5) */}
                <div className="lg:col-span-5 bg-neutral-900 p-6 sm:p-8 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-neutral-800 order-2 lg:order-1">
                  
                  {/* Smartphone Frame Mockup */}
                  <div className="w-full max-w-[300px] rounded-[36px] bg-[#111111] p-3 border-4 border-neutral-700 shadow-2xl font-sans">
                    
                    {/* Device Screen */}
                    <div className="rounded-[28px] bg-neutral-900 p-4 border border-neutral-800 text-neutral-200 text-xs">
                      
                      {/* Dynamic Notch / Status */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[10px] font-mono text-neutral-400">
                        <span>9:41</span>
                        <div className="w-16 h-3.5 bg-neutral-800 rounded-full mx-auto" />
                        <span className="text-[#31AAA9]">5G • 100%</span>
                      </div>

                      {/* App Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="text-[10px] font-mono text-neutral-400 uppercase">BizManager App</span>
                          <h5 className="font-extrabold text-sm text-white">Dashboard</h5>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#31AAA9]/20 text-[#31AAA9] text-[9px] font-mono font-bold">
                          Online Sync
                        </span>
                      </div>

                      {/* Search & Filter Bar (Debounced) */}
                      <div className="flex items-center gap-1.5 p-2 bg-neutral-800/80 rounded-lg text-[10px] text-neutral-400 border border-neutral-700 mb-3">
                        <Search size={12} className="text-[#31AAA9]" />
                        <span className="truncate">Search clients, invoices...</span>
                        <span className="ml-auto text-[9px] font-mono bg-neutral-900 px-1.5 py-0.5 rounded text-neutral-400">300ms</span>
                      </div>

                      {/* Invoice Cards */}
                      <div className="space-y-2 mb-3">
                        <div className="p-2.5 rounded-xl bg-neutral-800/90 border border-neutral-700">
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="font-bold text-white flex items-center gap-1">
                              <FileText size={12} className="text-[#31AAA9]" />
                              INV-2026-084
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                              PAID
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-neutral-400">
                            <span>Apex Global Corp</span>
                            <span className="font-mono text-white font-bold">₹48,500</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-neutral-800/90 border border-neutral-700">
                          <div className="flex items-center justify-between text-[11px] mb-1">
                            <span className="font-bold text-white flex items-center gap-1">
                              <DollarSign size={12} className="text-amber-400" />
                              QUO-2026-112
                            </span>
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                              PENDING
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-[10px] text-neutral-400">
                            <span>Nova Technologies</span>
                            <span className="font-mono text-white font-bold">₹24,000</span>
                          </div>
                        </div>
                      </div>

                      {/* Navigation bar simulation */}
                      <div className="pt-2 border-t border-neutral-800 grid grid-cols-4 gap-1 text-center text-[9px] text-neutral-400">
                        <span className="text-[#31AAA9] font-bold">Clients</span>
                        <span>Quotes</span>
                        <span>Invoices</span>
                        <span>Payments</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right: Project Details (col-span-7) */}
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between order-1 lg:order-2">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F5F7F7] border border-neutral-200 text-neutral-800 font-mono text-xs font-bold">
                        <Smartphone size={13} className="text-[#31AAA9]" />
                        Cross-Platform Mobile
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#FDF4D2] border border-[#ebdcb0] text-[#111111] font-mono text-xs font-bold">
                        Enterprise Architecture
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mb-2">
                      {bizMobileProject.title}
                    </h3>
                    <p className="text-neutral-500 font-medium text-sm sm:text-base mb-6">
                      {bizMobileProject.subtitle}
                    </p>

                    <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                      {bizMobileProject.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                        Key Features & Engineering Modules:
                      </h4>
                      <ul className="space-y-2.5">
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#31AAA9] shrink-0 mt-0.5" />
                          <span><strong>Authentication & Onboarding:</strong> Secure token-based session lifecycle, onboarding flows, and nested stack/tab navigation.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#31AAA9] shrink-0 mt-0.5" />
                          <span><strong>Transaction Workflows:</strong> End-to-end client record maintenance, quotation draft creation, invoice issuance, and payment logging.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#31AAA9] shrink-0 mt-0.5" />
                          <span><strong>API Sync & Offline State:</strong> REST API integration using Axios and TanStack Query, supported by Redux Persist for offline-resilience.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          <CheckCircle2 size={16} className="text-[#31AAA9] shrink-0 mt-0.5" />
                          <span><strong>Search, Filtering & Validation:</strong> Multi-factor search with 300ms debouncing, pagination, and strict form schemas via React Hook Form and Zod.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="mb-8">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                        Technology Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {bizMobileProject.tech.map(tech => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-[#F5F7F7] border border-neutral-200 text-neutral-800 font-mono text-xs font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture footer badge */}
                  <div className="pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-[#31AAA9]" />
                      <span>Enterprise CRM & Financial Workflows</span>
                    </span>
                    <span className="text-[#31AAA9] font-bold">
                      iOS & Android
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
}