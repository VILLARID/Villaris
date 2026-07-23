import ContactCard from "../components/Contact/ContactCard";

function GithubIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-6 0C6.1.1 4.9.5 4.9.5A5 5 0 0 0 4.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />
            <path d="M9 18c-4.5 2-5-2-7-2" />
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
    );
}

function FileIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8" />
            <path d="M8 17h6" />
        </svg>
    );
}

function SystemReady() {
    const currentYear = new Date().getFullYear();

    return (
        <section id="system-ready" className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-slate-700/60 py-24">
            {/* Iluminación ambiental */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[190px]" />

            <div className="pointer-events-none absolute left-1/2 top-[47%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[110px]" />

            {/* Línea horizontal superior */}
            <div className="pointer-events-none absolute left-0 top-24 h-px w-full bg-cyan-950/30" />

            {/* Contenido */}
            <div className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-col items-center px-6 text-center sm:px-10">
                {/* Estado */}
                <div className="flex w-full max-w-[410px] items-center justify-center gap-4">
                    <span className="h-px flex-1 bg-emerald-500/25" />

                    <div className="flex shrink-0 items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.95)]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.42em] text-emerald-400 sm:text-[10px]">
                            All Systems Operational
                        </span>
                    </div>

                    <span className="h-px flex-1 bg-emerald-500/25" />
                </div>

                {/* Título */}
                <div className="mt-12 leading-[0.82]">
                    <h2 className="text-[clamp(4rem,10vw,8.5rem)] font-black uppercase tracking-[0.02em] text-[#edf1f4]">
                        SYSTEM
                    </h2>

                    <h2 className="mt-8 text-[clamp(4rem,10vw,8.5rem)] font-black uppercase tracking-[0.02em] text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">
                        READY
                    </h2>
                </div>

                {/* Descripción */}
                <p className="mt-12 max-w-[650px] text-[12px] leading-7 tracking-[0.05em] text-slate-500 sm:text-[14px]">
                    Disponible para crear soluciones digitales.
                    <br />
                    Construyamos sistemas juntos.
                </p>

                {/* Contactos */}
                <div className="mt-14 grid w-full max-w-[680px] grid-cols-2 gap-3 sm:grid-cols-4">
                    <ContactCard href="https://github.com/SU-USUARIO" label="GitHub" accent="white">
                        <GithubIcon />
                    </ContactCard>

                    <ContactCard href="https://www.linkedin.com/in/SU-USUARIO" label="LinkedIn" accent="cyan">
                        <LinkedinIcon />
                    </ContactCard>

                    <ContactCard href="mailto:correo@ejemplo.com" label="Email" accent="purple">
                        <MailIcon />
                    </ContactCard>

                    <ContactCard href="/Farid-Matos-CV.pdf" label="CV.PDF" accent="emerald" download>
                        <FileIcon />
                    </ContactCard>
                </div>

                {/* Firma */}
                <p className="mt-16 text-[8px] font-bold uppercase tracking-[0.52em] text-slate-800 sm:text-[9px]">
                    VILLARID // DIGITAL IDENTITY // {currentYear}
                </p>
            </div>

            {/* Navegación lateral */}
            <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 2xl:flex">
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />
                <span className="h-px w-3 bg-slate-700" />

                <div className="flex items-center gap-3">
                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-400">
                        System Ready
                    </span>

                    <span className="h-px w-10 bg-cyan-400" />

                    <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.95)]" />
                </div>
            </div>
        </section>
    );
}

export default SystemReady;