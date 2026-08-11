import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98];

function Reveal({
  children,
  as = "div",
  y = 18,
  duration = 0.55,
  delay = 0,
  amount = 0.15,
  once = false,
  className,
}) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = as;

  if (shouldReduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
