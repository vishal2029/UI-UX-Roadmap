import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';

const links = [
  { href: '#overview',  label: 'Overview' },
  { href: '#roadmap',   label: 'Roadmap' },
  { href: '#theory',    label: 'Theory' },
  { href: '#tools',     label: 'AI Tools' },
  { href: '#resources', label: 'Resources' },
  { href: '#portfolio', label: 'Portfolio' },
];

function LogoutIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pct: checklistPct, checked, total, clearProgress } = useProgress();
  const { logout } = useAuth();

  const handleLogout = () => { clearProgress(); logout(); };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const R = 6;
  const C = 2 * Math.PI * R;
  const offset = C * (1 - checklistPct / 100);

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
        <div className="absolute inset-0 bg-indigo-100" />
        <motion.div
          className="absolute top-0 left-0 h-full bg-indigo-500"
          style={{ width: `${scrollPct}%` }}
          transition={{ duration: 0.08 }}
        />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 h-[60px] flex items-center gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 font-display font-bold text-[15px] shrink-0">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-sm font-black">U</span>
            </div>
            <span className="hidden sm:block text-slate-800">UI/UX Roadmap</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1 ml-auto">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className="text-[13px] font-medium px-3 py-1.5 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                {l.label}
              </a>
            ))}

            {/* Progress pill */}
            <a
              href="#progress"
              className="flex items-center gap-2 text-[13px] font-semibold ml-3 px-4 py-[7px] rounded-full border bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
                <circle cx="8" cy="8" r={R} fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2"/>
                <circle cx="8" cy="8" r={R} fill="none" stroke="currentColor" strokeWidth="2"
                  strokeDasharray={C} strokeDashoffset={offset} strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.4s ease' }}
                />
              </svg>
              Progress
              <span className="text-[11px] font-black tabular-nums opacity-60">{checked.length}/{total}</span>
            </a>
          </div>

          {/* Right controls */}
          <div className="ml-auto lg:ml-4 flex items-center gap-2">
            <button onClick={handleLogout} aria-label="Log out" title="Log out"
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-slate-200 text-slate-400 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all">
              <LogoutIcon />
            </button>
            <button onClick={() => setMenuOpen(v => !v)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 transition-all">
              <span className="text-sm">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[63px] left-0 right-0 z-40 px-6 py-4 flex flex-col gap-2 lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-2 px-3 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all">
                {l.label}
              </a>
            ))}
            <a href="#progress" onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-sm font-bold py-2 px-3 rounded-lg text-indigo-600 bg-indigo-50">
              Checklist — {checked.length}/{total} done ({checklistPct}%)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
