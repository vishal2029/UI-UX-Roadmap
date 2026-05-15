import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userName, setUserName] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('roadmap_user');
    if (saved) setUserName(saved);
    setIsLoaded(true);
  }, []);

  const login = (name) => {
    localStorage.setItem('roadmap_user', name);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem('roadmap_user');
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ userName, login, logout, isLoaded }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext) ?? { userName: '', login: () => {}, logout: () => {}, isLoaded: true };
