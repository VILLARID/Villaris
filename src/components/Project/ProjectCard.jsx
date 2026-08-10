import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProjectPreview from "./ProjectPreview";

const statusStyles = {
  completed: {
    text: "text-[#047857]",
    bg: "bg-[#ECFDF5]",
    dot: "bg-[#10B981]",
  },
  progress: {
    text: "text-[#B45309]",
    bg: "bg-[#FFFBEB]",
    dot: "bg-[#D97706]",
  },
  planned: {
    text: "text-[#1D4ED8]",
    bg: "bg-[#EFF6FF]",
    dot: "bg-[#2563EB]",
  },
};

function ProjectCard({ project, index = 0 }) {
  const style = statusStyles[project.statusType] || statusStyles.completed;
  const ctaHref = project.demo || project.github;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(226,232,240,0.9)] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition-[box-shadow,border-color] duration-[250ms] ease-out hover:border-blue-200/70 hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]"
    >
      {/* Preview */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-[#F8FAFC]">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <ProjectPreview category={project.category} />
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] ${style.bg} ${style.text}`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
            {project.status}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
            {project.year}
          </span>
          {project.identifier && (
            <span className="ml-auto text-[10px] font-medium uppercase tracking-[0.1em] text-[#CBD5E1]">
              {project.identifier}
            </span>
          )}
        </div>

        <h3 className="mt-4 text-[20px] font-bold leading-snug tracking-[-0.01em] text-[#0F172A]">
          {project.name}
        </h3>

        <p className="mt-2.5 text-[14px] leading-relaxed text-[#64748B]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[10px] font-medium text-[#475569]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto pt-7">
          {ctaHref ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2563EB] transition-colors duration-200 hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              View project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8]">
              Coming soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
