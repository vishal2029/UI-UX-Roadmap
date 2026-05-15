import { motion } from 'framer-motion';
import { niches, caseStudySteps, checklist } from '../data';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';

export default function PortfolioSection() {
  const { dark } = useTheme();
  const { checked, toggle, pct: checkProgress } = useProgress();

  /* reusable theme helpers */
  const card  = dark ? 'bg-white/[0.03] border-white/[0.07]'   : 'bg-white border-gray-100 shadow-sm';
  const muted = dark ? 'text-white/40'  : 'text-gray-400';
  const sub   = dark ? 'text-white/45'  : 'text-gray-500';

  return (
    <div>
      {/* ── Niches ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="tag-pill bg-orange-500/10 border border-orange-500/20 text-orange-400 mb-4 inline-block">
              Project Ideas
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
              Best Niches for Your Portfolio
            </h2>
            <p className={`text-sm max-w-md mx-auto ${sub}`}>
              Pick 2 niches and go deeper. Best combo: one website + one app or mobile flow + one small redesign.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {niches.map((n, i) => (
              <motion.div
                key={n.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className={`relative p-5 border rounded-2xl hover:border-pink-400/40 hover:-translate-y-1 transition-all duration-200 cursor-default ${card}`}
              >
                {n.best && (
                  <div className="absolute -top-2 -right-2 text-[9px] font-black uppercase tracking-widest bg-emerald-500/15 border border-emerald-500/25 text-emerald-500 px-2 py-0.5 rounded-full">
                    ✦ Pick this
                  </div>
                )}
                <div className="text-3xl mb-3">{n.emoji}</div>
                <div className="font-bold text-sm mb-1.5">{n.name}</div>
                <div className={`text-xs leading-relaxed ${muted}`}>{n.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Blueprint ─────────────────────────────────────────── */}
      <section id="portfolio" className="py-20 px-6 relative">
        <div className={`pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] ${dark ? 'bg-indigo-600/5' : 'bg-indigo-400/5'}`} />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="tag-pill bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4 inline-block">End Goal</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl mb-4">Portfolio Blueprint</h2>
            <p className={`max-w-md mx-auto ${sub}`}>
              Simple, fast to scan, easy to explain. A recruiter should understand what you do within 10–15 seconds.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Portfolio Pages */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`border rounded-2xl p-6 ${dark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-100 shadow-sm'}`}
            >
              <h3 className="font-bold text-lg mb-6">Portfolio Pages</h3>
              <div className="space-y-3">
                {[
                  { icon: '🏠', title: 'Home Page',               desc: 'One-line positioning statement, 2–3 featured projects, short bio' },
                  { icon: '👤', title: 'About Section',           desc: "What you're learning, what you like designing, your strengths" },
                  { icon: '📁', title: 'Case Study 1',            desc: 'Strongest project with full process and outcomes' },
                  { icon: '📂', title: 'Case Study 2',            desc: 'Second niche, showing range and adaptability' },
                  { icon: '🎨', title: 'Mini Project (Optional)', desc: 'Redesign, component study, or landing page concept' },
                  { icon: '📬', title: 'Contact',                 desc: 'Email, LinkedIn, Behance/Dribbble, resume download' },
                ].map((p, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 p-4 border rounded-xl hover:border-indigo-400/30 transition-colors ${card}`}
                  >
                    <span className="text-xl shrink-0">{p.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{p.title}</div>
                      <div className={`text-xs mt-0.5 ${muted}`}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Case Study Steps */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`border rounded-2xl p-6 ${dark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-100 shadow-sm'}`}
            >
              <h3 className="font-bold text-lg mb-6">Case Study Structure</h3>
              <div>
                {caseStudySteps.map((step, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-4 py-3 border-b last:border-0 ${dark ? 'border-white/[0.05]' : 'border-gray-100'}`}
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-xs font-black shrink-0 text-white">
                      {i + 1}
                    </div>
                    <div className={`text-sm font-medium ${dark ? 'text-white/75' : 'text-gray-700'}`}>{step}</div>
                    {i < 3 && <div className="ml-auto text-[10px] text-emerald-500 font-semibold">Essential</div>}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-500/[0.05] border border-amber-500/15 rounded-xl">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500/80 mb-2">What to Avoid</h4>
                <ul className="space-y-1.5">
                  {[
                    "Don't make the portfolio a messy poster wall",
                    "Don't overload with too many fonts or effects",
                    "Don't hide process behind only final screenshots",
                  ].map((a, i) => (
                    <li key={i} className={`text-xs flex items-start gap-2 ${muted}`}>
                      <span className="text-red-400 mt-0.5 shrink-0">✕</span>{a}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Strong case study checkers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-8 border rounded-2xl ${dark ? 'bg-white/[0.02] border-white/[0.06]' : 'bg-white border-gray-100 shadow-sm'}`}
          >
            <h3 className="font-bold text-lg mb-6 text-center">What a Strong Case Study Must Show</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
              {[
                'Problem clearly stated',
                'User clearly identified',
                'Direction is justified',
                'Process is visible',
                'Iterations included',
                'Final result polished',
                'Lesson learned honest',
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-3 text-center rounded-xl border ${
                    dark ? 'bg-emerald-500/[0.04] border-emerald-500/15' : 'bg-emerald-50 border-emerald-100'
                  }`}
                >
                  <div className="text-lg mb-1 text-emerald-500">✓</div>
                  <div className={`text-xs leading-snug ${dark ? 'text-white/55' : 'text-gray-500'}`}>{item}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Application Checklist (id="progress") ──────────────────────── */}
      <section id="progress" className="py-20 px-6 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="tag-pill bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 mb-4 inline-block">
              Week 12
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">
              Application Checklist
            </h2>
            <p className={`text-sm max-w-sm mx-auto ${sub}`}>
              Click to check off items as you complete them. Your progress is saved in the session.
            </p>
          </motion.div>

          {/* Progress bar + stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-lg mx-auto"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`text-xs font-semibold ${muted}`}>Checklist Progress</div>
              <div className="flex items-center gap-3">
                <span className={`text-xs ${muted}`}>{checked.length} of {checklist.length} done</span>
                <span className="text-sm font-black text-emerald-500">{checkProgress}%</span>
              </div>
            </div>
            {/* track */}
            <div className={`h-3 rounded-full overflow-hidden ${dark ? 'bg-white/[0.06]' : 'bg-gray-100'}`}>
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400"
                animate={{ width: `${checkProgress}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
            {checkProgress === 100 && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-sm font-bold text-emerald-500 mt-3"
              >
                🎉 You're ready to apply!
              </motion.p>
            )}
          </motion.div>

          {/* Checklist items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {checklist.map((item, i) => {
              const done = checked.includes(i);
              return (
                <motion.button
                  key={i}
                  onClick={() => toggle(i)}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className={`flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-200 w-full ${
                    done
                      ? dark
                        ? 'bg-emerald-500/[0.05] border-emerald-500/25'
                        : 'bg-emerald-50 border-emerald-200'
                      : dark
                        ? 'bg-white/[0.025] border-white/[0.06] hover:border-white/[0.14]'
                        : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Checkbox */}
                  <div className={`shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center text-xs font-black transition-all duration-200 mt-0.5 ${
                    done
                      ? 'bg-emerald-400 border-emerald-400 text-black'
                      : dark ? 'border-white/20' : 'border-gray-200'
                  }`}>
                    {done ? '✓' : ''}
                  </div>
                  <div>
                    <div className={`text-sm font-medium leading-snug transition-colors ${
                      done
                        ? dark ? 'text-white/35 line-through' : 'text-gray-400 line-through'
                        : dark ? 'text-white/80' : 'text-gray-800'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`text-xs mt-1 ${muted}`}>{item.category}</div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final Message ───────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative text-center p-12 border rounded-3xl overflow-hidden ${
              dark ? 'bg-white/[0.02] border-white/[0.07]' : 'bg-white border-gray-100 shadow-lg'
            }`}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] ${dark ? 'bg-violet-600/8' : 'bg-violet-400/10'}`} />
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] ${dark ? 'bg-pink-600/8' : 'bg-pink-400/8'}`} />
            </div>
            <div className="relative z-10">
              <div className="text-5xl mb-6">✦</div>
              <h2 className="font-display font-black text-3xl sm:text-4xl mb-4">
                You don't need to be perfect<br />before applying.
              </h2>
              <p className={`text-lg mb-3 ${dark ? 'text-white/70' : 'text-gray-600'}`}>
                You need to become{' '}
                <span className={`font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>clear</span>,{' '}
                <span className={`font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>consistent</span>, and{' '}
                <span className={`font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>visible</span>.
              </p>
              <p className={`text-sm max-w-xl mx-auto leading-relaxed ${dark ? 'text-white/40' : 'text-gray-400'}`}>
                A beginner portfolio with two thoughtful projects, strong process, and a clean presentation is often enough to get the first serious conversation started.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
