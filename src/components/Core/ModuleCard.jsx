import { motion } from "framer-motion";

const accentStyles = {
  cyan: {
    title: "text-cyan-400",
    border: "border-cyan-400/60",
    line: "bg-cyan-400/30",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.5)]",
    bg: "hover:bg-cyan-500/[0.04]",
    gradient: "from-cyan-400 via-cyan-300 to-cyan-500",
  },
  purple: {
    title: "text-purple-400",
    border: "border-purple-400/60",
    line: "bg-purple-400/30",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    bg: "hover:bg-purple-500/[0.04]",
    gradient: "from-purple-400 via-purple-300 to-purple-500",
  },
  emerald: {
    title: "text-emerald-400",
    border: "border-emerald-400/60",
    line: "bg-emerald-400/30",
    glow: "shadow-[0_0_20px_rgba(52,211,153,0.5)]",
    bg: "hover:bg-emerald-500/[0.04]",
    gradient: "from-emerald-400 via-emerald-300 to-emerald-500",
  },
  green: {
    title: "text-green-400",
    border: "border-green-400/60",
    line: "bg-green-400/30",
    glow: "shadow-[0_0_20px_rgba(74,222,128,0.5)]",
    bg: "hover:bg-green-500/[0.04]",
    gradient: "from-green-400 via-green-300 to-green-500",
  },
  pink: {
    title: "text-pink-400",
    border: "border-pink-400/60",
    line: "bg-pink-400/30",
    glow: "shadow-[0_0_20px_rgba(244,114,182,0.5)]",
    bg: "hover:bg-pink-500/[0.04]",
    gradient: "from-pink-400 via-pink-300 to-pink-500",
  },
  orange: {
    title: "text-orange-400",
    border: "border-orange-400/60",
    line: "bg-orange-400/30",
    glow: "shadow-[0_0_20px_rgba(251,146,60,0.5)]",
    bg: "hover:bg-orange-500/[0.04]",
    gradient: "from-orange-400 via-orange-300 to-orange-500",
  },
};

function ModuleCard({
  moduleId,
  title,
  technologies,
  description,
  icon: Icon,
  accent = "cyan",
  index = 0,
}) {
  const style = accentStyles[accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{
        y: -10,
        scale: 1.03,
        borderColor: `rgba(255,255,255,0.2)`,
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`group relative min-h-[280px] overflow-hidden border border-slate-800/60 bg-gradient-to-br from-[#09111e] to-[#0a1422] px-7 py-7 transition-all duration-300 ${style.bg}`}
    >
      {/* Borde RGB animado en hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "conic-gradient(from 0deg, cyan, magenta, yellow, cyan)",
          padding: "1px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
        animate={{}}
      />

      {/* Esquina recortada con gradiente */}
      <div className="pointer-events-none absolute right-0 top-0 h-12 w-12 bg-gradient-to-bl from-[#020609] to-transparent [clip-path:polygon(100%_0,100%_100%,0_0)]" />

      {/* Borde inferior animado */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
        className={`absolute bottom-0 left-4 h-px bg-gradient-to-r ${style.line}`}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1.5">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-500">
            {moduleId}
          </p>
          <h3 className={`text-[14px] font-bold uppercase tracking-[0.12em] ${style.title}`}>
            {title}
          </h3>
          {description && (
            <p className="text-[11px] text-slate-400/70">{description}</p>
          )}
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              scale: [1, 1.6, 1],
              opacity: [1, 0.4, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={`h-2 w-2 rounded-full bg-emerald-400 ${style.glow}`}
          />
          <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-emerald-400/80">
            Active
          </span>
        </div>
      </div>

      {/* Icono con animaciones complejas */}
      <motion.div
        animate={{
          rotate: [0, 8, 0, -8, 0],
          scale: [1, 1.05, 1, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        }}
        className="mt-6"
      >
        <Icon className={`h-9 w-9 ${style.title}`} strokeWidth={1.6} />
      </motion.div>

      {/* Tecnologías */}
      <div className="mt-7 space-y-3">
        {technologies.map((tech, idx) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * idx + 0.2, duration: 0.3 }}
            whileHover={{ x: 4 }}
            className="flex items-center group/tech"
          >
            <motion.span
              whileHover={{ scale: 1.2 }}
              className={`mr-3 h-5 w-px shrink-0 ${style.border} border-l transition-all duration-200 group-hover/tech:opacity-100`}
            />
            <span className="shrink-0 text-[12px] font-medium text-slate-300 transition-colors duration-200 group-hover/tech:text-white">
              {tech}
            </span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + idx * 0.05 }}
              className={`ml-4 h-px flex-1 origin-left bg-gradient-to-r ${style.line}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Efecto de brillo en hover */}
      <motion.div
        className="pointer-events-none absolute -inset-full -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${accent === "cyan" ? "rgba(34,211,238,0.06)" :
            accent === "purple" ? "rgba(168,85,247,0.06)" :
              accent === "emerald" ? "rgba(52,211,153,0.06)" :
                accent === "green" ? "rgba(74,222,128,0.06)" :
                  accent === "pink" ? "rgba(244,114,182,0.06)" :
                    "rgba(251,146,60,0.06)"
            }, transparent 70%)`,
        }}
      />
    </motion.article>
  );
}

export default ModuleCard;