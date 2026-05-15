import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useProgress } from '../context/ProgressContext';

const links = [
  { href: '#overview',  label: 'Overview'  },
  { href: '#roadmap',   label: 'Roadmap'   },
  { href: '#theory',    label: 'Theory'    },
  { href: '#tools',     label: 'AI Tools'  },
  { href: '#resources', label: 'Resources' },
  { href: '#portfolio', label: 'Portfolio' },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2"  x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="2"  y1="12" x2="4"  y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.93"  y1="4.93"  x2="6.34"  y2="6.34"/>
      <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
      <line x1="4.93"  y1="19.07" x2="6.34"  y2="17.66"/>
      <line x1="17.66" y1="6.34"  x2="19.07" y2="4.93"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [scrollPct,   setScrollPct]   = useState(0);   // for top strip only
  const [menuOpen,    setMenuOpen]    = useState(false);
  const { dark, toggle } = useTheme();
  const { pct: checklistPct, checked, total } = useProgress(); // for the pill

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.body.scrollHeight - window.innerHeight;
      setScrollPct(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // pill colour
  const pillCls = dark
    ? 'bg-violet-500/15 border-violet-500/30 text-violet-300 hover:bg-violet-500/25'
    : 'bg-violet-100  border-violet-200    text-violet-700 hover:bg-violet-200';

  // circumference of the ring
  const R  = 6;
  const C  = 2 * Math.PI * R;          // ≈ 37.7
  const offset = C * (1 - checklistPct / 100);

  return (
    <>
      {/* ── Top scroll-progress strip ── */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
        <div className={`absolute inset-0 ${dark ? 'bg-white/[0.05]' : 'bg-black/[0.07]'}`} />
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400"
          style={{ width: `${scrollPct}%` }}
          transition={{ duration: 0.08 }}
        />
        {scrollPct > 1 && scrollPct < 99.5 && (
          <div
            className="absolute top-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-white shadow-[0_0_8px_3px_rgba(124,111,255,0.8)]"
            style={{ left: `calc(${scrollPct}% - 5px)` }}
          />
        )}
      </div>

      {/* ── Main navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? dark
              ? 'bg-[rgba(7,7,15,0.82)] backdrop-blur-xl border-b border-white/[0.07]'
              : 'bg-[rgba(245,245,251,0.88)] backdrop-blur-xl border-b border-gray-200 shadow-sm'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 h-[58px] flex items-center gap-6">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 font-display font-bold text-[15px] shrink-0">
            <span className="text-violet-500 text-xl">✦</span>
            <span className={`hidden sm:block ${dark ? 'text-white' : 'text-gray-900'}`}>UI/UX Roadmap</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5 ml-auto">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className={`text-[13px] font-medium transition-colors ${
                  dark ? 'text-white/50 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                }`}>
                {l.label}
              </a>
            ))}

            {/* ── Checklist Progress pill ── */}
            <a
              href="#progress"
              className={`flex items-center gap-2 text-[13px] font-semibold px-4 py-[7px] rounded-full border transition-all duration-200 ${pillCls}`}
            >
              {/* ring showing CHECKLIST progress */}
              <svg width="16" height="16" viewBox="0 0 16 16" style={{ transform: 'rotate(-90deg)', flexShrink: 0 }}>
                <circle cx="8" cy="8" r={R} fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25"/>
                <circle
                  cx="8" cy="8" r={R} fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeDasharray={C}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.4s ease' }}
                />
              </svg>
              Progress
              <span className={`text-[11px] font-black tabular-nums ${dark ? 'opacity-60' : 'opacity-50'}`}>
                {checked.length}/{total}
              </span>
            </a>
          </div>

          {/* Right controls */}
          <div className="ml-4 flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 ${
                dark
                  ? 'bg-white/[0.06] border border-white/[0.08] text-yellow-300 hover:bg-white/[0.11]'
                  : 'bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={dark ? 'sun' : 'moon'}
                  initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                  exit={{    rotate:  30, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {dark ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className={`lg:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-all ${
                dark
                  ? 'bg-white/[0.06] border border-white/[0.08] text-white/70'
                  : 'bg-gray-100 border border-gray-200 text-gray-600'
              }`}
            >
              <span className="text-sm">{menuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1,  y: 0   }}
            exit={{    opacity: 0,  y: -10 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-[61px] left-0 right-0 z-40 px-6 py-4 flex flex-col gap-3 lg:hidden border-b ${
              dark
                ? 'bg-[rgba(7,7,15,0.95)] backdrop-blur-xl border-white/[0.07]'
                : 'bg-white/95 backdrop-blur-xl border-gray-200 shadow-md'
            }`}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium py-1 transition-colors ${
                  dark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}>
                {l.label}
              </a>
            ))}
            <a
              href="#progress"
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 text-sm font-bold py-1 ${
                dark ? 'text-violet-300' : 'text-violet-700'
              }`}
            >
              Checklist Progress — {checked.length}/{total} done ({checklistPct}%)
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
