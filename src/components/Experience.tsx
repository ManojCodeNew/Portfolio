import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, CheckCircle, Code2, Cpu } from 'lucide-react';
import type { Experience } from '../types/portfolio';

const experienceIcons: Record<string, React.ReactNode> = {
  silversky: <Code2 size={18} className="text-[#31AAA9]" />,
  enterpriseminds: <Cpu size={18} className="text-[#31AAA9]" />,
};

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-24 bg-white border-b border-neutral-200 relative">
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
            <Briefcase size={13} />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            My Professional Journey<span className="text-[#31AAA9]">.</span>
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Practical engineering experience delivering production web architectures, cross-platform mobile solutions, and systems-level programming.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-7 top-4 bottom-4 w-0.5 bg-neutral-200" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Indicator Dot */}
                <div className="absolute left-1.5 sm:left-4.5 top-2.5 w-6 h-6 rounded-full bg-white border-2 border-[#31AAA9] flex items-center justify-center shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#31AAA9]" />
                </div>

                {/* Experience Card */}
                <div className="bg-[#F5F7F7]/60 hover:bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xs hover:shadow-md hover:border-[#31AAA9]/40 transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-neutral-200/80">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="p-1.5 rounded-md bg-white border border-neutral-200 shadow-xs">
                          {experienceIcons[exp.id] || <Briefcase size={16} className="text-[#31AAA9]" />}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-600">
                        <span className="font-bold text-[#111111]">{exp.company}</span>
                        <span className="text-neutral-300">•</span>
                        <span className="inline-flex items-center gap-1 text-neutral-500 text-xs">
                          <MapPin size={13} className="text-neutral-400" />
                          {exp.location}
                        </span>
                        {exp.workMode && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FDF4D2] border border-[#ebdcb0] text-[#111111] text-[11px] font-mono font-bold uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#31AAA9]" />
                            {exp.workMode}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="self-start sm:self-center">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FDF4D2] border border-[#ebdcb0] text-[#111111] font-mono text-xs font-bold">
                        <Calendar size={13} className="text-[#31AAA9]" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Contributions */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3">
                      Key Contributions & Engineering Impact:
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed bg-white/80 p-3 rounded-xl border border-neutral-200/60"
                        >
                          <CheckCircle
                            size={16}
                            className="text-[#31AAA9] shrink-0 mt-0.5"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                      Technologies & Tools Applied:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-white border border-neutral-200 text-neutral-800 font-mono text-xs font-semibold hover:border-[#31AAA9] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}