import { motion } from "framer-motion";

function IdentityCard() {
  return (
    <motion.section
      initial={{ rotateY: 10, scale: 0.95, opacity: 0 }}
      animate={{ rotateY: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      className="relative h-[700px] w-full max-w-[530px] p-[3px]"
      style={{
        background: "conic-gradient(from 0deg, cyan, magenta, yellow, cyan)",
        backgroundSize: "200% 200%",
        animation: "spin-border 3s linear infinite",
      }}
    >
      {/* Contenido interno */}
      <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#06111d]">
        {/* Scanlines animadas */}
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-30 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,.02)_0px,rgba(255,255,255,.02)_1px,transparent_1px,transparent_4px)] bg-[length:100%_4px]"
        />

        {/* Glow pulsante */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,225,255,.08),transparent_55%)]"
        />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-5">
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
            />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-400">
              ID: VILLARID
            </p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-400"
          >
            STATUS: ONLINE
          </motion.p>
        </div>

        {/* Centro */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative flex h-[340px] w-[340px] items-center justify-center">
            {/* Anillo exterior (250px) - rotación lenta */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute h-[250px] w-[250px] rounded-full border border-cyan-500/10"
            />

            {/* Anillo medio (165px) - SIN RGB, solo borde y sombra, con rotación inversa rápida */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute h-[165px] w-[165px] rounded-full border-2 border-cyan-400/50 shadow-[0_0_40px_rgba(0,220,255,0.2)]"
            />

            {/* Anillo interior (132px) - con pulso y rotación combinada */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: 360,
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              }}
              className="absolute h-[132px] w-[132px] rounded-full border border-cyan-400/30"
            />

            {/* Cruces fijas */}
            <div className="absolute h-px w-[110px] bg-cyan-400/20" />
            <div className="absolute h-[110px] w-px bg-cyan-400/20" />

            {/* Círculo inferior con pulso más fuerte */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[205px] h-10 w-10 rounded-full border border-cyan-400/30"
            />

            {/* Núcleo con pulso y ligera oscilación */}
            <motion.div
              className="relative flex flex-col items-center translate-y-10"
              animate={{ rotate: [0, 3, 0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{
                  scale: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                className="text-[64px] font-black leading-none text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.9)]"
              >
                V
              </motion.span>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-14 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-400"
              >
                FARID T. MATOS V.
              </motion.p>

              <motion.p
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="mt-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-cyan-500/70"
              >
                // PLACE_PHOTO_HERE
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-auto px-5 pb-5">
          <div className="grid grid-cols-2 gap-y-3 text-[11px] uppercase">
            <span className="tracking-wide text-slate-500">EXPERIENCE</span>
            <span className="text-right font-bold text-cyan-400">3+ YEARS</span>
            <span className="tracking-wide text-slate-500">STACK</span>
            <span className="text-right font-bold text-purple-500">FULL_STACK</span>
            <span className="tracking-wide text-slate-500">AVAILABILITY</span>
            <span className="text-right font-bold text-emerald-400">OPEN</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default IdentityCard;