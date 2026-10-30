import { motion } from 'framer-motion';
import { Download, ArrowDown, ArrowUpRight, Mail, CheckCircle2, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import type { Profile } from '../types/portfolio';

export default function Hero({ profile }: { profile: Profile }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 70;
      const elPosition = el.getBoundingClientRect().top;
      const offset = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-white border-b border-neutral-100 overflow-hidden"
    >
      {/* Subtle technical background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#111111 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle brand color accents (no purple/pink) */}
      <div className="absolute top-12 right-12 w-96 h-96 bg-[#31AAA9]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 left-12 w-72 h-72 bg-[#1CC5DC]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FDF4D2] border border-[#ebdcb0] text-[#111111] text-xs font-bold tracking-wider uppercase mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#31AAA9] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#31AAA9]" />
              </span>
              <span>{profile.status}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#111111] leading-[1.12] tracking-tight mb-5">
              Building Digital Experiences That{' '}
              <span className="relative inline-block text-[#111111]">
                Solve Real Problems
                <span className="absolute bottom-1 left-0 right-0 h-[4px] bg-[#31AAA9]/30 rounded-full" />
              </span>
              <span className="text-[#31AAA9]">.</span>
            </h1>

            {/* Introduce Me */}
            <p className="text-lg sm:text-xl font-semibold text-neutral-800 leading-snug mb-3">
              {profile.heroIntro}
            </p>

            {/* Supporting Paragraph */}
            <p className="text-neutral-600 text-base leading-relaxed max-w-xl mb-6">
              {profile.heroDescription}
            </p>

            {/* Highlight Technologies */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mr-1 font-bold">
                Core Stack:
              </span>
              {['React.js', 'React Native', 'TypeScript'].map(tech => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F5F7F7] border border-neutral-200 text-neutral-800 font-mono text-xs font-semibold hover:border-[#31AAA9] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#31AAA9]" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href={profile.resumeUrl}
                download="Manoj_C_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#31AAA9] hover:bg-[#269695] text-white font-bold text-sm shadow-sm hover:shadow transition-all"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#111111] hover:border-[#31AAA9] text-[#111111] hover:text-[#31AAA9] bg-white font-bold text-sm transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown size={16} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6 border-t border-neutral-100 w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                Connect:
              </span>
              <div className="flex items-center gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-[#31AAA9] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-[#31AAA9] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-700 hover:text-[#31AAA9] transition-colors"
                  aria-label="Send an email"
                >
                  <Mail size={15} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Technical Developer Visual Composition */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Top Deployment Indicator Badge */}
              <div className="flex items-center justify-between mb-3 px-1 text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#31AAA9] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#31AAA9]" />
                  </span>
                  <span className="font-semibold text-neutral-700">Production Ready</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <Terminal size={12} />
                  <span>branch: main [verified]</span>
                </div>
              </div>

              {/* Main Code Editor Window */}
              <div className="rounded-2xl bg-[#111111] text-neutral-200 border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden font-mono text-xs">
                
                {/* Editor Header Bar */}
                <div className="h-10 px-4 bg-[#1a1a1a] border-b border-neutral-800 flex items-center justify-between select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
                    <span className="px-2.5 py-0.5 rounded bg-[#111111] text-neutral-300 font-medium border border-neutral-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-sm bg-[#31AAA9]" />
                      DeveloperProfile.ts
                    </span>
                  </div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                    TypeScript
                  </div>
                </div>

                {/* Editor Content Area */}
                <div className="p-5 text-[12px] leading-relaxed overflow-x-auto">
                  <div className="space-y-1">
                    <p className="text-neutral-500">// Software Developer Specification</p>
                    <p>
                      <span className="text-[#1CC5DC]">interface</span>{' '}
                      <span className="text-[#FDF4D2]">DeveloperProfile</span> {'{'}
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">engineer:</span>{' '}
                      <span className="text-[#31AAA9]">'Manoj C'</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">primarySpecialization:</span>{' '}
                      <span className="text-amber-300">['React.js', 'React Native', 'TypeScript']</span>;
                    </p>
                    <p className="pl-4">
                      <span className="text-neutral-400">architecture:</span> {'{'}
                    </p>
                    <p className="pl-8">
                      <span className="text-neutral-400">web:</span>{' '}
                      <span className="text-emerald-400">'Scalable Component Architecture'</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-neutral-400">mobile:</span>{' '}
                      <span className="text-emerald-400">'Cross-Platform React Native'</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-neutral-400">state:</span>{' '}
                      <span className="text-emerald-400">'TanStack Query + Redux Toolkit'</span>,
                    </p>
                    <p className="pl-8">
                      <span className="text-neutral-400">dataValidation:</span>{' '}
                      <span className="text-emerald-400">'Zod + React Hook Form'</span>,
                    </p>
                    <p className="pl-4">{'}'};</p>
                    <p className="pl-4">
                      <span className="text-[#1CC5DC]">status:</span>{' '}
                      <span className="text-[#31AAA9]">'Open to Opportunities'</span>;
                    </p>
                    <p>{'}'};</p>
                  </div>
                </div>
              </div>

              {/* Floating API Request/Response Card */}
              <div className="mt-4 bg-white rounded-xl p-4 border border-neutral-200 shadow-lg font-mono">
                <div className="flex items-center justify-between text-[11px] mb-2 pb-2 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#31AAA9]/15 text-[#269695] font-bold text-[10px]">
                      GET
                    </span>
                    <span className="text-neutral-700 font-semibold text-xs">/api/v1/system/health</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[#31AAA9] font-bold text-[11px]">
                    <CheckCircle2 size={13} />
                    200 OK
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-500">
                  <span>Latency: <strong className="text-neutral-800">18ms</strong></span>
                  <span>Cache: <strong className="text-neutral-800">HIT (TanStack)</strong></span>
                  <span className="hidden sm:inline">Region: <strong className="text-neutral-800">ap-south-1</strong></span>
                </div>
              </div>

              {/* Floating Technology Badges on edges */}
              <div className="flex items-center justify-between mt-3 px-1 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#FDF4D2] text-[#111111] font-semibold text-[11px] border border-[#f0e2b6]">
                    Next.js + Node.js
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#F5F7F7] text-neutral-700 font-semibold text-[11px] border border-neutral-200">
                    REST API + Zod
                  </span>
                </div>
                <span className="text-[11px] text-neutral-400 flex items-center gap-1 font-sans">
                  Figma to Code <ArrowUpRight size={12} />
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}