import { Braces, Cpu, Database, Boxes, ShieldCheck, Gauge, CloudUpload } from "lucide-react";
import SectionLabel from "../ui/SectionLabel";
import ModuleCard from "./ModuleCard";
import PrincipleItem from "./PrincipleItem";
import Reveal from "../ui/Reveal";

const modules = [
  {
    moduleId: "MOD_001",
    title: "FRONTEND MODULE",
    technologies: ["React", "Tailwind CSS", "Bootstrap", "Figma"],
    icon: Braces,
    accent: "blue",
    description: "Interfaces modernas, accesibles y orientadas al usuario.",
  },
  {
    moduleId: "MOD_002",
    title: "BACKEND MODULE",
    technologies: ["Node.js", "Python", "Java", "Spring Boot"],
    icon: Cpu,
    accent: "violet",
    description: "APIs robustas, seguras y preparadas para escalar.",
  },
  {
    moduleId: "MOD_003",
    title: "DATABASE MODULE",
    technologies: ["PostgreSQL", "Oracle", "MongoDB", "Redis"],
    icon: Database,
    accent: "emerald",
    description: "Almacenamiento, integridad y rendimiento optimizado.",
  },
];

const principles = [
  {
    title: "ARQUITECTURA MODULAR",
    description:
      "Componentes desacoplados que permiten escalar y evolucionar sin comprometer el sistema.",
    icon: Boxes,
  },
  {
    title: "SEGURIDAD POR DISEÑO",
    description:
      "Buenas prácticas de seguridad aplicadas en cada módulo desde el inicio.",
    icon: ShieldCheck,
  },
  {
    title: "RENDIMIENTO OPTIMIZADO",
    description:
      "Tecnologías y patrones elegidos para ofrecer velocidad, estabilidad y eficiencia.",
    icon: Gauge,
  },
  {
    title: "DESPLIEGUE CONTINUO",
    description:
      "Procesos automatizados para entregar valor de forma rápida y confiable.",
    icon: CloudUpload,
  },
];

function CoreSystem() {
  return (
    <section
      id="core-system"
      className="relative overflow-hidden bg-white pt-6 pb-20 sm:pt-8 sm:pb-24"
    >
      {/* Fondo: grid fino + radial azul */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.35)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.04),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-[clamp(28px,5vw,72px)]">
        {/* Header / intro */}
        <div className="max-w-[900px]">
          {/* Section label */}
          <SectionLabel number="02" label="CORE SYSTEM" />

          {/* Headline */}
          <Reveal
            as="h2"
            y={32}
            duration={0.8}
            className="mt-6 text-[clamp(2.8rem,4.6vw,5.2rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#0F172A]"
          >
            CORE SYSTEM
          </Reveal>

          {/* Subtitle */}
          <Reveal
            y={18}
            delay={0.08}
            className="mt-5 text-[clamp(1.15rem,1.7vw,1.75rem)] font-medium tracking-[0.14em] text-[#2563EB]"
          >
            TECHNOLOGY ECOSYSTEM
          </Reveal>

          {/* Status line */}
          <Reveal y={18} delay={0.14} className="mt-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94A3B8]">
              OPERATIONAL MODULES / ACTIVE DEPLOYMENT
            </span>
          </Reveal>

          {/* Intro copy */}
          <Reveal
            y={18}
            delay={0.2}
            className="mt-7 max-w-[620px] text-[16px] leading-[1.7] text-[#64748B] sm:text-[17px]"
          >
            Este es el ecosistema tecnológico que utilizo para diseñar,
            desarrollar, desplegar y mantener sistemas confiables, escalables y
            eficientes.
          </Reveal>
        </div>

        {/* Modules grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {modules.map((module, index) => (
            <ModuleCard
              key={module.moduleId}
              moduleId={module.moduleId}
              title={module.title}
              technologies={module.technologies}
              icon={module.icon}
              accent={module.accent}
              description={module.description}
              index={index}
            />
          ))}
        </div>

        {/* Principles strip */}
        <Reveal
          y={18}
          delay={0.2}
          className="mt-7 grid grid-cols-1 gap-y-8 rounded-[18px] border border-[#E2E8F0] bg-white p-7 sm:p-8 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-[#E2E8F0]"
        >
          {principles.map((principle) => (
            <div key={principle.title} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <PrincipleItem {...principle} />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default CoreSystem;
