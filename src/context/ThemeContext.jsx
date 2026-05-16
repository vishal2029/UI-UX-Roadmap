import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Enforce light mode only for signature brand consistency
  return (
    <ThemeContext.Provider value={{ dark: false, toggle: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext) ?? { dark: false, toggle: () => {} };
