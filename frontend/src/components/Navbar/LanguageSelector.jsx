import { useLanguage } from "../../i18n/LanguageContext";

function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("language.groupLabel")}
      className="flex h-11 items-center gap-px rounded-[12px] border border-[#E8EDF3] bg-white p-[3px] transition-colors duration-200 dark:border-white/10 dark:bg-[#0B1018]"
    >
      {["es", "en"].map((lang) => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={isActive}
            aria-label={
              lang === "es"
                ? t("language.switchToEs")
                : t("language.switchToEn")
            }
            className={`flex h-[34px] w-[42px] items-center justify-center rounded-[9px] text-[12px] font-semibold tracking-[0.02em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#0B1018] ${
              isActive
                ? "bg-[#2563EB] text-white shadow-[0_1px_3px_rgba(15,23,42,0.15)] dark:shadow-[0_0_14px_rgba(37,99,235,0.35)]"
                : "text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#0F172A] dark:text-[#9BA6B5] dark:hover:bg-[#111A2A] dark:hover:text-white dark:hover:shadow-[0_0_12px_rgba(37,99,235,0.12)]"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSelector;