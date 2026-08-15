import { useCallback, useEffect, useMemo, useState } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./LanguageContext";

function getInitialLanguage() {
  if (typeof window === "undefined") return "es";
  try {
    const stored = localStorage.getItem("language");
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* localStorage no disponible */
  }
  const browserLang = (navigator.language || "").toLowerCase();
  return browserLang.startsWith("es") ? "es" : "en";
}

function resolve(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch {
      /* localStorage no disponible */
    }
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next) => {
    setLanguageState((current) => (current === next ? current : next));
  }, []);

  const t = useCallback(
    (path) => {
      const value = resolve(translations[language], path);
      if (value !== undefined) return value;
      return resolve(translations.en, path);
    },
    [language]
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}