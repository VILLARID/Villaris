import { useState } from "react";
import ProjectRow from "../components/Project/ProjectRow"
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
];

function ProjectArchive() {
    const [openProject, setOpenProject] = useState(null);

    const toggleProject = (identifier) => {
        setOpenProject((current) => current === identifier ? null : identifier);
    };

    return (
        <section id="project-archive" className="relative flex min-h-screen items-center overflow-hidden py-24">
            <div className="pointer-events-none absolute left-[15%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/[0.025] blur-[180px]" />

            <div className="pointer-events-none absolute right-[20%] top-[55%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.025] blur-[170px]" />

            <div className="relative z-10 mx-auto w-full max-w-[1540px] px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24">
                {/* Número de sección */}
                <div className="mb-8 flex items-center gap-4">
                    <span className="text-[10px] font-bold tracking-[0.16em] text-purple-500/70">
                        02 //
                    </span>

                    <span className="h-px w-14 bg-purple-500/25" />
                </div>

                {/* Título */}
                <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-none tracking-[0.01em] text-[#eef2f5]">
                    PROJECT ARCHIVE
                </h2>

                <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-slate-600 sm:text-xs">
                    SYSTEMS_BUILT :: CLICK_TO_INSPECT
                </p>

                {/* Tabla */}
                <div className="mt-16 overflow-x-auto">
                    <div className="min-w-[850px]">
                        {/* Encabezado */}
                        <div className="grid grid-cols-[130px_minmax(220px,1fr)_90px_130px_24px] gap-6 border-b border-slate-800/60 px-4 pb-5 md:px-5">
                            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-700">
                                Identifier
                            </span>

                            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-700">
                                Project_Name
                            </span>

                            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-700">
                                Year
                            </span>

                            <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-700">
                                Status
                            </span>

                            <span />
                        </div>

                        {/* Proyectos */}
                        <div>
                            {projects.map((project) => (
                                <ProjectRow key={project.identifier} project={project} isOpen={openProject === project.identifier} onToggle={() => toggleProject(project.identifier)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navegación lateral */}
            <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 2xl:flex">
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />

                <div className="flex items-center gap-3">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                        Project Archive
                    </span>

                    <span className="h-px w-10 bg-cyan-400" />

                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </div>

                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
            </div>
        </section>
    );
}

export default ProjectArchive;