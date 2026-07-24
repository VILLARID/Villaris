import { motion } from "framer-motion";
import { Braces, Cpu, Database, Smartphone, Brain, Code2 } from "lucide-react";
import ModuleCard from "../components/Core/ModuleCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
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

const modules = [
  {
    moduleId: "MOD_001",
    title: "FRONTEND MODULE",
    technologies: ["React", "Tailwind CSS", "Bootstrap", "Figma"],
    icon: Braces,
    accent: "cyan",
    description: "Interfaces modernas y responsivas",
  },
  {
    moduleId: "MOD_002",
    title: "BACKEND MODULE",
    technologies: ["Node.js", "Python", "Java", "Spring Boot"],
    icon: Cpu,
    accent: "purple",
    description: "APIs robustas y escalables",
  },
  {
    moduleId: "MOD_003",
    title: "DATABASE MODULE",
    technologies: ["PostgreSQL", "Oracle", "MongoDB", "Redis"],
    icon: Database,
    accent: "emerald",
    description: "Almacenamiento y optimización",
  },
  {
    moduleId: "MOD_004",
    title: "ANDROID DEVELOPMENT",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Material Design"],
    icon: Smartphone,
    accent: "green",
    description: "Apps nativas para Android",
  },
  {
    moduleId: "MOD_005",
    title: "AI & ML MODULE",
    technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    icon: Brain,
    accent: "pink",
    description: "Deep Learning e IA generativa",
  },
  {
    moduleId: "MOD_006",
    title: "SOFTWARE ENGINEERING",
    technologies: ["Clean Code", "DevOps", "Microservices", "Docker"],
    icon: Code2,
    accent: "orange",
    description: "Arquitectura y mejores prácticas",
  },
];

function CoreSystem() {
  return (
    <section id="core-system" className="relative min-h-screen overflow-hidden bg-[#020609] py-28">
      {/* Fondo con grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,180,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,220,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Brillos con pulsación mejorada */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[25%] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[180px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-[15%] top-[40%] h-[500px] w-[500px] rounded-full bg-purple-500/[0.03] blur-[180px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute left-[50%] top-[70%] h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-emerald-500/[0.025] blur-[160px]"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-[1540px] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24"
      >
        {/* Encabezado de sección */}
        <motion.div variants={fadeInLeft} className="mb-6 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.16em] text-cyan-500/70">
            01 //
          </span>
          <span className="h-px w-20 bg-gradient-to-r from-cyan-500/50 to-transparent" />
        </motion.div>

        {/* Título principal */}
        <motion.h2
          variants={fadeInUp}
          className="text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-none tracking-[-0.02em] text-[#eef2f5]"
        >
          CORE SYSTEM
          <span className="block text-[clamp(1.5rem,3vw,3rem)] font-normal tracking-[0.3em] text-cyan-400/50">
            TECHNOLOGY ECOSYSTEM
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-[10px] uppercase tracking-[0.55em] text-slate-500 sm:text-xs"
        >
          OPERATIONAL_MODULES :: ACTIVE_DEPLOYMENT
        </motion.p>

        {/* Línea divisoria decorativa */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 h-px w-32 bg-gradient-to-r from-cyan-500/30 to-transparent"
        />

        {/* Grid de tarjetas */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {modules.map((module, index) => (
            <ModuleCard
              key={module.moduleId}
              moduleId={module.moduleId}
              title={module.title}
              technologies={module.technologies}
              icon={module.icon}
              accent={module.accent}
              description={module.description}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Navegación lateral decorativa */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 2xl:flex"
      >
        <span className="h-px w-4 bg-slate-700" />
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-400/80">
            Core System
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-cyan-400 to-transparent" />
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
          />
        </div>
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
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

export default CoreSystem;