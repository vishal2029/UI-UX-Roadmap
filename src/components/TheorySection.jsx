import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theory, terms } from '../data';

function TheoryAccordion({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }} viewport={{ once: true }}
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        open ? 'border-indigo-200 bg-indigo-50/50' : 'brand-card'
      }`}
    >
      <button onClick={() => setOpen(v => !v)} className="w-full flex items-center gap-4 p-5 text-left">
        <span className="text-2xl shrink-0">{item.icon}</span>
        <span className="font-semibold text-sm flex-1 text-slate-800">{item.name}</span>
        <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.25 }}
          className={`text-sm shrink-0 transition-colors ${open ? 'text-indigo-500' : 'text-slate-300'}`}>
          ▶
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <div className="px-5 pb-5 pt-0 border-t border-slate-100">
              <p className="text-sm leading-relaxed pt-4 text-slate-500">{item.body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TheorySection() {
  const termColors = [
    'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100',
    'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100',
    'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100',
  ];

  return (
    <section id="theory" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <span className="section-tag mb-4 inline-flex">Core Theory</span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4 text-slate-900">Concepts You Must Understand</h2>
          <p className="max-w-md mx-auto text-slate-500">Click each concept to expand the explanation. These are the foundations everything else builds on.</p>
        </motion.div>

        {/* Accordion grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-20">
          {theory.map((item, i) => (
            <TheoryAccordion key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Terminology cloud */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="section-tag mb-4 inline-flex" style={{ background: '#ECFDF5', color: '#059669', borderColor: '#A7F3D0' }}>Terminology</span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl mb-8 text-slate-900">Key Terms to Know</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {terms.map((t, i) => (
              <motion.a
                key={t.label} href={t.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.02, duration: 0.3 }} viewport={{ once: true }}
                whileHover={{ scale: 1.06, y: -2 }}
                className={`group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${termColors[t.type - 1]}`}
              >
                {t.label}
                <span className="opacity-0 group-hover:opacity-60 transition-opacity text-[10px] leading-none">↗</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
