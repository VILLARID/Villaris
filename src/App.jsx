import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
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
      className={`fixed bottom-8 right-8 z-50 rounded-full bg-cyan-400 p-3 text-[#020609] shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 hover:bg-cyan-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <ChevronUp className="h-6 w-6" />
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