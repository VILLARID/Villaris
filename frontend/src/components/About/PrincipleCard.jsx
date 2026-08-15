import { motion } from "framer-motion";

function PrincipleCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -2 }}
      className="group flex min-h-full flex-col rounded-2xl border border-[rgba(226,232,240,0.9)] bg-white p-7 shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition-colors duration-300 hover:border-blue-200/70 dark:border-white/10 dark:bg-[#0D131D] dark:shadow-none dark:hover:border-blue-500/30"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] transition-colors duration-300 group-hover:bg-blue-100 dark:bg-blue-500/15 dark:group-hover:bg-blue-500/25">
        <Icon className="h-5 w-5 text-[#2563EB]" strokeWidth={1.8} />
      </div>

      <h3 className="mt-5 text-[15px] font-bold leading-snug tracking-[0.01em] text-[#0F172A] sm:text-[16px] dark:text-[#F5F7FA]">
        {title}
      </h3>

      <p className="mt-2.5 text-[14px] leading-relaxed text-[#64748B] dark:text-[#9BA6B5]">
        {description}
      </p>

      <span className="mt-auto block h-[2px] w-10 rounded-full bg-[#2563EB]/70 pt-0 transition-all duration-300 group-hover:w-16" />
    </motion.article>
  );
}

export default PrincipleCard;
