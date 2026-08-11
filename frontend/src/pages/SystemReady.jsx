import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ArrowDown } from "lucide-react";
import ContactCard from "../components/Contact/ContactCard";
import SectionLabel from "../components/ui/SectionLabel";
import Reveal from "../components/ui/Reveal";
import cv from "../assets/cv_farid_fullstack_developer_2026.pdf";

function SystemReady() {
  const currentYear = new Date().getFullYear();

  const emailHref = "https://mail.google.com/mail/u/1/#inbox";
  const githubHref = "https://github.com/VILLARIS";
  const linkedinHref =
    "https://www.linkedin.com/in/farid-matos-villarroel-1274a9408/";

  const socialLinks = [
    { label: "GITHUB", href: githubHref, icon: <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />, external: true },
    { label: "LINKEDIN", href: linkedinHref, icon: <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />, external: true },
    { label: "DOWNLOAD CV", href: cv, icon: <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />, download: true },
  ];

  return (
    <section
      id="system-ready"
      className="relative overflow-x-clip bg-white pt-6 pb-20 sm:pt-8 sm:pb-24"
    >
      {/* Fondo: grid fino + radial azul + detalles tenues */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(226,232,240,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(226,232,240,0.35)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute -right-48 top-16 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.04),transparent_70%)]" />
      <span aria-hidden="true" className="pointer-events-none absolute left-[6%] top-[30%] text-[10px] text-[#CBD5E1]">+</span>
      <span aria-hidden="true" className="pointer-events-none absolute left-[46%] top-[78%] h-1 w-1 rounded-full bg-[#2563EB]/30" />
      <span aria-hidden="true" className="pointer-events-none absolute bottom-[18%] right-[4%] text-[10px] text-[#CBD5E1]">+</span>

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-[clamp(28px,5vw,72px)]">
        {/* Composición 2 columnas */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <div className="flex min-w-0 flex-col">
            <SectionLabel number="04" label="CONTACT" />

            <Reveal
              as="h2"
              y={32}
              duration={0.8}
              className="mt-7 text-[clamp(3rem,5vw,5.8rem)] font-bold leading-[0.96] tracking-[-0.04em]"
            >
              <span className="block text-[#0F172A]">LET'S BUILD</span>
              <span className="block text-[#2563EB]">SOMETHING GREAT.</span>
            </Reveal>

            <Reveal
              y={18}
              delay={0.08}
              className="mt-8 max-w-[600px] text-[16px] leading-[1.7] text-[#64748B] sm:text-[17px]"
            >
              ¿Tienes una idea, un proyecto o simplemente quieres conversar sobre
              tecnología? Escríbeme y veamos qué podemos construir.
            </Reveal>

            {/* CTA */}
            <Reveal y={18} delay={0.16} className="mt-10">
              <motion.a
                href={emailHref}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group inline-flex h-[54px] items-center gap-2.5 rounded-xl bg-[#0F172A] px-6 text-[13px] font-semibold tracking-[0.06em] text-white transition-colors duration-200 hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                GET IN TOUCH
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[3px]" />
              </motion.a>
            </Reveal>

            {/* Social links */}
            <Reveal
              y={18}
              delay={0.24}
              className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-4"
            >
              {socialLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-x-9">
                  {index > 0 && (
                    <span aria-hidden="true" className="h-[18px] w-px bg-[#E2E8F0]" />
                  )}
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    download={link.download || undefined}
                    className="group flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.04em] text-[#334155] transition-colors duration-200 hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-md sm:text-[13px]"
                  >
                    {link.label}
                    <span className="text-[#2563EB] transition-transform duration-200 group-hover:translate-x-0.5">
                      {link.icon}
                    </span>
                  </a>
                </span>
              ))}
            </Reveal>
          </div>

          {/* RIGHT: contact card */}
          <div className="min-w-0">
            <ContactCard
              emailHref={emailHref}
              githubHref={githubHref}
              linkedinHref={linkedinHref}
            />
          </div>
        </div>

        {/* Footer */}
        <Reveal
          as="footer"
          y={18}
          delay={0.3}
          className="mt-20 flex flex-col gap-5 border-t border-[#E2E8F0] pb-2 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-[28px] font-bold uppercase tracking-[0.1em] text-[#0F172A]">
              VILLARIS
            </p>
            <p className="mt-1 text-[13px] text-[#64748B]">
              Farid Tabare Matos Villarroel
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-[14px] font-semibold text-[#0F172A]">
              Software Engineer
            </p>
            <p className="mt-1 text-[13px] text-[#64748B]">
              Perú / {currentYear}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default SystemReady;
