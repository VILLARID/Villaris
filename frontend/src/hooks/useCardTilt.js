import { useEffect, useRef, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";
import useAppMotion from "./useAppMotion";

const DEFAULT_CONFIG = {
  maxRotateX: 4,
  maxRotateY: 5,
  stiffness: 170,
  damping: 20,
  mass: 0.6,
  perspective: 1000,
  minWidth: 768,
};

export default function useCardTilt(config = {}) {
  const {
    maxRotateX,
    maxRotateY,
    stiffness,
    damping,
    mass,
    perspective,
    minWidth,
  } = { ...DEFAULT_CONFIG, ...config };

  const { shouldReduceMotion } = useAppMotion();
  const [enabled, setEnabled] = useState(false);
  const boundsRef = useRef(null);
  const enabledRef = useRef(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateY = useSpring(
    useTransform(mouseX, [-1, 1], [-maxRotateY, maxRotateY]),
    { stiffness, damping, mass }
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-1, 1], [maxRotateX, -maxRotateX]),
    { stiffness, damping, mass }
  );

  useEffect(() => {
    const hover = window.matchMedia("(hover: hover)");
    const width = window.matchMedia(`(min-width: ${minWidth}px)`);

    const sync = () => {
      const active = hover.matches && width.matches && !shouldReduceMotion;
      setEnabled(active);
      enabledRef.current = active;
      if (!active) {
        mouseX.set(0);
        mouseY.set(0);
      }
    };

    sync();
    hover.addEventListener("change", sync);
    width.addEventListener("change", sync);

    return () => {
      hover.removeEventListener("change", sync);
      width.removeEventListener("change", sync);
    };
  }, [shouldReduceMotion, minWidth, mouseX, mouseY]);

  const setFromPoint = (clientX, clientY) => {
    const bounds = boundsRef.current;
    if (!bounds) return;
    const nx = Math.max(-1, Math.min(1, ((clientX - bounds.left) / bounds.width - 0.5) * 2));
    const ny = Math.max(-1, Math.min(1, ((clientY - bounds.top) / bounds.height - 0.5) * 2));
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseEnter = (event) => {
    boundsRef.current = event.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (event) => {
    if (!enabledRef.current) return;
    setFromPoint(event.clientX, event.clientY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const tilt = enabled
    ? {
        rotateX,
        rotateY,
        transformPerspective: perspective,
        transformStyle: "preserve-3d",
      }
    : undefined;

  return {
    tilt,
    handlers: {
      onMouseEnter: handleMouseEnter,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
    enabled,
  };
}