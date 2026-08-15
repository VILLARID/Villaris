import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import heroPhoto from "../../assets/Home/FaridHero.png";
import { EASE } from "../../utils/motion";

const PULSE_STATUS = {
  y: [0, -6, 0],
};

const PULSE_EMBLEM = {
  y: [0, 5, 0],
};

const pulseTransition = {
  duration: 7.5,
  ease: "easeInOut",
  repeat: Infinity,
};

function useCompact() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsCompact(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isCompact;
}

function usePointerFine() {
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const hover = window.matchMedia("(hover: hover)");
    const width = window.matchMedia("(min-width: 768px)");

    const update = () => {
      setIsPointerFine(Boolean(hover.matches && width.matches));
    };

    update();
    hover.addEventListener("change", update);
    width.addEventListener("change", update);

    return () => {
      hover.removeEventListener("change", update);
      width.removeEventListener("change", update);
    };
  }, []);

  return isPointerFine;
}

function HeroVisual() {
  const isPointerFine = usePointerFine();
  const isCompact = useCompact();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.4 });

  const photoX = useTransform(springX, [-1, 1], [6, -6]);
  const photoY = useTransform(springY, [-1, 1], [5, -5]);

  const parallaxActive = isPointerFine;

  const handlePointerMove = (event) => {
    if (!isPointerFine) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const photoStyle = parallaxActive
    ? { x: photoX, y: photoY }
    : { x: 0, y: 0 };

  const pulseScale = isCompact ? 1.005 : 1.012;
  const pulseY = isCompact ? -2 : -3;

  const pulse = {
    scale: [1, pulseScale, 1],
    y: [0, pulseY, 0],
  };

  const glow = {
    opacity: [0.5, 0.8, 0.5],
    scale: [0.98, 1.03, 0.98],
  };

  return (
    <div
      className="group relative mx-auto aspect-square w-full max-w-[400px] lg:max-w-[620px]"
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
    >
      {/* Círculos decorativos (tercer plano) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2"
      >
        {/* Círculo exterior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(226,232,240,0.6)] dark:border-white/10"
        />
        {/* Círculo interior */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E2E8F0] dark:border-white/10"
        />
      </div>

      {/* Glow suave detrás de la foto (pulso independiente) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.09),transparent_65%)]"
        animate={glow}
        transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Fotografía (cutout integrado) */}
      <motion.div
        initial={{ opacity: 0, x: 24, scale: 0.97 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        className="absolute left-[52%] top-[6%] z-10 w-[72%] max-w-[380px] -translate-x-1/2 sm:w-[74%] lg:w-[76%] lg:max-w-[480px]"
      >
        <motion.div
          style={photoStyle}
          className="relative"
        >
          <motion.div
            animate={pulse}
            transition={{ duration: isCompact ? 5.8 : 5.2, ease: "easeInOut", repeat: Infinity }}
          >
            <img
              src={heroPhoto}
              alt="Farid Tabare Matos Villarroel — Software Engineer"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 72%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 72%, transparent 100%)",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Card: STATUS */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        className="absolute left-0 top-[32%] z-20 hidden rounded-xl border border-[rgba(226,232,240,0.8)] bg-[rgba(255,255,255,0.82)] px-4 py-3 shadow-[0_8px_30px_rgba(15,23,42,0.05)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(11,17,26,0.82)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:block"
      >
        <motion.div
          animate={PULSE_STATUS}
          transition={{ ...pulseTransition, duration: 6 }}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#94A3B8] dark:text-[#7E8C9F]">
            Status
          </p>
          <div className="mt-1 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0F172A] dark:text-[#F5F7FA]">
              Online
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* V emblem */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
        className="absolute right-0 top-[14%] z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white/90 shadow-sm dark:border-white/10 dark:bg-[#0B1018]/90 dark:shadow-none"
      >
        <motion.div
          animate={PULSE_EMBLEM}
          transition={{ ...pulseTransition, duration: 7, delay: 0.6 }}
          className="flex h-full w-full items-center justify-center"
        >
          <span className="text-lg font-bold text-[#2563EB] dark:text-[#60A5FA]">V</span>
        </motion.div>
      </motion.div>

      {/* Micro detalles tenues */}
      <span aria-hidden="true" className="absolute left-[8%] top-[14%] text-[10px] text-[#CBD5E1] dark:text-[#5D6B80]">+</span>
      <span aria-hidden="true" className="absolute right-[14%] top-[40%] h-1 w-1 rounded-full bg-[#CBD5E1] dark:bg-white/20" />
      <span aria-hidden="true" className="absolute bottom-[14%] left-[16%] h-1 w-1 rounded-full bg-[#2563EB]/40" />
      <span aria-hidden="true" className="absolute bottom-[8%] right-[18%] text-[10px] text-[#CBD5E1] dark:text-[#5D6B80]">+</span>
      <span aria-hidden="true" className="absolute left-[44%] top-[4%] h-1 w-1 rounded-full bg-[#CBD5E1] dark:bg-white/20" />
    </div>
  );
}

export default HeroVisual;