import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weeks, phases } from '../data';
import { useTheme } from '../context/ThemeContext';

const phaseColors = {
  1: { dot: 'bg-indigo-400', ring: 'ring-indigo-500/30', badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25', line: 'bg-indigo-500/40' },
  2: { dot: 'bg-orange-400', ring: 'ring-orange-500/30', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/25', line: 'bg-orange-500/40' },
  3: { dot: 'bg-teal-400', ring: 'ring-teal-500/30', badge: 'bg-teal-500/10 text-teal-400 border-teal-500/25', line: 'bg-teal-500/40' },
  4: { dot: 'bg-indigo-400', ring: 'ring-indigo-500/30', badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25', line: 'bg-indigo-500/40' },
};

function WeekCard({ w, onClick }) {
  const pc = phaseColors[w.phase];
  const { dark } = useTheme();
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (w.week - 1) * 0.04 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`group relative text-left border rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-full ${
        dark
          ? 'bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.06] hover:border-white/[0.14]'
          : 'bg-white border-gray-100 shadow-sm hover:border-indigo-200 hover:shadow-md'
      }`}
    >
      {/* Top bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl bg-gradient-to-r ${w.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="flex items-start justify-between mb-3">
        <div className={`tag-pill border text-[10px] ${pc.badge}`}>
          Week {w.week}
        </div>
        <div className={`w-2 h-2 rounded-full ${pc.dot} mt-1.5`} />
      </div>

      <h3 className="font-display font-bold text-base leading-snug mb-2">{w.title}</h3>
      <p className={`text-xs leading-relaxed mb-4 line-clamp-2 ${dark ? 'text-white/40' : 'text-gray-400'}`}>{w.focus}</p>

      <div className="flex items-center justify-between">
        <span className={`text-[11px] font-medium ${dark ? 'text-white/30' : 'text-gray-400'}`}>View details →</span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs bg-gradient-to-br ${w.color} opacity-70`}>
          {w.week}
        </div>
      </div>
    </motion.button>
  );
}

function WeekModal({ w, onClose }) {
  const pc = phaseColors[w.phase];
  const { dark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.92, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 30, opacity: 0 }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
        onClick={e => e.stopPropagation()}
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto border rounded-3xl ${
          dark ? 'bg-[#0f0f1e] border-white/[0.1]' : 'bg-white border-gray-200 shadow-2xl'
        }`}
      >
        {/* Gradient header */}
        <div className={`h-1.5 w-full rounded-t-3xl bg-gradient-to-r ${w.color}`} />

        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className={`tag-pill border mb-2 ${pc.badge}`}>Week {w.week} · Phase {w.phase}</div>
              <h2 className="font-display font-black text-2xl">{w.title}</h2>
            </div>
            <button onClick={onClose}
              className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center text-sm transition-colors ${
              dark
                ? 'bg-white/[0.06] border-white/[0.08] text-white/50 hover:text-white'
                : 'bg-gray-100 border-gray-200 text-gray-400 hover:text-gray-900'
            }`}>
              ✕
            </button>
          </div>

          <p className={`text-sm leading-relaxed mb-6 p-4 rounded-xl border ${
            dark ? 'text-white/50 bg-white/[0.03] border-white/[0.06]' : 'text-gray-500 bg-gray-50 border-gray-100'
          }`}>
            {w.focus}
          </p>

          {/* Learn */}
          <div className="mb-6">
            <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${dark ? 'text-white/35' : 'text-gray-400'}`}>📖 What to Learn</h4>
            <ul className="space-y-2">
              {w.learn.map((l, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                  <span className={`text-sm ${dark ? 'text-white/70' : 'text-gray-700'}`}>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to study */}
          {w.howToStudy && (
            <div className={`mb-6 p-4 rounded-xl border ${
              dark ? 'bg-white/[0.03] border-white/[0.06]' : 'bg-gray-50 border-gray-100'
            }`}>
              <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${dark ? 'text-white/35' : 'text-gray-400'}`}>💡 How to Study</h4>
              <p className={`text-sm leading-relaxed ${dark ? 'text-white/55' : 'text-gray-500'}`}>{w.howToStudy}</p>
            </div>
          )}

          {/* Exercise */}
          {w.exercise && (
            <div className="mb-6 p-4 bg-orange-500/5 rounded-xl border border-orange-500/15">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-orange-400/70 mb-2">🎯 Practical Exercise</h4>
              <p className={`text-sm leading-relaxed ${dark ? 'text-white/55' : 'text-gray-500'}`}>{w.exercise}</p>
            </div>
          )}

          {/* Build */}
          <div className="mb-6">
            <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${dark ? 'text-white/35' : 'text-gray-400'}`}>🛠️ What to Build</h4>
            <ul className="space-y-2">
              {w.build.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-teal-400 mt-0.5 shrink-0">✓</span>
                  <span className={`text-sm ${dark ? 'text-white/70' : 'text-gray-700'}`}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Output */}
          <div className="p-4 bg-teal-500/5 rounded-xl border border-teal-500/15">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-teal-400/70 mb-2">✦ Week {w.week} Output</h4>
            <p className={`text-sm font-medium ${dark ? 'text-white/65' : 'text-gray-700'}`}>{w.output}</p>
          </div>

          {/* Videos */}
          {w.videos && w.videos.length > 0 && (
            <div className="mt-6">
              <h4 className={`text-[11px] font-bold uppercase tracking-widest mb-3 ${dark ? 'text-white/35' : 'text-gray-400'}`}>
                🎬 Watch This Week
              </h4>
              <div className="space-y-2">
                {w.videos.map((v, i) => (
                  <a
                    key={i}
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${
                      dark
                        ? 'bg-white/[0.025] border-white/[0.06] hover:border-red-500/30 hover:bg-red-500/[0.05]'
                        : 'bg-gray-50 border-gray-100 hover:border-red-300 hover:bg-red-50'
                    }`}
                  >
                    <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors ${
                      dark ? 'bg-red-500/15 group-hover:bg-red-500/25' : 'bg-red-100 group-hover:bg-red-200'
                    }`}>
                      ▶
                    </div>
                    <div className="min-w-0">
                      <div className={`text-sm font-medium leading-snug truncate transition-colors ${
                        dark ? 'text-white/75 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                      }`}>
                        {v.title}
                      </div>
                      <div className={`text-xs mt-0.5 ${dark ? 'text-white/30' : 'text-gray-400'}`}>
                        {v.channel}
                      </div>
                    </div>
                    <span className={`shrink-0 ml-auto text-xs transition-colors ${dark ? 'text-white/20 group-hover:text-red-400' : 'text-gray-300 group-hover:text-red-500'}`}>↗</span>
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
  const [selected,    setSelected]    = useState(null);
  const [activePhase, setActivePhase] = useState(null);
  const { dark } = useTheme();

  const filtered = activePhase ? weeks.filter(w => w.phase === activePhase) : weeks;

  return (
    <section id="roadmap" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tag-pill bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-4 inline-block">The Journey</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">12-Week Roadmap</h2>
          <p className={`max-w-lg mx-auto ${dark ? 'text-white/45' : 'text-gray-500'}`}>Click any week to explore the full breakdown — what to learn, what to build, and what you'll have by the end.</p>
        </motion.div>

        {/* Phase filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActivePhase(null)}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activePhase === null
                ? dark
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-indigo-100 border-indigo-300 text-indigo-800'
                : `border-white/10 ${dark ? 'text-white/40 hover:text-white/70' : 'text-gray-400 hover:text-gray-700'}`
            }`}
          >
            All Phases
          </button>
          {phases.map(p => (
            <button
              key={p.id}
              onClick={() => setActivePhase(activePhase === p.id ? null : p.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activePhase === p.id
                  ? `bg-gradient-to-r ${p.color} ${p.border} ${p.text}`
                  : `border-white/10 ${dark ? 'text-white/40 hover:text-white/70' : 'text-gray-400 hover:text-gray-700'}`
              }`}
            >
              Phase {p.id}: {p.name} <span className="opacity-60 ml-1">({p.weeks})</span>
            </button>
          ))}
        </div>

        {/* Phase Labels */}
        <div className="hidden lg:grid grid-cols-12 gap-4 mb-4">
          {phases.map(p => {
            const weekCount = weeks.filter(w => w.phase === p.id).length;
            const colSpan = weekCount === 3 ? 'col-span-3' : weekCount === 4 ? 'col-span-4' : weekCount === 2 ? 'col-span-2' : 'col-span-3';
            return (
              <div key={p.id} className={`${colSpan} bg-gradient-to-r ${p.color} border ${p.border} rounded-xl px-4 py-2.5`}>
                <div className={`font-bold text-sm ${p.text}`}>Phase {p.id}: {p.name}</div>
                <div className={`text-xs ${dark ? 'text-white/40' : 'text-gray-400'}`}>Weeks {p.weeks}</div>
              </div>
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`mt-16 p-6 sm:p-8 border rounded-3xl ${
            dark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-100 shadow-sm'
          }`}
        >
          <h3 className="font-display font-bold text-xl mb-6 text-center">Weekly Output Targets</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {weeks.map(w => (
              <div key={w.week} className={`flex items-start gap-3 p-3 rounded-xl border ${
                dark ? 'bg-white/[0.025] border-white/[0.05]' : 'bg-gray-50 border-gray-100'
              }`}>
                <div className={`shrink-0 w-7 h-7 rounded-full bg-gradient-to-br ${w.color} flex items-center justify-center text-xs font-black`}>
                  {w.week}
                </div>
                <div className={`text-sm leading-snug ${dark ? 'text-white/55' : 'text-gray-600'}`}>{w.output}</div>
              </div>
            ))}
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
