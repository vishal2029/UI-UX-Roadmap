import { useState } from 'react';
import { motion } from 'framer-motion';
import { aiTools, inspoSites, routine, youtubeLinks } from '../data';

function AIToolCard({ tool, index }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }} viewport={{ once: true }}
      className="relative cursor-pointer" style={{ perspective: 1000 }}
      onClick={() => setFlipped(v => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d', position: 'relative', minHeight: 200 }}
      >
        {/* Front */}
        <div className="absolute inset-0 brand-card p-6 flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-indigo-50">{tool.icon}</div>
            <div className="font-bold text-base text-slate-800">{tool.name}</div>
          </div>
          <p className="text-sm leading-relaxed flex-1 text-slate-500">{tool.why}</p>
          <div className="mt-4 text-xs font-medium text-indigo-500">Tap to see how to use →</div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-2xl p-6 flex flex-col bg-indigo-600 border border-indigo-500"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="text-xs font-bold uppercase tracking-widest mb-3 text-indigo-200">💬 How to Use</div>
          <p className="text-sm leading-relaxed flex-1 text-indigo-100">{tool.how}</p>
          <div className="mt-4 text-xs font-medium text-indigo-300">Tap to flip back ←</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ResourcesSection() {
  const [ytTab, setYtTab] = useState('english');

  return (
    <div>
      {/* AI Tools */}
      <section id="tools" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
            <span className="section-tag mb-4 inline-flex" style={{ background: '#ECFDF5', color: '#059669', borderColor: '#A7F3D0' }}>Modern Workflow</span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-slate-900">AI Tools in Design</h2>
            <p className="max-w-md mx-auto text-slate-500">Speed up the process — never replace your thinking. Tap each card to see how to use it.</p>
          </motion.div>

          {/* Tip banner */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mb-10 p-4 rounded-2xl bg-orange-50 border border-orange-200 flex items-start gap-3 max-w-2xl mx-auto">
            <span className="text-xl shrink-0">💡</span>
            <p className="text-sm leading-relaxed text-slate-600">
              <strong className="text-orange-600">Good habit:</strong> Sketch manually first → ask AI for 5 alternatives → select one → refine in Figma. Your portfolio shows <em>your</em> thinking, not just the tool output.
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="section-tag mb-4 inline-flex" style={{ background: '#FFF7ED', color: '#EA580C', borderColor: '#FED7AA' }}>Where to Look</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-slate-900">Inspiration Sources</h2>
            <p className="text-sm max-w-lg mx-auto text-slate-500">Study like a designer — ask: what is the goal of this page? How does the layout guide attention?</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {inspoSites.map((s, i) => (
              <motion.a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="block brand-card p-5">
                <div className="text-3xl mb-3">{s.emoji}</div>
                <div className="font-bold text-sm mb-1 text-slate-800">{s.name}</div>
                <div className="text-xs leading-relaxed text-slate-400">{s.desc}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Routine */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="section-tag mb-4 inline-flex">Daily Practice</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">Your Weekly Routine</h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {routine.map((r, i) => (
              <motion.div key={r.day}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                className="brand-card p-4 text-center">
                <div className="text-xs font-black uppercase tracking-widest text-indigo-600 mb-2">{r.day}</div>
                <div className="text-xs leading-snug text-slate-500">{r.task}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Resources */}
      <section id="resources" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="section-tag mb-4 inline-flex" style={{ background: '#FEF2F2', color: '#DC2626', borderColor: '#FECACA' }}>Learning</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3 text-slate-900">Curated YouTube Tutorials</h2>
            <p className="text-sm max-w-lg mx-auto text-slate-500">Chosen for relevance and usefulness, not just popularity. Mixes English and Hindi.</p>
          </motion.div>

          {/* Tab toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-100 border border-slate-200 rounded-full p-1">
              {['english', 'hindi'].map(tab => (
                <button key={tab} onClick={() => setYtTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 capitalize ${
                    ytTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}>
                  {tab === 'english' ? '🇬🇧 English' : '🇮🇳 Hindi'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {youtubeLinks[ytTab].map((v, i) => (
              <motion.a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 brand-card group">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-red-100 group-hover:bg-red-200 flex items-center justify-center text-sm transition-colors">▶</div>
                <div>
                  <div className="text-sm font-medium leading-snug text-slate-700 group-hover:text-slate-900 transition-colors">{v.title}</div>
                  <div className="text-xs mt-1 text-slate-400">{v.channel}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
