import { ThemeProvider, useTheme } from './context/ThemeContext';
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
  const { dark } = useTheme();
  return (
    <footer className={`border-t py-8 px-6 ${dark ? 'border-white/[0.06]' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className={`flex items-center gap-2 ${dark ? 'text-white/30' : 'text-gray-400'}`}>
          <span className="text-violet-500">✦</span>
          <span>UI/UX Internship Roadmap — 12-Week Journey</span>
        </div>
        <div className={`flex gap-6 ${dark ? 'text-white/30' : 'text-gray-400'}`}>
          {['Roadmap', 'Theory', 'Portfolio', 'Progress'].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`transition-colors font-medium ${
                l === 'Progress'
                  ? 'text-violet-500 hover:text-violet-400'
                  : dark ? 'hover:text-white/60' : 'hover:text-gray-700'
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
  const { dark } = useTheme();
  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      dark ? 'bg-[#07070f] text-white' : 'bg-[#f5f5fb] text-gray-900'
    }`}>
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
