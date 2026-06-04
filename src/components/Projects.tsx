import { projects } from '../data';
import { motion } from 'motion/react';
import { Bot, ExternalLink, Github, Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-24 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
             <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                <Code2 className="w-6 h-6" />
              </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Dự án & Ứng dụng AI</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl">
            Các dự án thực tế tôi đã xây dựng, tập trung vào kiến trúc hệ thống, UI/UX và cách tôi tích hợp công cụ AI để đẩy nhanh tiến độ và độ chính xác.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden hover:bg-white/[0.04] transition-colors"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">{project.name}</h3>
                    <p className="text-sm font-medium text-indigo-400/80">{project.role}</p>
                  </div>
                  <div className="flex items-center gap-3 text-slate-500">
                    <a href={project.githubUrl} target="https://github.com/vunam1306" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                    <a href={project.demoUrl} className="hover:text-white transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </div>
                </div>

                <p className="text-white font-medium mt-2">{project.shortDesc}</p>
                <p className="text-slate-400 text-sm mt-3 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-white/5 rounded font-mono text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="rounded-xl bg-indigo-950/30 border border-indigo-500/20 p-5 relative overflow-hidden">
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <Bot className="w-5 h-5 text-indigo-400" />
                    <span className="text-sm font-semibold text-indigo-300 uppercase tracking-wider">Cách thức ứng dụng AI</span>
                  </div>
                  
                  <div className="space-y-3 relative z-10">
                    {project.aiUsage.map((ai, i) => (
                      <div key={i} className="text-sm leading-relaxed">
                        <span className="text-white font-semibold inline-block mr-2 bg-indigo-500/20 px-1.5 rounded">{ai.tool}</span> 
                        <span className="text-slate-300">{ai.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
