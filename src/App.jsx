import { useState, useEffect } from 'react';
import { ChevronUp, Menu, X } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "core-system", label: "Core" },
    { to: "project-archive", label: "Projects" },
    { to: "system-ready", label: "Contact" },
  ];

  return (
    <>
      {/* Header/Navegación fija */}
      <header className="fixed top-0 z-50 w-full border-b border-slate-800/50 bg-[#020609]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between px-6 py-4 sm:px-10 md:px-16 lg:px-20 xl:px-24">
          {/* Logo */}
          <a
            href="#home"
            className="cursor-pointer text-xl font-black uppercase tracking-[-0.02em] text-cyan-400 transition hover:text-cyan-300"
          >
            VILLARID
          </a>

          {/* Navegación desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.to}
                href={`#${item.to}`}
                className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-400 transition hover:text-cyan-400 md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navegación móvil */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 border-t border-slate-800/50 bg-[#020609]/95 px-6 py-6">
            {navItems.map((item) => (
              <a
                key={item.to}
                href={`#${item.to}`}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 transition hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>

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