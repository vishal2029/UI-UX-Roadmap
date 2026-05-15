import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const outcomes = [
  { icon: '🧠', title: 'Deep UX Knowledge', desc: 'Clear understanding of UX process, UI fundamentals, and the terminology designers use every day.' },
  { icon: '🔍', title: 'Analytical Eye', desc: 'Ability to recreate and analyze real websites and apps — not just make visually nice screens.' },
  { icon: '💼', title: '2+ Strong Projects', desc: 'At least 2 self-initiated projects in different niches, plus 1 redesign or UI practice piece.' },
  { icon: '🌐', title: 'Portfolio Website', desc: 'One polished portfolio website or case-study page ready for recruiters to scan.' },
  { icon: '🤖', title: 'AI Tool Fluency', desc: 'Familiarity with Figma AI, Framer AI, Uizard, Maze, and ChatGPT in the design workflow.' },
  { icon: '🚀', title: 'Interview Ready', desc: 'Confidence to present work, explain decisions, and navigate design interviews effectively.' },
];

export default function Hero() {
  const { dark } = useTheme();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-violet-600/15 blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full bg-pink-600/12 blur-[120px] animate-float2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[100px] animate-float3" />
      </div>

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: `radial-gradient(circle, ${dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
          <span className="text-xs font-bold text-violet-300 tracking-widest uppercase">12-Week Internship Roadmap</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-black text-5xl sm:text-6xl lg:text-8xl leading-[1.03] mb-6"
        >
          Master{' '}
          <span className="grad-text">UI/UX Design</span>
          <br />
          in 12 Weeks
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${dark ? 'text-white/50' : 'text-gray-500'}`}
        >
          Theory · Design Fundamentals · AI Tools · Real Projects · Portfolio Building
        </motion.p>

        {/* Pace stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`inline-flex flex-wrap justify-center items-center gap-0 mb-12 rounded-2xl overflow-hidden border ${dark ? 'bg-white/[0.04] border-white/[0.07]' : 'bg-white border-gray-100 shadow-md'}`}
        >
          {[
            { num: '2–3', label: 'hrs/weekday' },
            { num: '4–5', label: 'hrs/weekend' },
            { num: '12', label: 'weeks total' },
          ].map((s, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <div className={`w-px h-14 ${dark ? 'bg-white/[0.07]' : 'bg-gray-100'}`} />}
              <div className="px-8 py-4 text-center">
                <div className="font-display text-3xl font-black text-violet-400">{s.num}</div>
                <div className={`text-xs font-medium mt-0.5 ${dark ? 'text-white/40' : 'text-gray-400'}`}>{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-24"
        >
          <a href="#roadmap" className="glow-btn px-8 py-4 rounded-full text-white font-bold text-sm inline-flex items-center gap-2">
            Start the Journey
            <span>↓</span>
          </a>
          <a href="#overview" className={`px-8 py-4 rounded-full font-bold text-sm border transition-all inline-flex items-center gap-2 ${dark ? 'text-white/70 border-white/10 hover:border-white/25 hover:text-white' : 'text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900'}`}>
            What you'll get
          </a>
        </motion.div>
      </div>

      {/* Outcomes */}
      <div id="overview" className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="tag-pill bg-violet-500/10 border border-violet-500/20 text-violet-400 mb-4 inline-block">By the End of 12 Weeks</span>
          <h2 className="font-display font-black text-3xl sm:text-4xl">What You'll Have</h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className={`card-hover border rounded-2xl p-6 text-left cursor-default ${dark ? 'bg-white/[0.03] border-white/[0.07]' : 'bg-white border-gray-100 shadow-sm'}`}
            >
              <div className="text-3xl mb-3">{o.icon}</div>
              <h3 className="font-bold text-base mb-2">{o.title}</h3>
              <p className={`text-sm leading-relaxed ${dark ? 'text-white/45' : 'text-gray-500'}`}>{o.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
