function IdentityCard() {
    return (
        <section className="relative h-[700px] w-full max-w-[530px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-[2px]">

            <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#06111d]">

                {/* Scanlines */}
                <div className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,.02)_0px,rgba(255,255,255,.02)_1px,transparent_1px,transparent_4px)]" />

                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,225,255,.05),transparent_55%)]" />

                {/* Header */}
                <div className="relative z-10 flex items-center justify-between px-6 pt-5">

                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

                        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                            ID: VILLARID
                        </p>
                    </div>

                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-400">
                        STATUS: ONLINE
                    </p>

                </div>

                {/* Centro */}
                <div className="relative flex flex-1 items-center justify-center">

                    <div className="relative flex h-[340px] w-[340px] items-center justify-center">

                        {/* Exterior */}
                        <div className="absolute h-[250px] w-[250px] rounded-full border border-cyan-500/10" />

                        {/* Principal */}
                        <div className="absolute h-[165px] w-[165px] rounded-full border-2 border-cyan-400/45 shadow-[0_0_40px_rgba(0,220,255,.08)]" />

                        {/* Interno */}
                        <div className="absolute h-[132px] w-[132px] rounded-full border border-cyan-400/20" />

                        {/* Cruz */}
                        <div className="absolute h-px w-[110px] bg-cyan-400/15" />
                        <div className="absolute h-[110px] w-px bg-cyan-400/15" />

                        {/* Círculo inferior */}
                        <div className="absolute top-[205px] h-10 w-10 rounded-full border border-cyan-400/20" />

                        {/* Núcleo */}
                        <div className="relative flex flex-col items-center translate-y-10">

                            <span className="text-[64px] font-black leading-none text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,.8)]">
                                V
                            </span>

                            <p className="mt-14 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400">
                                FARID T. MATOS V.
                            </p>

                            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-500/60">
                                // PLACE_PHOTO_HERE
                            </p>

                        </div>

                    </div>

                </div>

                {/* Footer */}
                <div className="relative z-10 mt-auto px-5 pb-5">

                    <div className="grid grid-cols-2 gap-y-3 text-[11px] uppercase">

                        <span className="tracking-wide text-slate-500">
                            EXPERIENCE
                        </span>

                        <span className="text-right font-bold text-cyan-400">
                            3+ YEARS
                        </span>

                        <span className="tracking-wide text-slate-500">
                            STACK
                        </span>

                        <span className="text-right font-bold text-purple-500">
                            FULL_STACK
                        </span>

                        <span className="tracking-wide text-slate-500">
                            AVAILABILITY
                        </span>

                        <span className="text-right font-bold text-emerald-400">
                            OPEN
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default IdentityCard;