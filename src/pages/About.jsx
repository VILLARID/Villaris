import { motion } from "framer-motion";
import AboutStats from "../components/About/AboutStats";
import PhilosophyCard from "../components/About/PhilosophyCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const philosophies = [
  {
    id: "PHI_001",
    title: "ARQUITECTURA PRIMERO",
    description: "Cada proyecto comienza con la arquitectura correcta. Los sistemas bien diseñados escalan; los demás solo funcionan por un tiempo.",
    accent: "cyan",
  },
  {
    id: "PHI_002",
    title: "CÓDIGO LIMPIO",
    description: "El código que escribo hoy será mantenido mañana. Claridad, simplicidad y documentación no son opcionales.",
    accent: "purple",
  },
  {
    id: "PHI_003",
    title: "SOLUCIONES REALES",
    description: "No construyo features. Construyo soluciones a problemas reales con tecnología elegante y resultados medibles.",
    accent: "emerald",
  },
  {
    id: "PHI_004",
    title: "APRENDIZAJE CONTINUO",
    description: "La tecnología avanza rápido. Mantenerse actualizado no es una ventaja, es una responsabilidad profesional.",
    accent: "cyan",
  },
];

function About() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden bg-[#020609] py-28">
      {/* Fondo con grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,180,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,220,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Brillos ambientales con pulsación */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[12%] top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[180px]"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="pointer-events-none absolute right-[18%] top-[48%] h-[480px] w-[480px] rounded-full bg-purple-500/[0.03] blur-[170px]"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="pointer-events-none absolute left-[50%] top-[70%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-emerald-500/[0.025] blur-[160px]"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto grid w-full max-w-[1540px] grid-cols-1 items-center gap-16 px-6 sm:px-10 md:px-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(520px,1.05fr)] lg:gap-20 lg:px-20 xl:px-24"
      >
        {/* COLUMNA IZQUIERDA */}
        <div className="min-w-0">
          {/* Encabezado de sección */}
          <motion.div variants={fadeInLeft} className="mb-6 flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.16em] text-cyan-500/70">
              03 //
            </span>
            <span className="h-px w-20 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </motion.div>

          {/* Título */}
          <motion.div variants={fadeInUp} className="leading-[0.95]">
            <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-black uppercase tracking-[-0.02em] text-[#eef2f5]">
              ABOUT
            </h2>
            <h2 className="mt-4 text-[clamp(2.8rem,5vw,5rem)] font-black uppercase tracking-[-0.02em] text-[#eef2f5]">
              VILLARID
            </h2>
          </motion.div>

          {/* Línea divisoria */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 h-px w-24 bg-gradient-to-r from-cyan-500/30 to-transparent"
          />

          {/* Descripción */}
          <motion.div variants={fadeInUp} className="mt-10 max-w-[690px] space-y-5 text-[13px] leading-7 text-slate-400 sm:text-[15px] sm:leading-8">
            <p>
              Desarrollador Full Stack enfocado en construir aplicaciones escalables, sistemas eficientes y soluciones digitales utilizando tecnologías modernas.
            </p>
            <p>
              Combino visión técnica profunda con sensibilidad para el diseño, creando productos que no solo funcionan, sino que se sienten precisos y bien construidos.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeInUp}>
            <AboutStats />
          </motion.div>
        </div>

        {/* COLUMNA DERECHA */}
        <motion.div variants={fadeInRight} className="space-y-4">
          {philosophies.map((philosophy, index) => (
            <PhilosophyCard
              key={philosophy.id}
              id={philosophy.id}
              title={philosophy.title}
              description={philosophy.description}
              accent={philosophy.accent}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Navegación lateral */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 2xl:flex"
      >
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-400/80">
            About
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-cyan-400 to-transparent" />
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
          />
        </div>
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <motion.span
          animate={{ height: ["8px", "24px", "8px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-cyan-500/30"
        />
      </motion.div>
    </section>
  );
}

export default About;