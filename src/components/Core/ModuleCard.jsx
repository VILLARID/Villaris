function ModuleCard({
    moduleId,
    title,
    technologies,
    icon: Icon,
    accent = "cyan",
}) {
    const styles = {
        cyan: {
            title: "text-cyan-400",
            border: "border-cyan-400",
            line: "bg-cyan-400/20",
            glow: "shadow-[0_0_12px_rgba(34,211,238,0.8)]",
        },
        purple: {
            title: "text-purple-500",
            border: "border-purple-500",
            line: "bg-purple-500/20",
            glow: "shadow-[0_0_12px_rgba(168,85,247,0.8)]",
        },
        emerald: {
            title: "text-emerald-400",
            border: "border-emerald-400",
            line: "bg-emerald-400/20",
            glow: "shadow-[0_0_12px_rgba(52,211,153,0.8)]",
        },
    };

    const currentStyle = styles[accent];

    return (
        <article className="module-card relative min-h-[250px] overflow-hidden border border-slate-800/80 bg-[#09111e] px-7 py-7 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-[#0b1524]">
            {/* Esquina recortada */}
            <div className="pointer-events-none absolute right-0 top-0 h-8 w-8 bg-[#020609] [clip-path:polygon(100%_0,100%_100%,0_0)]" />

            {/* Borde inferior decorativo */}
            <div className={`absolute bottom-0 left-4 h-px w-20 ${currentStyle.line}`} />

            {/* Encabezado */}
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-600">
                        {moduleId}
                    </p>

                    <h3 className={`mt-2 text-[13px] font-bold uppercase tracking-[0.14em] ${currentStyle.title}`}>
                        {title}
                    </h3>
                </div>

                <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full bg-emerald-400 ${currentStyle.glow}`} />

                    <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-400">
                        Online
                    </span>
                </div>
            </div>

            {/* Icono */}
            <Icon className={`mt-7 h-8 w-8 ${currentStyle.title}`} strokeWidth={1.8} />

            {/* Tecnologías */}
            <div className="mt-7 space-y-4">
                {technologies.map((technology) => (
                    <div key={technology} className="flex items-center">
                        <span className={`mr-3 h-4 w-px shrink-0 ${currentStyle.border} border-l`} />

                        <span className="shrink-0 text-[12px] font-semibold text-slate-400">
                            {technology}
                        </span>

                        <span className={`ml-4 h-px flex-1 ${currentStyle.line}`} />
                    </div>
                ))}
            </div>
        </article>
    );
}

export default ModuleCard;