import { motion } from "framer-motion";
import useAppMotion from "../../hooks/useAppMotion";
import { ArrowUpDown, Search } from "lucide-react";

function ProjectFilters({
  categories,
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  sort,
  onSortChange,
}) {
  const { shouldReduceMotion } = useAppMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-[96px] z-20 rounded-2xl border border-[rgba(226,232,240,0.9)] bg-white/95 p-3 shadow-[0_2px_12px_rgba(15,23,42,0.04)] backdrop-blur-md sm:p-3.5"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Categorías */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por categoría">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                aria-pressed={isActive}
                className={`inline-flex h-9 items-center rounded-full px-3.5 text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  isActive
                    ? "bg-[#2563EB] text-white shadow-[0_1px_2px_rgba(15,23,42,0.08)]"
                    : "border border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#CBD5E1] hover:text-[#0F172A]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Búsqueda + sort */}
        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
          <div className="relative">
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Search projects..."
              aria-label="Buscar proyectos"
              className="h-9 w-full rounded-[10px] border border-[#E2E8F0] bg-white pl-9 pr-3 text-[13px] text-[#0F172A] placeholder:text-[#94A3B8] transition-colors duration-200 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:w-[210px]"
            />
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(event) => onSortChange(event.target.value)}
              aria-label="Ordenar proyectos"
              className="h-9 w-full appearance-none rounded-[10px] border border-[#E2E8F0] bg-white pl-3 pr-9 text-[12px] font-medium text-[#0F172A] transition-colors duration-200 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:w-[150px]"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A-Z</option>
            </select>
            <ArrowUpDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#94A3B8]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectFilters;
