import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import CoreSystem from './pages/CoreSystem';
import ProjectArchive from "./pages/ProjectArchive";
import About from "./pages/About";
import SystemReady from "./pages/SystemReady";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-[0_8px_30px_rgba(15,23,42,0.2)] transition-all duration-300 hover:bg-[#1E293B] hover:scale-105 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function App() {
  return (
    <>
      <Navbar />

      {/* Secciones */}
      <Home />
      <About />
      <CoreSystem />
      <ProjectArchive />
      <SystemReady />

      {/* Botón volver arriba */}
      <ScrollToTop />
    </>
  );
}

export default App;