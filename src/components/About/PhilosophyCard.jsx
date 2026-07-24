import { motion } from "framer-motion";

const accentStyles = {
  cyan: {
    id: "text-cyan-400",
    border: "bg-cyan-400/60",
    glow: "hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]",
    dot: "bg-cyan-400",
    gradient: "from-cyan-400/20 to-transparent",
  },
  purple: {
    id: "text-purple-400",
    border: "bg-purple-400/60",
    glow: "hover:border-purple-400/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.08)]",
    dot: "bg-purple-400",
    gradient: "from-purple-400/20 to-transparent",
  },
  emerald: {
    id: "text-emerald-400",
    border: "bg-emerald-400/60",
    glow: "hover:border-emerald-400/30 hover:shadow-[0_0_35px_rgba(52,211,153,0.08)]",
    dot: "bg-emerald-400",
    gradient: "from-emerald-400/20 to-transparent",
  },
};

function PhilosophyCard({ id, title, description, accent = "cyan", index = 0 }) {
  const styles = accentStyles[accent] || accentStyles.cyan;

  return (
    <motion.article
      initial={{ opacity: 0, x: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.01,
        borderColor: "rgba(255,255,255,0.15)",
        transition: { duration: 0.2 },
      }}
      className={`philosophy-card group relative overflow-hidden border border-slate-800/60 bg-gradient-to-br from-[#09111e] to-[#0a1422] px-6 py-6 transition-all duration-300 sm:px-7 ${styles.glow}`}
    >
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.012)_0px,rgba(255,255,255,0.012)_1px,transparent_1px,transparent_4px)] opacity-30" />

      {/* Brillo superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.015] to-transparent" />

      {/* Brillo de fondo en hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${
            accent === "cyan" ? "rgba(34,211,238,0.04)" :
            accent === "purple" ? "rgba(168,85,247,0.04)" :
            "rgba(52,211,153,0.04)"
          }, transparent 70%)`,
        }}
      />

      {/* Línea inferior animada */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
        className={`absolute bottom-0 left-4 h-px bg-gradient-to-r ${styles.border}`}
      />

      {/* Esquina recortada */}
      <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 bg-gradient-to-bl from-[#020609] to-transparent [clip-path:polygon(100%_0,100%_100%,0_0)]" />

      <div className="relative z-10 grid gap-4 sm:grid-cols-[60px_minmax(0,1fr)]">
        {/* ID con punto decorativo */}
        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
            className={`h-1.5 w-1.5 rounded-full ${styles.dot}`}
          />
          <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${styles.id}`}>
            {id}
          </span>
        </div>

        <div>
          <motion.h3
            whileHover={{ x: 4 }}
            className="text-[12px] font-black uppercase tracking-[0.08em] text-slate-100 transition-all duration-200 sm:text-[13px]"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            className="mt-3 max-w-[620px] text-[12px] leading-6 text-slate-500 transition-all duration-200 group-hover:text-slate-400 sm:text-[13px]"
          >
            {description}
          </motion.p>

          {/* Línea decorativa bajo la descripción */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            className={`mt-4 h-px w-16 origin-left bg-gradient-to-r ${styles.border}`}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default PhilosophyCard;