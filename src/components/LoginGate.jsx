import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

export default function LoginGate({ children }) {
  const [inputName, setInputName] = useState('');
    const { userName, login, isLoaded } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const name = inputName.trim();
    if (name) login(name);
  };

  if (!isLoaded) return null; // Avoid flicker

  if (userName) {
    return <>{children}</>;
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 bg-[#f5f5fb] text-slate-900`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`w-full max-w-md p-8 md:p-10 rounded-3xl border ${
          'bg-white border-border shadow-xl'
        }`}
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-indigo-500/20">
            ✦
          </div>
          <h1 className="font-display font-black text-3xl mb-3">Welcome</h1>
          <p className={`text-sm text-slate-500`}>
            Enter your name to access the 12-Week UI/UX Internship Roadmap. Your progress will be saved locally.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="name" className={`block text-xs font-bold uppercase tracking-widest mb-2 text-slate-400`}>
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className={`w-full px-5 py-4 rounded-xl border text-sm transition-all outline-none ${
                dark
                  ? 'bg-white/[0.03] border-white/10 focus:border-indigo-500 focus:bg-white/[0.06] text-white placeholder:text-white/20'
                  : 'bg-surface2 border-border focus:border-indigo-500 focus:bg-white text-slate-900 placeholder:text-slate-400'
              }`}
              autoFocus
            />
          </div>
          <button
            type="submit"
            disabled={!inputName.trim()}
            className="w-full bg-gradient-to-r from-indigo-500 to-indigo-500 text-white font-bold text-sm py-4 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-500/20"
          >
            Start Journey →
          </button>
        </form>
      </motion.div>
    </div>
  );
}
