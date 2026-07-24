import { motion } from "framer-motion";
import ContactCard from "../components/Contact/ContactCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

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
    <section id="system-ready" className="relative min-h-screen overflow-hidden bg-[#020609] py-28">
      {/* Fondo con grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,180,220,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,220,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Iluminación ambiental */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[190px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="pointer-events-none absolute left-1/2 top-[45%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[110px]"
      />

      {/* Línea horizontal superior animada */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute left-0 top-24 h-px w-full origin-left bg-cyan-950/40"
      />

      {/* Contenido */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-col items-center px-6 text-center sm:px-10"
      >
        {/* Estado */}
        <motion.div variants={fadeInUp} className="flex w-full max-w-[450px] items-center justify-center gap-4">
          <span className="h-px flex-1 bg-emerald-500/25" />
          <div className="flex shrink-0 items-center gap-3">
            <motion.span
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]"
            />
            <span className="text-[9px] font-bold uppercase tracking-[0.42em] text-emerald-400 sm:text-[10px]">
              All Systems Operational
            </span>
          </div>
          <span className="h-px flex-1 bg-emerald-500/25" />
        </motion.div>

        {/* Título */}
        <motion.div variants={fadeInUp} className="mt-12 leading-[0.82]">
          <h2 className="text-[clamp(4rem,10vw,8.5rem)] font-black uppercase tracking-[-0.02em] text-[#edf1f4]">
            SYSTEM
          </h2>
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 200 }}
            className="mt-8 text-[clamp(4rem,10vw,8.5rem)] font-black uppercase tracking-[-0.02em] text-cyan-400 drop-shadow-[0_0_40px_rgba(34,211,238,0.5)]"
          >
            READY
          </motion.h2>
        </motion.div>

        {/* Descripción */}
        <motion.p
          variants={fadeInUp}
          className="mt-12 max-w-[650px] text-[12px] leading-7 tracking-[0.05em] text-slate-400 sm:text-[14px]"
        >
          Disponible para crear soluciones digitales.
          <br />
          Construyamos sistemas juntos.
        </motion.p>

        {/* Contactos */}
        <motion.div
          variants={fadeInUp}
          className="mt-14 grid w-full max-w-[720px] grid-cols-2 gap-3 sm:grid-cols-4"
        >
          <ContactCard href="https://github.com/SU-USUARIO" label="GitHub" accent="white" index={0}>
            <GithubIcon />
          </ContactCard>

          <ContactCard href="https://www.linkedin.com/in/SU-USUARIO" label="LinkedIn" accent="cyan" index={1}>
            <LinkedinIcon />
          </ContactCard>

          <ContactCard href="mailto:correo@ejemplo.com" label="Email" accent="purple" index={2}>
            <MailIcon />
          </ContactCard>

          <ContactCard href="/Farid-Matos-CV.pdf" label="CV.PDF" accent="emerald" download index={3}>
            <FileIcon />
          </ContactCard>
        </motion.div>

        {/* Firma */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 text-[8px] font-bold uppercase tracking-[0.52em] text-slate-700 sm:text-[9px]"
        >
          VILLARID // DIGITAL IDENTITY // {currentYear}
        </motion.p>
      </motion.div>

      {/* Navegación lateral */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-5 2xl:flex"
      >
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <span className="h-px w-4 bg-slate-700" />
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-cyan-400/80">
            System Ready
          </span>
          <span className="h-px w-12 bg-gradient-to-l from-cyan-400 to-transparent" />
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]"
          />
        </div>
        <motion.span
          animate={{ height: ["8px", "24px", "8px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-cyan-500/30"
        />
      </motion.div>
    </section>
  );
}

export default SystemReady;