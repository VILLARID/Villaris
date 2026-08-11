import { motion } from "framer-motion";
import HeroIntro from "../components/Home/HeroIntro";
import HeroVisual from "../components/Home/HeroVisual";
import HeroExtras from "../components/Home/HeroExtras";

function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-white"
    >
      {/* Fondo decorativo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Grid tenue */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(226,232,240,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.35)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        {/* Radial suave detrás de la foto */}
        <div className="absolute right-[-10%] top-[5%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.04),transparent_70%)]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1560px] flex-1 grid-cols-1 items-center gap-14 px-6 pb-[70px] pt-[130px] md:px-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-12 lg:px-[clamp(28px,5vw,72px)]">
        {/* Intro — columna izquierda */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <HeroIntro />
        </div>

        {/* Foto — columna derecha */}
        <div className="flex min-w-0 items-center lg:col-start-2 lg:row-start-1 lg:row-span-2">
          <HeroVisual />
        </div>

        {/* Skills + CTAs — debajo del intro en desktop, al final en mobile */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <HeroExtras />
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 hidden items-center justify-center gap-4 pb-10 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#94A3B8]">
          Scroll to explore
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-[#94A3B8] to-transparent" />
      </motion.div>
    </section>
  );
}

export default Home;
