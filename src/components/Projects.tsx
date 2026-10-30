import { motion } from 'framer-motion';
import {
  ExternalLink,
  Globe,
  Smartphone,
  CheckCircle2,
  Layers,
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
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                
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

                {/* Right: Product Image Fitting Container (col-span-5) */}
                <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-neutral-200 bg-neutral-100 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full overflow-hidden group">
                  {astroProject.liveUrl ? (
                    <a
                      href={astroProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full h-full relative"
                      title="Visit AstroAura24"
                    >
                      <img
                        src={astroProject.image}
                        alt="AstroAura24 - E-commerce & Live Consultation Platform"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 text-[11px] font-mono font-bold text-neutral-800 shadow-sm group-hover:border-[#31AAA9] transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#31AAA9] animate-pulse" />
                          Live Website
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="w-full h-full relative">
                      <img
                        src={astroProject.image}
                        alt="AstroAura24 - E-commerce & Live Consultation Platform"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          )}

          {/* PROJECT 2: Business Management Mobile Application (EaziQuote) */}
          {bizMobileProject && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                
                {/* Left: Mobile App Image Fitting Container (col-span-5) */}
                <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-neutral-200 bg-neutral-100 relative min-h-[280px] sm:min-h-[380px] lg:min-h-full overflow-hidden group order-2 lg:order-1">
                  <div className="w-full h-full relative">
                    <img
                      src={bizMobileProject.image}
                      alt="EaziQuote - Business Management Mobile Application"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 text-[11px] font-mono font-bold text-neutral-800 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#31AAA9] animate-pulse" />
                        React Native Mobile App
                      </span>
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
                      <Layers size={14} className="text-[#31AAA9]" />
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