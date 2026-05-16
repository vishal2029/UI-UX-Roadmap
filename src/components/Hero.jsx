import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const outcomes = [
  { icon: '🧠', title: 'Deep UX Knowledge', desc: 'Clear understanding of UX process, UI fundamentals, and the terminology designers use every day.' },
  { icon: '🔍', title: 'Analytical Eye', desc: 'Ability to recreate and analyze real websites and apps — not just make visually nice screens.' },
  { icon: '💼', title: '2+ Strong Projects', desc: 'At least 2 self-initiated projects in different niches, plus 1 redesign or UI practice piece.' },
  { icon: '🌐', title: 'Portfolio Website', desc: 'One polished portfolio website or case-study page ready for recruiters to scan.' },
  { icon: '🤖', title: 'AI Tool Fluency', desc: 'Familiarity with Figma AI, Framer AI, Uizard, Maze, and ChatGPT in the design workflow.' },
  { icon: '🚀', title: 'Interview Ready', desc: 'Confidence to present work, explain decisions, and navigate design interviews effectively.' },
];

export default function Hero() {
  const { userName } = useAuth();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[500px] h-[500px] rounded-full bg-indigo-200/40 blur-[100px] animate-float" />
        <div className="absolute -bottom-32 -right-24 w-[400px] h-[400px] rounded-full bg-orange-200/30 blur-[100px] animate-float2" />
      </div>

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `radial-gradient(circle, rgba(100,116,139,0.08) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="section-tag mb-8 inline-flex">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Welcome back, {userName}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-6 text-slate-900"
        >
          Master{' '}
          <span className="grad-text">UI/UX Design</span>
          <br />in 12 Weeks
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed text-slate-500"
        >
          Theory · Design Fundamentals · AI Tools · Real Projects · Portfolio Building
        </motion.p>

        {/* Pace stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex flex-wrap justify-center items-center gap-0 mb-10 rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm"
        >
          {[
            { num: '2–3', label: 'hrs/weekday' },
            { num: '4–5', label: 'hrs/weekend' },
            { num: '12', label: 'weeks total' },
          ].map((s, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <div className="w-px h-12 bg-slate-100" />}
              <div className="px-8 py-4 text-center">
                <div className="font-display text-2xl font-bold text-indigo-600">{s.num}</div>
                <div className="text-xs font-medium mt-0.5 text-slate-400">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-24"
        >
          <a href="#roadmap" className="btn-primary">
            Start the Journey <span>↓</span>
          </a>
          <a href="#overview" className="btn-secondary">
            What you'll get
          </a>
        </motion.div>
      </div>

      {/* Outcomes */}
      <div id="overview" className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="section-tag mb-4 inline-flex">By the End of 12 Weeks</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900">What You'll Have</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }} viewport={{ once: true }}
              className="brand-card p-6 text-left"
            >
              <div className="text-3xl mb-3">{o.icon}</div>
              <h3 className="font-bold text-base mb-2 text-slate-800">{o.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
