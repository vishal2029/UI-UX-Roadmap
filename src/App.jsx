import { ThemeProvider } from './context/ThemeContext';
import { ProgressProvider } from './context/ProgressContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RoadmapSection from './components/RoadmapSection';
import TheorySection from './components/TheorySection';
import ResourcesSection from './components/ResourcesSection';
import PortfolioSection from './components/PortfolioSection';
import LoginGate from './components/LoginGate';

function Footer() {
    return (
    <footer className={`border-t py-8 px-6 border-border`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className={`flex items-center gap-2 text-slate-400`}>
          <span className="text-indigo-500">✦</span>
          <span>UI/UX Internship Roadmap — 12-Week Journey</span>
        </div>
        <div className={`flex gap-6 text-slate-400`}>
          {['Roadmap', 'Theory', 'Portfolio', 'Progress'].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`transition-colors font-medium ${
                l === 'Progress'
                  ? 'text-indigo-500 hover:text-indigo-400'
                  : 'hover:text-slate-700'
              }`}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function AppInner() {
    return (
    <div className={`min-h-screen font-sans`}>
      <Navbar />
      <Hero />
      <RoadmapSection />
      <TheorySection />
      <ResourcesSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <LoginGate>
            <AppInner />
          </LoginGate>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
