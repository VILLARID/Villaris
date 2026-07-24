import { motion } from "framer-motion";
import IdentityCard from "../components/Home/IdentityCard";
import TvGlitchText from "../Animations/Home/TvGlitchText";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
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

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020609] font-mono text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,180,220,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,220,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-0 top-24 h-px w-full origin-left bg-cyan-950/40"
      />

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[20%] top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute right-[10%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[140px]"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1700px] grid-cols-1 items-center gap-16 px-6 py-10 sm:px-10 md:px-16 lg:grid-cols-[minmax(0,1fr)_minmax(400px,530px)] lg:gap-12 lg:px-16 xl:gap-20 xl:px-24 2xl:px-32"
      >
        <section className="w-full min-w-0">
          <motion.p
            variants={fadeInUp}
            className="mb-8 text-[10px] font-semibold uppercase tracking-[0.55em] text-[#12d87d] sm:text-xs"
          >
            DIGITAL IDENTITY // ACTIVE
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mb-5 text-[10px] uppercase tracking-[0.45em] text-[#344158] sm:text-xs"
          >
            SYS_OPERATOR:
          </motion.p>

          <motion.div variants={fadeInUp} className="leading-[0.9]">
            <TvGlitchText className="whitespace-nowrap text-[clamp(2rem,4.4vw,4.4rem)] font-black uppercase tracking-[-0.04em] text-[#f0f3f5]">
              FARID TABARE
            </TvGlitchText>
            <TvGlitchText className="whitespace-nowrap text-[clamp(2rem,4.4vw,4.4rem)] font-black uppercase tracking-[-0.04em] text-[#f0f3f5]">
              MATOS VILLARROEL
            </TvGlitchText>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-5 sm:mt-10">
            <div className="hidden h-px w-12 shrink-0 bg-cyan-400/70 sm:block" />
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="whitespace-nowrap text-[clamp(3.2rem,7vw,7.5rem)] font-black uppercase leading-none tracking-[0.08em] text-cyan-400 drop-shadow-[0_0_25px_rgba(0,220,255,0.6)]"
            >
              VILLARID
            </motion.h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-7 flex items-center gap-4 sm:mt-8">
            <div className="h-px w-9 shrink-0 bg-purple-500" />
            <span className="whitespace-nowrap text-[clamp(0.7rem,1.2vw,1.1rem)] uppercase tracking-[0.35em] text-slate-400">
              FULL STACK DEVELOPER
            </span>
            <div className="h-px w-24 bg-purple-500/70 sm:w-32" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-[650px] text-[clamp(0.85rem,1.1vw,1.15rem)] leading-7 text-slate-400 sm:mt-10 sm:leading-8"
          >
            Construyo sistemas digitales combinando interfaces modernas,
            <br className="hidden sm:block" />
            backend robusto y arquitecturas de datos eficientes.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-9 flex flex-wrap items-center gap-5 sm:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }}
              whileTap={{ scale: 0.95 }}
              className="clip-button bg-cyan-400 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-black transition duration-300 hover:bg-cyan-300 sm:px-10"
            >
              VIEW ARCHIVE
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#22d3ee", backgroundColor: "rgba(34,211,238,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="border border-cyan-500/50 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-400 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 sm:px-10"
            >
              INIT CONTACT
            </motion.button>
          </motion.div>
        </section>

        <motion.aside
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex w-full justify-center lg:justify-end"
        >
          <IdentityCard />
        </motion.aside>
      </motion.div>
    </main>
  );
}

export default Home;