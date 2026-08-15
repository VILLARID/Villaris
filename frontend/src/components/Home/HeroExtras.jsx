import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Layers3, Database } from "lucide-react";
import { EASE, fadeUp, staggerContainer } from "../../utils/motion";
import { useLanguage } from "../../i18n/LanguageContext";

const SKILLS = [
  { icon: Code2, label: "FULL STACK" },
  { icon: Layers3, label: "SYSTEM DESIGN" },
  { icon: Database, label: "DATA ARCHITECTURE" },
];

const everHover = {
  whileHover: { y: -1, scale: 1.01 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.25, ease: EASE },
};

function HeroExtras() {
  const fade = (y, delay) => fadeUp(y, delay);

  const skillItem = fadeUp(8, 0.34);
  const { t } = useLanguage();

  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Skills con stagger */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.09, 0.34)}
        className="flex flex-wrap items-center gap-x-7 gap-y-4"
      >
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Fragment key={skill.label}>
              {index > 0 && (
                <span aria-hidden="true" className="h-[22px] w-px bg-[#E2E8F0] dark:bg-white/10" />
              )}
              <motion.div
                variants={skillItem}
                className="flex items-center gap-2"
              >
                <Icon
                  className="h-[17px] w-[17px] text-slate-500 transition-transform duration-300 ease-out hover:scale-110 dark:text-[#7E8C9F]"
                  strokeWidth={1.8}
                />
                <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-600 dark:text-[#CBD5E1]">
                  {skill.label}
                </span>
              </motion.div>
            </Fragment>
          );
        })}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fade(10, 0.42)}
        className="mt-10 flex flex-wrap items-center gap-3.5"
      >
        <motion.a
          href="#project-archive"
          {...everHover}
          className="group inline-flex h-[52px] items-center gap-2 rounded-xl bg-[#0F172A] px-6 text-[13px] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border dark:border-blue-500/25 dark:bg-[#0F172A] dark:shadow-[0_0_20px_rgba(37,99,235,0.12)] dark:hover:bg-[#16203E] dark:hover:shadow-[0_0_28px_rgba(37,99,235,0.22)] dark:focus-visible:ring-offset-[#070B11]"
        >
          {t("heroExtras.viewProjects")}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" />
        </motion.a>

        <motion.a
          href="#system-ready"
          {...everHover}
          className="inline-flex h-[52px] items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-6 text-[13px] font-semibold tracking-wide text-[#0F172A] transition-colors duration-200 hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-[#0D131D] dark:text-[#F5F7FA] dark:hover:bg-[#111A2A] dark:focus-visible:ring-offset-[#070B11]"
        >
          {t("heroExtras.contactMe")}
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default HeroExtras;