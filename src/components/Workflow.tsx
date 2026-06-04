import { workflow } from '../data';
import { motion } from 'motion/react';
import { Sparkles, Terminal, Rocket, ChevronRight } from 'lucide-react';

const icons = {
  plan: Sparkles,
  code: Terminal,
  deploy: Rocket,
};

export default function Workflow() {
  return (
    <section className="py-24 relative bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">My AI-Driven Workflow</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Quy trình khép kín kết hợp chặt chẽ giữa tư duy con người và sức mạnh của các mô hình AI hiện đại.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {workflow.map((item, idx) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 transition-colors"
               >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-indigo-400 mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
                {idx < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 text-white/10">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
               </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
