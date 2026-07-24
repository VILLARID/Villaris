import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function TvGlitchText({ children, className = "" }) {
  const [glitchPhase, setGlitchPhase] = useState(0);
  const [displayText, setDisplayText] = useState(children);

  useEffect(() => {
    const intervals = [
      { phase: 0, duration: 3000 },
      { phase: 1, duration: 300 },
      { phase: 2, duration: 200 },
      { phase: 3, duration: 300 },
      { phase: 4, duration: 200 },
    ];

    let currentIndex = 0;
    let timeoutId;

    const runGlitch = () => {
      const currentPhase = intervals[currentIndex];
      setGlitchPhase(currentPhase.phase);

      const original = String(children);
      switch (currentPhase.phase) {
        case 0:
          setDisplayText(original);
          break;
        case 1:
          setDisplayText(
            original
              .split("")
              .map((char) => {
                if (Math.random() > 0.6) {
                  return String.fromCharCode(33 + Math.random() * 94);
                }
                return char;
              })
              .join("")
          );
          break;
        case 2:
          setDisplayText(
            original
              .split("")
              .reverse()
              .map((char, i) => {
                if (i % 3 === 0) return char.toUpperCase();
                if (i % 3 === 1) return char.toLowerCase();
                return char;
              })
              .join("")
          );
          break;
        case 3:
          setDisplayText(
            original
              .split("")
              .map((char) => {
                if (Math.random() > 0.4) return "█";
                if (Math.random() > 0.7) return " ";
                return char;
              })
              .join("")
          );
          break;
        case 4:
          setDisplayText(
            original
              .split("")
              .map((char, i) => {
                if (i % 2 === 0) return char;
                return "▌";
              })
              .join("")
          );
          break;
        default:
          setDisplayText(original);
      }

      currentIndex = (currentIndex + 1) % intervals.length;
      timeoutId = setTimeout(runGlitch, currentPhase.duration);
    };

    timeoutId = setTimeout(runGlitch, 2000);

    return () => clearTimeout(timeoutId);
  }, [children]);

  const vHoldOffset = glitchPhase === 2 ? 15 : glitchPhase === 3 ? -8 : 0;

  return (
    <div className={`relative inline-block ${className}`}>
      <motion.div
        className="relative overflow-hidden"
        animate={{
          y: [0, vHoldOffset, 0, -vHoldOffset, 0],
          rotate: [0, glitchPhase === 1 ? 0.5 : 0, 0],
          scale: glitchPhase === 3 ? 0.98 : 1,
          skewX: glitchPhase === 1 ? 2 : glitchPhase === 3 ? -1 : 0,
        }}
        transition={{
          duration: 0.1,
          ease: "steps(4)",
        }}
      >
        <motion.span
          animate={{
            opacity: glitchPhase === 0 ? 1 : [1, 0.7, 0.9, 0.3, 1],
            filter: [
              "blur(0px)",
              `blur(${glitchPhase === 1 ? 1 : 0}px)`,
              "blur(0px)",
            ],
          }}
          transition={{
            duration: 0.1,
            ease: "steps(3)",
          }}
          style={{
            textShadow: glitchPhase === 2
              ? "3px 0 rgba(255,0,0,0.6), -3px 0 rgba(0,255,255,0.6)"
              : glitchPhase === 3
              ? "2px 0 rgba(0,255,0,0.5), -2px 0 rgba(255,0,255,0.5)"
              : "none",
          }}
        >
          {displayText}
        </motion.span>

        <motion.div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          animate={{
            backgroundPosition: ["0% 0%", "0% 100%"],
          }}
          transition={{
            duration: glitchPhase === 0 ? 2 : 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 3px)",
            backgroundSize: "100% 3px",
          }}
        />
      </motion.div>

      {(glitchPhase === 1 || glitchPhase === 3) && (
        <motion.div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0.2, 0.8, 0],
          }}
          transition={{
            duration: 0.15,
            ease: "steps(4)",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='40' height='40' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
            backgroundRepeat: "repeat",
          }}
        />
      )}

      {glitchPhase === 2 && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{
            opacity: [0.3, 0.6, 0.2],
            x: [-10, 10, -5, 5, 0],
          }}
          transition={{
            duration: 0.2,
            ease: "steps(5)",
          }}
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0px, rgba(255,255,255,0.1) 5px, transparent 10px)",
          }}
        />
      )}
    </div>
  );
}

export default TvGlitchText;