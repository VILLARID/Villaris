import { motion, useReducedMotion } from "framer-motion";

function HeroIntro() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (y = 18, delay = 0) => ({
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay },
    },
  });

  return (
    <div className="flex w-full min-w-0 flex-col">
      {/* Badge */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp(10, 0.05)}
        className="mb-9"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3.5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-600">
            Software Engineer
          </span>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp(18, 0.1)}
        className="text-[clamp(4rem,5.3vw,6.4rem)] font-bold leading-[0.94] tracking-[-0.045em] text-[#0F172A]"
      >
        FARID TABARE
        <br />
        MATOS VILLARROEL
      </motion.h1>

      {/* Digital identity */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp(12, 0.18)}
        className="mt-6 flex items-center gap-3"
      >
        <span className="h-px w-10 shrink-0 bg-slate-200" />
        <p className="whitespace-nowrap text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[13px]">
          Digital Identity /{" "}
          <span className="text-[#2563EB]">VILLARIS</span>
        </p>
      </motion.div>

      {/* Descripción */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp(12, 0.26)}
        className="mt-8 max-w-[620px] text-[17px] leading-[1.7] text-slate-500 sm:text-[18px]"
      >
        Construyo productos digitales combinando interfaces cuidadas, backend
        sólido y sistemas diseñados para escalar.
      </motion.p>
    </div>
  );
}

export default HeroIntro;
