import { motion } from "framer-motion";
import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Layers3,
  MapPin,
  Monitor,
  Quote,
  Target,
} from "lucide-react";
import PrincipleCard from "./PrincipleCard";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const metadata = [
  { label: "LOCATION", value: "Perú", icon: MapPin },
  { label: "AVAILABILITY", value: "Open to Work", icon: BriefcaseBusiness },
  { label: "FOCUS", value: "Full Stack Dev", icon: Code2 },
  { label: "MODE", value: "Remote / On-Site", icon: Monitor },
];

const principles = [
  {
    title: "ARQUITECTURA PRIMERO",
    description:
      "Cada proyecto comienza con la arquitectura correcta. Los sistemas bien diseñados escalan; los demás solo funcionan por un tiempo.",
    icon: Layers3,
  },
  {
    title: "CÓDIGO LIMPIO",
    description:
      "El código que escribo hoy será mantenido mañana. Claridad, simplicidad y documentación no son opcionales.",
    icon: Code2,
  },
  {
    title: "SOLUCIONES REALES",
    description:
      "No construyo features. Construyo soluciones a problemas reales con tecnología elegante y resultados medibles.",
    icon: Target,
  },
  {
    title: "APRENDIZAJE CONTINUO",
    description:
      "La tecnología avanza rápido. Mantenerse actualizado no es una ventaja, es una responsabilidad profesional.",
    icon: BookOpen,
  },
];

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "10+", label: "Proyectos" },
  { value: "12+", label: "Tecnologías" },
];

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Fondo con grid y radial */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.35)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.05),transparent_70%)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
        className="relative z-10 mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-14 px-[clamp(28px,5vw,72px)] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16 xl:gap-20"
      >
        {/* COLUMNA IZQUIERDA */}
        <div className="flex min-w-0 flex-col">
          <motion.div variants={item} className="flex items-center gap-3">
            <span className="text-[11px] font-bold tracking-[0.14em] text-[#2563EB]">
              03 /
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              About
            </span>
          </motion.div>

          <motion.h2
            variants={item}
            className="mt-6 text-[clamp(3.2rem,5vw,5.8rem)] font-bold leading-[0.94] tracking-[-0.045em] text-[#0F172A]"
          >
            SOBRE MÍ
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-5 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-500"
          >
            Software Engineer / <span className="text-[#2563EB]">VILLARIS</span>
          </motion.p>

          <motion.div variants={item} className="mt-8 max-w-[620px] space-y-5 text-[15px] leading-[1.75] text-slate-500 sm:text-[16px]">
            <p>
              Desarrollador Full Stack enfocado en construir aplicaciones
              escalables, sistemas eficientes y soluciones digitales utilizando
              tecnologías modernas.
            </p>
            <p>
              Combino visión técnica profunda con sensibilidad para el diseño,
              creando productos que no solo funcionan, sino que se sienten
              precisos y bien construidos.
            </p>
          </motion.div>

          {/* Metadata 2x2 */}
          <motion.div variants={item} className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            {metadata.map((meta) => (
              <div key={meta.label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF]">
                  <meta.icon className="h-[18px] w-[18px] text-[#2563EB]" strokeWidth={1.9} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
                    {meta.label}
                  </p>
                  <p className="mt-0.5 truncate text-[14px] font-semibold text-[#0F172A]">
                    {meta.value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            variants={item}
            className="mt-10 rounded-2xl border border-[#E2E8F0] bg-[rgba(248,250,252,0.65)] p-6 sm:p-7"
          >
            <Quote className="h-6 w-6 text-[#2563EB]/80" strokeWidth={1.6} />
            <p className="mt-4 text-[15px] font-medium leading-relaxed text-[#334155] sm:text-[16px]">
              "La tecnología es el medio, pero la precisión es la firma. Cada
              sistema que construyo busca resolver un problema real y dejar una
              base sólida para lo que venga después."
            </p>
          </motion.blockquote>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="flex min-w-0 flex-col">
          <motion.h3
            variants={item}
            className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-[#0F172A]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
            Mis Principios
          </motion.h3>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <PrincipleCard key={principle.title} {...principle} index={index} />
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={item}
          className="lg:col-span-2 mt-4 grid grid-cols-1 gap-y-10 rounded-2xl border border-[#E2E8F0] bg-white/80 px-8 py-10 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-[#E2E8F0] lg:mt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-[#0F172A]">
                {stat.value}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#94A3B8]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
