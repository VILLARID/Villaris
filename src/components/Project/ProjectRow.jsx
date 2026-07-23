import { ChevronDown, ExternalLink, FolderGit2 } from "lucide-react";

function ProjectRow({ project, isOpen, onToggle }) {
    const statusStyles = {
        completed: "text-emerald-400",
        progress: "text-amber-400",
        planned: "text-cyan-400",
    };

    return (
        <article className="border-b border-slate-800/50">
            <button type="button" onClick={onToggle} className="group grid w-full grid-cols-[130px_minmax(220px,1fr)_90px_130px_24px] items-center gap-6 px-4 py-7 text-left transition duration-300 hover:bg-cyan-400/[0.025] md:px-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-cyan-500/70 transition group-hover:text-cyan-300 sm:text-xs">
                    {project.identifier}
                </span>

                <span className="text-[13px] font-bold uppercase tracking-[0.05em] text-slate-300 transition group-hover:text-white sm:text-sm">
                    {project.name}
                </span>

                <span className="text-[11px] font-semibold text-slate-600 sm:text-xs">
                    {project.year}
                </span>

                <span className={`text-[10px] font-bold uppercase tracking-[0.08em] ${statusStyles[project.statusType]}`}>
                    {project.status}
                </span>

                <ChevronDown className={`h-4 w-4 text-slate-600 transition duration-300 group-hover:text-cyan-400 ${isOpen ? "rotate-180 text-cyan-400" : ""}`} />
            </button>

            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <div className="mx-4 mb-6 border-l border-cyan-400/30 bg-[#07101b] px-6 py-6 md:mx-5">
                        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-slate-600">
                                    PROJECT_DESCRIPTION
                                </p>

                                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span key={technology} className="border border-cyan-500/20 bg-cyan-500/[0.04] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-cyan-400">
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-end gap-3">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-slate-700 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400 transition hover:border-cyan-400/60 hover:text-cyan-300">
                                        <FolderGit2 className="h-4 w-4" />
                                        Source
                                    </a>
                                )}

                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-cyan-400 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.16em] text-[#020609] transition hover:bg-cyan-300">
                                        <ExternalLink className="h-4 w-4" />
                                        Inspect
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectRow;