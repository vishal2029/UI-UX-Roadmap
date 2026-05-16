import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theory, terms } from '../data';
import { useTheme } from '../context/ThemeContext';

function TheoryAccordion({ item, index }) {
  const [open, setOpen] = useState(false);
  const { dark } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        open
          ? 'border-indigo-500/30 ' + (dark ? 'bg-indigo-500/[0.04]' : 'bg-indigo-50')
          : dark ? 'border-white/[0.07] bg-white/[0.025]' : 'border-gray-100 bg-white shadow-sm'
      }`}
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-4 p-5 text-left"
      >
        <span className="text-2xl shrink-0">{item.icon}</span>
        <span className="font-semibold text-sm flex-1">{item.name}</span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.25 }}
          className={`text-sm shrink-0 transition-colors ${open ? 'text-indigo-500' : dark ? 'text-white/30' : 'text-gray-400'}`}
        >
          ▶
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={`px-5 pb-5 pt-0 border-t ${dark ? 'border-white/[0.06]' : 'border-gray-100'}`}>
              <p className={`text-sm leading-relaxed pt-4 ${dark ? 'text-white/55' : 'text-gray-500'}`}>{item.body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TheorySection() {
  const { dark } = useTheme();
  const termColors = [
    dark
      ? 'bg-indigo-500/10 border-indigo-500/25 text-indigo-300'
      : 'bg-indigo-50 border-indigo-200 text-indigo-700',
    dark
      ? 'bg-orange-500/10 border-orange-500/20 text-orange-300'
      : 'bg-orange-50 border-orange-200 text-orange-700',
    dark
      ? 'bg-teal-500/10 border-teal-500/20 text-teal-300'
      : 'bg-teal-50 border-teal-200 text-teal-700',
  ];
  return (
    <section id="theory" className="py-32 px-6 relative">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-600/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="tag-pill bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4 inline-block">Core Theory</span>
          <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">Concepts You Must Understand</h2>
          <p className={`max-w-md mx-auto ${dark ? 'text-white/45' : 'text-gray-500'}`}>Click each concept to expand the explanation. These are the foundations everything else builds on.</p>
        </motion.div>

        {/* Accordion grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-20">
          {theory.map((item, i) => (
            <TheoryAccordion key={item.name} item={item} index={i} />
          ))}
        </div>

        {/* Terminology cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="tag-pill bg-teal-500/10 border border-teal-500/20 text-teal-400 mb-4 inline-block">Terminology</span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl mb-8">Key Terms to Know</h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {terms.map((t, i) => (
              <motion.a
                key={t.label}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -2 }}
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
