import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Code2, Layers3, Database } from "lucide-react";

const SKILLS = [
  { icon: Code2, label: "FULL STACK" },
  { icon: Layers3, label: "SYSTEM DESIGN" },
  { icon: Database, label: "DATA ARCHITECTURE" },
];

function HeroExtras() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (y = 12, delay = 0) => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  });

  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Skills */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp(12, 0.34)}
        className="flex flex-wrap items-center gap-x-7 gap-y-4"
      >
        {SKILLS.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Fragment key={skill.label}>
              {index > 0 && (
                <span aria-hidden="true" className="h-[22px] w-px bg-[#E2E8F0]" />
              )}
              <div className="flex items-center gap-2">
                <Icon
                  className="h-[17px] w-[17px] text-slate-500"
                  strokeWidth={1.8}
                />
                <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-600">
                  {skill.label}
                </span>
              </div>
            </Fragment>
          );
        })}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp(10, 0.42)}
        className="mt-10 flex flex-wrap items-center gap-3.5"
      >
        <a
          href="#project-archive"
          className="group inline-flex h-[52px] items-center gap-2 rounded-xl bg-[#0F172A] px-6 text-[13px] font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          VIEW PROJECTS
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" />
        </a>

        <a
          href="#system-ready"
          className="inline-flex h-[52px] items-center gap-2.5 rounded-xl border border-[#E2E8F0] bg-white px-6 text-[13px] font-semibold tracking-wide text-[#0F172A] transition-colors duration-200 hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          CONTACT ME
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
        </a>
      </motion.div>
    </div>
  );
}

export default HeroExtras;
