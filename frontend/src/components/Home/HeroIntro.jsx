import { motion } from "framer-motion";
import { fadeUp, lineReveal } from "../../utils/motion";
import { useLanguage } from "../../i18n/LanguageContext";

function HeroIntro() {
  const fade = (y, delay) => fadeUp(y, delay);

  const maskLine = (delay) => lineReveal(delay);
  const { t } = useLanguage();

  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Badge */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fade(10, 0.05)}
        className="mb-9"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-2 dark:border-white/10 dark:bg-[#0B1018]/70">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600 dark:text-[#CBD5E1]">
            {t("home.badge")}
          </span>
        </div>
      </motion.div>

      {/* Headline con reveal por líneas */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } } }}
        className="text-[clamp(4rem,5.3vw,6.4rem)] font-bold leading-[0.94] tracking-[-0.045em] text-[#0F172A] dark:text-[#F5F7FA]"
      >
        <span className="block overflow-hidden">
          <motion.span className="block" variants={maskLine(0.1)}>
            FARID TABARE
          </motion.span>
        </span>
        <span className="block overflow-hidden pb-[0.06em]">
          <motion.span className="block" variants={maskLine(0.16)}>
            MATOS VILLARROEL
          </motion.span>
        </span>
      </motion.h1>

      {/* Digital identity */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fade(12, 0.26)}
        className="mt-6 flex items-center gap-3"
      >
        <span className="h-px w-10 shrink-0 bg-slate-200 dark:bg-white/10" />
        <p className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-[#9BA6B5] sm:text-[13px]">
          {t("home.digitalIdentity")} /{" "}
          <span className="text-[#2563EB]">VILLARIS</span>
        </p>
      </motion.div>

      {/* Descripción */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fade(12, 0.34)}
        className="mt-8 max-w-[620px] text-[17px] leading-[1.7] text-slate-500 dark:text-[#9BA6B5] sm:text-[18px]"
      >
        {t("home.intro")}
      </motion.p>
    </div>
  );
}

export default HeroIntro;