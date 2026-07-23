import IdentityCard from "../components/Home/IdentityCard";

function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#020609] font-mono text-white">
            {/* Fondo cuadriculado */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,180,220,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,220,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Línea superior */}
            <div className="absolute left-0 top-24 h-px w-full bg-cyan-950/40" />

            {/* Brillo izquierdo */}
            <div className="pointer-events-none absolute left-[20%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

            {/* Brillo derecho */}
            <div className="pointer-events-none absolute right-[10%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[140px]" />

            {/* Contenido principal */}
            <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1700px] grid-cols-1 items-center gap-16 px-6 py-10 sm:px-10 md:px-16 lg:grid-cols-[minmax(0,1fr)_minmax(400px,530px)] lg:gap-12 lg:px-16 xl:gap-20 xl:px-24 2xl:px-32">
                {/* LEFT COLUMN */}
                <section className="w-full min-w-0">
                    {/* Encabezado */}
                    <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.55em] text-[#12d87d] sm:text-xs">
                        DIGITAL IDENTITY // ACTIVE
                    </p>

                    {/* Operador */}
                    <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#344158] sm:text-xs">
                        SYS_OPERATOR:
                    </p>

                    {/* Nombre */}
                    <div className="leading-[0.9]">
                        <h2 className="whitespace-nowrap text-[clamp(2rem,4.4vw,4.4rem)] font-black uppercase tracking-[-0.04em] text-[#f0f3f5]">
                            FARID TABARE
                        </h2>

                        <h2 className="whitespace-nowrap text-[clamp(2rem,4.4vw,4.4rem)] font-black uppercase tracking-[-0.04em] text-[#f0f3f5]">
                            MATOS VILLARROEL
                        </h2>
                    </div>

                    {/* Alias */}
                    <div className="mt-8 flex items-center gap-5 sm:mt-10">
                        <div className="hidden h-px w-12 shrink-0 bg-cyan-400/70 sm:block" />

                        <h1 className="whitespace-nowrap text-[clamp(3.2rem,7vw,7.5rem)] font-black uppercase leading-none tracking-[0.08em] text-cyan-400 drop-shadow-[0_0_25px_rgba(0,220,255,0.6)]">
                            VILLARID
                        </h1>
                    </div>

                    {/* Cargo */}
                    <div className="mt-7 flex items-center gap-4 sm:mt-8">
                        <div className="h-px w-9 shrink-0 bg-purple-500" />

                        <span className="whitespace-nowrap text-[clamp(0.7rem,1.2vw,1.1rem)] uppercase tracking-[0.35em] text-slate-400">
                            FULL STACK DEVELOPER
                        </span>

                        <div className="h-px w-24 bg-purple-500/70 sm:w-32" />
                    </div>

                    {/* Descripción */}
                    <p className="mt-8 max-w-[650px] text-[clamp(0.85rem,1.1vw,1.15rem)] leading-7 text-slate-400 sm:mt-10 sm:leading-8">
                        Construyo sistemas digitales combinando interfaces modernas,
                        <br className="hidden sm:block" />
                        backend robusto y arquitecturas de datos eficientes.
                    </p>

                    {/* Botones */}
                    <div className="mt-9 flex flex-wrap items-center gap-5 sm:mt-12">
                        <button className="clip-button bg-cyan-400 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black transition duration-300 hover:bg-cyan-300 sm:px-10">
                            VIEW ARCHIVE
                        </button>

                        <button className="border border-cyan-500/50 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-400 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 sm:px-10">
                            INIT CONTACT
                        </button>
                    </div>
                </section>

                {/* RIGHT COLUMN */}
                <aside className="flex w-full justify-center lg:justify-end">
                    <IdentityCard />
                </aside>
            </div>
        </main>
    );
}

export default Home;