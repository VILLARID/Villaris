import AboutStats from "../components/About/AboutStats";
import PhilosophyCard from "../components/About/PhilosophyCard";

const philosophies = [
    {
        id: "PHI_001",
        title: "ARQUITECTURA PRIMERO",
        description: "Cada proyecto comienza con la arquitectura correcta. Los sistemas bien diseñados escalan; los demás solo funcionan por un tiempo.",
        accent: "cyan",
    },
    {
        id: "PHI_002",
        title: "CÓDIGO LIMPIO",
        description: "El código que escribo hoy será mantenido mañana. Claridad, simplicidad y documentación no son opcionales.",
        accent: "purple",
    },
    {
        id: "PHI_003",
        title: "SOLUCIONES REALES",
        description: "No construyo features. Construyo soluciones a problemas reales con tecnología elegante y resultados medibles.",
        accent: "emerald",
    },
];

function About() {
    return (
        <section id="about" className="relative flex min-h-screen items-center overflow-hidden py-24">
            {/* Brillos ambientales */}
            <div className="pointer-events-none absolute left-[12%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-500/[0.025] blur-[180px]" />

            <div className="pointer-events-none absolute right-[18%] top-[48%] h-[450px] w-[450px] rounded-full bg-purple-500/[0.025] blur-[170px]" />

            {/* Contenido */}
            <div className="relative z-10 mx-auto grid w-full max-w-[1540px] grid-cols-1 items-center gap-16 px-6 sm:px-10 md:px-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(520px,1.05fr)] lg:gap-20 lg:px-20 xl:px-24">
                {/* COLUMNA IZQUIERDA */}
                <div className="min-w-0">
                    {/* Número */}
                    <div className="mb-8 flex items-center gap-4">
                        <span className="text-[10px] font-bold tracking-[0.16em] text-cyan-500/70">
                            03 //
                        </span>

                        <span className="h-px w-14 bg-cyan-500/25" />
                    </div>

                    {/* Título */}
                    <div className="leading-[0.95]">
                        <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-black uppercase tracking-[0.01em] text-[#eef2f5]">
                            ABOUT
                        </h2>

                        <h2 className="mt-5 text-[clamp(2.8rem,5vw,5rem)] font-black uppercase tracking-[0.01em] text-[#eef2f5]">
                            VILLARID
                        </h2>
                    </div>

                    {/* Descripción */}
                    <div className="mt-12 max-w-[690px] space-y-5 text-[13px] leading-7 text-slate-400 sm:text-[15px] sm:leading-8">
                        <p>
                            Desarrollador Full Stack enfocado en construir aplicaciones escalables, sistemas eficientes y soluciones digitales utilizando tecnologías modernas.
                        </p>

                        <p>
                            Combino visión técnica profunda con sensibilidad para el diseño, creando productos que no solo funcionan, sino que se sienten precisos y bien construidos.
                        </p>
                    </div>

                    {/* Datos */}
                    <AboutStats />
                </div>

                {/* COLUMNA DERECHA */}
                <div className="space-y-5">
                    {philosophies.map((philosophy) => (
                        <PhilosophyCard key={philosophy.id} id={philosophy.id} title={philosophy.title} description={philosophy.description} accent={philosophy.accent} />
                    ))}
                </div>
            </div>

            {/* Navegación lateral */}
            <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 2xl:flex">
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />

                <div className="flex items-center gap-3">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                        About
                    </span>

                    <span className="h-px w-10 bg-cyan-400" />

                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                </div>

                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
            </div>
        </section>
    );
}

export default About;