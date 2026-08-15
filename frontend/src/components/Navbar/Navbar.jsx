import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { EASE_OUT_EXPO, getScrollDuration } from "../../utils/scrollUtils";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "core-system", label: "Core" },
  { id: "project-archive", label: "Projects" },
  { id: "system-ready", label: "Contact" },
];

const LABEL_GAP = 24;

function getNavbarBottom() {
  const bar = document.querySelector("header")?.firstElementChild;
  if (bar) {
    const rect = bar.getBoundingClientRect();
    return rect.top + rect.height;
  }
  return 84;
}

function Navbar() {
  const lenis = useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const offset = window.scrollY + 140;
      let current = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= offset) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (event, sectionId) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const target = document.getElementById(sectionId);
    if (!target) return;

    if (!lenis) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
      return;
    }

    if (sectionId === "home") {
      lenis.scrollTo(0, {
        duration: getScrollDuration(0),
        easing: EASE_OUT_EXPO,
      });
      return;
    }

    const paddingTop = parseFloat(getComputedStyle(target).paddingTop) || 0;
    const offset = -(getNavbarBottom() + LABEL_GAP - paddingTop);
    const landingY = target.getBoundingClientRect().top + window.scrollY + offset;

    lenis.scrollTo(target, {
      offset,
      duration: getScrollDuration(landingY),
      easing: EASE_OUT_EXPO,
    });
  };

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div
        className={`mx-6 flex h-[68px] items-center justify-between rounded-[20px] border px-5 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-slate-900/10 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1018]/85 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "border-slate-900/5 bg-white/70 shadow-[0_1px_2px_rgba(15,23,42,0.02)] backdrop-blur-md dark:border-white/5 dark:bg-[#0B1018]/75 dark:shadow-none"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(event) => handleNavigate(event, "home")}
          aria-label="VILLARIS — Inicio"
          className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B1018] rounded-md"
        >
          <span className="text-lg font-bold uppercase tracking-[0.16em] text-[#0B1220] dark:text-white">
            VILLARIS
          </span>
          <span className="h-[5px] w-[5px] rounded-full bg-[#2563EB] transition-all duration-300 group-hover:opacity-75 group-hover:shadow-[0_0_8px_rgba(37,99,235,0.45)]" />
        </a>

        {/* Navegación desktop */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => handleNavigate(event, item.id)}
                aria-current={isActive ? "true" : undefined}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`group relative flex h-10 items-center rounded-md text-[13px] font-medium tracking-[0.05em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 ${
                  isActive
                    ? "font-semibold text-[#0F172A] dark:text-white"
                    : "text-[#64748B] hover:text-[#0F172A] dark:text-[#9BA6B5] dark:hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-1 left-0 right-0 mx-auto h-[2px] w-5 rounded-full bg-[#2563EB]"
                  />
                )}
                {!isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-0 right-0 mx-auto h-[2px] w-5 rounded-full bg-[#2563EB]/40 opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Acciones derecha: Theme toggle + CTA desktop + hamburguesa móvil */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />

          {/* CTA desktop */}
          <motion.a
            href="#system-ready"
            onClick={(event) => handleNavigate(event, "system-ready")}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group hidden h-10 items-center gap-2 rounded-[10px] bg-[#0F172A] px-5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border dark:border-blue-500/25 dark:bg-[#0F172A] dark:shadow-[0_0_20px_rgba(37,99,235,0.12)] dark:hover:bg-[#16203E] dark:hover:shadow-[0_0_26px_rgba(37,99,235,0.22)] dark:focus-visible:ring-offset-[#0B1018] md:inline-flex"
          >
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" />
          </motion.a>

          {/* Botón hamburguesa */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#E2E8F0] bg-white text-[#0F172A] transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 dark:border-white/10 dark:bg-[#0B1018] dark:text-[#F5F7FA] dark:hover:bg-[#111A2A] md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Menú móvil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mx-6 mt-2 overflow-hidden rounded-[16px] border border-slate-900/10 bg-white p-2 shadow-[0_8px_30px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[#0B1018] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: 0.04 * Math.min(index, 4),
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => handleNavigate(event, item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-[13px] font-medium tracking-[0.05em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 ${
                        isActive
                          ? "font-semibold text-[#0F172A] dark:text-white"
                          : "text-[#64748B] hover:bg-slate-50 hover:text-[#0F172A] dark:text-[#9BA6B5] dark:hover:bg-[#111A2A] dark:hover:text-white"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="h-[6px] w-[6px] rounded-full bg-[#2563EB]" />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <div className="p-2 pt-1">
              <a
                href="#system-ready"
                onClick={(event) => handleNavigate(event, "system-ready")}
                className="group flex h-11 items-center justify-center gap-2 rounded-[10px] bg-[#0F172A] px-5 text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:border dark:border-blue-500/25 dark:bg-[#0F172A] dark:shadow-[0_0_20px_rgba(37,99,235,0.12)] dark:hover:bg-[#16203E] dark:hover:shadow-[0_0_26px_rgba(37,99,235,0.22)]"
              >
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
