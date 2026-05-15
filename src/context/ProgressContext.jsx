import { createContext, useContext, useState, useEffect } from 'react';
import { checklist } from '../data';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem('roadmap_progress');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('roadmap_progress', JSON.stringify(checked));
  }, [checked]);

  const toggle = (i) =>
    setChecked(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    );

  const pct = Math.round((checked.length / checklist.length) * 100);

  return (
    <ProgressContext.Provider value={{ checked, toggle, pct, total: checklist.length }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => useContext(ProgressContext) ?? { checked: [], toggle: () => {}, pct: 0, total: 0 };
