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
    <footer className="border-t border-slate-200 py-8 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2.5 text-slate-400">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
            <span className="text-white text-[10px] font-black">U</span>
          </div>
          <span>UI/UX Internship Roadmap — 12-Week Journey</span>
        </div>
        <div className="flex gap-6 text-slate-400">
          {['Roadmap', 'Theory', 'Portfolio', 'Progress'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className={`transition-colors font-medium ${l === 'Progress' ? 'text-indigo-600 hover:text-indigo-500' : 'hover:text-slate-700'}`}>
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
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800">
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
    <AuthProvider>
      <ProgressProvider>
        <LoginGate>
          <AppInner />
        </LoginGate>
      </ProgressProvider>
    </AuthProvider>
  );
}
