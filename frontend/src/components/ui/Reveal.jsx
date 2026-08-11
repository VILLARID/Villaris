import { motion } from "framer-motion";
import useAppMotion from "../../hooks/useAppMotion";

const EASE = [0.21, 0.47, 0.32, 0.98];

const DIRECTIONS = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: -1 },
  right: { x: 1 },
  scale: { scale: 0.98 },
  none: {},
};

function Reveal({
  children,
  as = "div",
  y,
  x,
  scale,
  direction,
  distance = 24,
  duration = 0.55,
  delay = 0,
  amount = 0.15,
  once = false,
  className,
}) {
  const { shouldReduceMotion } = useAppMotion();
  const Tag = as;

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const initial = { opacity: 0 };

  if (direction) {
    const offsets = DIRECTIONS[direction] || DIRECTIONS.up;
    for (const [key, value] of Object.entries(offsets)) {
      initial[key] = key === "scale" ? value : value * distance;
    }
  } else {
    if (y !== undefined) initial.y = y;
    if (x !== undefined) initial.x = x;
    if (scale !== undefined) initial.scale = scale;
  }

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, ...(initial.y !== undefined ? { y: 0 } : {}), ...(initial.x !== undefined ? { x: 0 } : {}), ...(initial.scale !== undefined ? { scale: 1 } : {}) }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;