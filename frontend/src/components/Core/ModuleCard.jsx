import { motion } from "framer-motion";
import useCardTilt from "../../hooks/useCardTilt";

const accentConfigs = {
  blue: {
    id: "#2563EB",
    iconBgClass: "bg-blue-50 dark:bg-blue-500/20",
    iconColorClass: "text-blue-600 dark:text-blue-400",
    line: "#2563EB",
    dot: "#2563EB",
  },
  violet: {
    id: "#7C3AED",
    iconBgClass: "bg-violet-50 dark:bg-violet-500/20",
    iconColorClass: "text-violet-600 dark:text-violet-400",
    line: "#7C3AED",
    dot: "#7C3AED",
  },
  emerald: {
    id: "#059669",
    iconBgClass: "bg-emerald-50 dark:bg-emerald-500/20",
    iconColorClass: "text-emerald-600 dark:text-emerald-400",
    line: "#10B981",
    dot: "#10B981",
  },
};

function ModuleCard({
  moduleId,
  title,
  technologies,
  description,
  icon: Icon,
  accent = "blue",
  index = 0,
}) {
  const styles = accentConfigs[accent] || accentConfigs.blue;
  const { tilt, handlers } = useCardTilt();

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      {...handlers}
      style={tilt}
      className="group relative flex min-h-[360px] flex-col rounded-[20px] border border-[rgba(226,232,240,0.95)] bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-[250ms] ease-out hover:border-blue-200/70 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)] dark:border-white/10 dark:bg-[#0D131D] dark:shadow-none dark:hover:border-blue-500/30 dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] sm:p-8"
    >
      {/* Header: módulo + ACTIVE pill */}
      <div
        className="flex items-center justify-between gap-3"
        style={{ transform: "translateZ(6px)" }}
      >
        <span
          className="text-[10px] font-bold tracking-[0.12em]"
          style={{ color: styles.id }}
        >
          {moduleId}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-2.5 py-[5px] text-[10px] font-semibold tracking-[0.06em] text-[#047857] dark:bg-emerald-500/15 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          ACTIVE
        </span>
      </div>

      {/* Identidad del módulo */}
      <div style={{ transformStyle: "preserve-3d" }}>
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-[14px] transition-transform duration-300 ease-out group-hover:scale-105 ${styles.iconBgClass}`}
          style={{ transform: "translateZ(16px)" }}
        >
          <Icon className={`h-6 w-6 ${styles.iconColorClass}`} strokeWidth={1.7} />
        </div>
        <h3
          className="mt-6 text-[17px] font-bold tracking-[0.01em] text-[#0F172A] dark:text-[#F5F7FA]"
          style={{ transform: "translateZ(8px)" }}
        >
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#64748B] dark:text-[#9BA6B5]">
          {description}
        </p>
      </div>

      {/* Tech list */}
      <ul className="mt-7" style={{ transform: "translateZ(4px)" }}>
        {technologies.map((tech, idx) => (
          <li
            key={tech}
            className={`flex h-[44px] items-center gap-3 transition-colors duration-200 hover:bg-[#F8FAFC] dark:hover:bg-[#111A2A] ${
              idx < technologies.length - 1 ? "border-b border-[#F1F5F9] dark:border-white/[0.06]" : ""
            }`}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: styles.dot }}
            />
            <span className="text-[14px] font-medium text-[#0F172A] dark:text-[#E2E8F0]">{tech}</span>
            <span className="ml-auto h-px w-8 bg-[#E2E8F0] dark:bg-white/10" />
          </li>
        ))}
      </ul>

      {/* Accent inferior */}
      <div className="mt-auto pt-8" style={{ transform: "translateZ(10px)" }}>
        <span
          className="block h-[2px] w-[80px] rounded-full"
          style={{ background: styles.line }}
        />
      </div>
    </motion.article>
  );
}

export default ModuleCard;
