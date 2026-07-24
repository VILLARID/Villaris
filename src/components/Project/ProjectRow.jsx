import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, FolderGit2, Gauge, Calendar } from "lucide-react";

const statusStyles = {
  completed: {
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
    dot: "bg-emerald-400",
    glow: "shadow-[0_0_20px_rgba(52,211,153,0.4)]",
  },
  progress: {
    text: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
    dot: "bg-amber-400",
    glow: "shadow-[0_0_20px_rgba(251,191,36,0.4)]",
  },
  planned: {
    text: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
    dot: "bg-cyan-400",
    glow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
  },
};

function ProjectRow({ project, isOpen, onToggle }) {
  const style = statusStyles[project.statusType] || statusStyles.completed;

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="border-b border-slate-800/40 hover:bg-slate-800/10 transition-colors duration-300"
    >
      {/* Botón principal (fila) */}
      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.99 }}
        className="group grid w-full grid-cols-[140px_minmax(240px,1fr)_90px_130px_28px] items-center gap-6 px-4 py-7 text-left transition-all duration-300 md:px-6"
      >
        {/* Identifier */}
        <motion.span
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 1 }}
          className="text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-500/60 transition group-hover:text-cyan-300 sm:text-xs"
        >
          {project.identifier}
        </motion.span>

        {/* Project Name */}
        <span className="text-[13px] font-bold uppercase tracking-[0.05em] text-slate-300 transition group-hover:text-white sm:text-sm">
          {project.name}
        </span>

        {/* Year */}
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 sm:text-xs">
          <Calendar className="h-3 w-3 text-slate-600" />
          {project.year}
        </span>

        {/* Status */}
        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`h-1.5 w-1.5 rounded-full ${style.dot} ${style.glow}`}
          />
          <span className={`text-[10px] font-bold uppercase tracking-[0.08em] ${style.text}`}>
            {project.status}
          </span>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-end"
        >
          <ChevronDown
            className={`h-4 w-4 transition-colors duration-300 ${
              isOpen ? "text-purple-400" : "text-slate-600 group-hover:text-purple-400"
            }`}
          />
        </motion.div>
      </motion.button>

      {/* Panel desplegable */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.3, delay: isOpen ? 0.1 : 0 },
        }}
        className="overflow-hidden"
      >
        <div className="mx-4 mb-6 border-l-2 border-purple-400/30 bg-gradient-to-r from-[#07101b] to-transparent px-6 py-6 md:mx-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
            {/* Información del proyecto */}
            <div>
              {/* Descripción */}
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-purple-400/50" />
                <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-500">
                  PROJECT_DESCRIPTION
                </p>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Tecnologías */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isOpen ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: idx * 0.05 + 0.2 }}
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(168,85,247,0.5)",
                      backgroundColor: "rgba(168,85,247,0.08)",
                    }}
                    className="border border-purple-500/20 bg-purple-500/[0.04] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-purple-400 transition-all duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex items-end gap-3"
            >
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -2,
                    borderColor: "rgba(168,85,247,0.6)",
                    backgroundColor: "rgba(168,85,247,0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 border border-slate-700 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 transition-all hover:text-purple-300"
                >
                  <FolderGit2 className="h-4 w-4" />
                  Source
                </motion.a>
              )}

              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -2,
                    scale: 1.02,
                    backgroundColor: "#a78bfa",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-purple-500 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#020609] transition-all hover:bg-purple-400"
                >
                  <ExternalLink className="h-4 w-4" />
                  Inspect
                </motion.a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default ProjectRow;