import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../components/Project/ProjectCard";
import ProjectFilters from "../components/Project/ProjectFilters";
import SectionLabel from "../components/ui/SectionLabel";
import Reveal from "../components/ui/Reveal";

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

const sortOrders = {
  latest: (a, b) => b.year.localeCompare(a.year),
  oldest: (a, b) => a.year.localeCompare(b.year),
  az: (a, b) => a.name.localeCompare(b.name),
};

function ProjectArchive() {
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
      className="relative overflow-x-clip bg-white pt-6 pb-20 sm:pt-8 sm:pb-24"
    >
      {/* Fondo: grid fino + radial azul */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.35)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.04),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-[clamp(28px,5vw,72px)]">
        {/* Header editorial (LEFT) */}
        <div className="max-w-[820px]">
          <SectionLabel number="03" label="PROJECT ARCHIVE" />

          <Reveal
            as="h2"
            y={32}
            duration={0.8}
            className="mt-6 text-[clamp(2.8rem,4.6vw,5.2rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#0F172A]"
          >
            PROJECT
            <br />
            ARCHIVE
          </Reveal>

          <Reveal
            y={18}
            delay={0.08}
            className="mt-5 text-[clamp(1.1rem,1.7vw,1.7rem)] font-medium tracking-[0.14em] text-[#2563EB]"
          >
            SYSTEMS BUILT WITH PURPOSE
          </Reveal>

          <Reveal
            y={18}
            delay={0.16}
            className="mt-7 max-w-[620px] text-[15px] leading-[1.75] text-[#64748B] sm:text-[16px]"
          >
            Una selección de sistemas, aplicaciones y herramientas que he
            diseñado y construido de principio a fin: desde la interfaz hasta el
            backend y los datos.
          </Reveal>
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
        <div className="mt-8">
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
        </div>
      </div>
    </section>
  );
}

export default ProjectArchive;
