import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* localStorage no disponible */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const { t } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* localStorage no disponible */
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? t("theme.toLight") : t("theme.toDark")}
      className="group relative flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#E8EDF3] bg-white text-[#0F172A] shadow-sm transition-colors duration-200 hover:bg-[#F1F5F9] hover:text-[#1E3A8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-[#0B1018] dark:text-white dark:shadow-none dark:hover:bg-[#111A2A] dark:hover:text-[#60A5FA] dark:hover:shadow-[0_0_18px_rgba(37,99,235,0.15)] dark:focus-visible:ring-offset-[#0B1018]"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden="true" />
          ) : (
            <Moon className="h-[18px] w-[18px]" strokeWidth={1.9} aria-hidden="true" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;