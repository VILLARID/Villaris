function ContactCard({ href, label, accent = "cyan", download = false, children }) {
    const accentStyles = {
        cyan: {
            icon: "text-cyan-400",
            border: "hover:border-cyan-400/40",
            glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]",
            line: "group-hover:bg-cyan-400/50",
        },
        purple: {
            icon: "text-purple-500",
            border: "hover:border-purple-500/40",
            glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]",
            line: "group-hover:bg-purple-500/50",
        },
        emerald: {
            icon: "text-emerald-400",
            border: "hover:border-emerald-400/40",
            glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.08)]",
            line: "group-hover:bg-emerald-400/50",
        },
        white: {
            icon: "text-slate-300",
            border: "hover:border-slate-300/40",
            glow: "hover:shadow-[0_0_30px_rgba(226,232,240,0.06)]",
            line: "group-hover:bg-slate-300/50",
        },
    };

    const styles = accentStyles[accent] || accentStyles.cyan;
    const isExternal = href?.startsWith("http");

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            download={download || undefined}
            className={`contact-card group relative flex h-[105px] min-w-0 flex-col items-center justify-center overflow-hidden border border-slate-800/80 bg-[#09111e] transition duration-300 hover:-translate-y-1 hover:bg-[#0b1524] ${styles.border} ${styles.glow}`}
        >
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.012)_0px,rgba(255,255,255,0.012)_1px,transparent_1px,transparent_4px)] opacity-30" />

            <div className={`relative z-10 transition duration-300 group-hover:scale-110 ${styles.icon}`}>
                {children}
            </div>

            <span className="relative z-10 mt-3 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-600 transition group-hover:text-slate-300">
                {label}
            </span>

            <span className={`absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-slate-700 transition-all duration-300 group-hover:w-2/3 ${styles.line}`} />

            <span className="absolute right-0 top-0 h-4 w-4 bg-[#020609] [clip-path:polygon(100%_0,100%_100%,0_0)]" />
        </a>
    );
}

export default ContactCard;