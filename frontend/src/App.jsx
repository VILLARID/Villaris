import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import { ArrowUp } from "lucide-react";
import { EASE_OUT_EXPO, getScrollDuration } from "./utils/scrollUtils";
import { isFullMotion } from "./config/motion";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import CoreSystem from "./pages/CoreSystem";
import ProjectArchive from "./pages/ProjectArchive";
import About from "./pages/About";
import SystemReady from "./pages/SystemReady";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: getScrollDuration(0),
        easing: EASE_OUT_EXPO,
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-[0_8px_30px_rgba(15,23,42,0.2)] transition-all duration-300 hover:bg-[#1E293B] hover:scale-105 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

function App() {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        smoothWheel: true,
        syncTouch: false,
        easing: EASE_OUT_EXPO,
      }}
    >
      <MotionConfig reducedMotion={isFullMotion ? "never" : "user"}>
        <Navbar />

        {/* Secciones */}
        <main>
          <Home />
          <About />
          <CoreSystem />
          <ProjectArchive />
          <SystemReady />
        </main>

        {/* Botón volver arriba */}
        <ScrollToTop />
      </MotionConfig>
    </ReactLenis>
  );
}

export default App;
