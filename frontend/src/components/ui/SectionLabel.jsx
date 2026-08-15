import { motion } from "framer-motion";

function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <motion.span
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-semibold tracking-[0.1em] text-[#2563EB]"
      >
        {number} /
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#64748B] dark:text-[#9BA6B5]"
      >
        {label}
      </motion.span>
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-[42px] origin-left bg-[#2563EB] opacity-50"
      />
    </div>
  );
}

export default SectionLabel;
