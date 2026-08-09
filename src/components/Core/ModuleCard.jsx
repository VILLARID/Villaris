import { motion } from "framer-motion";

const accentConfigs = {
  blue: {
    id: "#2563EB",
    iconBg: "#EFF6FF",
    iconColor: "#2563EB",
    line: "#2563EB",
    dot: "#2563EB",
  },
  violet: {
    id: "#7C3AED",
    iconBg: "#F5F3FF",
    iconColor: "#7C3AED",
    line: "#7C3AED",
    dot: "#7C3AED",
  },
  emerald: {
    id: "#059669",
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    line: "#10B981",
    dot: "#059669",
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

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group relative flex min-h-[360px] flex-col rounded-[20px] border border-[rgba(226,232,240,0.95)] bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.04)] transition-[transform,box-shadow,border-color] duration-[250ms] ease-out hover:border-blue-200/70 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)] sm:p-8"
    >
      {/* Header: módulo + ACTIVE pill */}
      <div className="flex items-center justify-between gap-3">
        <span
          className="text-[10px] font-bold tracking-[0.12em]"
          style={{ color: styles.id }}
        >
          {moduleId}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-2.5 py-[5px] text-[10px] font-semibold tracking-[0.06em] text-[#047857]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
          ACTIVE
        </span>
      </div>

      {/* Identidad del módulo */}
      <div className="mt-7">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-[14px]"
          style={{ background: styles.iconBg }}
        >
          <Icon className="h-6 w-6" strokeWidth={1.7} style={{ color: styles.iconColor }} />
        </div>
        <h3 className="mt-6 text-[17px] font-bold tracking-[0.01em] text-[#0F172A]">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-[#64748B]">
          {description}
        </p>
      </div>

      {/* Tech list */}
      <ul className="mt-7">
        {technologies.map((tech, idx) => (
          <li
            key={tech}
            className={`flex h-[44px] items-center gap-3 ${
              idx < technologies.length - 1 ? "border-b border-[#F1F5F9]" : ""
            }`}
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ background: styles.dot }}
            />
            <span className="text-[14px] font-medium text-[#0F172A]">{tech}</span>
            <span className="ml-auto h-px w-8 bg-[#E2E8F0]" />
          </li>
        ))}
      </ul>

      {/* Accent inferior */}
      <div className="mt-auto pt-8">
        <span
          className="block h-[2px] w-[80px] rounded-full"
          style={{ background: styles.line }}
        />
      </div>
    </motion.article>
  );
}

export default ModuleCard;
