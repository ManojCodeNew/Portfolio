import { motion } from 'framer-motion';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle,
} from 'lucide-react';
import type { Education, Certification } from '../types/portfolio';

export default function EducationSection({
  education,
  certifications,
}: {
  education: Education[];
  certifications: Certification[];
}) {
  return (
    <section id="education" className="py-24 bg-[#F5F7F7] border-b border-neutral-200">
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
            <GraduationCap size={14} />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-4">
            Education & Certifications<span className="text-[#31AAA9]">.</span>
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed">
            Formal computer science education and verified industry technical certifications in cloud computing and IoT.
          </p>
        </motion.div>

        {/* 1. Academic Degrees Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200 shadow-xs hover:shadow-md hover:border-[#31AAA9]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#F5F7F7] border border-neutral-200">
                    <GraduationCap size={22} className="text-[#31AAA9]" />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-lg bg-[#FDF4D2] border border-[#ebdcb0] text-[#111111] font-mono text-xs font-bold">
                    {edu.score}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#111111] tracking-tight mb-1">
                  {edu.degree}
                </h3>
                <p className="text-neutral-700 font-semibold text-sm mb-4">
                  {edu.institution}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#31AAA9]" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-neutral-400" />
                  {edu.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#31AAA9]" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              Verified Certifications & Credentials
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 border border-neutral-200 shadow-xs hover:border-[#31AAA9]/40 transition-all flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-[#FDF4D2] border border-[#ebdcb0] shrink-0">
                  <Award size={20} className="text-[#31AAA9]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-bold text-sm text-[#111111] leading-snug">
                      {cert.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                      <CheckCircle size={11} />
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 font-mono">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}