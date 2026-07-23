const stats = [
    {
        label: "LOCATION",
        value: "Perú",
    },
    {
        label: "AVAILABILITY",
        value: "Open to Work",
    },
    {
        label: "FOCUS",
        value: "Full Stack Dev",
    },
    {
        label: "MODE",
        value: "Remote / On-Site",
    },
];

function AboutStats() {
    return (
        <div className="mt-10 grid max-w-[650px] grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2">
            {stats.map((stat) => (
                <div key={stat.label} className="group">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-700 transition group-hover:text-cyan-500/60">
                        {stat.label}
                    </p>

                    <p className="mt-2 text-[13px] font-bold tracking-[0.04em] text-slate-300 sm:text-sm">
                        {stat.value}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default AboutStats;