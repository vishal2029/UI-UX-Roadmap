import { useState } from 'react';
import { motion } from 'framer-motion';
import { aiTools, inspoSites, routine, youtubeLinks } from '../data';

function AIToolCard({ tool, index }) {
  const [flipped, setFlipped] = useState(false);
    return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative cursor-pointer"
      style={{ perspective: 1000 }}
      onClick={() => setFlipped(v => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d', position: 'relative', minHeight: 200 }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 border rounded-2xl p-6 flex flex-col ${
            'bg-white border-border shadow-sm'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: tool.bg }}>
              {tool.icon}
            </div>
            <div className="font-bold text-base">{tool.name}</div>
          </div>
          <p className={`text-sm leading-relaxed flex-1 text-slate-500`}>{tool.why}</p>
          <div className={`mt-4 text-xs font-medium text-slate-400`}>Tap to see how to use →</div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 border rounded-2xl p-6 flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: tool.bg,
            borderColor: `${tool.color}40`,
          }}
        >
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: tool.color }}>
            💬 How to Use
          </div>
          <p className={`text-white/75 text-sm leading-relaxed flex-1 text-slate-700`}>{tool.how}</p>
          <div className={`mt-4 text-xs font-medium text-slate-400`}>Tap to flip back ←</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const dark = false;
export default function ResourcesSection() {
  const [ytTab, setYtTab] = useState('english');
  
  return (
    <div>
      {/* AI Tools */}
      <section id="tools" className="py-32 px-6 relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-teal-500/5 blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span className="tag-pill bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-4 inline-block">Modern Workflow</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">AI Tools in Design</h2>
            <p className={`max-w-md mx-auto text-slate-500`}>Speed up the process — never replace your thinking. Tap each card to see how to use it.</p>
          </motion.div>

          {/* Tip banner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-10 p-4 rounded-2xl bg-orange-500/[0.06] border border-orange-500/15 flex items-start gap-3 max-w-2xl mx-auto"
          >
            <span className="text-xl shrink-0">💡</span>
            <p className={`text-sm leading-relaxed text-slate-600`}>
              <strong className="text-orange-400">Good habit:</strong> Sketch manually first → ask AI for 5 alternatives → select one → refine in Figma. Your portfolio shows <em>your</em> thinking, not just the tool output.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiTools.map((t, i) => <AIToolCard key={t.name} tool={t} index={i} />)}
          </div>
        </div>
      </section>

      {/* Inspiration Sites */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="tag-pill bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-4 inline-block">Where to Look</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">Inspiration Sources</h2>
            <p className={`text-sm max-w-lg mx-auto text-slate-500`}>Study like a designer — ask: what is the goal of this page? How does the layout guide attention? What patterns are repeated?</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {inspoSites.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`block p-5 border rounded-2xl transition-all ${
                  dark
                    ? 'bg-white/[0.03] border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.06]'
                    : 'bg-white border-border shadow-sm hover:border-indigo-200 hover:shadow-md'
                }`}
              >
                <div className="text-3xl mb-3">{s.emoji}</div>
                <div className="font-bold text-sm mb-1">{s.name}</div>
                <div className={`text-xs leading-relaxed text-slate-400`}>{s.desc}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Routine */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="tag-pill bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-4 inline-block">Daily Practice</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl">Your Weekly Routine</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {routine.map((r, i) => (
              <motion.div
                key={r.day}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className={`bg-white/[0.03] border rounded-2xl p-4 text-center ${
                'bg-white border-border shadow-sm hover:border-indigo-300'
              } transition-colors`}
              >
                <div className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-2">{r.day}</div>
                <div className={`text-xs leading-snug text-slate-500`}>{r.task}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Resources */}
      <section id="resources" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="tag-pill bg-red-500/10 border border-red-500/20 text-red-400 mb-4 inline-block">Learning</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">Curated YouTube Tutorials</h2>
            <p className={`text-sm max-w-lg mx-auto text-slate-500`}>Chosen for relevance and usefulness, not just popularity. Mixes English and Hindi so you can learn in the language that feels easiest.</p>
          </motion.div>

          {/* Tab toggle */}
          <div className="flex justify-center mb-8">
            <div className={`inline-flex border rounded-full p-1 ${
            'bg-surface2 border-border'
          }`}>
              {['english', 'hindi'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setYtTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                    ytTab === tab
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab === 'english' ? '🇬🇧 English' : '🇮🇳 Hindi'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {youtubeLinks[ytTab].map((v, i) => (
              <motion.a
                key={i}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`flex items-start gap-3 p-4 border rounded-xl transition-all group ${
                  dark
                    ? 'bg-white/[0.03] border-white/[0.06] hover:border-red-500/25 hover:bg-white/[0.06]'
                    : 'bg-white border-border shadow-sm hover:border-red-300'
                }`}
              >
                <div className="shrink-0 w-9 h-9 rounded-lg bg-red-500/15 flex items-center justify-center text-sm group-hover:bg-red-500/25 transition-colors">
                  ▶
                </div>
                <div>
                  <div className={`text-sm font-medium leading-snug transition-colors text-slate-700 group-hover:text-slate-900`}>{v.title}</div>
                  <div className={`text-xs mt-1 text-slate-400`}>{v.channel}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
