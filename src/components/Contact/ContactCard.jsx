import { motion } from "framer-motion";

const accentStyles = {
  cyan: {
    icon: "text-cyan-400",
    border: "hover:border-cyan-400/40",
    glow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]",
    line: "group-hover:bg-cyan-400/50",
    dot: "bg-cyan-400",
  },
  purple: {
    icon: "text-purple-400",
    border: "hover:border-purple-400/40",
    glow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]",
    line: "group-hover:bg-purple-400/50",
    dot: "bg-purple-400",
  },
  emerald: {
    icon: "text-emerald-400",
    border: "hover:border-emerald-400/40",
    glow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.1)]",
    line: "group-hover:bg-emerald-400/50",
    dot: "bg-emerald-400",
  },
  white: {
    icon: "text-slate-300",
    border: "hover:border-slate-300/40",
    glow: "hover:shadow-[0_0_40px_rgba(226,232,240,0.08)]",
    line: "group-hover:bg-slate-300/50",
    dot: "bg-slate-300",
  },
};

function ContactCard({ href, label, accent = "cyan", download = false, children, index = 0 }) {
  const styles = accentStyles[accent] || accentStyles.cyan;
  const isExternal = href?.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      download={download || undefined}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 0.1 * index + 0.3,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.04,
        borderColor: "rgba(255,255,255,0.2)",
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
      className={`contact-card group relative flex h-[110px] min-w-0 flex-col items-center justify-center overflow-hidden border border-slate-800/60 bg-gradient-to-br from-[#09111e] to-[#0a1422] transition-all duration-300 ${styles.border} ${styles.glow}`}
    >
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.012)_0px,rgba(255,255,255,0.012)_1px,transparent_1px,transparent_4px)] opacity-30" />

      {/* Brillo de fondo en hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${
            accent === "cyan" ? "rgba(34,211,238,0.04)" :
            accent === "purple" ? "rgba(168,85,247,0.04)" :
            accent === "emerald" ? "rgba(52,211,153,0.04)" :
            "rgba(226,232,240,0.03)"
          }, transparent 70%)`,
        }}
      />

      {/* Punto decorativo superior */}
      <motion.span
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        }}
        className={`absolute left-3 top-3 h-1.5 w-1.5 rounded-full ${styles.dot} opacity-50`}
      />

      {/* Icono */}
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -5, 5, 0] }}
        transition={{ duration: 0.6 }}
        className={`relative z-10 transition-all duration-300 group-hover:scale-110 ${styles.icon}`}
      >
        {children}
      </motion.div>

      {/* Label */}
      <span className="relative z-10 mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
        {label}
      </span>

      {/* Línea inferior animada */}
      <motion.span
        initial={{ width: 0 }}
        animate={{ width: "66%" }}
        transition={{ duration: 0.6, delay: 0.1 * index + 0.4 }}
        className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-slate-700 transition-all duration-300 group-hover:bg-${accent}-400/50 ${styles.line}`}
      />

      {/* Esquina recortada */}
      <div className="pointer-events-none absolute right-0 top-0 h-5 w-5 bg-gradient-to-bl from-[#020609] to-transparent [clip-path:polygon(100%_0,100%_100%,0_0)]" />

      {/* Efecto de borde en hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${accent === "cyan" ? "rgba(34,211,238,0.1)" :
            accent === "purple" ? "rgba(168,85,247,0.1)" :
              accent === "emerald" ? "rgba(52,211,153,0.1)" :
                "rgba(226,232,240,0.05)"}, transparent)`,
        }}
      />
    </motion.a>
  );
}

export default ContactCard;