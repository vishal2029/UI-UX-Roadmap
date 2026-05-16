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

  if (!isLoaded) return null;
  if (userName) return <>{children}</>;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-full max-w-md p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-xl"
      >
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto bg-indigo-600 rounded-xl flex items-center justify-center text-xl mb-5 shadow-lg shadow-indigo-500/20">
            <span className="text-white font-black">U</span>
          </div>
          <h1 className="font-display font-bold text-2xl mb-2 text-slate-900">Welcome</h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            Enter your name to access the 12-Week UI/UX Internship Roadmap. Your progress will be saved locally.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">
              Your Name
            </label>
            <input
              id="name" type="text" value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-300 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
              autoFocus
            />
          </div>
          <button type="submit" disabled={!inputName.trim()}
            className="w-full btn-primary justify-center disabled:opacity-40 disabled:cursor-not-allowed">
            Start Journey →
          </button>
        </form>
      </motion.div>
    </div>
  );
}
