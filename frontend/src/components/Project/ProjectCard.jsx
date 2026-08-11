import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
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
  live: {
    text: "text-[#1D4ED8]",
    bg: "bg-[#EFF6FF]",
    dot: "bg-[#2563EB]",
  },
  planned: {
    text: "text-[#1D4ED8]",
    bg: "bg-[#EFF6FF]",
    dot: "bg-[#2563EB]",
  },
};

const statusMap = {
  completed: { type: "completed", label: "Completed" },
  "in-progress": { type: "progress", label: "In Progress" },
  progress: { type: "progress", label: "In Progress" },
  live: { type: "live", label: "Live" },
  planned: { type: "planned", label: "Planned" },
};

function getStatus(status) {
  if (statusMap[status]) return statusMap[status];
  return { type: "completed", label: status || "Completed" };
}

function ProjectCard({ project, index = 0 }) {
  const status = getStatus(project.status);
  const style = statusStyles[status.type] || statusStyles.completed;
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [];
  const imageUrl = project.image_url;
  const primaryHref = project.project_url || project.github_url;
  const githubHref = project.github_url;

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
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={project.title}
            loading="lazy"
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
            {status.label}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#94A3B8]">
            {project.year}
          </span>
        </div>

        <h3 className="mt-4 text-[20px] font-bold leading-snug tracking-[-0.01em] text-[#0F172A]">
          {project.title}
        </h3>

        <p className="mt-2.5 text-[14px] leading-relaxed text-[#64748B]">
          {project.description || project.short_description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech.id ?? tech.name}
              className="rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[10px] font-medium text-[#475569]"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-7">
          {primaryHref ? (
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2563EB] transition-colors duration-200 hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              View project
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <span className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8]">
              Coming soon
            </span>
          )}

          {githubHref && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E2E8F0] text-[#475569] transition-colors duration-200 hover:border-[#CBD5E1] hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <Code2 className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;