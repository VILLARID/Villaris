import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProjectCard from "../components/Project/ProjectCard";
import ProjectFilters from "../components/Project/ProjectFilters";

const projects = [
  {
    identifier: "PROJECT_001",
    name: "Ecommerce Platform",
    year: "2024",
    status: "COMPLETED",
    statusType: "completed",
    category: "WEB APPLICATIONS",
    description:
      "Plataforma moderna de comercio electrónico con foco en gestión, escalabilidad y experiencia de usuario.",
    technologies: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
    github: "https://github.com/",
    demo: "https://example.com/",
    image: null,
  },
  {
    identifier: "PROJECT_002",
    name: "Task Management System",
    year: "2024",
    status: "COMPLETED",
    statusType: "completed",
    category: "WEB APPLICATIONS",
    description:
      "Sistema de gestión de tareas y equipos con seguimiento en tiempo real.",
    technologies: ["React", "Express", "MongoDB", "JWT"],
    github: "https://github.com/",
    demo: "https://example.com/",
    image: null,
  },
  {
    identifier: "PROJECT_003",
    name: "API Gateway Service",
    year: "2023",
    status: "COMPLETED",
    statusType: "completed",
    category: "BACKEND SYSTEMS",
    description:
      "Servicio backend para autenticación, rate limiting y monitoreo de APIs.",
    technologies: ["Node.js", "Redis", "Docker", "REST API"],
    github: "https://github.com/",
    demo: "https://example.com/",
    image: null,
  },
  {
    identifier: "PROJECT_004",
    name: "Analytics Dashboard",
    year: "2025",
    status: "IN PROGRESS",
    statusType: "progress",
    category: "DASHBOARDS",
    description:
      "Panel de analítica para visualizar métricas y rendimiento del sistema en tiempo real.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/",
    demo: "",
    image: null,
  },
  {
    identifier: "PROJECT_005",
    name: "Mobile App Android",
    year: "2025",
    status: "IN PROGRESS",
    statusType: "progress",
    category: "MOBILE",
    description:
      "Aplicación móvil nativa para Android con arquitectura MVVM y sincronización en tiempo real.",
    technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room"],
    github: "https://github.com/",
    demo: "",
    image: null,
  },
];

const categories = [
  "ALL",
  "WEB APPLICATIONS",
  "BACKEND SYSTEMS",
  "DASHBOARDS",
  "MOBILE",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

function fadeUp(y = 12, delay = 0, reduce = false) {
  return {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
    },
  };
}

const sortOrders = {
  latest: (a, b) => b.year.localeCompare(a.year),
  oldest: (a, b) => a.year.localeCompare(b.year),
  az: (a, b) => a.name.localeCompare(b.name),
};

function ProjectArchive() {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("latest");

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProjects = projects
    .filter((project) => {
      const matchesCategory =
        activeCategory === "ALL" || project.category === activeCategory;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;
      const haystack = [
        project.name,
        project.description,
        project.category,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    })
    .sort(sortOrders[sort] || sortOrders.latest);

  return (
    <section
      id="project-archive"
      className="relative overflow-x-clip bg-white pb-24 pt-32"
    >
      {/* Fondo: grid fino + radial azul */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.35)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.04),transparent_70%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
        className="relative z-10 mx-auto w-full max-w-[1540px] px-[clamp(28px,5vw,72px)]"
      >
        {/* Header editorial (LEFT) */}
        <div className="max-w-[820px]">
          <motion.div
            variants={fadeUp(8, 0.05, shouldReduceMotion)}
            className="flex items-center gap-4"
          >
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#2563EB]">
              02 /
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.11em] text-[#64748B]">
              PROJECT ARCHIVE
            </span>
            <span
              aria-hidden="true"
              className="h-px w-[42px] bg-[#2563EB] opacity-50"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp(16, 0.12, shouldReduceMotion)}
            className="mt-6 text-[clamp(2.6rem,9vw,6rem)] font-bold leading-[0.94] tracking-[-0.045em] text-[#0F172A]"
          >
            PROJECT
            <br />
            ARCHIVE
          </motion.h2>

          <motion.p
            variants={fadeUp(10, 0.2, shouldReduceMotion)}
            className="mt-5 text-[clamp(1.1rem,3.5vw,1.6rem)] font-medium tracking-[0.14em] text-[#2563EB] sm:tracking-[0.2em]"
          >
            SYSTEMS BUILT WITH PURPOSE
          </motion.p>

          <motion.p
            variants={fadeUp(10, 0.28, shouldReduceMotion)}
            className="mt-7 max-w-[620px] text-[15px] leading-[1.75] text-[#64748B] sm:text-[16px]"
          >
            Una selección de sistemas, aplicaciones y herramientas que he
            diseñado y construido de principio a fin: desde la interfaz hasta el
            backend y los datos.
          </motion.p>
        </div>

        {/* Toolbar de filtros */}
        <div className="mt-10">
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            query={query}
            onQueryChange={setQuery}
            sort={sort}
            onSortChange={setSort}
          />
        </div>

        {/* Grid de cards */}
        <motion.div
          variants={fadeUp(12, 0.42, shouldReduceMotion)}
          className="mt-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.identifier}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center text-sm text-[#64748B]"
              >
                No hay proyectos que coincidan con tu búsqueda.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ProjectArchive;
