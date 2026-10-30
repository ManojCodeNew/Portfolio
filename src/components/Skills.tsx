import { motion } from 'framer-motion';
import {
  Code,
  Layers,
  FileCheck2,
  Server,
  Wrench,
  Check,
  Terminal,
} from 'lucide-react';
import type { SkillCategory } from '../types/portfolio';

const categoryMeta: Record<
  string,
  {
    icon: React.ReactNode;
    description: string;
    badge: string;
  }
> = {
  frontend: {
    icon: <Code size={20} className="text-[#31AAA9]" />,
    description: 'Component architecture, cross-platform mobile development, and modern responsive layouts.',
    badge: 'UI & Application Layer',
  },
  state: {
    icon: <Layers size={20} className="text-[#31AAA9]" />,
    description: 'Predictable client state, offline storage persistence, and asynchronous server cache management.',
    badge: 'State & Caching',
  },
  forms: {
    icon: <FileCheck2 size={20} className="text-[#31AAA9]" />,
    description: 'Type-safe schema validation, controlled and uncontrolled forms, and resilient REST integration.',
    badge: 'Data & Validation',
  },
  backend: {
    icon: <Server size={20} className="text-[#31AAA9]" />,
    description: 'RESTful API endpoints, server routing, and scalable NoSQL document persistence.',
    badge: 'Server & Database',
  },
  tools: {
    icon: <Wrench size={20} className="text-[#31AAA9]" />,
    description: 'Version control, multi-stack mobile navigation, performance optimization, and low-level C.',
    badge: 'Workflow & Tooling',
  },
};

export default function Skills({ skillCategories }: { skillCategories: SkillCategory[] }) {
  return (
    <section id="skills" className="py-24 bg-white border-b border-neutral-200">
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
            <Terminal size={13} />
            <span>Developer Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            My Technology Stack<span className="text-[#31AAA9]">.</span>
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            The core frameworks, state libraries, and developer tools I leverage to build resilient, maintainable software.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const meta = categoryMeta[category.id] || {
              icon: <Code size={20} className="text-[#31AAA9]" />,
              description: 'Technical tools and languages.',
              badge: 'Stack',
            };

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-[#F5F7F7]/60 hover:bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 hover:border-[#31AAA9]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-white border border-neutral-200 shadow-xs">
                      {meta.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-600 font-mono text-[11px] font-semibold">
                      {meta.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#111111] tracking-tight mb-2">
                    {category.categoryName}
                  </h3>

                  <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                    {meta.description}
                  </p>
                </div>

                {/* Skills Pills */}
                <div>
                  <div className="h-px bg-neutral-200/80 mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-mono text-xs font-semibold hover:border-[#31AAA9] hover:text-[#31AAA9] transition-colors shadow-2xs"
                      >
                        <Check size={12} className="text-[#31AAA9]" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Engineering Standards Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-600"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#31AAA9]" />
            <span className="font-bold text-[#111111]">Core Development Principles:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-500">
            <span>• Type Safety with TypeScript</span>
            <span>• Component Modularity</span>
            <span>• Concurrency-Safe APIs</span>
            <span>• Pixel-Accurate UI</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}