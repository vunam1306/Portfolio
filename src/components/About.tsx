import { experience, personalInfo, skills } from '../data';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, PenTool } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 border-b border-white/5 relative bg-slate-950/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Kinh nghiệm & Học vấn</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-white/5">
              
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-slate-950 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                    <h4 className="text-lg font-medium text-white">{exp.role}</h4>
                    <span className="text-sm font-mono text-indigo-400">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}

              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-6 h-6 bg-slate-950 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                  <h4 className="text-lg font-medium text-white">{personalInfo.education.degree}</h4>
                  <span className="text-sm font-mono text-slate-500">{personalInfo.education.period}</span>
                </div>
                <p className="text-slate-400 font-medium mb-2">{personalInfo.education.university}</p>
              </div>

            </div>
          </motion.div>

          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
             <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Kỹ năng cốt lõi</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20">
              <h4 className="text-white font-medium mb-3">Triết lý làm việc</h4>
              <p className="text-slate-400 text-sm leading-relaxed italic">
                "Tôi không chỉ coi AI là công cụ hỗ trợ code, mà là người đồng hành trong việc giải bài toán. Sự kết hợp giữa khả năng <strong>Planning</strong> cẩn thận của một Business Analyst, định hướng <strong>UI/UX</strong> của Designer và tốc độ thực thi với công cụ AI chính là cách tôi tạo ra những sản phẩm vượt trội."
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
