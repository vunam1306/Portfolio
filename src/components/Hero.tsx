import { personalInfo } from '../data';
import { Mail, Phone, Github, Linkedin, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-medium mb-8">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed mb-10 md:pr-12">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" /> vunam13069@gmail.com
            </a>
            <a href={personalInfo.github} target="https://github.com/vunam1306" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> TOEIC {personalInfo.toeic}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Ha Noi, Vietnam
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
