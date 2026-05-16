import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weeks, phases } from '../data';

const phaseAccent = {
  1: { dot: 'bg-indigo-500', badge: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
  2: { dot: 'bg-orange-500', badge: 'bg-orange-50 text-orange-600 border-orange-200' },
  3: { dot: 'bg-emerald-500', badge: 'bg-emerald-50 text-emerald-600 border-emerald-200' },
  4: { dot: 'bg-violet-500', badge: 'bg-violet-50 text-violet-600 border-violet-200' },
};

function WeekCard({ w, onClick }) {
  const pa = phaseAccent[w.phase];
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (w.week - 1) * 0.04 }} viewport={{ once: true }}
      onClick={onClick}
      className="brand-card group relative text-left p-5 w-full"
    >
      {/* Top accent bar on hover */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl ${pa.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="flex items-start justify-between mb-3">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold border ${pa.badge}`}>
          Week {w.week}
        </span>
        <div className={`w-2 h-2 rounded-full ${pa.dot} mt-1.5`} />
      </div>

      <h3 className="font-display font-bold text-[15px] leading-snug mb-2 text-slate-800">{w.title}</h3>
      <p className="text-xs leading-relaxed mb-4 line-clamp-2 text-slate-400">{w.focus}</p>

      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-indigo-500 group-hover:text-indigo-600 transition-colors">View details →</span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${pa.dot}`}>
          {w.week}
        </div>
      </div>
    </motion.button>
  );
}

function WeekModal({ w, onClose }) {
  const pa = phaseAccent[w.phase];
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl shadow-2xl"
      >
        {/* Header accent */}
        <div className={`h-1.5 w-full rounded-t-2xl ${pa.dot}`} />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold border mb-2 ${pa.badge}`}>
                Week {w.week} · Phase {w.phase}
              </span>
              <h2 className="font-display font-bold text-2xl text-slate-900">{w.title}</h2>
            </div>
            <button onClick={onClose} className="shrink-0 w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-sm text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">
              ✕
            </button>
          </div>

          <p className="text-sm leading-relaxed mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-600">{w.focus}</p>

          {/* Learn */}
          <div className="mb-6">
            <h4 className="text-[11px] font-bold uppercase tracking-widest mb-3 text-slate-400">📖 What to Learn</h4>
            <ul className="space-y-2">
              {w.learn.map((l, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-indigo-500 mt-0.5 shrink-0 font-bold">→</span>
                  <span className="text-sm text-slate-700">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to study */}
          {w.howToStudy && (
            <div className="mb-6 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
              <h4 className="text-[11px] font-bold uppercase tracking-widest mb-2 text-indigo-600">💡 How to Study</h4>
              <p className="text-sm leading-relaxed text-slate-600">{w.howToStudy}</p>
            </div>
          )}

          {/* Exercise */}
          {w.exercise && (
            <div className="mb-6 p-4 rounded-xl bg-orange-50 border border-orange-100">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-orange-600 mb-2">🎯 Practical Exercise</h4>
              <p className="text-sm leading-relaxed text-slate-600">{w.exercise}</p>
            </div>
          )}

          {/* Build */}
          <div className="mb-6">
            <h4 className="text-[11px] font-bold uppercase tracking-widest mb-3 text-slate-400">🛠️ What to Build</h4>
            <ul className="space-y-2">
              {w.build.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-0.5 shrink-0 font-bold">✓</span>
                  <span className="text-sm text-slate-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Output */}
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 mb-2">✦ Week {w.week} Output</h4>
            <p className="text-sm font-medium text-slate-700">{w.output}</p>
          </div>

          {/* Videos */}
          {w.videos && w.videos.length > 0 && (
            <div className="mt-6">
              <h4 className="text-[11px] font-bold uppercase tracking-widest mb-3 text-slate-400">🎬 Watch This Week</h4>
              <div className="space-y-2">
                {w.videos.map((v, i) => (
                  <a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-red-50 transition-all group">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-red-100 group-hover:bg-red-200 flex items-center justify-center text-sm transition-colors">▶</div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium leading-snug truncate text-slate-700 group-hover:text-slate-900 transition-colors">{v.title}</div>
                      <div className="text-xs mt-0.5 text-slate-400">{v.channel}</div>
                    </div>
                    <span className="shrink-0 ml-auto text-xs text-slate-300 group-hover:text-red-500 transition-colors">↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function RoadmapSection() {
  const [selected, setSelected] = useState(null);
  const [activePhase, setActivePhase] = useState(null);

  const filtered = activePhase ? weeks.filter(w => w.phase === activePhase) : weeks;

  return (
    <section id="roadmap" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="section-tag mb-4 inline-flex">The Journey</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-slate-900">12-Week Roadmap</h2>
          <p className="max-w-lg mx-auto text-slate-500">Click any week to explore the full breakdown — what to learn, what to build, and what you'll have by the end.</p>
        </motion.div>

        {/* Phase filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button onClick={() => setActivePhase(null)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
              activePhase === null
                ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                : 'border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300'
            }`}>
            All Phases
          </button>
          {phases.map(p => {
            const pa = phaseAccent[p.id];
            return (
              <button key={p.id} onClick={() => setActivePhase(activePhase === p.id ? null : p.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activePhase === p.id
                    ? `${pa.badge}`
                    : 'border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-300'
                }`}>
                Phase {p.id}: {p.name} <span className="opacity-50 ml-1">({p.weeks})</span>
              </button>
            );
          })}
        </div>

        {/* Weeks grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filtered.map(w => (
              <motion.div key={w.week} layout>
                <WeekCard w={w} onClick={() => setSelected(w)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Output timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm"
        >
          <h3 className="font-display font-bold text-xl mb-6 text-center text-slate-800">Weekly Output Targets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {weeks.map(w => {
              const pa = phaseAccent[w.phase];
              return (
                <div key={w.week} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className={`shrink-0 w-7 h-7 rounded-full ${pa.dot} flex items-center justify-center text-[10px] font-bold text-white`}>
                    {w.week}
                  </div>
                  <div className="text-sm leading-snug text-slate-600">{w.output}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <WeekModal w={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
