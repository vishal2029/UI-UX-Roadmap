import { createContext, useContext, useState } from 'react';
import { checklist } from '../data';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [checked, setChecked] = useState([]);

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
