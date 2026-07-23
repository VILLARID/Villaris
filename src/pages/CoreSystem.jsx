import { Braces, Cpu, Database } from "lucide-react";
import ModuleCard from "../components/Core/ModuleCard";

const modules = [
    {
        moduleId: "MOD_001",
        title: "FRONTEND MODULE",
        technologies: ["React", "Tailwind CSS", "Bootstrap", "Figma"],
        icon: Braces,
        accent: "cyan",
    },
    {
        moduleId: "MOD_002",
        title: "BACKEND MODULE",
        technologies: ["Node.js", "Python", "Java"],
        icon: Cpu,
        accent: "purple",
    },
    {
        moduleId: "MOD_003",
        title: "DATABASE MODULE",
        technologies: ["PostgreSQL", "Oracle"],
        icon: Database,
        accent: "emerald",
    },
];

function CoreSystem() {
    return (
        <section id="core-system" className="relative flex min-h-screen scroll-mt-0 items-center overflow-hidden py-24">
            {/* Brillos */}
            <div className="pointer-events-none absolute left-[30%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[170px]" />
            <div className="pointer-events-none absolute right-[12%] top-[55%] h-[400px] w-[400px] rounded-full bg-purple-500/[0.025] blur-[160px]" />

            <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                {/* Número de sección */}
                <div className="mb-8 flex items-center gap-4">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-cyan-500/70">
                        01 //
                    </span>

                    <span className="h-px w-14 bg-cyan-500/25" />
                </div>

                {/* Título */}
                <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-none tracking-[0.01em] text-[#eef2f5]">
                    CORE SYSTEM
                </h2>

                <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-slate-600 sm:text-xs">
                    TECHNOLOGY_STACK :: OPERATIONAL_MODULES
                </p>

                {/* Tarjetas */}
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {modules.map((module) => (
                        <ModuleCard
                            key={module.moduleId}
                            moduleId={module.moduleId}
                            title={module.title}
                            technologies={module.technologies}
                            icon={module.icon}
                            accent={module.accent}
                        />
                    ))}
                </div>
            </div>

            {/* Navegación lateral decorativa */}
            <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 2xl:flex">
                <span className="h-px w-3 bg-slate-700" />

                <div className="flex items-center gap-3">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                        Core System
                    </span>

                    <span className="h-px w-10 bg-cyan-400" />

                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </div>

                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
            </div>
        </section>
    );
}

export default CoreSystem;