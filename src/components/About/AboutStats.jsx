import { motion } from "framer-motion";
import { MapPin, Briefcase, Target, Monitor } from "lucide-react";

const stats = [
  {
    label: "LOCATION",
    value: "Perú",
    icon: MapPin,
  },
  {
    label: "AVAILABILITY",
    value: "Open to Work",
    icon: Briefcase,
  },
  {
    label: "FOCUS",
    value: "Full Stack Dev",
    icon: Target,
  },
  {
    label: "MODE",
    value: "Remote / On-Site",
    icon: Monitor,
  },
];

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function AboutStats() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="mt-10 grid max-w-[650px] grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          custom={index}
          variants={statVariants}
          whileHover={{ x: 6, transition: { duration: 0.2 } }}
          className="group relative"
        >
          {/* Línea decorativa */}
          <div className="absolute -left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="flex items-center gap-3">
            <stat.icon className="h-4 w-4 text-cyan-500/30 transition-colors duration-300 group-hover:text-cyan-400" />
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600 transition-colors duration-300 group-hover:text-cyan-500/60">
              {stat.label}
            </p>
          </div>

          <motion.p
            whileHover={{ scale: 1.02 }}
            className="mt-2 text-[13px] font-bold tracking-[0.04em] text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-sm"
          >
            {stat.value}
          </motion.p>

          {/* Línea inferior animada */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="mt-2 h-px w-12 origin-left bg-gradient-to-r from-cyan-500/30 to-transparent"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AboutStats;