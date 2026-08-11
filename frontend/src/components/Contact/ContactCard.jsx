import { motion } from "framer-motion";
import useAppMotion from "../../hooks/useAppMotion";
import { ArrowRight, Mail } from "lucide-react";
import { fadeSlide, staggerContainer } from "../../utils/motion";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-6 0C6.1.1 4.9.5 4.9.5A5 5 0 0 0 4.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ContactRow({ icon, label, value, href, accent = "blue" }) {
  const isExternal = href?.startsWith("http");
  const iconColor = accent === "github" ? "text-[#0F172A]" : "text-[#2563EB]";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-lg"
    >
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] transition-colors duration-200 group-hover:bg-[#EFF6FF] ${iconColor}`}>
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-[14px] font-semibold text-[#0F172A] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#2563EB]">
          {value}
        </span>
      </span>
    </a>
  );
}

function ContactCard({ emailHref, githubHref, linkedinHref }) {
  const { shouldReduceMotion } = useAppMotion();

  return (
    <motion.aside
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-[20px] border border-[rgba(226,232,240,0.95)] bg-[rgba(255,255,255,0.92)] p-9 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-10"
    >
      <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-[#0F172A]">
        CONTACT
      </h3>

      {/* Detalles de contacto con stagger */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-40px" }}
        variants={shouldReduceMotion ? undefined : staggerContainer(0.08, 0.1)}
        className="mt-8 space-y-6"
      >
        <motion.div variants={shouldReduceMotion ? undefined : fadeSlide(10)}>
          <ContactRow icon={<Mail />} label="Email" value="Enviar correo" href={emailHref} />
        </motion.div>
        <motion.div variants={shouldReduceMotion ? undefined : fadeSlide(10)}>
          <ContactRow icon={<LinkedinIcon />} label="LinkedIn" value="linkedin.com/in/farid-matos-villarroel" href={linkedinHref} />
        </motion.div>
        <motion.div variants={shouldReduceMotion ? undefined : fadeSlide(10)}>
          <ContactRow icon={<GithubIcon />} label="GitHub" value="github.com/VILLARIS" href={githubHref} accent="github" />
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="mt-8 border-t border-[#E2E8F0]" />

      {/* Disponibilidad */}
      <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
            Status
          </p>
          <p className="mt-1.5 flex items-center gap-2 text-[13px] font-semibold text-[#059669]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
            Available for work
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
            Location
          </p>
          <p className="mt-1.5 text-[13px] font-semibold text-[#0F172A]">Perú</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#94A3B8]">
            Response
          </p>
          <p className="mt-1.5 text-[13px] font-semibold text-[#0F172A]">
            Open to conversations
          </p>
        </div>
      </div>

      {/* Send email */}
      <a
        href={emailHref}
        target="_blank"
        rel="noreferrer"
        className="group mt-9 inline-flex items-center gap-2 text-[13px] font-semibold text-[#2563EB] transition-colors duration-200 hover:text-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md"
      >
        SEND ME AN EMAIL
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" />
      </a>
    </motion.aside>
  );
}

export default ContactCard;
