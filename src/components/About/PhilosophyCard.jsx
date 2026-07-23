const accentStyles = {
    cyan: {
        id: "text-cyan-400",
        border: "bg-cyan-400/60",
        glow: "hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,0.05)]",
    },

    purple: {
        id: "text-purple-500",
        border: "bg-purple-500/60",
        glow: "hover:border-purple-500/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.05)]",
    },

    emerald: {
        id: "text-emerald-400",
        border: "bg-emerald-400/60",
        glow: "hover:border-emerald-400/30 hover:shadow-[0_0_35px_rgba(52,211,153,0.05)]",
    },
};

function PhilosophyCard({ id, title, description, accent = "cyan" }) {
    const styles = accentStyles[accent] || accentStyles.cyan;

    return (
        <article className={`philosophy-card group relative overflow-hidden border border-slate-800/80 bg-[#09111e] px-6 py-6 transition duration-300 hover:-translate-y-1 hover:bg-[#0b1524] sm:px-7 ${styles.glow}`}>
            {/* Scanlines */}
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.012)_0px,rgba(255,255,255,0.012)_1px,transparent_1px,transparent_4px)] opacity-30" />

            {/* Brillo superior */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.012] to-transparent" />

            {/* Línea inferior */}
            <div className={`absolute bottom-0 left-4 h-px w-24 ${styles.border}`} />

            {/* Esquina recortada */}
            <div className="pointer-events-none absolute right-0 top-0 h-6 w-6 bg-[#020609] [clip-path:polygon(100%_0,100%_100%,0_0)]" />

            <div className="relative z-10 grid gap-4 sm:grid-cols-[60px_minmax(0,1fr)]">
                <span className={`text-[10px] font-bold uppercase tracking-[0.12em] ${styles.id}`}>
                    {id}
                </span>

                <div>
                    <h3 className="text-[12px] font-black uppercase tracking-[0.08em] text-slate-100 sm:text-[13px]">
                        {title}
                    </h3>

                    <p className="mt-3 max-w-[620px] text-[12px] leading-6 text-slate-500 transition group-hover:text-slate-400 sm:text-[13px]">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    );
}

export default PhilosophyCard;