import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../components/Project/ProjectCard";
import ProjectFilters from "../components/Project/ProjectFilters";
import SectionLabel from "../components/ui/SectionLabel";
import Reveal from "../components/ui/Reveal";
import { getProjects } from "../services/projects.api";

const allLabel = "ALL";

const sortOrders = {
  latest: (a, b) =>
    b.year - a.year ||
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  oldest: (a, b) =>
    a.year - b.year ||
    new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
  az: (a, b) => (a.title || "").localeCompare(b.title || ""),
};

function ProjectCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[rgba(226,232,240,0.9)] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)] dark:border-white/10 dark:bg-[#0D131D] dark:shadow-none">
      <div className="aspect-[16/10] w-full animate-pulse bg-[#F1F5F9] dark:bg-[#16202F]" />
      <div className="flex flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <div className="h-5 w-24 animate-pulse rounded-full bg-[#E2E8F0] dark:bg-white/10" />
          <div className="h-3 w-10 animate-pulse rounded bg-[#EEF2F7] dark:bg-white/[0.07]" />
        </div>
        <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-[#E2E8F0] dark:bg-white/10" />
        <div className="mt-2.5 h-3 w-full animate-pulse rounded bg-[#E2E8F0] dark:bg-white/10" />
        <div className="mt-1.5 h-3 w-5/6 animate-pulse rounded bg-[#E2E8F0] dark:bg-white/10" />
        <div className="mt-5 flex flex-wrap gap-2">
          <div className="h-5 w-16 animate-pulse rounded-md bg-[#E2E8F0] dark:bg-white/10" />
          <div className="h-5 w-16 animate-pulse rounded-md bg-[#E2E8F0] dark:bg-white/10" />
          <div className="h-5 w-16 animate-pulse rounded-md bg-[#E2E8F0] dark:bg-white/10" />
        </div>
      </div>
    </div>
  );
}

function ProjectArchive() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  const [activeCategory, setActiveCategory] = useState(allLabel);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    let active = true;

    async function loadProjects() {
      setLoading(true);
      setError(null);

      try {
        const data = await getProjects();
        if (active) {
          setProjects(Array.isArray(data) ? data : []);
        }
      } catch (loadError) {
        console.error("Failed to load projects:", loadError.message);
        if (active) {
          setError(loadError.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      active = false;
    };
  }, [reloadKey]);

  const categories = [
    allLabel,
    ...new Set(
      projects
        .map((project) => project.category?.toUpperCase())
        .filter(Boolean)
    ),
  ];

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProjects = projects
    .filter((project) => {
      const projectCategory = project.category?.toUpperCase();
      const matchesCategory =
        activeCategory === allLabel || projectCategory === activeCategory;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const technologyNames = (project.technologies || []).map((tech) => tech.name);
      const haystack = [
        project.title,
        project.short_description,
        project.description,
        project.category,
        ...technologyNames,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    })
    .sort(sortOrders[sort] || sortOrders.latest);

  const showEmptyState = !loading && !error && projects.length === 0;
  const showNoMatch = !loading && !error && projects.length > 0 && filteredProjects.length === 0;

  return (
    <section
      id="project-archive"
      className="relative overflow-x-clip bg-white pt-6 pb-20 sm:pt-8 sm:pb-24 dark:bg-[#070B11]"
    >
      {/* Fondo: grid fino + radial azul */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.35)_1px,transparent_1px)] bg-[size:72px_72px] dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.04),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-[clamp(28px,5vw,72px)]">
        {/* Header editorial (LEFT) */}
        <div className="max-w-[820px]">
          <SectionLabel number="03" label="PROJECT ARCHIVE" />

          <Reveal
            as="h2"
            y={32}
            duration={0.8}
            className="mt-6 text-[clamp(2.8rem,4.6vw,5.2rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#0F172A] dark:text-[#F5F7FA]"
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
            className="mt-7 max-w-[620px] text-[15px] leading-[1.75] text-[#64748B] dark:text-[#9BA6B5] sm:text-[16px]"
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
          {loading ? (
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }, (_, index) => (
                <ProjectCardSkeleton key={index} />
              ))}
            </div>
          ) : error ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-[560px] rounded-2xl border border-[rgba(226,232,240,0.9)] bg-white p-10 text-center shadow-[0_2px_10px_rgba(15,23,42,0.03)] dark:border-white/10 dark:bg-[#0D131D] dark:shadow-none"
            >
              <p className="text-[15px] font-medium text-[#0F172A] dark:text-[#F5F7FA]">
                Unable to load projects.
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#64748B] dark:text-[#9BA6B5]">
                The projects archive could not be reached. Please try again.
              </p>
              <button
                type="button"
                onClick={() => setReloadKey((key) => key + 1)}
                className="mt-6 inline-flex h-10 items-center rounded-full bg-[#0F172A] px-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-200 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border dark:border-blue-500/25 dark:bg-[#0F172A] dark:shadow-[0_0_20px_rgba(37,99,235,0.12)] dark:hover:bg-[#16203E] dark:focus-visible:ring-offset-[#070B11]"
              >
                Retry
              </button>
            </motion.div>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard
                      key={project.id ?? project.slug ?? index}
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
                  className="py-16 text-center text-sm text-[#64748B] dark:text-[#9BA6B5]"
                >
                  {showEmptyState
                    ? "No projects available yet."
                    : showNoMatch
                      ? "No hay proyectos que coincidan con tu búsqueda."
                      : ""}
                </motion.p>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectArchive;