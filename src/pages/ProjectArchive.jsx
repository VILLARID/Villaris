import { useState } from "react";
import { motion } from "framer-motion";
import ProjectRow from "../components/Project/ProjectRow";

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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const projects = [
  {
    identifier: "PROJECT_001",
    name: "ECOMMERCE PLATFORM",
    year: "2024",
    status: "COMPLETED",
    statusType: "completed",
    description: "Plataforma de comercio electrónico con catálogo de productos, autenticación, carrito de compras, panel administrativo y gestión de pedidos.",
    technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    identifier: "PROJECT_002",
    name: "TASK MANAGEMENT SYSTEM",
    year: "2024",
    status: "COMPLETED",
    statusType: "completed",
    description: "Sistema para organizar proyectos, tareas, fechas límite y equipos mediante una interfaz de administración moderna y responsiva.",
    technologies: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    identifier: "PROJECT_003",
    name: "API GATEWAY SERVICE",
    year: "2023",
    status: "COMPLETED",
    statusType: "completed",
    description: "Servicio centralizado para enrutar peticiones, autenticar clientes, limitar solicitudes y conectar distintos servicios backend.",
    technologies: ["Node.js", "Redis", "Docker", "REST API"],
    github: "https://github.com/",
    demo: "https://example.com/",
  },
  {
    identifier: "PROJECT_004",
    name: "ANALYTICS DASHBOARD",
    year: "2025",
    status: "IN PROGRESS",
    statusType: "progress",
    description: "Panel de analítica en desarrollo para visualizar métricas, actividad del sistema, rendimiento y estadísticas en tiempo real.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/",
    demo: "",
  },
  {
    identifier: "PROJECT_005",
    name: "MOBILE APP ANDROID",
    year: "2025",
    status: "IN PROGRESS",
    statusType: "progress",
    description: "Aplicación móvil nativa para Android con arquitectura MVVM, Jetpack Compose y sincronización en tiempo real.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room"],
    github: "https://github.com/",
    demo: "",
  },
];

function ProjectArchive() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (identifier) => {
    setOpenProject((current) => (current === identifier ? null : identifier));
  };

  return (
    <section id="project-archive" className="relative min-h-screen overflow-hidden bg-[#020609] py-28">
      {/* Fondo con grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,180,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,220,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Brillos con pulsación */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.6, 0.25] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[15%] top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-purple-500/[0.035] blur-[180px]"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="pointer-events-none absolute right-[20%] top-[55%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.03] blur-[170px]"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute left-[50%] top-[70%] h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-emerald-500/[0.025] blur-[160px]"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto w-full max-w-[1540px] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24"
      >
        {/* Encabezado de sección */}
        <motion.div variants={fadeInLeft} className="mb-6 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.16em] text-purple-500/70">
            02 //
          </span>
          <span className="h-px w-20 bg-gradient-to-r from-purple-500/50 to-transparent" />
        </motion.div>

        {/* Título principal */}
        <motion.h2
          variants={fadeInUp}
          className="text-[clamp(2.8rem,6vw,6rem)] font-black uppercase leading-none tracking-[-0.02em] text-[#eef2f5]"
        >
          PROJECT ARCHIVE
          <span className="block text-[clamp(1.5rem,3vw,3rem)] font-normal tracking-[0.3em] text-purple-400/50">
            SYSTEMS_BUILT
          </span>
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-4 text-[10px] uppercase tracking-[0.55em] text-slate-500 sm:text-xs"
        >
          CLICK_TO_INSPECT :: ACTIVE_DEPLOYMENT
        </motion.p>

        {/* Línea divisoria */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 h-px w-32 bg-gradient-to-r from-purple-500/30 to-transparent"
        />

        {/* Tabla de proyectos */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 overflow-x-auto"
        >
          <div className="min-w-[900px]">
            {/* Encabezado */}
            <div className="grid grid-cols-[140px_minmax(240px,1fr)_90px_130px_28px] gap-6 border-b border-slate-800/60 px-4 pb-5 md:px-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Identifier
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Project_Name
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Year
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600">
                Status
              </span>
              <span />
            </div>

            {/* Proyectos */}
            <div>
              {projects.map((project) => (
                <ProjectRow
                  key={project.identifier}
                  project={project}
                  isOpen={openProject === project.identifier}
                  onToggle={() => toggleProject(project.identifier)}
                />
              ))}
            </div>
          </div>
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
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-purple-400/80">
            Project Archive
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-purple-400 to-transparent" />
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)]"
          />
        </div>
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <motion.span
          animate={{ height: ["8px", "24px", "8px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-purple-500/30"
        />
      </motion.div>
    </section>
  );
}

export default ProjectArchive;